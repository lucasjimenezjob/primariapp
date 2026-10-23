// Página de revisión de assets: abrir con #galeria en la URL.
import type { MascotId } from '../types';
import { Mascot, type Mood } from '../components/Mascot';
import { Parent } from '../components/Parents';

const IDS: MascotId[] = ['clarita', 'luna', 'pico', 'rojichi', 'tuktuk'];
const MOODS: Mood[] = ['idle', 'happy', 'cheer', 'oops'];

export function Gallery() {
  return (
    <div className="screen">
      <h1 className="title-xl">Galería de assets</h1>
      {IDS.map((id) => (
        <section key={id} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-end', margin: '12px 0' }}>
          {MOODS.map((m) => (
            <figure key={m} style={{ margin: 0, textAlign: 'center' }}>
              <Mascot id={id} size={200} mood={m} bounce={false} />
              <figcaption>{id} · {m}</figcaption>
            </figure>
          ))}
          <figure style={{ margin: 0, textAlign: 'center' }}>
            <Mascot id={id} size={200} tier={3} bounce={false} />
            <figcaption>{id} · nivel 3</figcaption>
          </figure>
        </section>
      ))}
      <section style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <Parent who="javi" pose="cheer" size={160} />
        <Parent who="javi" pose="chase" size={160} />
        <Parent who="celia" pose="cheer" size={160} />
        <Parent who="celia" pose="chase" size={160} />
      </section>
    </div>
  );
}
