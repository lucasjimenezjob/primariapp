import { useCallback, useEffect, useRef, useState } from 'react';
import type { PlayCard } from '../types';
import { MASCOTS, subjectById, type ProfileInfo } from '../data/subjects';
import { t } from '../lib/i18n';
import { curiosityFor, say, speakerName, type SaidPhrase } from '../lib/phrases';
import { mascotTier, type AnswerLog, type ProfileState } from '../lib/game';
import { isFixedKey } from '../lib/session';
import { answerPattern, firstHint, HINT_DELAY_S, hintOffer, optionsToEliminate, xpWithHints } from '../lib/hints';
import { Mascot, type Mood } from '../components/Mascot';
import { Parent } from '../components/Parents';
import { MatchView, MCView, WriteView, type AnswerResult } from '../components/CardViews';
import { Bubble, Confetti, ProgressBar, SlipperChase } from '../components/ui';

interface Props {
  profile: ProfileInfo;
  state: ProfileState;
  cards: PlayCard[];
  onQuit: () => void;
  onFinish: (log: AnswerLog[], bestCombo: number) => void;
}

const BASE_XP = { mc: 10, write: 15, match: 15 } as const;
const WRONG_RUN_FOR_SLIPPER = 3;
const COMBO_MILESTONES = [3, 5, 8, 12, 16];

export function Session({ profile, state, cards, onQuit, onFinish }: Props) {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState<AnswerResult | null>(null);
  const [log, setLog] = useState<AnswerLog[]>([]);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [wrongRun, setWrongRun] = useState(0);
  const [mood, setMood] = useState<Mood>('happy');
  const [phrase, setPhrase] = useState<SaidPhrase | null>(null);
  const [curiosity, setCuriosity] = useState<string | null>(null);
  const [chase, setChase] = useState<{ who: 'javi' | 'celia'; text: string } | null>(null);
  const [confetti, setConfetti] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  const [lastXp, setLastXp] = useState(0);
  // Pistas: el botón se activa a los HINT_DELAY_S segundos en la misma tarjeta.
  const [hintReady, setHintReady] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [eliminated, setEliminated] = useState<number[]>([]);
  const [autoPairs, setAutoPairs] = useState(0);
  const answeredRef = useRef(false);

  const pc = cards[index];
  const sub = subjectById(pc.subject);
  const lang = sub.lang;
  const s = t(lang);
  const mascot = MASCOTS[sub.mascot];
  const vars = { nombre: profile.name, profe: mascot.name };
  const isLast = index === cards.length - 1;

  useEffect(() => {
    answeredRef.current = false;
    const id = setTimeout(() => {
      if (answeredRef.current) return;
      setHintReady(true);
      setMood('happy');
      setPhrase({ speaker: 'mascot', text: hintOffer(lang) });
    }, HINT_DELAY_S * 1000);
    return () => clearTimeout(id);
  }, [index, lang]);

  const requestHint = () => {
    if (!hintReady || result || hintLevel >= 2) return;
    const level = hintLevel + 1;
    setHintLevel(level);
    if (level === 2) {
      if (pc.card.type === 'mc') setEliminated(optionsToEliminate(pc.card));
      if (pc.card.type === 'match') setAutoPairs((n) => n + 1);
    }
  };

  const handleAnswer = (r: AnswerResult) => {
    answeredRef.current = true;
    setResult(r);
    const card = pc.card;
    if (r.correct) {
      const nextCombo = combo + 1;
      const xp = xpWithHints(BASE_XP[card.type] + (nextCombo >= 2 ? Math.min(10, (nextCombo - 1) * 2) : 0), hintLevel);
      setLastXp(xp);
      setCombo(nextCombo);
      setBestCombo((b) => Math.max(b, nextCombo));
      setWrongRun(0);
      setMood('cheer');
      setLog((l) => [...l, { key: pc.key, subject: pc.subject, correct: true, xp, fixed: isFixedKey(pc.key) }]);
      if (COMBO_MILESTONES.includes(nextCombo)) {
        setPhrase(say('comboStreak', lang, vars));
        setConfetti(Date.now());
      } else {
        setPhrase(Math.random() < 0.7 ? say('correct', lang, vars) : null);
      }
      setCuriosity(Math.random() < 0.15 ? curiosityFor(pc.subject) : null);
    } else {
      const run = wrongRun + 1;
      setLastXp(0);
      setCombo(0);
      setMood('oops');
      setLog((l) => [...l, { key: pc.key, subject: pc.subject, correct: false, xp: 0, fixed: isFixedKey(pc.key) }]);
      if (run >= WRONG_RUN_FOR_SLIPPER) {
        const p = say('wrongStreak', lang, vars, ['javi', 'celia']);
        setChase({ who: p.speaker === 'celia' ? 'celia' : 'javi', text: p.text });
        setPhrase(null);
        setWrongRun(0);
      } else {
        setWrongRun(run);
        setPhrase(say('wrong', lang, vars));
      }
      setCuriosity(Math.random() < 0.35 ? curiosityFor(pc.subject) : null);
    }
  };

  const next = () => {
    if (isLast) {
      onFinish(log, bestCombo);
      return;
    }
    setIndex((i) => i + 1);
    setResult(null);
    setPhrase(null);
    setCuriosity(null);
    setHelpOpen(false);
    setMood('happy');
    setHintReady(false);
    setHintLevel(0);
    setEliminated([]);
    setAutoPairs(0);
  };

  const closeChase = useCallback(() => setChase(null), []);

  const quit = () => {
    const msg = log.length ? '¿Seguro que quieres salir? Se perderá esta ronda.' : '¿Salir de la ronda?';
    if (window.confirm(msg)) onQuit();
  };

  const card = pc.card;
  const typeLabel = card.type === 'mc' ? s.quiz : card.type === 'write' ? s.write : s.match;
  const speakerIsParent = phrase && phrase.speaker !== 'mascot';

  return (
    <div className="screen session" style={{ ['--sc' as string]: sub.color, ['--scs' as string]: sub.colorSoft }}>
      <header className="session-top">
        <button className="chip chip-btn" onClick={quit} aria-label="Salir">✕</button>
        <ProgressBar value={(index + (result ? 1 : 0)) / cards.length} color={sub.color} height={14} label="Progreso de la ronda" />
        <span className="chip">{index + 1}/{cards.length}</span>
        {combo >= 2 && <span className="chip combo" key={combo}>🔥 x{combo}</span>}
      </header>

      <section className="session-stage">
        <div className="session-teacher">
          <Mascot id={sub.mascot} size={110} mood={mood} tier={mascotTier(state.subjectXp[pc.subject] ?? 0)} />
          {speakerIsParent && <Parent who={phrase!.speaker as 'javi' | 'celia'} pose="cheer" size={54} className="peek-parent" />}
          {phrase && <Bubble speaker={phrase.speaker} name={speakerName(phrase.speaker, mascot.name)} text={phrase.text} />}
        </div>

        <article className={`card card-${card.type} ${result ? (result.correct ? 'answered-right' : 'answered-wrong') : ''}`} key={pc.key}>
          <div className="card-tags">
            <span className="tag" style={{ background: sub.color }}>{sub.emoji} {sub.name}</span>
            <span className="tag tag-soft">{typeLabel}</span>
            {card.helpEs && !result && (
              <button className="tag tag-help" onClick={() => setHelpOpen((h) => !h)} aria-expanded={helpOpen}>
                🙋 {helpOpen ? 'Ocultar ayuda' : 'Ayuda en español'}
              </button>
            )}
          </div>
          <h2 className="card-prompt">{card.prompt}</h2>
          {helpOpen && card.helpEs && <p className="help-es">🙋 {card.helpEs}</p>}

          {!result && hintLevel < 2 && (
            <div className="hint-row">
              <button
                key={index}
                className={`hint-btn ${hintReady ? 'is-ready' : 'is-waiting'}`}
                style={{ ['--hint-delay' as string]: `${HINT_DELAY_S}s` }}
                onClick={requestHint}
                disabled={!hintReady}
                aria-label={hintReady ? s.hint : `${s.hint} (${HINT_DELAY_S} s)`}
              >
                <span className="hint-fill" aria-hidden />
                <span className="hint-label">💡 {hintLevel === 0 ? s.hint : s.moreHint}</span>
              </button>
            </div>
          )}
          {hintLevel > 0 && !result && (
            <div className="hint-panel">
              <strong>
                💡 {s.hintTitle} {mascot.name}
              </strong>
              <p>{firstHint(card, pc.subject, pc.topicId, lang)}</p>
              {hintLevel >= 2 && card.type === 'mc' && <p className="hint-extra">✂️ {s.hintEliminated}</p>}
              {hintLevel >= 2 && card.type === 'match' && <p className="hint-extra">🔗 {s.hintPair}</p>}
              {hintLevel >= 2 && card.type === 'write' && (
                <p className="hint-extra">
                  🔤 {s.hintPattern} <span className="hint-pattern">{answerPattern(card.answers[0])}</span>
                </p>
              )}
            </div>
          )}

          {card.type === 'mc' && <MCView card={card} s={s} locked={!!result} onAnswer={handleAnswer} eliminated={eliminated} />}
          {card.type === 'write' && <WriteView card={card} s={s} locked={!!result} onAnswer={handleAnswer} allowTypos={pc.subject !== 'lengua' && pc.subject !== 'matematicas'} />}
          {card.type === 'match' && <MatchView card={card} s={s} locked={!!result} onAnswer={handleAnswer} autoPairs={autoPairs} />}

          {result && (
            <div className={`feedback ${result.correct ? 'is-right' : 'is-wrong'}`}>
              <div className="feedback-head">
                {result.correct ? (
                  <>
                    <strong>{result.almost ? s.almost : s.correct}</strong>
                    {result.almost && <span className="solution">{result.solution}</span>}
                    <span className="xp-pop">
                      +{lastXp} XP{hintLevel > 0 && <small> · 💡 {s.hintUsed}</small>}
                    </span>
                  </>
                ) : (
                  <>
                    <strong>{s.wrong}</strong> <span className="solution">{result.solution}</span>
                  </>
                )}
              </div>
              {card.explain && <p className="explain">{card.explain}</p>}
              {curiosity && (
                <div className="curiosity">
                  <strong>✨ {s.curiosity}</strong>
                  <p>{curiosity}</p>
                </div>
              )}
              <button className="btn btn-big" onClick={next} autoFocus>
                {isLast ? s.finish : s.next} →
              </button>
            </div>
          )}
        </article>
      </section>

      <Confetti burst={confetti} pieces={40} />
      {chase && <SlipperChase who={chase.who} text={chase.text} onDone={closeChase} />}
    </div>
  );
}
