// Lección de estudio de un tema: se lee por páginas con el profe peluche y termina con un
// resumen, una mini-comprobación y el botón para practicar con flashcards.
import { Fragment, useEffect, useState, type ReactNode } from 'react';
import type { Lesson, SubjectId, Topic } from '../types';
import { MASCOTS, subjectById } from '../data/subjects';
import type { BadgeDef } from '../lib/game';
import { Mascot } from '../components/Mascot';
import { Bubble, Confetti } from '../components/ui';

/** Convierte **negrita** en <strong>. */
export function rich(text: string): ReactNode {
  return text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>));
}

const STR = {
  es: {
    back: 'Volver', prev: 'Atrás', next: 'Siguiente', start: '¡Empezamos!', inThis: 'En esta lección', page: 'Página',
    summary: 'Lo más importante', check: 'Comprueba lo que sabes', checkHelp: 'Responde estas preguntas rápidas. ¡No cuentan para nada, son para ti!',
    tip: 'Truco', finish: 'Terminar la lección', practice: '¡A practicar con flashcards!', again: 'Repasar la lección', done: '¡Lección terminada!',
    right: '¡Bien!', wrong: 'Era:', helpEs: 'Ayuda en español', hideEs: 'Ocultar ayuda', xp: 'XP por estudiar', firstTime: 'primera vez',
  },
  en: {
    back: 'Back', prev: 'Back', next: 'Next', start: "Let's start!", inThis: 'In this lesson', page: 'Page',
    summary: 'Key ideas', check: 'Check what you know', checkHelp: 'Answer these quick questions. They are just for you!',
    tip: 'Tip', finish: 'Finish the lesson', practice: 'Practise with flashcards!', again: 'Read it again', done: 'Lesson complete!',
    right: 'Well done!', wrong: 'It was:', helpEs: 'Ayuda en español', hideEs: 'Ocultar ayuda', xp: 'XP for studying', firstTime: 'first time',
  },
};

interface Props {
  subject: SubjectId;
  topic: Topic;
  lesson: Lesson;
  /** Veces que ya se ha completado esta lección. */
  timesDone: number;
  onBack: () => void;
  onComplete: () => { xp: number; first: boolean; badges: BadgeDef[] };
  onPractice: () => void;
}

export function LessonScreen({ subject, topic, lesson, timesDone, onBack, onComplete, onPractice }: Props) {
  const sub = subjectById(subject);
  const mascot = MASCOTS[sub.mascot];
  const s = STR[sub.lang];
  const n = lesson.sections.length;
  // Páginas: 0 portada · 1..n secciones · n+1 resumen · n+2 comprobación · n+3 final
  const last = n + 3;
  const [page, setPage] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(() => lesson.check.map(() => null));
  const [reward, setReward] = useState<ReturnType<Props['onComplete']> | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setHelpOpen(false);
  }, [page]);

  const go = (p: number) => setPage(Math.max(0, Math.min(last, p)));
  const allChecked = answers.every((a) => a !== null);

  const finish = () => {
    if (!reward) setReward(onComplete());
    go(last);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && page < n + 2) go(page + 1);
      if (e.key === 'ArrowLeft' && page > 0 && page < last) go(page - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const section = page >= 1 && page <= n ? lesson.sections[page - 1] : null;
  const mood = page === last ? 'cheer' : page === 0 ? 'happy' : 'idle';

  return (
    <div className="screen lesson" style={{ ['--sc' as string]: sub.color, ['--scs' as string]: sub.colorSoft }}>
      <header className="topbar">
        <button className="chip chip-btn" onClick={onBack}>← {s.back}</button>
        <h1 className="subject-title lesson-topic">
          {topic.emoji} {topic.title}
        </h1>
        {timesDone > 0 && <span className="chip">📖 x{timesDone}</span>}
      </header>

      <div className="lesson-dots" aria-label={`${s.page} ${page + 1} / ${last + 1}`}>
        {Array.from({ length: last + 1 }, (_, i) => (
          <button key={i} className={`dot ${i === page ? 'is-on' : i < page ? 'is-past' : ''}`} onClick={() => i <= n + 2 && i <= page && go(i)} aria-label={`${s.page} ${i + 1}`} />
        ))}
      </div>

      <div className="lesson-stage">
        <div className="lesson-teacher">
          <Mascot id={sub.mascot} size={page === 0 || page === last ? 140 : 96} mood={mood} />
        </div>

        <article className="lesson-page" key={page}>
          {page === 0 && (
            <>
              <Bubble speaker="mascot" name={mascot.name} text={lesson.intro} />
              <h2 className="lesson-h">{s.inThis}</h2>
              <ol className="lesson-toc">
                {lesson.sections.map((sec, i) => (
                  <li key={i}>
                    <span>{sec.emoji}</span> {sec.title}
                  </li>
                ))}
              </ol>
            </>
          )}

          {section && (
            <>
              <div className="lesson-kicker">
                {s.page} {page} / {n}
              </div>
              <h2 className="lesson-h">
                <span className="lesson-emoji">{section.emoji}</span> {section.title}
              </h2>
              {section.helpEs && (
                <button className="tag tag-help" onClick={() => setHelpOpen((h) => !h)} aria-expanded={helpOpen}>
                  🙋 {helpOpen ? s.hideEs : s.helpEs}
                </button>
              )}
              {helpOpen && section.helpEs && <p className="help-es">🙋 {rich(section.helpEs)}</p>}
              {section.body.map((p, i) => (
                <p key={i} className="lesson-p">
                  {rich(p)}
                </p>
              ))}
              {section.bullets && (
                <ul className="lesson-list">
                  {section.bullets.map((b, i) => (
                    <li key={i}>{rich(b)}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="lesson-table-wrap">
                  <table className="lesson-table">
                    <thead>
                      <tr>
                        {section.table.head.map((h, i) => (
                          <th key={i}>{rich(h)}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((r, i) => (
                        <tr key={i}>
                          {r.map((c, j) => (
                            <td key={j}>{rich(c)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.tip && (
                <div className="lesson-tip">
                  <strong>💡 {s.tip}</strong>
                  <p>{rich(section.tip)}</p>
                </div>
              )}
            </>
          )}

          {page === n + 1 && (
            <>
              <h2 className="lesson-h">⭐ {s.summary}</h2>
              <ul className="lesson-keys">
                {lesson.keyPoints.map((k, i) => (
                  <li key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                    {rich(k)}
                  </li>
                ))}
              </ul>
            </>
          )}

          {page === n + 2 && (
            <>
              <h2 className="lesson-h">🧐 {s.check}</h2>
              <p className="lesson-p muted">{s.checkHelp}</p>
              {lesson.check.map((q, qi) => {
                const picked = answers[qi];
                return (
                  <div key={qi} className="lesson-q">
                    <p className="lesson-q-text">
                      {qi + 1}. {rich(q.question)}
                    </p>
                    <div className="mc-grid">
                      {q.options.map((o, oi) => {
                        const state = picked === null ? '' : oi === q.answer ? 'is-right' : oi === picked ? 'is-wrong' : 'is-dim';
                        return (
                          <button
                            key={oi}
                            className={`option ${state}`}
                            disabled={picked !== null}
                            onClick={() => setAnswers((a) => a.map((v, k) => (k === qi ? oi : v)))}
                          >
                            <span className="option-letter">{String.fromCharCode(65 + oi)}</span>
                            <span className="option-text">{o}</span>
                          </button>
                        );
                      })}
                    </div>
                    {picked !== null && (
                      <p className={`lesson-q-fb ${picked === q.answer ? 'ok' : 'ko'}`}>
                        {picked === q.answer ? `✅ ${s.right}` : `💭 ${s.wrong} ${q.options[q.answer]}`}
                      </p>
                    )}
                  </div>
                );
              })}
            </>
          )}

          {page === last && (
            <div className="lesson-done">
              <Confetti burst={1} pieces={70} />
              <h2 className="title-xl">🎉 {s.done}</h2>
              {reward && (
                <p className="lesson-reward">
                  +{reward.xp} {s.xp}
                  {reward.first && <small> · {s.firstTime}</small>}
                </p>
              )}
              {reward?.badges.map((b) => (
                <div key={b.id} className="badge is-new">
                  <span className="badge-icon">{b.icon}</span>
                  <strong>{b.name}</strong>
                  <small>{b.desc}</small>
                </div>
              ))}
              <button className="btn btn-big" onClick={onPractice}>
                🃏 {s.practice}
              </button>
              <button className="btn btn-ghost btn-big" onClick={() => go(0)}>
                📖 {s.again}
              </button>
            </div>
          )}
        </article>
      </div>

      {page < last && (
        <nav className="lesson-nav">
          <button className="btn btn-ghost" onClick={() => go(page - 1)} disabled={page === 0}>
            ← {s.prev}
          </button>
          {page < n + 2 ? (
            <button className="btn btn-primary" onClick={() => go(page + 1)}>
              {page === 0 ? s.start : s.next} →
            </button>
          ) : (
            <button className="btn btn-primary" onClick={finish} disabled={!allChecked}>
              {s.finish} ✓
            </button>
          )}
        </nav>
      )}
    </div>
  );
}
