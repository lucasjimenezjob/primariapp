// Mascotas-profesor en SVG. Ver docs/PELUCHES.md para la descripción de cada una.
// Clarita, Rojichi y Pico: estilo kawaii. Luna y Tuk-Tuk: semirrealistas (bebés avatar).
import { useId } from 'react';
import type { MascotId } from '../types';

export type Mood = 'idle' | 'happy' | 'cheer' | 'oops';

interface Props {
  id: MascotId;
  size?: number;
  mood?: Mood;
  /** Nivel del profe 0-3: medalla, birrete, brillo dorado. */
  tier?: number;
  className?: string;
  bounce?: boolean;
}

export function Mascot({ id, size = 120, mood = 'idle', tier = 0, className = '', bounce = true }: Props) {
  const uid = useId().replace(/:/g, '');
  const Body = BODIES[id];
  return (
    <svg
      viewBox="0 0 200 210"
      width={size}
      height={size * 1.05}
      className={`mascot mascot-${id} mood-${mood} ${bounce ? 'mascot-bounce' : ''} ${className}`}
      role="img"
      aria-label={id}
    >
      {tier >= 3 && <Aura />}
      <g className="mascot-body">
        <Body uid={uid} mood={mood} />
      </g>
      {tier >= 2 && <GradCap y={HAT_Y[id]} />}
      {tier >= 1 && <Medal />}
    </svg>
  );
}

const HAT_Y: Record<MascotId, number> = { clarita: 52, rojichi: 18, pico: 16, luna: 12, tuktuk: 12 };

type BodyProps = { uid: string; mood: Mood };

// ---------- Ojos y bocas reutilizables (estilo kawaii) ----------

function KawaiiMouth({ x, y, mood, color = '#4a2a17' }: { x: number; y: number; mood: Mood; color?: string }) {
  if (mood === 'cheer') return <path d={`M${x - 9} ${y - 2} Q${x} ${y + 12} ${x + 9} ${y - 2} Z`} fill="#c2453f" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />;
  if (mood === 'oops') return <ellipse cx={x} cy={y + 2} rx="4" ry="5" fill={color} />;
  if (mood === 'happy') return <path d={`M${x - 8} ${y} Q${x} ${y + 8} ${x + 8} ${y}`} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />;
  return <path d={`M${x - 6} ${y} Q${x} ${y + 4} ${x + 6} ${y}`} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />;
}

function SweatDrop({ x, y }: { x: number; y: number }) {
  return <path d={`M${x} ${y} q-6 10 0 14 q6 -4 0 -14 Z`} fill="#8fd3ff" stroke="#4aa8e0" strokeWidth="1.5" className="sweat" />;
}

// ---------- Clarita: abeja-cojín ----------

function Clarita({ uid, mood }: BodyProps) {
  const eyeY = 128;
  const closed = mood === 'cheer';
  return (
    <>
      <defs>
        <radialGradient id={`cl-body-${uid}`} cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#ffe88f" />
          <stop offset="70%" stopColor="#f5d35e" />
          <stop offset="100%" stopColor="#e3b83d" />
        </radialGradient>
        <clipPath id={`cl-clip-${uid}`}>
          <ellipse cx="100" cy="128" rx="84" ry="64" />
        </clipPath>
      </defs>
      {/* Antenas */}
      <g>
        <g transform="rotate(-22 92 70)">
          <ellipse cx="92" cy="40" rx="8" ry="26" fill="#f7f3e8" stroke="#d9d2c0" strokeWidth="1.5" />
          <path d="M84 46 L100 44 M84 54 L100 52" stroke="#5a3a22" strokeWidth="4" strokeLinecap="round" />
        </g>
        <g transform="rotate(14 108 70)">
          <ellipse cx="108" cy="36" rx="8" ry="26" fill="#f7f3e8" stroke="#d9d2c0" strokeWidth="1.5" />
          <path d="M100 42 L116 40 M100 50 L116 48" stroke="#5a3a22" strokeWidth="4" strokeLinecap="round" />
        </g>
      </g>
      {/* Patitas */}
      <ellipse cx="62" cy="188" rx="13" ry="9" fill="#f0c24a" />
      <ellipse cx="138" cy="188" rx="13" ry="9" fill="#f0c24a" />
      {/* Cuerpo */}
      <ellipse cx="100" cy="128" rx="84" ry="64" fill={`url(#cl-body-${uid})`} />
      <g clipPath={`url(#cl-clip-${uid})`}>
        <path d="M6 100 Q100 40 194 100" fill="none" stroke="#5a3a22" strokeWidth="24" />
        <path d="M100 66 L100 90" stroke="#e3b83d" strokeWidth="2" opacity="0.6" />
      </g>
      {/* Muñones marrones y pompones */}
      <rect x="44" y="76" width="12" height="20" rx="6" fill="#5a3a22" transform="rotate(-30 50 86)" />
      <rect x="146" y="76" width="12" height="20" rx="6" fill="#5a3a22" transform="rotate(30 152 86)" />
      <Pompom cx={40} cy={88} />
      <Pompom cx={162} cy={92} />
      {/* Cara */}
      <ellipse cx="62" cy="146" rx="13" ry="8" fill="#f4a08c" opacity="0.75" />
      <ellipse cx="138" cy="146" rx="13" ry="8" fill="#f4a08c" opacity="0.75" />
      {closed ? (
        <>
          <path d={`M72 ${eyeY + 2} Q78 ${eyeY - 6} 84 ${eyeY + 2}`} fill="none" stroke="#3b2416" strokeWidth="3.5" strokeLinecap="round" />
          <path d={`M116 ${eyeY + 2} Q122 ${eyeY - 6} 128 ${eyeY + 2}`} fill="none" stroke="#3b2416" strokeWidth="3.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <ellipse cx="78" cy={eyeY} rx="5" ry="7.5" fill="#3b2416" />
          <ellipse cx="122" cy={eyeY} rx="5" ry="7.5" fill="#3b2416" />
          <circle cx="79.5" cy={eyeY - 3} r="1.6" fill="#fff" />
          <circle cx="123.5" cy={eyeY - 3} r="1.6" fill="#fff" />
        </>
      )}
      <KawaiiMouth x={100} y={142} mood={mood} />
      {mood === 'oops' && <SweatDrop x={150} y={110} />}
    </>
  );
}

function Pompom({ cx, cy }: { cx: number; cy: number }) {
  const bumps = Array.from({ length: 10 }, (_, i) => {
    const a = (i / 10) * Math.PI * 2;
    return <circle key={i} cx={cx + Math.cos(a) * 14} cy={cy + Math.sin(a) * 14} r="7" fill="#fbe8b4" />;
  });
  return (
    <g>
      {bumps}
      <circle cx={cx} cy={cy} r="16" fill="#fbe8b4" />
      <circle cx={cx - 4} cy={cy - 5} r="6" fill="#fff6d8" opacity="0.8" />
    </g>
  );
}

// ---------- Rojichi: pájaro-fresa ----------

function Rojichi({ uid, mood }: BodyProps) {
  const pupilDx = mood === 'oops' ? 0 : 2;
  return (
    <>
      <defs>
        <radialGradient id={`rj-body-${uid}`} cx="38%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#ff6f6b" />
          <stop offset="65%" stopColor="#e8474a" />
          <stop offset="100%" stopColor="#c7363a" />
        </radialGradient>
      </defs>
      {/* Patas */}
      <g stroke="#f57a3c" strokeWidth="6" strokeLinecap="round">
        <line x1="78" y1="180" x2="72" y2="196" />
        <line x1="122" y1="180" x2="128" y2="196" />
      </g>
      <path d="M56 200 Q72 188 86 200 Q72 206 56 200 Z" fill="#f57a3c" />
      <path d="M114 200 Q128 188 144 200 Q128 206 114 200 Z" fill="#f57a3c" />
      {/* Alas */}
      <g className="wing wing-l">
        <path d="M34 104 Q2 108 8 140 Q22 150 40 136 Z" fill="#e23f43" stroke="#c7363a" strokeWidth="2" />
      </g>
      <g className="wing wing-r">
        <path d="M166 104 Q198 108 192 140 Q178 150 160 136 Z" fill="#e23f43" stroke="#c7363a" strokeWidth="2" />
      </g>
      {/* Cuerpo fresa */}
      <path d="M100 34 C150 34 178 76 178 122 C178 166 146 186 100 186 C54 186 22 166 22 122 C22 76 50 34 100 34 Z" fill={`url(#rj-body-${uid})`} />
      {/* Semillas */}
      {[
        [142, 128, 15],
        [70, 156, -10],
        [124, 166, 5],
        [52, 118, -20],
        [158, 156, 20],
      ].map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx="3.5" ry="6" fill="#6b3f26" transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {/* Hojas */}
      <path d="M100 22 C72 24 64 42 72 50 C84 44 92 46 100 52 C108 46 116 44 128 50 C136 42 128 24 100 22 Z" fill="#9bd35b" stroke="#7bb43f" strokeWidth="2" />
      <ellipse cx="100" cy="24" rx="7" ry="6" fill="#7bb43f" />
      {/* Cara */}
      <ellipse cx="100" cy="92" rx="40" ry="34" fill="#fff2a8" />
      <circle cx="86" cy="86" r="13" fill="#fff" stroke="#e6e0cf" strokeWidth="1.5" />
      <circle cx="114" cy="86" r="13" fill="#fff" stroke="#e6e0cf" strokeWidth="1.5" />
      {mood === 'cheer' ? (
        <>
          <path d="M79 88 Q86 79 93 88" fill="none" stroke="#5a3a22" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M107 88 Q114 79 121 88" fill="none" stroke="#5a3a22" strokeWidth="3.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx={86 + pupilDx} cy="88" r="5.5" fill="#5a3a22" />
          <circle cx={114 - pupilDx} cy="88" r="5.5" fill="#5a3a22" />
          <circle cx={87 + pupilDx} cy="86" r="1.8" fill="#fff" />
          <circle cx={115 - pupilDx} cy="86" r="1.8" fill="#fff" />
        </>
      )}
      {mood === 'cheer' || mood === 'happy' ? (
        <path d="M92 101 L108 101 L100 114 Z" fill="#f5923e" stroke="#d9762a" strokeWidth="1.5" strokeLinejoin="round" />
      ) : (
        <path d="M93 102 L107 102 L100 111 Z" fill="#f5923e" stroke="#d9762a" strokeWidth="1.5" strokeLinejoin="round" />
      )}
      {mood === 'oops' && <SweatDrop x={142} y={66} />}
    </>
  );
}

// ---------- Pico: búho sabio con gafas ----------

function Pico({ uid, mood }: BodyProps) {
  return (
    <>
      <defs>
        <radialGradient id={`pc-body-${uid}`} cx="40%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#d9a066" />
          <stop offset="70%" stopColor="#c68a4e" />
          <stop offset="100%" stopColor="#a8703a" />
        </radialGradient>
      </defs>
      {/* Patas */}
      <g fill="#e8a33d">
        <path d="M72 186 l-8 12 h6 l4 -6 l4 6 h6 l-6 -12 Z" />
        <path d="M128 186 l-8 12 h6 l4 -6 l4 6 h6 l-6 -12 Z" />
      </g>
      {/* Penachos */}
      <path d="M48 64 L40 20 L76 46 Z" fill="#a8703a" />
      <path d="M152 64 L160 20 L124 46 Z" fill="#a8703a" />
      {/* Cuerpo */}
      <ellipse cx="100" cy="112" rx="70" ry="80" fill={`url(#pc-body-${uid})`} />
      {/* Alas */}
      <path d="M34 110 Q18 150 46 176 Q52 140 48 112 Z" fill="#a8703a" className="wing wing-l" />
      <path d="M166 110 Q182 150 154 176 Q148 140 152 112 Z" fill="#a8703a" className="wing wing-r" />
      {/* Barriga */}
      <ellipse cx="100" cy="140" rx="42" ry="44" fill="#f2dfc2" />
      {[
        [86, 128], [100, 122], [114, 128], [92, 144], [108, 144], [100, 160],
      ].map(([x, y], i) => (
        <path key={i} d={`M${x - 5} ${y} L${x} ${y + 5} L${x + 5} ${y}`} fill="none" stroke="#c68a4e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      ))}
      {/* Disco facial */}
      <ellipse cx="78" cy="78" rx="27" ry="25" fill="#f2dfc2" opacity="0.6" />
      <ellipse cx="122" cy="78" rx="27" ry="25" fill="#f2dfc2" opacity="0.6" />
      {/* Ojos */}
      {mood === 'cheer' ? (
        <>
          <path d="M68 80 Q78 70 88 80" fill="none" stroke="#3b2416" strokeWidth="4" strokeLinecap="round" />
          <path d="M112 80 Q122 70 132 80" fill="none" stroke="#3b2416" strokeWidth="4" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="78" cy="78" r="11" fill="#3b2416" />
          <circle cx="122" cy="78" r="11" fill="#3b2416" />
          <circle cx="81" cy="74" r="3.5" fill="#fff" />
          <circle cx="125" cy="74" r="3.5" fill="#fff" />
          {mood === 'idle' && <path d="M66 70 Q78 64 90 70 M110 70 Q122 64 134 70" fill="#c68a4e" opacity="0.9" />}
        </>
      )}
      {/* Gafas */}
      <g fill="rgba(255,255,255,0.18)" stroke="#d9a441" strokeWidth="4">
        <circle cx="78" cy="78" r="21" />
        <circle cx="122" cy="78" r="21" />
      </g>
      <path d="M99 76 Q100 71 101 76" stroke="#d9a441" strokeWidth="4" fill="none" />
      <path d="M57 74 L44 68 M143 74 L156 68" stroke="#d9a441" strokeWidth="3" strokeLinecap="round" />
      <path d="M66 66 Q70 62 75 62" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.9" fill="none" />
      <path d="M110 66 Q114 62 119 62" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.9" fill="none" />
      {/* Pico */}
      <path d="M92 98 L108 98 L100 112 Z" fill="#e8a33d" stroke="#c98626" strokeWidth="1.5" strokeLinejoin="round" />
      {mood === 'cheer' && <path d="M94 112 Q100 120 106 112" fill="#c2453f" />}
      {/* Mejillas */}
      <ellipse cx="58" cy="102" rx="9" ry="6" fill="#f4a08c" opacity="0.55" />
      <ellipse cx="142" cy="102" rx="9" ry="6" fill="#f4a08c" opacity="0.55" />
      {mood === 'oops' && <SweatDrop x={150} y={40} />}
    </>
  );
}

// ---------- Bebés avatar (Luna y Tuk-Tuk) ----------

/** Puntos blancos de la piel, en posiciones fijas para que no "bailen". */
const FACE_DOTS = [
  [62, 62], [70, 54], [80, 48], [124, 50], [134, 58], [142, 66], [58, 92], [64, 102], [140, 96], [136, 106],
  [100, 40], [92, 44], [110, 44], [74, 116], [128, 116], [50, 80], [150, 82], [118, 36], [84, 38],
];
const BODY_DOTS = [
  [40, 168], [44, 180], [36, 192], [160, 170], [164, 182], [156, 194], [30, 176], [170, 178],
];

function AvatarBaby({ uid, mood, variant }: BodyProps & { variant: 'luna' | 'tuktuk' }) {
  const skin = `bb-skin-${uid}`;
  const isTuk = variant === 'tuktuk';
  const onesie = isTuk ? '#faf8f2' : '#f3eedf';
  return (
    <>
      <defs>
        <radialGradient id={skin} cx="42%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#a9c6e6" />
          <stop offset="65%" stopColor="#8fb0d3" />
          <stop offset="100%" stopColor="#6d93bf" />
        </radialGradient>
      </defs>
      {/* Brazos */}
      <path d="M48 150 Q26 168 34 196 Q46 204 54 192 Q52 172 64 160 Z" fill={`url(#${skin})`} />
      <path d="M152 150 Q174 168 166 196 Q154 204 146 192 Q148 172 136 160 Z" fill={`url(#${skin})`} />
      <path d="M36 176 Q44 172 52 176 M38 188 Q46 184 52 188 M164 176 Q156 172 148 176 M162 188 Q154 184 148 188" stroke="#5c86b5" strokeWidth="2" opacity="0.5" fill="none" />
      {BODY_DOTS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.3" fill="#fff" opacity="0.9" />)}
      {/* Body (ropa) */}
      <path d="M56 146 Q100 132 144 146 Q156 176 150 210 L50 210 Q44 176 56 146 Z" fill={onesie} />
      {[70, 82, 94, 106, 118, 130].map((x) => (
        <line key={x} x1={x} y1="146" x2={x + (x - 100) * 0.08} y2="210" stroke="#e2dccb" strokeWidth="1.5" />
      ))}
      <path d="M76 142 Q100 156 124 142" fill="none" stroke="#e2dccb" strokeWidth="3" />
      {/* Orejas puntiagudas */}
      <path d="M44 86 L18 58 L50 70 Z" fill={`url(#${skin})`} />
      <path d="M156 86 L182 58 L150 70 Z" fill={`url(#${skin})`} />
      <path d="M42 80 L26 64 L46 72 Z" fill="#6d93bf" opacity="0.5" />
      <path d="M158 80 L174 64 L154 72 Z" fill="#6d93bf" opacity="0.5" />
      {/* Cabeza */}
      <ellipse cx="100" cy="84" rx="58" ry="62" fill={`url(#${skin})`} />
      {/* Rayas Na'vi suaves */}
      <path d="M70 36 Q76 50 72 62 M130 36 Q124 50 128 62 M56 108 Q66 112 70 120 M144 108 Q134 112 130 120" stroke="#5c86b5" strokeWidth="3" opacity="0.35" fill="none" strokeLinecap="round" />
      {FACE_DOTS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.4" fill="#fff" opacity="0.95" />)}
      {/* Pelo (Luna) */}
      {!isTuk && <path d="M78 28 Q100 14 124 28 Q112 22 100 24 Q88 22 78 28 Z" fill="#33415c" opacity="0.8" />}
      {/* Mejillas */}
      <ellipse cx="66" cy="104" rx="11" ry="7" fill="#6d93bf" opacity="0.45" />
      <ellipse cx="134" cy="104" rx="11" ry="7" fill="#6d93bf" opacity="0.45" />
      {/* Ojos */}
      {isTuk || mood === 'cheer' ? <ClosedEyes up={mood === 'cheer' || mood === 'happy'} /> : <AmberEyes uid={uid} />}
      {/* Nariz */}
      <ellipse cx="100" cy="98" rx="9" ry="7" fill={isTuk ? '#d98aa0' : '#c98aa0'} />
      <ellipse cx="97" cy="96" rx="3" ry="2" fill="#fff" opacity="0.4" />
      {/* Boca */}
      <BabyMouth mood={mood} color={isTuk ? '#c8748c' : '#b8738a'} />
      {/* Lazo floral (Tuk-Tuk) */}
      {isTuk && <Bow />}
      {mood === 'oops' && <SweatDrop x={150} y={44} />}
    </>
  );
}

function AmberEyes({ uid }: { uid: string }) {
  const g = `bb-iris-${uid}`;
  return (
    <>
      <defs>
        <radialGradient id={g} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f6d27a" />
          <stop offset="70%" stopColor="#d9a441" />
          <stop offset="100%" stopColor="#9b6a1d" />
        </radialGradient>
      </defs>
      {[78, 122].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="78" rx="13" ry="11" fill="#fff" />
          <circle cx={x} cy="78" r="9" fill={`url(#${g})`} />
          <circle cx={x} cy="78" r="4" fill="#1f1408" />
          <circle cx={x + 3} cy="75" r="2.4" fill="#fff" />
          <path d={`M${x - 14} 72 Q${x} 62 ${x + 14} 72`} fill="none" stroke="#1b2238" strokeWidth="3" strokeLinecap="round" />
          {[-10, -5, 0, 5, 10].map((d) => (
            <line key={d} x1={x + d} y1={68 + Math.abs(d) * 0.25} x2={x + d * 1.3} y2={62 + Math.abs(d) * 0.3} stroke="#1b2238" strokeWidth="1.6" strokeLinecap="round" />
          ))}
        </g>
      ))}
    </>
  );
}

function ClosedEyes({ up }: { up: boolean }) {
  return (
    <>
      {[78, 122].map((x) => (
        <g key={x}>
          {up ? (
            <path d={`M${x - 12} 82 Q${x} 70 ${x + 12} 82`} fill="none" stroke="#1b2238" strokeWidth="3" strokeLinecap="round" />
          ) : (
            <path d={`M${x - 12} 76 Q${x} 86 ${x + 12} 76`} fill="none" stroke="#1b2238" strokeWidth="3" strokeLinecap="round" />
          )}
          {!up &&
            [-8, -3, 2, 7].map((d) => (
              <line key={d} x1={x + d} y1={80 + (Math.abs(d) < 5 ? 1 : 0)} x2={x + d * 1.2} y2={86} stroke="#1b2238" strokeWidth="1.4" strokeLinecap="round" />
            ))}
        </g>
      ))}
    </>
  );
}

function BabyMouth({ mood, color }: { mood: Mood; color: string }) {
  if (mood === 'cheer') return <path d="M88 114 Q100 130 112 114 Z" fill="#8a3f55" stroke={color} strokeWidth="3" strokeLinejoin="round" />;
  if (mood === 'happy') return <path d="M90 115 Q100 124 110 115" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />;
  if (mood === 'oops') return <ellipse cx="100" cy="118" rx="5" ry="6" fill={color} />;
  return (
    <>
      <ellipse cx="100" cy="116" rx="8" ry="5" fill={color} />
      <path d="M92 116 Q100 113 108 116" stroke="#8a3f55" strokeWidth="1.5" fill="none" />
    </>
  );
}

function Bow() {
  return (
    <g>
      {/* Diadema */}
      <path d="M46 62 Q100 18 154 62" fill="none" stroke="#f2e4d8" strokeWidth="11" strokeLinecap="round" />
      <path d="M46 62 Q100 18 154 62" fill="none" stroke="#e8a9b0" strokeWidth="11" strokeLinecap="round" strokeDasharray="2 9" />
      {/* Lazo arriba a la derecha */}
      <g transform="translate(142 34) rotate(18)">
        <path d="M0 0 C-26 -22 -34 10 -6 6 Z" fill="#f2e4d8" stroke="#e8a9b0" strokeWidth="2" />
        <path d="M0 0 C26 -22 34 10 6 6 Z" fill="#f2e4d8" stroke="#e8a9b0" strokeWidth="2" />
        <circle cx="-16" cy="-4" r="3" fill="#e8a9b0" />
        <circle cx="-22" cy="2" r="2" fill="#d98aa0" />
        <circle cx="16" cy="-4" r="3" fill="#e8a9b0" />
        <circle cx="22" cy="2" r="2" fill="#d98aa0" />
        <ellipse cx="0" cy="2" rx="6" ry="7" fill="#e8a9b0" />
      </g>
    </g>
  );
}

const Luna = (p: BodyProps) => <AvatarBaby {...p} variant="luna" />;
const TukTuk = (p: BodyProps) => <AvatarBaby {...p} variant="tuktuk" />;

const BODIES: Record<MascotId, (p: BodyProps) => JSX.Element> = { clarita: Clarita, rojichi: Rojichi, pico: Pico, luna: Luna, tuktuk: TukTuk };

// ---------- Accesorios ----------

function Medal() {
  return (
    <g transform="translate(160 160)">
      <path d="M-8 -22 L-2 -4 L4 -4 L-2 -22 Z" fill="#3f7fe8" />
      <path d="M8 -22 L2 -4 L-4 -4 L2 -22 Z" fill="#e0393e" />
      <circle r="13" fill="#f5c542" stroke="#c8961c" strokeWidth="2.5" />
      <path d="M0 -6 L2 -1 L7 -1 L3 2 L5 7 L0 4 L-5 7 L-3 2 L-7 -1 L-2 -1 Z" fill="#fff6cf" />
    </g>
  );
}

function GradCap({ y }: { y: number }) {
  return (
    <g transform={`translate(100 ${y})`}>
      <path d="M-24 4 L-24 14 Q0 24 24 14 L24 4 Z" fill="#2b2d42" />
      <path d="M0 -12 L-40 2 L0 16 L40 2 Z" fill="#3a3d5c" stroke="#2b2d42" strokeWidth="2" />
      <path d="M28 4 L32 22" stroke="#f5c542" strokeWidth="2.5" />
      <circle cx="32" cy="24" r="3.5" fill="#f5c542" />
    </g>
  );
}

function Aura() {
  return (
    <g className="aura">
      <circle cx="100" cy="110" r="96" fill="none" stroke="#f5c542" strokeWidth="3" strokeDasharray="4 10" opacity="0.7" />
      {[
        [26, 40], [176, 46], [14, 140], [186, 150], [100, 4],
      ].map(([x, y], i) => (
        <path key={i} className="twinkle" style={{ animationDelay: `${i * 0.3}s` }} d={`M${x} ${y - 8} L${x + 2.5} ${y - 2.5} L${x + 8} ${y} L${x + 2.5} ${y + 2.5} L${x} ${y + 8} L${x - 2.5} ${y + 2.5} L${x - 8} ${y} L${x - 2.5} ${y - 2.5} Z`} fill="#f5c542" />
      ))}
    </g>
  );
}
