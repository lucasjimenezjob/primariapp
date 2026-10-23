// Javi y Celia en SVG. Aspecto genérico de dibujo animado: se puede ajustar cuando haya fotos.

export type ParentPose = 'chase' | 'cheer';

interface Props {
  who: 'javi' | 'celia';
  pose?: ParentPose;
  size?: number;
  className?: string;
}

export function Parent({ who, pose = 'cheer', size = 140, className = '' }: Props) {
  const isJavi = who === 'javi';
  const skin = '#f6c9a8';
  const hair = isJavi ? '#3d2b1f' : '#6b3e26';
  const top = isJavi ? '#3f7fe8' : '#b45cd6';
  const legs = isJavi ? '#2f3e66' : '#3b3f5c';
  const chase = pose === 'chase';
  return (
    <svg viewBox="0 0 160 240" width={size} height={size * 1.5} className={`parent parent-${who} pose-${pose} ${className}`} role="img" aria-label={isJavi ? 'Javi' : 'Celia'}>
      {/* Pelo largo de Celia (detrás) */}
      {!isJavi && <path d="M44 56 Q40 120 54 130 L106 130 Q120 120 116 56 Z" fill={hair} />}
      {/* Piernas */}
      <g className="legs">
        <path className="leg leg-l" d="M68 170 L60 222" stroke={legs} strokeWidth="16" strokeLinecap="round" />
        <path className="leg leg-r" d="M92 170 L100 222" stroke={legs} strokeWidth="16" strokeLinecap="round" />
        <ellipse cx="56" cy="226" rx="13" ry="7" fill="#e0393e" />
        <ellipse cx="104" cy="226" rx="13" ry="7" fill="#e0393e" />
      </g>
      {/* Cuerpo */}
      <path d="M50 108 Q80 96 110 108 L114 176 Q80 184 46 176 Z" fill={top} />
      {/* Brazos */}
      {chase ? (
        <>
          <path d="M52 116 Q36 140 44 160" stroke={top} strokeWidth="14" strokeLinecap="round" fill="none" />
          <circle cx="44" cy="162" r="8" fill={skin} />
          <g className="slipper-arm">
            <path d="M108 116 Q128 96 132 70" stroke={top} strokeWidth="14" strokeLinecap="round" fill="none" />
            <circle cx="132" cy="68" r="8" fill={skin} />
            <Slipper x={132} y={48} />
          </g>
        </>
      ) : (
        <>
          <path d="M52 116 Q30 96 30 70" stroke={top} strokeWidth="14" strokeLinecap="round" fill="none" />
          <path d="M108 116 Q130 96 130 70" stroke={top} strokeWidth="14" strokeLinecap="round" fill="none" />
          <circle cx="30" cy="66" r="8" fill={skin} />
          <circle cx="130" cy="66" r="8" fill={skin} />
        </>
      )}
      {/* Cuello y cabeza */}
      <rect x="72" y="92" width="16" height="16" rx="6" fill={skin} />
      <ellipse cx="80" cy="66" rx="32" ry="34" fill={skin} />
      {/* Pelo */}
      {isJavi ? (
        <>
          <path d="M48 60 Q46 30 80 28 Q114 30 112 60 Q104 42 80 42 Q58 42 48 60 Z" fill={hair} />
          {/* Barba corta */}
          <path d="M52 76 Q56 102 80 104 Q104 102 108 76 Q100 92 80 92 Q60 92 52 76 Z" fill={hair} opacity="0.85" />
        </>
      ) : (
        <path d="M46 64 Q44 28 80 28 Q118 28 114 64 Q108 40 84 40 Q66 46 46 64 Z" fill={hair} />
      )}
      {/* Cara */}
      {chase ? (
        <>
          {/* Cara pícara: cejas de "te pillé" y sonrisa, nada de enfado de verdad */}
          <path d="M62 56 L74 60 M98 56 L86 60" stroke="#3b2416" strokeWidth="3" strokeLinecap="round" />
          <circle cx="68" cy="68" r="3.5" fill="#3b2416" />
          <path d="M87 68 Q92 64 97 68" stroke="#3b2416" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M68 80 Q80 92 92 80 Z" fill="#a83a3a" />
          <path d="M71 81 L89 81" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M62 68 Q68 62 74 68 M86 68 Q92 62 98 68" stroke="#3b2416" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M68 80 Q80 94 92 80 Z" fill="#a83a3a" />
        </>
      )}
      <ellipse cx="60" cy="78" rx="6" ry="4" fill="#f08c8c" opacity="0.5" />
      <ellipse cx="100" cy="78" rx="6" ry="4" fill="#f08c8c" opacity="0.5" />
      {!isJavi && <circle cx="47" cy="74" r="3" fill="#f5c542" />}
    </svg>
  );
}

function Slipper({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(-25)`} className="slipper">
      <ellipse cx="0" cy="0" rx="12" ry="26" fill="#ff7eb6" stroke="#d94f8f" strokeWidth="2.5" />
      <path d="M-11 -6 Q0 -16 11 -6" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="0" cy="-12" r="4" fill="#fff" />
    </g>
  );
}
