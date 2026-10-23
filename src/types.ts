// Tipos compartidos de la app. El contenido (tarjetas, frases, curiosidades) se escribe contra estos tipos.

export type SubjectId = 'matematicas' | 'lengua' | 'sociales' | 'science' | 'ingles';
export type Grade = 4 | 6;
export type Lang = 'es' | 'en';
export type ProfileId = 'africa' | 'leire';
export type MascotId = 'clarita' | 'luna' | 'tuktuk' | 'rojichi' | 'pico';

interface CardBase {
  /** Único dentro del tema, p. ej. "frac-03". */
  id: string;
  /** Enunciado, en el idioma de la asignatura. */
  prompt: string;
  /** Explicación corta que se enseña tras responder (mismo idioma que la asignatura). */
  explain?: string;
  /** Solo Science e Inglés: traducción o pista en español, se enseña si la niña pide ayuda. */
  helpEs?: string;
  /**
   * Pista o truco para recordarlo, en el idioma de la asignatura. Se ofrece si la niña lleva
   * un rato atascada. No debe dar la respuesta directamente.
   */
  hint?: string;
}

/** Pregunta tipo test. */
export interface MCCard extends CardBase {
  type: 'mc';
  /** Entre 3 y 4 opciones. */
  options: string[];
  /** Índice de la opción correcta en `options`. */
  answer: number;
}

/** Respuesta escrita. Se compara sin mayúsculas, tildes ni espacios sobrantes. */
export interface WriteCard extends CardBase {
  type: 'write';
  /** Respuestas aceptadas. La primera es la que se enseña como correcta. */
  answers: string[];
}

/** Emparejar: cada par es [izquierda, derecha]. Entre 3 y 5 pares. */
export interface MatchCard extends CardBase {
  type: 'match';
  pairs: [string, string][];
}

export type Card = MCCard | WriteCard | MatchCard;

export interface Topic {
  /** Único dentro de la asignatura y curso, p. ej. "fracciones". */
  id: string;
  title: string;
  emoji: string;
  /** Tarjetas fijas. */
  cards: Card[];
  /** Generadores de tarjetas aleatorias (se usan sobre todo en Matemáticas). */
  generators?: Array<() => Card>;
}

export interface Subject {
  id: SubjectId;
  name: string;
  lang: Lang;
  mascot: MascotId;
  color: string;
  colorSoft: string;
  emoji: string;
}

/** Tarjeta lista para jugar, con su origen. */
export interface PlayCard {
  key: string; // `${subject}:${topic}:${card.id}`
  subject: SubjectId;
  topicId: string;
  card: Card;
}

// --- Lecciones de estudio ---
// Una lección por tema, para estudiar antes de las flashcards. Se lee por páginas (una sección = una página).
// Los textos admiten **negrita**. Idioma: el de la asignatura.

export interface LessonSection {
  emoji: string;
  title: string;
  /** Párrafos cortos (1-3 frases cada uno). */
  body: string[];
  /** Lista de ejemplos o datos clave. */
  bullets?: string[];
  /** Tabla pequeña (máx. ~6 filas). */
  table?: { head: string[]; rows: string[][] };
  /** Truco para recordarlo. */
  tip?: string;
  /** Solo Science e Inglés: resumen de la página en español para el botón de ayuda. */
  helpEs?: string;
}

export interface LessonCheck {
  question: string;
  options: string[];
  /** Índice 0-based de la correcta. */
  answer: number;
}

export interface Lesson {
  /** id del tema al que pertenece (igual que Topic.id). */
  topicId: string;
  /** Presentación del profe: qué vamos a aprender (1-2 frases). */
  intro: string;
  /** Entre 3 y 6 páginas. */
  sections: LessonSection[];
  /** Resumen final: 3-6 ideas clave. */
  keyPoints: string[];
  /** 2-3 preguntas rápidas de comprobación al final. */
  check: LessonCheck[];
}

// --- Frases y curiosidades ---

export type Situation =
  | 'correct'
  | 'wrong'
  | 'wrongStreak' // varios fallos seguidos: Javi o Celia salen con la zapatilla
  | 'comboStreak' // varios aciertos seguidos
  | 'sessionPerfect'
  | 'sessionDone'
  | 'sessionMeh' // sesión terminada con muchos fallos
  | 'welcome'
  | 'welcomeBack' // vuelve tras días sin entrar
  | 'streakLost'
  | 'levelUp'
  | 'badge';

export type Speaker = 'javi' | 'celia' | 'mascot';

export interface Phrase {
  speaker: Speaker;
  text: string; // Puede contener {nombre} (la niña) y {profe} (la mascota).
}

export type PhraseBank = Record<Situation, Record<Lang, Phrase[]>>;

export interface Curiosity {
  subject: SubjectId;
  text: string; // En el idioma de la asignatura.
}
