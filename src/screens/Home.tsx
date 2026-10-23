import { useMemo } from 'react';
import type { SubjectId } from '../types';
import { MASCOTS, SUBJECTS, type ProfileInfo } from '../data/subjects';
import { levelInfo, mascotTier, MISSIONS, streakStatus, subjectMastery, type ProfileState } from '../lib/game';
import { say } from '../lib/phrases';
import { Mascot } from '../components/Mascot';
import { Parent } from '../components/Parents';
import { Bubble, ProgressBar } from '../components/ui';

interface Props {
  profile: ProfileInfo;
  state: ProfileState;
  onSubject: (s: SubjectId) => void;
  onGeneral: () => void;
  onBadges: () => void;
  onSwitch: () => void;
}

export function Home({ profile, state, onSubject, onGeneral, onBadges, onSwitch }: Props) {
  const lvl = levelInfo(state.xp);
  const greeting = useMemo(() => {
    const status = streakStatus(state);
    const away = state.lastVisit ? (Date.now() - state.lastVisit) / 86400000 : 0;
    const situation = status === 'lost' ? 'streakLost' : away > 3 ? 'welcomeBack' : 'welcome';
    return say(situation, 'es', { nombre: profile.name, profe: 'tu profe' }, ['javi', 'celia']);
    // Solo al entrar en la pantalla.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile.id]);
  const who = greeting.speaker === 'celia' ? 'celia' : 'javi';

  return (
    <div className="screen home">
      <header className="topbar">
        <button className="chip chip-profile" onClick={onSwitch} title="Cambiar de perfil" style={{ ['--pc' as string]: profile.color }}>
          {profile.emoji} {profile.name} · {profile.grade}.º
        </button>
        <div className="topbar-stats">
          <span className="chip" title="Racha de días">🔥 {state.streak.count}{state.streak.shields > 0 && <small> 🛡️{state.streak.shields}</small>}</span>
          <span className="chip" title="Puntos">✨ {state.xp} XP</span>
          <button className="chip chip-btn" onClick={onBadges}>🏅 {Object.keys(state.badges).length}</button>
        </div>
      </header>

      <section className="level-card">
        <div className="level-badge">{lvl.level}</div>
        <div className="level-info">
          <div className="level-title">
            Nivel {lvl.level} · <strong>{lvl.title}</strong>
          </div>
          <ProgressBar value={lvl.pct} color="linear-gradient(90deg,#ffc93c,#ff8a3d)" label="Progreso de nivel" />
          <div className="level-sub">{lvl.step - lvl.into} XP para el siguiente nivel</div>
        </div>
      </section>

      <section className="greeting">
        <Parent who={who} pose="cheer" size={70} className="greeting-parent" />
        <Bubble speaker={greeting.speaker} name={greeting.speaker === 'celia' ? 'Celia' : 'Javi'} text={greeting.text} />
      </section>

      <button className="general-btn" onClick={onGeneral}>
        <span className="general-mascots" aria-hidden>
          {SUBJECTS.map((s) => (
            <Mascot key={s.id} id={s.mascot} size={44} bounce={false} />
          ))}
        </span>
        <span>
          <strong>Repaso general</strong>
          <small>Un poco de todas las asignaturas</small>
        </span>
        <span className="go">▶</span>
      </button>

      <h2 className="section-title">Tus asignaturas</h2>
      <div className="subject-grid">
        {SUBJECTS.map((s) => {
          const mastery = subjectMastery(state, profile.grade, s.id);
          const tier = mascotTier(state.subjectXp[s.id] ?? 0);
          return (
            <button key={s.id} className="subject-card" style={{ ['--sc' as string]: s.color, ['--scs' as string]: s.colorSoft }} onClick={() => onSubject(s.id)}>
              <div className="subject-mascot">
                <Mascot id={s.mascot} size={96} tier={tier} mood="idle" />
              </div>
              <div className="subject-name">
                {s.emoji} {s.name}
                {s.lang === 'en' && <span className="lang-tag">EN</span>}
              </div>
              <div className="subject-teacher">con {MASCOTS[s.mascot].name}</div>
              <ProgressBar value={mastery} color={s.color} height={8} label={`Dominio de ${s.name}`} />
              <div className="subject-pct">{Math.round(mastery * 100)} % dominado</div>
            </button>
          );
        })}
      </div>

      <h2 className="section-title">Misiones de la semana</h2>
      <div className="missions">
        {MISSIONS.map((m) => {
          const prog = Math.min(m.target, m.progress(state.weekly));
          const done = state.weekly.claimed.includes(m.id);
          return (
            <div key={m.id} className={`mission ${done ? 'is-done' : ''}`}>
              <span className="mission-icon">{done ? '✅' : '🎯'}</span>
              <div className="mission-body">
                <div className="mission-text">{m.text}</div>
                <ProgressBar value={prog / m.target} color={done ? '#06d6a0' : '#7c5cff'} height={8} />
              </div>
              <span className="mission-reward">
                {prog}/{m.target} · +{m.reward} XP
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
