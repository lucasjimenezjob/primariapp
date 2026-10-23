// Motor de gamificación: XP, niveles, rachas, insignias, misiones semanales y dominio de temas.
import type { Grade, SubjectId } from '../types';
import { getTopics } from '../content';
import { SUBJECTS, MASCOTS } from '../data/subjects';

export interface CardStat {
  seen: number;
  correct: number;
  /** Caja Leitner 0-4: sube al acertar, baja al fallar. Caja >= 3 = dominada. */
  box: number;
  last: number;
}

export interface WeeklyStats {
  weekId: string;
  answered: number;
  correct: number;
  sessions: number;
  perfect: number;
  xp: number;
  subjects: SubjectId[];
  claimed: string[];
}

export interface ProfileState {
  version: 1;
  xp: number;
  subjectXp: Partial<Record<SubjectId, number>>;
  streak: { count: number; best: number; lastDay: string | null; shields: number };
  cardStats: Record<string, CardStat>;
  badges: Record<string, number>;
  totals: { sessions: number; perfect: number; answered: number; correct: number; bestCombo: number; generalReviews: number };
  weekly: WeeklyStats;
  lastVisit: number | null;
  /** Lecciones de estudio terminadas: clave `${subject}:${topicId}` → veces completada. */
  lessonsDone: Record<string, number>;
}

export const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

function weekKey(d = new Date()): string {
  const monday = new Date(d);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  return dayKey(monday);
}

const daysBetween = (a: string, b: string) => Math.round((new Date(b + 'T12:00').getTime() - new Date(a + 'T12:00').getTime()) / 86400000);

const emptyWeek = (): WeeklyStats => ({ weekId: weekKey(), answered: 0, correct: 0, sessions: 0, perfect: 0, xp: 0, subjects: [], claimed: [] });

export function emptyState(): ProfileState {
  return {
    version: 1,
    xp: 0,
    subjectXp: {},
    streak: { count: 0, best: 0, lastDay: null, shields: 0 },
    cardStats: {},
    badges: {},
    totals: { sessions: 0, perfect: 0, answered: 0, correct: 0, bestCombo: 0, generalReviews: 0 },
    weekly: emptyWeek(),
    lastVisit: null,
    lessonsDone: {},
  };
}

/** Reinicia la semana si ha cambiado. */
export function freshWeek(s: ProfileState): ProfileState {
  return s.weekly.weekId === weekKey() ? s : { ...s, weekly: emptyWeek() };
}

// ---------------- Niveles ----------------

export const LEVEL_TITLES = [
  'Semillita', 'Brotecito', 'Exploradora', 'Curiosa', 'Aprendiz', 'Estudiante estrella', 'Detective del saber',
  'Sabionda', 'Cerebrito', 'Genio en prácticas', 'Maestra', 'Gran Maestra', 'Leyenda', 'Superleyenda', 'Reina del saber',
];

/** XP necesaria para pasar del nivel n al n+1. */
const stepFor = (n: number) => 100 + (n - 1) * 60;

export function levelInfo(xp: number) {
  let level = 1;
  let floor = 0;
  while (xp >= floor + stepFor(level)) {
    floor += stepFor(level);
    level++;
  }
  const step = stepFor(level);
  return {
    level,
    title: LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)],
    into: xp - floor,
    step,
    pct: (xp - floor) / step,
  };
}

// ---------------- Mascotas ----------------

/** Nivel del profe (0-3) según la XP ganada en su asignatura: desbloquea accesorios. */
export const MASCOT_TIERS = [0, 150, 500, 1200];
export const TIER_NAMES = ['Recién llegado', 'Medalla', 'Birrete', 'Brillo dorado'];

export function mascotTier(subjectXp: number): number {
  let t = 0;
  MASCOT_TIERS.forEach((min, i) => {
    if (subjectXp >= min) t = i;
  });
  return t;
}

// ---------------- Dominio ----------------

export const cardKey = (subject: SubjectId, topicId: string, cardId: string) => `${subject}:${topicId}:${cardId}`;

/** % de tarjetas fijas dominadas (caja >= 3) en un tema. */
export function topicMastery(s: ProfileState, grade: Grade, subject: SubjectId, topicId: string): number {
  const topic = getTopics(grade, subject).find((t) => t.id === topicId);
  if (!topic || topic.cards.length === 0) return 0;
  const mastered = topic.cards.filter((c) => (s.cardStats[cardKey(subject, topicId, c.id)]?.box ?? 0) >= 3).length;
  return mastered / topic.cards.length;
}

export function subjectMastery(s: ProfileState, grade: Grade, subject: SubjectId): number {
  const topics = getTopics(grade, subject);
  if (!topics.length) return 0;
  return topics.reduce((sum, t) => sum + topicMastery(s, grade, subject, t.id), 0) / topics.length;
}

// ---------------- Insignias ----------------

export interface BadgeDef {
  id: string;
  name: string;
  desc: string;
  icon: string;
  check: (s: ProfileState, grade: Grade) => boolean;
}

export const BADGES: BadgeDef[] = [
  { id: 'primer-paso', name: 'Primer paso', desc: 'Termina tu primera sesión', icon: '👣', check: (s) => s.totals.sessions >= 1 },
  { id: 'perfecta', name: '¡Pleno!', desc: 'Haz una sesión sin fallos', icon: '💯', check: (s) => s.totals.perfect >= 1 },
  { id: 'perfecta-5', name: 'Pleno x5', desc: '5 sesiones sin fallos', icon: '🏆', check: (s) => s.totals.perfect >= 5 },
  { id: 'combo-5', name: 'Combo x5', desc: '5 aciertos seguidos', icon: '🔥', check: (s) => s.totals.bestCombo >= 5 },
  { id: 'combo-10', name: 'Imparable', desc: '10 aciertos seguidos', icon: '🚀', check: (s) => s.totals.bestCombo >= 10 },
  { id: 'racha-3', name: 'Racha de 3', desc: '3 días seguidos estudiando', icon: '📅', check: (s) => s.streak.best >= 3 },
  { id: 'racha-7', name: 'Semana redonda', desc: '7 días seguidos estudiando', icon: '🌈', check: (s) => s.streak.best >= 7 },
  { id: 'racha-14', name: 'Dos semanas', desc: '14 días seguidos', icon: '👑', check: (s) => s.streak.best >= 14 },
  { id: 'tarjetas-100', name: '100 tarjetas', desc: 'Responde 100 tarjetas', icon: '🃏', check: (s) => s.totals.answered >= 100 },
  { id: 'tarjetas-500', name: '500 tarjetas', desc: 'Responde 500 tarjetas', icon: '📚', check: (s) => s.totals.answered >= 500 },
  { id: 'tarjetas-1000', name: 'Mil tarjetas', desc: 'Responde 1.000 tarjetas', icon: '🌟', check: (s) => s.totals.answered >= 1000 },
  { id: 'exploradora', name: 'Exploradora', desc: 'Estudia las 5 asignaturas', icon: '🧭', check: (s) => SUBJECTS.every((sub) => (s.subjectXp[sub.id] ?? 0) > 0) },
  { id: 'repaso-general', name: 'Repaso total', desc: 'Completa un repaso general', icon: '🎯', check: (s) => s.totals.generalReviews >= 1 },
  { id: 'primera-leccion', name: 'A estudiar', desc: 'Termina tu primera lección', icon: '📖', check: (s) => Object.keys(s.lessonsDone).length >= 1 },
  { id: 'estudiosa', name: 'Estudiosa', desc: 'Termina 10 lecciones distintas', icon: '🎓', check: (s) => Object.keys(s.lessonsDone).length >= 10 },
  { id: 'tema-dominado', name: 'Tema dominado', desc: 'Domina un tema entero', icon: '🧠', check: (s, g) => SUBJECTS.some((sub) => getTopics(g, sub.id).some((t) => topicMastery(s, g, sub.id, t.id) >= 1)) },
  ...SUBJECTS.map<BadgeDef>((sub) => ({
    id: `amiga-${sub.mascot}`,
    name: `Amiga de ${MASCOTS[sub.mascot].name}`,
    desc: `Gana 300 XP en ${sub.name}`,
    icon: sub.emoji,
    check: (s) => (s.subjectXp[sub.id] ?? 0) >= 300,
  })),
];

export function newBadges(s: ProfileState, grade: Grade): BadgeDef[] {
  return BADGES.filter((b) => !s.badges[b.id] && b.check(s, grade));
}

// ---------------- Misiones semanales ----------------

export interface Mission {
  id: string;
  text: string;
  target: number;
  reward: number;
  progress: (w: WeeklyStats) => number;
}

export const MISSIONS: Mission[] = [
  { id: 'answer-60', text: 'Responde 60 tarjetas', target: 60, reward: 80, progress: (w) => w.answered },
  { id: 'sessions-4', text: 'Termina 4 sesiones', target: 4, reward: 60, progress: (w) => w.sessions },
  { id: 'perfect-2', text: 'Haz 2 sesiones sin fallos', target: 2, reward: 100, progress: (w) => w.perfect },
  { id: 'subjects-3', text: 'Estudia 3 asignaturas distintas', target: 3, reward: 70, progress: (w) => w.subjects.length },
];

// ---------------- Resultado de una sesión ----------------

export interface AnswerLog {
  key: string;
  subject: SubjectId;
  correct: boolean;
  xp: number;
  fixed: boolean; // tarjeta fija (cuenta para el dominio)
}

export interface SessionSummary {
  xpGained: number;
  bonusXp: number;
  correct: number;
  total: number;
  perfect: boolean;
  levelBefore: number;
  levelAfter: number;
  badges: BadgeDef[];
  streak: { count: number; increased: boolean; lost: boolean; usedShield: boolean; shieldEarned: boolean };
  missionsCompleted: Mission[];
}

/** Aplica el resultado de una sesión al estado. Devuelve el estado nuevo y un resumen para la pantalla final. */
export function applySession(prev: ProfileState, grade: Grade, log: AnswerLog[], bestCombo: number, isGeneral: boolean): { state: ProfileState; summary: SessionSummary } {
  const s: ProfileState = structuredClone(freshWeek(prev));
  const levelBefore = levelInfo(s.xp).level;
  const now = Date.now();

  let xpGained = 0;
  for (const a of log) {
    xpGained += a.xp;
    s.subjectXp[a.subject] = (s.subjectXp[a.subject] ?? 0) + a.xp;
    if (a.fixed) {
      const st = s.cardStats[a.key] ?? { seen: 0, correct: 0, box: 0, last: 0 };
      st.seen++;
      if (a.correct) {
        st.correct++;
        st.box = Math.min(4, st.box + 1);
      } else {
        st.box = Math.max(0, st.box - 2);
      }
      st.last = now;
      s.cardStats[a.key] = st;
    }
    if (!s.weekly.subjects.includes(a.subject)) s.weekly.subjects.push(a.subject);
  }

  const correct = log.filter((a) => a.correct).length;
  const perfect = log.length > 0 && correct === log.length;
  let bonusXp = 20 + (perfect ? 30 : 0);

  // Racha diaria
  const today = dayKey();
  const st = s.streak;
  const streakInfo = { count: st.count, increased: false, lost: false, usedShield: false, shieldEarned: false };
  if (st.lastDay !== today) {
    const gap = st.lastDay ? daysBetween(st.lastDay, today) : 99;
    if (gap === 1) st.count++;
    else if (gap === 2 && st.shields > 0) {
      st.shields--;
      st.count++;
      streakInfo.usedShield = true;
    } else {
      streakInfo.lost = st.count >= 2;
      st.count = 1;
    }
    st.lastDay = today;
    streakInfo.increased = true;
    if (st.count > 0 && st.count % 7 === 0 && st.shields < 2) {
      st.shields++;
      streakInfo.shieldEarned = true;
    }
    st.best = Math.max(st.best, st.count);
  }
  streakInfo.count = st.count;

  s.totals.sessions++;
  s.totals.answered += log.length;
  s.totals.correct += correct;
  if (perfect) s.totals.perfect++;
  if (isGeneral) s.totals.generalReviews++;
  s.totals.bestCombo = Math.max(s.totals.bestCombo, bestCombo);

  s.weekly.answered += log.length;
  s.weekly.correct += correct;
  s.weekly.sessions++;
  if (perfect) s.weekly.perfect++;

  // Misiones: se cobran automáticamente al completarlas.
  const missionsCompleted: Mission[] = [];
  for (const m of MISSIONS) {
    if (!s.weekly.claimed.includes(m.id) && m.progress(s.weekly) >= m.target) {
      s.weekly.claimed.push(m.id);
      bonusXp += m.reward;
      missionsCompleted.push(m);
    }
  }

  s.xp += xpGained + bonusXp;
  s.weekly.xp += xpGained + bonusXp;

  const badges = newBadges(s, grade);
  for (const b of badges) s.badges[b.id] = now;
  s.lastVisit = now;

  return {
    state: s,
    summary: {
      xpGained,
      bonusXp,
      correct,
      total: log.length,
      perfect,
      levelBefore,
      levelAfter: levelInfo(s.xp).level,
      badges,
      streak: streakInfo,
      missionsCompleted,
    },
  };
}

export const LESSON_XP = { first: 30, repeat: 10 };

export const lessonKey = (subject: SubjectId, topicId: string) => `${subject}:${topicId}`;

/** Registra una lección terminada: da XP (más la primera vez) y comprueba insignias. */
export function applyLesson(prev: ProfileState, grade: Grade, subject: SubjectId, topicId: string) {
  const s: ProfileState = structuredClone(freshWeek(prev));
  const key = lessonKey(subject, topicId);
  const first = !s.lessonsDone[key];
  const xp = first ? LESSON_XP.first : LESSON_XP.repeat;
  s.lessonsDone[key] = (s.lessonsDone[key] ?? 0) + 1;
  s.xp += xp;
  s.weekly.xp += xp;
  s.subjectXp[subject] = (s.subjectXp[subject] ?? 0) + xp;
  if (!s.weekly.subjects.includes(subject)) s.weekly.subjects.push(subject);
  const badges = newBadges(s, grade);
  for (const b of badges) s.badges[b.id] = Date.now();
  s.lastVisit = Date.now();
  return { state: s, xp, first, badges };
}

/** ¿La racha está en peligro o ya se perdió? (para el saludo al entrar) */
export function streakStatus(s: ProfileState): 'today' | 'pending' | 'lost' | 'none' {
  if (!s.streak.lastDay || s.streak.count === 0) return 'none';
  const gap = daysBetween(s.streak.lastDay, dayKey());
  if (gap === 0) return 'today';
  if (gap === 1 || (gap === 2 && s.streak.shields > 0)) return 'pending';
  return 'lost';
}
