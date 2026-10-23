import { useEffect, useMemo, useRef, useState } from 'react';
import type { MatchCard, MCCard, WriteCard } from '../types';
import type { Strings } from '../lib/i18n';
import { checkWritten, shuffle, type WriteVerdict } from '../lib/text';

export interface AnswerResult {
  correct: boolean;
  /** Texto con la respuesta correcta para enseñar en la retroalimentación. */
  solution: string;
  almost?: boolean;
}

interface ViewProps<C> {
  card: C;
  s: Strings;
  locked: boolean;
  onAnswer: (r: AnswerResult) => void;
}

// ---------------- Test ----------------

export function MCView({ card, locked, onAnswer, eliminated = [] }: ViewProps<MCCard> & { eliminated?: number[] }) {
  const [picked, setPicked] = useState<number | null>(null);
  const choose = (i: number) => {
    if (locked || picked !== null || eliminated.includes(i)) return;
    setPicked(i);
    onAnswer({ correct: i === card.answer, solution: card.options[card.answer] });
  };
  return (
    <div className="mc-grid">
      {card.options.map((o, i) => {
        const gone = picked === null && eliminated.includes(i);
        const state = gone ? 'is-gone' : picked === null ? '' : i === card.answer ? 'is-right' : i === picked ? 'is-wrong' : 'is-dim';
        return (
          <button key={i} className={`option ${state}`} onClick={() => choose(i)} disabled={locked || picked !== null || gone}>
            <span className="option-letter">{String.fromCharCode(65 + i)}</span>
            <span className="option-text">{o}</span>
          </button>
        );
      })}
    </div>
  );
}

// ---------------- Respuesta escrita ----------------

export function WriteView({ card, s, locked, onAnswer, allowTypos }: ViewProps<WriteCard> & { allowTypos: boolean }) {
  const [value, setValue] = useState('');
  const [verdict, setVerdict] = useState<WriteVerdict | null>(null);
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    input.current?.focus({ preventScroll: true });
  }, []);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (locked || verdict || !value.trim()) return;
    const v = checkWritten(value, card.answers, allowTypos);
    setVerdict(v);
    onAnswer({ correct: v !== 'wrong', almost: v === 'almost', solution: card.answers[0] });
  };
  return (
    <form className="write" onSubmit={submit}>
      <input
        ref={input}
        className={`write-input ${verdict === 'wrong' ? 'is-wrong' : verdict ? 'is-right' : ''}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={s.placeholder}
        disabled={locked || !!verdict}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        inputMode={/^[\d.,/ -]+$/.test(card.answers[0]) ? 'decimal' : 'text'}
      />
      {!verdict && (
        <div className="write-actions">
          <button type="submit" className="btn btn-primary" disabled={!value.trim()}>
            {s.check}
          </button>
        </div>
      )}
    </form>
  );
}

// ---------------- Emparejar ----------------

export function MatchView({ card, s, locked, onAnswer, autoPairs = 0 }: ViewProps<MatchCard> & { autoPairs?: number }) {
  const left = useMemo(() => shuffle(card.pairs.map((p, i) => ({ i, text: p[0] }))), [card]);
  const right = useMemo(() => shuffle(card.pairs.map((p, i) => ({ i, text: p[1] }))), [card]);
  const [selL, setSelL] = useState<number | null>(null);
  const [selR, setSelR] = useState<number | null>(null);
  const [matchedL, setMatchedL] = useState<number[]>([]);
  const [matchedR, setMatchedR] = useState<number[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [shake, setShake] = useState<number | null>(null);
  const done = matchedL.length === card.pairs.length;

  useEffect(() => {
    if (selL === null || selR === null) return;
    // Se compara por texto: dos parejas pueden compartir lado derecho (p. ej. "Renewable").
    if (card.pairs[selL][1] === card.pairs[selR][1]) {
      const next = [...matchedL, selL];
      setMatchedL(next);
      setMatchedR((r) => [...r, selR]);
      if (next.length === card.pairs.length) {
        onAnswer({ correct: mistakes <= 1, solution: card.pairs.map((p) => `${p[0]} → ${p[1]}`).join(' · ') });
      }
    } else {
      setMistakes((m) => m + 1);
      setShake(selR);
      setTimeout(() => setShake(null), 450);
    }
    setSelL(null);
    setSelR(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selL, selR]);

  // Pista: resuelve una pareja más cada vez que sube `autoPairs`. No cuenta como fallo.
  useEffect(() => {
    if (!autoPairs || done) return;
    const i = card.pairs.findIndex((_, k) => !matchedL.includes(k));
    const j = card.pairs.findIndex((p, k) => !matchedR.includes(k) && p[1] === card.pairs[i][1]);
    if (i < 0 || j < 0) return;
    const next = [...matchedL, i];
    setMatchedL(next);
    setMatchedR((r) => [...r, j]);
    setSelL(null);
    if (next.length === card.pairs.length) {
      onAnswer({ correct: mistakes <= 1, solution: card.pairs.map((p) => `${p[0]} → ${p[1]}`).join(' · ') });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPairs]);

  const cls = (i: number, sel: number | null, matched: number[]) => (matched.includes(i) ? 'is-right' : sel === i ? 'is-selected' : '');
  return (
    <div className="match">
      <p className="match-help">{done ? `${s.matchDone} (${mistakes} ${s.mistakes})` : s.matchHelp}</p>
      <div className="match-cols">
        <div className="match-col">
          {left.map((it) => (
            <button key={it.i} className={`match-item ${cls(it.i, selL, matchedL)}`} disabled={locked || matchedL.includes(it.i)} onClick={() => setSelL(it.i)}>
              {it.text}
            </button>
          ))}
        </div>
        <div className="match-col">
          {right.map((it) => (
            <button
              key={it.i}
              className={`match-item ${cls(it.i, selR, matchedR)} ${shake === it.i ? 'shake' : ''}`}
              disabled={locked || matchedR.includes(it.i) || selL === null}
              onClick={() => setSelR(it.i)}
            >
              {it.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
