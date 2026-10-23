/** Minúsculas, sin tildes, sin espacios sobrantes ni punto final. La ñ se conserva. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ñ/g, '\u0001')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\u0001/g, 'ñ')
    .replace(/[’`´]/g, "'")
    .replace(/[¡!¿?.;:]+$/g, '')
    .replace(/^[¡¿]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      diag = tmp;
    }
  }
  return prev[b.length];
}

export type WriteVerdict = 'correct' | 'almost' | 'wrong';

/**
 * Compara una respuesta escrita con las aceptadas.
 * `allowTypos`: acepta una errata en palabras largas (no en números ni en Lengua, donde la ortografía cuenta).
 */
export function checkWritten(input: string, answers: string[], allowTypos: boolean): WriteVerdict {
  const given = normalize(input);
  if (!given) return 'wrong';
  const compact = (s: string) => s.replace(/\s/g, '');
  for (const a of answers) {
    const n = normalize(a);
    if (n === given || compact(n) === compact(given)) return 'correct';
  }
  if (allowTypos && !/\d/.test(given)) {
    for (const a of answers) {
      const n = normalize(a);
      if (n.length >= 5 && levenshtein(n, given) <= 1) return 'almost';
    }
  }
  return 'wrong';
}

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (m, k) => vars[k] ?? m);
}
