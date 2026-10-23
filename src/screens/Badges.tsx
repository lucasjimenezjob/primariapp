import { BADGES, mascotTier, MASCOT_TIERS, TIER_NAMES, type ProfileState } from '../lib/game';
import { MASCOTS, SUBJECTS } from '../data/subjects';
import { Mascot } from '../components/Mascot';
import { ProgressBar } from '../components/ui';

export function Badges({ state, onBack }: { state: ProfileState; onBack: () => void }) {
  const got = BADGES.filter((b) => state.badges[b.id]).length;
  return (
    <div className="screen badges-screen">
      <header className="topbar">
        <button className="chip chip-btn" onClick={onBack}>← Volver</button>
        <h1 className="subject-title">🏅 Mis logros</h1>
        <span className="chip">{got}/{BADGES.length}</span>
      </header>

      <h2 className="section-title">Tus profes peluche</h2>
      <p className="subtitle">Gana XP en cada asignatura para darles regalos: medalla, birrete y brillo dorado.</p>
      <div className="teacher-shelf">
        {SUBJECTS.map((s) => {
          const xp = state.subjectXp[s.id] ?? 0;
          const tier = mascotTier(xp);
          const next = MASCOT_TIERS[tier + 1];
          return (
            <div key={s.id} className="shelf-item" style={{ ['--sc' as string]: s.color }}>
              <Mascot id={s.mascot} size={90} tier={tier} />
              <strong>{MASCOTS[s.mascot].name}</strong>
              <small>{TIER_NAMES[tier]}</small>
              {next !== undefined ? <ProgressBar value={(xp - MASCOT_TIERS[tier]) / (next - MASCOT_TIERS[tier])} color={s.color} height={6} /> : <small>¡Al máximo! ✨</small>}
            </div>
          );
        })}
      </div>

      <h2 className="section-title">Insignias</h2>
      <div className="badge-grid">
        {BADGES.map((b) => {
          const when = state.badges[b.id];
          return (
            <div key={b.id} className={`badge ${when ? '' : 'is-locked'}`}>
              <span className="badge-icon">{when ? b.icon : '🔒'}</span>
              <strong>{b.name}</strong>
              <small>{b.desc}</small>
            </div>
          );
        })}
      </div>

      <h2 className="section-title">Récords</h2>
      <div className="result-stats">
        <div className="stat"><span className="stat-num">{state.totals.answered}</span><span className="stat-label">tarjetas</span></div>
        <div className="stat"><span className="stat-num">{state.totals.sessions}</span><span className="stat-label">rondas</span></div>
        <div className="stat"><span className="stat-num">🔥 {state.streak.best}</span><span className="stat-label">mejor racha</span></div>
        <div className="stat"><span className="stat-num">x{state.totals.bestCombo}</span><span className="stat-label">mejor combo</span></div>
      </div>
    </div>
  );
}
