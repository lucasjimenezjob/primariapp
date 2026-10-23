import { useEffect, useMemo, useState } from 'react';
import type { Speaker } from '../types';
import { Parent } from './Parents';

const CONFETTI_COLORS = ['#ff5d8f', '#ffc93c', '#4cc9f0', '#7c5cff', '#06d6a0', '#ff8a3d'];

/** Lluvia de confeti. Cambia `burst` para lanzarla otra vez. */
export function Confetti({ burst, pieces = 60 }: { burst: number; pieces?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: pieces }, (_, i) => ({
        i,
        left: Math.random() * 100,
        delay: Math.random() * 0.4,
        dur: 1.6 + Math.random() * 1.4,
        rot: Math.random() * 360,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        round: Math.random() > 0.6,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [burst, pieces],
  );
  if (!burst) return null;
  return (
    <div className="confetti" key={burst} aria-hidden>
      {items.map((p) => (
        <span
          key={p.i}
          style={{
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            transform: `rotate(${p.rot}deg)`,
            borderRadius: p.round ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  );
}

export function ProgressBar({ value, color, height = 12, label }: { value: number; color?: string; height?: number; label?: string }) {
  return (
    <div className="pbar" style={{ height }} role="progressbar" aria-valuenow={Math.round(value * 100)} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <div className="pbar-fill" style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%`, background: color }} />
    </div>
  );
}

export function Bubble({ speaker, name, text, side = 'left' }: { speaker: Speaker; name: string; text: string; side?: 'left' | 'right' }) {
  return (
    <div className={`bubble bubble-${side} bubble-${speaker}`} key={text}>
      <strong className="bubble-name">{name}</strong>
      <span>{text}</span>
    </div>
  );
}

/** Javi o Celia cruzan la pantalla con la zapatilla. */
export function SlipperChase({ who, text, onDone }: { who: 'javi' | 'celia'; text: string; onDone: () => void }) {
  useEffect(() => {
    const id = setTimeout(onDone, 4200);
    return () => clearTimeout(id);
  }, [onDone]);
  return (
    <div className="chase-overlay" onClick={onDone} role="dialog" aria-label={`${who === 'javi' ? 'Javi' : 'Celia'} viene con la zapatilla`}>
      <div className="chase-runner">
        <div className="chase-kid">🏃‍♀️💨</div>
        <Parent who={who} pose="chase" size={130} />
      </div>
      <div className="chase-bubble">
        <strong>{who === 'javi' ? 'Javi' : 'Celia'}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}

/** Número que sube poco a poco hasta `to`. */
export function CountUp({ to, ms = 900 }: { to: number; ms?: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / ms);
      setV(Math.round(to * (1 - (1 - k) ** 3)));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, ms]);
  return <>{v}</>;
}
