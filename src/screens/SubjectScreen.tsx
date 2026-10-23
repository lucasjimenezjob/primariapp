import { useMemo, useState } from 'react';
import type { SubjectId } from '../types';
import { MASCOTS, subjectById, type ProfileInfo } from '../data/subjects';
import { getLesson, getTopics } from '../content';
import { lessonKey, mascotTier, MASCOT_TIERS, TIER_NAMES, topicMastery, type ProfileState } from '../lib/game';
import { fill, pick } from '../lib/text';
import { Mascot } from '../components/Mascot';
import { Bubble, ProgressBar } from '../components/ui';

const TIER_NAMES_EN = ['New friend', 'Medal', 'Graduation cap', 'Golden glow'];

interface Props {
  profile: ProfileInfo;
  state: ProfileState;
  subject: SubjectId;
  onBack: () => void;
  onStart: (topicIds: string[], size: number) => void;
  onStudy: (topicId: string) => void;
}

export function SubjectScreen({ profile, state, subject, onBack, onStart, onStudy }: Props) {
  const hasLesson = (topicId: string) => !!getLesson(profile.grade, subject, topicId);
  const sub = subjectById(subject);
  const mascot = MASCOTS[sub.mascot];
  const topics = getTopics(profile.grade, subject);
  const [selected, setSelected] = useState<string[]>([]);
  const [size, setSize] = useState(10);
  const greeting = useMemo(() => fill(pick(mascot.greeting), { nombre: profile.name }), [mascot, profile.name]);
  const en = sub.lang === 'en';
  const xp = state.subjectXp[subject] ?? 0;
  const tier = mascotTier(xp);
  const nextTier = MASCOT_TIERS[tier + 1];

  const toggle = (id: string) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const all = selected.length === topics.length;

  return (
    <div className="screen subject" style={{ ['--sc' as string]: sub.color, ['--scs' as string]: sub.colorSoft }}>
      <header className="topbar">
        <button className="chip chip-btn" onClick={onBack}>← {en ? 'Back' : 'Volver'}</button>
        <h1 className="subject-title">
          {sub.emoji} {sub.name}
        </h1>
        <span className="chip">✨ {xp} XP</span>
      </header>

      <section className="teacher">
        <Mascot id={sub.mascot} size={150} tier={tier} mood="happy" />
        <div className="teacher-side">
          <Bubble speaker="mascot" name={mascot.name} text={greeting} />
          <p className="teacher-tag">{mascot.tagline}</p>
          <div className="tier">
            <span>
              🎖️ {en ? TIER_NAMES_EN[tier] : TIER_NAMES[tier]}
              {nextTier !== undefined && <small> · {nextTier - xp} {en ? 'XP to the next gift' : 'XP para el siguiente regalo'}</small>}
            </span>
            {nextTier !== undefined && <ProgressBar value={(xp - MASCOT_TIERS[tier]) / (nextTier - MASCOT_TIERS[tier])} color={sub.color} height={6} />}
          </div>
        </div>
      </section>

      <div className="topics-head">
        <h2 className="section-title">{en ? 'Choose your topics' : 'Elige los temas'}</h2>
        <p className="topics-tip">{en ? '📖 Study the lesson first, then play with the flashcards!' : '📖 Primero estudia la lección y luego juega con las flashcards.'}</p>
        <button className="btn btn-ghost" onClick={() => setSelected(all ? [] : topics.map((t) => t.id))}>
          {all ? (en ? 'Clear' : 'Quitar todos') : en ? 'Select all' : 'Todos los temas'}
        </button>
      </div>
      <div className="topic-grid">
        {topics.map((t) => {
          const m = topicMastery(state, profile.grade, subject, t.id);
          const on = selected.includes(t.id);
          const studied = state.lessonsDone[lessonKey(subject, t.id)] ?? 0;
          return (
            <div key={t.id} className={`topic ${on ? 'is-on' : ''}`}>
              <button className="topic-main" onClick={() => toggle(t.id)} aria-pressed={on}>
                <span className="topic-check">{on ? '✓' : ''}</span>
                <span className="topic-emoji">{t.emoji}</span>
                <span className="topic-title">{t.title}</span>
                <ProgressBar value={m} color={sub.color} height={6} />
                <span className="topic-stars">{m >= 1 ? '⭐⭐⭐' : m >= 0.6 ? '⭐⭐' : m >= 0.25 ? '⭐' : '·'}</span>
              </button>
              {hasLesson(t.id) && (
                <button className={`topic-study ${studied ? 'is-done' : ''}`} onClick={() => onStudy(t.id)}>
                  📖 {en ? 'Study' : 'Estudiar'}
                  {studied > 0 && <span className="topic-studied">✓ {en ? 'studied' : 'estudiado'}</span>}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="start-bar">
        <div className="size-pick" role="group" aria-label={en ? 'Cards per round' : 'Tarjetas por ronda'}>
          {[10, 20].map((n) => (
            <button key={n} className={`chip chip-btn ${size === n ? 'is-on' : ''}`} onClick={() => setSize(n)}>
              {n} {en ? 'cards' : 'tarjetas'}
            </button>
          ))}
        </div>
        <button className="btn btn-big" disabled={!selected.length} onClick={() => onStart(selected, size)}>
          {selected.length
            ? en
              ? `Let's play! (${selected.length} topic${selected.length > 1 ? 's' : ''})`
              : `¡A jugar! (${selected.length} tema${selected.length > 1 ? 's' : ''})`
            : en
              ? 'Choose at least one topic'
              : 'Elige al menos un tema'}
        </button>
      </div>
    </div>
  );
}
