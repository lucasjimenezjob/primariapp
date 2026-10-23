import { useMemo } from 'react';
import type { SubjectId } from '../types';
import { MASCOTS, subjectById, type ProfileInfo } from '../data/subjects';
import { levelInfo, type ProfileState, type SessionSummary } from '../lib/game';
import { CURIOSITY_CHANCE, curiosityFor, say, speakerName } from '../lib/phrases';
import { Mascot } from '../components/Mascot';
import { Parent } from '../components/Parents';
import { Bubble, Confetti, CountUp, ProgressBar } from '../components/ui';

interface Props {
  profile: ProfileInfo;
  state: ProfileState;
  summary: SessionSummary;
  /** Asignatura principal de la ronda (la que más tarjetas tuvo). */
  subject: SubjectId;
  onAgain: () => void;
  onHome: () => void;
}

export function Results({ profile, state, summary, subject, onAgain, onHome }: Props) {
  const sub = subjectById(subject);
  const mascot = MASCOTS[sub.mascot];
  const ratio = summary.total ? summary.correct / summary.total : 0;
  const levelUp = summary.levelAfter > summary.levelBefore;
  const vars = { nombre: profile.name, profe: mascot.name };

  const phrase = useMemo(() => {
    const situation = summary.perfect ? 'sessionPerfect' : ratio < 0.5 ? 'sessionMeh' : 'sessionDone';
    return say(situation, sub.lang, vars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const levelPhrase = useMemo(() => (levelUp ? say('levelUp', sub.lang, vars) : null), []); // eslint-disable-line react-hooks/exhaustive-deps
  // Un dato curioso solo a veces, para que no se sature.
  const curiosity = useMemo(() => (Math.random() < CURIOSITY_CHANCE ? curiosityFor(subject) : null), [subject]);
  const lvl = levelInfo(state.xp);
  const stars = summary.perfect ? 3 : ratio >= 0.7 ? 2 : ratio >= 0.4 ? 1 : 0;

  return (
    <div className="screen results" style={{ ['--sc' as string]: sub.color, ['--scs' as string]: sub.colorSoft }}>
      <Confetti burst={ratio >= 0.5 ? 1 : 0} pieces={summary.perfect ? 120 : 70} />
      <h1 className="title-xl">{summary.perfect ? '¡PLENO! 💯' : ratio >= 0.7 ? '¡Muy bien!' : ratio >= 0.4 ? '¡Ronda terminada!' : '¡A repasar un poquito!'}</h1>

      <div className="stars" aria-label={`${stars} estrellas`}>
        {[0, 1, 2].map((i) => (
          <span key={i} className={`star ${i < stars ? 'on' : ''}`} style={{ animationDelay: `${0.3 + i * 0.25}s` }}>
            ★
          </span>
        ))}
      </div>

      <section className="celebration">
        <Parent who="javi" pose={ratio < 0.4 ? 'chase' : 'cheer'} size={90} />
        <Mascot id={sub.mascot} size={130} mood={ratio >= 0.5 ? 'cheer' : 'oops'} />
        <Parent who="celia" pose="cheer" size={90} />
      </section>
      <Bubble speaker={phrase.speaker} name={speakerName(phrase.speaker, mascot.name)} text={phrase.text} />

      <section className="result-stats">
        <div className="stat">
          <span className="stat-num">
            {summary.correct}/{summary.total}
          </span>
          <span className="stat-label">aciertos</span>
        </div>
        <div className="stat">
          <span className="stat-num">
            +<CountUp to={summary.xpGained + summary.bonusXp} />
          </span>
          <span className="stat-label">XP ganados</span>
        </div>
        <div className="stat">
          <span className="stat-num">🔥 {summary.streak.count}</span>
          <span className="stat-label">{summary.streak.count === 1 ? 'día de racha' : 'días de racha'}</span>
        </div>
      </section>

      <section className="level-card">
        <div className="level-badge">{lvl.level}</div>
        <div className="level-info">
          <div className="level-title">
            Nivel {lvl.level} · <strong>{lvl.title}</strong>
          </div>
          <ProgressBar value={lvl.pct} color="linear-gradient(90deg,#ffc93c,#ff8a3d)" />
        </div>
      </section>

      {levelUp && levelPhrase && (
        <div className="banner banner-level">
          <strong>⬆️ ¡Subes al nivel {summary.levelAfter}!</strong>
          <span>
            {speakerName(levelPhrase.speaker, mascot.name)}: {levelPhrase.text}
          </span>
        </div>
      )}
      {summary.streak.shieldEarned && <div className="banner">🛡️ ¡Has ganado un escudo de racha! Te protege si un día no puedes estudiar.</div>}
      {summary.streak.usedShield && <div className="banner">🛡️ Tu escudo ha salvado la racha. ¡Uf!</div>}
      {summary.missionsCompleted.map((m) => (
        <div key={m.id} className="banner banner-mission">
          🎯 Misión cumplida: <strong>{m.text}</strong> · +{m.reward} XP
        </div>
      ))}
      {summary.badges.length > 0 && (
        <section className="new-badges">
          <h2 className="section-title">¡Insignias nuevas!</h2>
          <div className="badge-row">
            {summary.badges.map((b) => (
              <div key={b.id} className="badge is-new">
                <span className="badge-icon">{b.icon}</span>
                <strong>{b.name}</strong>
                <small>{b.desc}</small>
              </div>
            ))}
          </div>
        </section>
      )}

      {curiosity && (
        <div className="curiosity curiosity-big">
          <strong>✨ {sub.lang === 'en' ? 'Did you know…?' : '¿Sabías que…?'}</strong>
          <p>{curiosity}</p>
        </div>
      )}

      <div className="results-actions">
        <button className="btn btn-big" onClick={onAgain}>
          🔁 Otra ronda
        </button>
        <button className="btn btn-ghost btn-big" onClick={onHome}>
          🏠 Inicio
        </button>
      </div>
    </div>
  );
}
