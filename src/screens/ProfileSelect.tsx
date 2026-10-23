import type { ProfileId } from '../types';
import { PROFILES, SUBJECTS } from '../data/subjects';
import { repository } from '../lib/storage';
import { levelInfo } from '../lib/game';
import { Mascot } from '../components/Mascot';

export function ProfileSelect({ onPick }: { onPick: (p: ProfileId) => void }) {
  return (
    <div className="screen profiles">
      <header className="profiles-head">
        <h1 className="title-xl">¿Quién viene a estudiar hoy?</h1>
        <p className="subtitle">Elige tu perfil y tus profes peluche te estarán esperando</p>
      </header>
      <div className="mascot-parade" aria-hidden>
        {SUBJECTS.map((s, i) => (
          <div key={s.id} style={{ animationDelay: `${i * 0.15}s` }} className="parade-item">
            <Mascot id={s.mascot} size={78} mood="happy" />
          </div>
        ))}
      </div>
      <div className="profile-cards">
        {PROFILES.map((p) => {
          const st = repository.load(p.id);
          const lvl = levelInfo(st.xp);
          return (
            <button key={p.id} className="profile-card" style={{ ['--pc' as string]: p.color }} onClick={() => onPick(p.id)}>
              <span className="profile-emoji">{p.emoji}</span>
              <span className="profile-name">{p.name}</span>
              <span className="profile-grade">{p.grade}.º de Primaria</span>
              <span className="profile-meta">
                <span>⭐ Nivel {lvl.level}</span>
                {st.streak.count > 0 && <span>🔥 {st.streak.count}</span>}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
