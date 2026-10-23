import type { Lang, Phrase, Situation, Speaker, SubjectId } from '../types';
import { phrases } from '../content/phrases';
import { curiosities } from '../content/curiosities';
import { fill } from './text';

export interface SaidPhrase {
  speaker: Speaker;
  text: string;
}

const recent: string[] = [];

/** Elige una frase sin repetir las últimas, filtrando por quién habla si se pide. */
export function say(situation: Situation, lang: Lang, vars: { nombre: string; profe: string }, speakers?: Speaker[]): SaidPhrase {
  let pool: Phrase[] = phrases[situation][lang];
  if (speakers) {
    const filtered = pool.filter((p) => speakers.includes(p.speaker));
    if (filtered.length) pool = filtered;
  }
  const fresh = pool.filter((p) => !recent.includes(p.text));
  const p = (fresh.length ? fresh : pool)[Math.floor(Math.random() * (fresh.length || pool.length))];
  recent.push(p.text);
  if (recent.length > 12) recent.shift();
  return { speaker: p.speaker, text: fill(p.text, vars) };
}

/** Probabilidad de que aparezca un dato curioso en un momento dado (para no saturar). */
export const CURIOSITY_CHANCE = 0.33;

const seenCuriosities: string[] = [];

export function curiosityFor(subject: SubjectId): string {
  const pool = curiosities.filter((c) => c.subject === subject);
  const fresh = pool.filter((c) => !seenCuriosities.includes(c.text));
  const c = (fresh.length ? fresh : pool)[Math.floor(Math.random() * (fresh.length || pool.length))];
  seenCuriosities.push(c.text);
  if (seenCuriosities.length > 40) seenCuriosities.shift();
  return c.text;
}

export const speakerName = (s: Speaker, profe: string) => (s === 'javi' ? 'Javi' : s === 'celia' ? 'Celia' : profe);
