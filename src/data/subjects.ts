import type { Grade, MascotId, ProfileId, Subject, SubjectId } from '../types';

export const SUBJECTS: Subject[] = [
  { id: 'matematicas', name: 'Matemáticas', lang: 'es', mascot: 'clarita', color: '#e0a100', colorSoft: '#fff3c4', emoji: '🔢' },
  { id: 'lengua', name: 'Lengua', lang: 'es', mascot: 'luna', color: '#3f7fe8', colorSoft: '#e1ecff', emoji: '📖' },
  { id: 'sociales', name: 'Sociales', lang: 'es', mascot: 'pico', color: '#b86f2f', colorSoft: '#f7e6d3', emoji: '🌍' },
  { id: 'science', name: 'Science', lang: 'en', mascot: 'rojichi', color: '#e0393e', colorSoft: '#ffe1df', emoji: '🔬' },
  { id: 'ingles', name: 'English', lang: 'en', mascot: 'tuktuk', color: '#d9559a', colorSoft: '#ffe3f1', emoji: '💬' },
];

export const subjectById = (id: SubjectId): Subject => SUBJECTS.find((s) => s.id === id)!;

export interface MascotInfo {
  id: MascotId;
  name: string;
  /** Presentación corta, en el idioma de su asignatura. */
  tagline: string;
  greeting: string[];
}

export const MASCOTS: Record<MascotId, MascotInfo> = {
  clarita: {
    id: 'clarita',
    name: 'Clarita',
    tagline: 'La abeja de los números. ¡Zum, zum, a contar!',
    greeting: ['¡Hola, {nombre}! ¿Hacemos unas cuentas zumbonas? 🐝', '¡Zum! Hoy los números están de buen humor.', 'Tengo la colmena llena de problemas para ti.'],
  },
  luna: {
    id: 'luna',
    name: 'Luna',
    tagline: 'El peque de las palabras. Le encantan las tildes.',
    greeting: ['¡Hola, {nombre}! ¿Jugamos con las palabras?', 'Hoy traigo verbos, sustantivos y alguna tilde traviesa.', 'Las palabras son mis juguetes favoritos. ¡Vamos!'],
  },
  pico: {
    id: 'pico',
    name: 'Pico',
    tagline: 'El búho sabio. Lo sabe todo de mapas e historia.',
    greeting: ['¡Uhu, uhu! Bienvenida, {nombre}. Ajústate las gafas.', 'Hoy viajamos por ríos, montañas y siglos.', 'Un buen explorador siempre lleva mapa. ¡Vamos!'],
  },
  rojichi: {
    id: 'rojichi',
    name: 'Rojichi',
    tagline: 'The strawberry bird scientist. Loves experiments!',
    greeting: ['Hello, {nombre}! Ready for some science? 🍓', 'Tweet tweet! Let’s discover how the world works.', 'My lab is open. Put on your goggles!'],
  },
  tuktuk: {
    id: 'tuktuk',
    name: 'Tuk-Tuk',
    tagline: 'The English teacher with the prettiest bow.',
    greeting: ['Hi, {nombre}! Let’s play in English! 🎀', 'Good to see you! Are you ready?', 'Hello, hello! Time for English words.'],
  },
};

export interface ProfileInfo {
  id: ProfileId;
  name: string;
  grade: Grade;
  color: string;
  emoji: string;
}

export const PROFILES: ProfileInfo[] = [
  { id: 'africa', name: 'África', grade: 4, color: '#ff8a3d', emoji: '🦋' },
  { id: 'leire', name: 'Leire', grade: 6, color: '#7c5cff', emoji: '🌟' },
];

export const profileById = (id: ProfileId): ProfileInfo => PROFILES.find((p) => p.id === id)!;
