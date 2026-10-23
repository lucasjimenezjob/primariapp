// Construcción de sesiones: elige tarjetas priorizando las nuevas y las que más se fallan.
import type { Card, Grade, PlayCard, SubjectId } from '../types';
import { getTopics } from '../content';
import { SUBJECTS } from '../data/subjects';
import { cardKey, type ProfileState } from './game';
import { shuffle } from './text';

export interface TopicRef {
  subject: SubjectId;
  topicId: string;
}

/** Baraja las opciones de los test para que la respuesta no esté siempre en el mismo sitio. */
function prepare(card: Card): Card {
  if (card.type !== 'mc') return card;
  const order = shuffle(card.options.map((_, i) => i));
  return { ...card, options: order.map((i) => card.options[i]), answer: order.indexOf(card.answer) };
}

/** Peso de repaso: más alto = más prioridad. */
function weight(state: ProfileState, key: string): number {
  const st = state.cardStats[key];
  if (!st) return 3; // nueva
  const ageDays = (Date.now() - st.last) / 86400000;
  return Math.max(0.3, 4 - st.box) + Math.min(2, ageDays / 3);
}

function weightedSample<T>(items: T[], w: (t: T) => number, n: number): T[] {
  const pool = items.map((it) => ({ it, k: Math.random() ** (1 / Math.max(0.01, w(it))) }));
  return pool.sort((a, b) => b.k - a.k).slice(0, n).map((p) => p.it);
}

export function buildSession(state: ProfileState, grade: Grade, refs: TopicRef[], size: number): PlayCard[] {
  const fixed: PlayCard[] = [];
  const gens: Array<{ subject: SubjectId; topicId: string; gen: () => Card }> = [];
  for (const r of refs) {
    const topic = getTopics(grade, r.subject).find((t) => t.id === r.topicId);
    if (!topic) continue;
    for (const c of topic.cards) fixed.push({ key: cardKey(r.subject, topic.id, c.id), subject: r.subject, topicId: topic.id, card: c });
    for (const g of topic.generators ?? []) gens.push({ subject: r.subject, topicId: topic.id, gen: g });
  }

  // Con generadores (Matemáticas), ~40 % de ejercicios aleatorios.
  const genCount = gens.length ? Math.min(size, Math.max(Math.round(size * 0.4), size - fixed.length)) : 0;
  const picked = weightedSample(fixed, (p) => weight(state, p.key), size - genCount);
  const generated: PlayCard[] = Array.from({ length: genCount }, () => {
    const g = gens[Math.floor(Math.random() * gens.length)];
    const card = g.gen();
    return { key: cardKey(g.subject, g.topicId, card.id), subject: g.subject, topicId: g.topicId, card };
  });

  return shuffle([...picked, ...generated]).map((p) => ({ ...p, card: prepare(p.card) }));
}

/** Todas las asignaturas y temas del curso (repaso general), repartiendo por igual entre asignaturas. */
export function buildGeneralReview(state: ProfileState, grade: Grade, size: number): PlayCard[] {
  const perSubject = Math.ceil(size / SUBJECTS.length);
  const all = SUBJECTS.flatMap((sub) =>
    buildSession(
      state,
      grade,
      getTopics(grade, sub.id).map((t) => ({ subject: sub.id, topicId: t.id })),
      perSubject,
    ),
  );
  return shuffle(all).slice(0, size);
}

export const isFixedKey = (key: string) => !key.split(':')[2]?.startsWith('gen-');
