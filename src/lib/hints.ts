// Pistas para cuando una niña se atasca en una tarjeta.
// Nivel 1: la pista de la tarjeta (un truco o pista para pensar) o una genérica si no tiene.
// Nivel 2: ayuda automática según el tipo: quita opciones, enseña cómo empieza o resuelve una pareja.
import type { Card, Lang, MCCard, SubjectId } from '../types';
import { shuffle } from './text';

/** Segundos que hay que esperar en una tarjeta para que aparezca el botón de pista. */
export const HINT_DELAY_S = 20;

/** Pistas por tema para los ejercicios aleatorios de Matemáticas (no traen pista propia). */
const MATH_TOPIC_HINTS: Record<string, string> = {
  numeros: 'Escribe el número en una tabla de valor posicional: U, D, C, UM, DM… y mira cada casilla.',
  operaciones: 'Hazlo paso a paso en un papel. Recuerda el orden: paréntesis, multiplicaciones y divisiones, y al final sumas y restas.',
  fracciones: 'El numerador (arriba) son las partes que tomas; el denominador (abajo), las partes iguales en que se divide el todo.',
  decimales: 'Coloca la coma debajo de la coma y opera como si fueran números normales.',
  porcentajes: 'Un porcentaje es "de cada 100". El 10 % es dividir entre 10; el 50 %, la mitad.',
  medida: 'Cada vez que bajas un escalón en la escalera de unidades, multiplicas (×10, ×100…).',
  geometria: 'Haz un dibujo rápido de la figura y apunta las medidas encima.',
  estadistica: 'Ordena los datos de menor a mayor antes de empezar.',
  problemas: 'Subraya los datos y pregúntate: ¿qué me piden? ¿Tengo que juntar, quitar, repartir o repetir?',
};

const GENERIC: Record<Lang, Record<Card['type'], string>> = {
  es: {
    mc: 'Lee la pregunta despacio y descarta primero las respuestas que seguro que no son.',
    write: 'Piensa en lo que habéis visto en clase sobre este tema. ¡Escribe lo que creas, equivocarse también enseña!',
    match: 'Empieza por la pareja que tengas más clara; así quedan menos para elegir.',
  },
  en: {
    mc: 'Read the question slowly. First, cross out the answers that are surely wrong.',
    write: 'Think about what you learned in class. Write your best guess. Mistakes help you learn!',
    match: 'Start with the pair you are sure about. Then there are fewer to choose from.',
  },
};

export function firstHint(card: Card, subject: SubjectId, topicId: string, lang: Lang): string {
  if (card.hint) return card.hint;
  if (subject === 'matematicas' && MATH_TOPIC_HINTS[topicId]) return MATH_TOPIC_HINTS[topicId];
  return GENERIC[lang][card.type];
}

/** Opciones incorrectas que se quitan en el nivel 2: deja la correcta y una incorrecta. */
export function optionsToEliminate(card: MCCard): number[] {
  const wrong = card.options.map((_, i) => i).filter((i) => i !== card.answer);
  return shuffle(wrong).slice(0, Math.max(1, wrong.length - 1));
}

/** "Así empieza": primera letra o cifra visible y el resto como huecos. */
export function answerPattern(answer: string): string {
  let shown = false;
  return [...answer]
    .map((ch) => {
      if (/[\p{L}\p{N}]/u.test(ch)) {
        if (!shown) {
          shown = true;
          return ch;
        }
        return '_';
      }
      return ch === ' ' ? '  ' : ch;
    })
    .join(' ');
}

const OFFER: Record<Lang, string[]> = {
  es: ['¿Te echo una mano? Tengo una pista 💡', '¿Atascada? ¡Pídeme una pista!', 'Tranqui, si quieres te doy una pista 💡', 'Ninguna pregunta puede contigo. ¿Una pista?'],
  en: ['Need a hand? I have a hint 💡', 'Stuck? Ask me for a hint!', 'Take it easy. Do you want a hint? 💡', 'You can do it! Want a little help?'],
};

export const hintOffer = (lang: Lang) => OFFER[lang][Math.floor(Math.random() * OFFER[lang].length)];

/** XP de una tarjeta acertada según las pistas usadas (cada nivel resta un 25 %, mínimo la mitad). */
export const xpWithHints = (xp: number, level: number) => Math.max(Math.ceil(xp / 2), Math.round(xp * (1 - 0.25 * level)));
