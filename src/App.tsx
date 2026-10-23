import { useEffect, useState } from 'react';
import type { PlayCard, ProfileId, SubjectId } from './types';
import { profileById } from './data/subjects';
import { getLastProfile, repository, setLastProfile } from './lib/storage';
import { applyLesson, applySession, freshWeek, lessonKey, type AnswerLog, type ProfileState, type SessionSummary } from './lib/game';
import { getLesson, getTopics } from './content';
import { LessonScreen } from './screens/LessonScreen';
import { buildGeneralReview, buildSession } from './lib/session';
import { ProfileSelect } from './screens/ProfileSelect';
import { Home } from './screens/Home';
import { SubjectScreen } from './screens/SubjectScreen';
import { Session } from './screens/Session';
import { Results } from './screens/Results';
import { Badges } from './screens/Badges';

/** Lo necesario para repetir una ronda con los mismos temas. */
type RoundSpec = { kind: 'topics'; subject: SubjectId; topicIds: string[]; size: number } | { kind: 'general'; size: number };

type Screen =
  | { name: 'profiles' }
  | { name: 'home' }
  | { name: 'subject'; subject: SubjectId }
  | { name: 'session'; spec: RoundSpec; cards: PlayCard[] }
  | { name: 'results'; spec: RoundSpec; summary: SessionSummary; subject: SubjectId }
  | { name: 'badges' }
  | { name: 'lesson'; subject: SubjectId; topicId: string };

export default function App() {
  const [profileId, setProfileId] = useState<ProfileId | null>(() => getLastProfile());
  const [state, setState] = useState<ProfileState | null>(() => {
    const p = getLastProfile();
    return p ? freshWeek(repository.load(p)) : null;
  });
  const [screen, setScreen] = useState<Screen>(() => (getLastProfile() ? { name: 'home' } : { name: 'profiles' }));

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [screen.name]);

  if (!profileId || !state || screen.name === 'profiles') {
    return (
      <ProfileSelect
        onPick={(p) => {
          setProfileId(p);
          setState(freshWeek(repository.load(p)));
          setLastProfile(p);
          setScreen({ name: 'home' });
        }}
      />
    );
  }

  const profile = profileById(profileId);

  const startRound = (spec: RoundSpec) => {
    const cards =
      spec.kind === 'general'
        ? buildGeneralReview(state, profile.grade, spec.size)
        : buildSession(state, profile.grade, spec.topicIds.map((topicId) => ({ subject: spec.subject, topicId })), spec.size);
    if (cards.length) setScreen({ name: 'session', spec, cards });
  };

  const finishRound = (spec: RoundSpec, cards: PlayCard[], log: AnswerLog[], bestCombo: number) => {
    const { state: next, summary } = applySession(state, profile.grade, log, bestCombo, spec.kind === 'general');
    repository.save(profileId, next);
    setState(next);
    // Asignatura con más tarjetas en la ronda: decide qué profe sale en los resultados.
    const counts = new Map<SubjectId, number>();
    for (const c of cards) counts.set(c.subject, (counts.get(c.subject) ?? 0) + 1);
    const subject = [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
    setScreen({ name: 'results', spec, summary, subject });
  };

  switch (screen.name) {
    case 'home':
      return (
        <Home
          profile={profile}
          state={state}
          onSubject={(subject) => setScreen({ name: 'subject', subject })}
          onGeneral={() => startRound({ kind: 'general', size: 15 })}
          onBadges={() => setScreen({ name: 'badges' })}
          onSwitch={() => {
            setLastProfile(null);
            setScreen({ name: 'profiles' });
          }}
        />
      );
    case 'subject':
      return (
        <SubjectScreen
          profile={profile}
          state={state}
          subject={screen.subject}
          onBack={() => setScreen({ name: 'home' })}
          onStart={(topicIds, size) => startRound({ kind: 'topics', subject: screen.subject, topicIds, size })}
          onStudy={(topicId) => setScreen({ name: 'lesson', subject: screen.subject, topicId })}
        />
      );
    case 'lesson': {
      const topic = getTopics(profile.grade, screen.subject).find((t) => t.id === screen.topicId);
      const lesson = getLesson(profile.grade, screen.subject, screen.topicId);
      if (!topic || !lesson) return null;
      return (
        <LessonScreen
          key={screen.topicId}
          subject={screen.subject}
          topic={topic}
          lesson={lesson}
          timesDone={state.lessonsDone[lessonKey(screen.subject, screen.topicId)] ?? 0}
          onBack={() => setScreen({ name: 'subject', subject: screen.subject })}
          onComplete={() => {
            const r = applyLesson(state, profile.grade, screen.subject, screen.topicId);
            repository.save(profileId, r.state);
            setState(r.state);
            return r;
          }}
          onPractice={() => startRound({ kind: 'topics', subject: screen.subject, topicIds: [screen.topicId], size: 10 })}
        />
      );
    }
    case 'session':
      return (
        <Session
          key={screen.cards[0]?.key}
          profile={profile}
          state={state}
          cards={screen.cards}
          onQuit={() => setScreen(screen.spec.kind === 'topics' ? { name: 'subject', subject: screen.spec.subject } : { name: 'home' })}
          onFinish={(log, combo) => finishRound(screen.spec, screen.cards, log, combo)}
        />
      );
    case 'results':
      return (
        <Results
          profile={profile}
          state={state}
          summary={screen.summary}
          subject={screen.subject}
          onAgain={() => startRound(screen.spec)}
          onHome={() => setScreen({ name: 'home' })}
        />
      );
    case 'badges':
      return <Badges state={state} onBack={() => setScreen({ name: 'home' })} />;
  }
}
