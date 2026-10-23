import type { Grade, Lesson, SubjectId, Topic } from '../types';
import { lessons as matL4 } from './matematicas/lessons4';
import { lessons as matL6 } from './matematicas/lessons6';
import { lessons as lenL4 } from './lengua/lessons4';
import { lessons as lenL6 } from './lengua/lessons6';
import { lessons as socL4 } from './sociales/lessons4';
import { lessons as socL6 } from './sociales/lessons6';
import { lessons as sciL4 } from './science/lessons4';
import { lessons as sciL6 } from './science/lessons6';
import { lessons as ingL4 } from './ingles/lessons4';
import { lessons as ingL6 } from './ingles/lessons6';
import { mathGenerators } from '../lib/mathgen';
import { topics as mat4 } from './matematicas/grade4';
import { topics as mat6 } from './matematicas/grade6';
import { topics as len4 } from './lengua/grade4';
import { topics as len6 } from './lengua/grade6';
import { topics as soc4 } from './sociales/grade4';
import { topics as soc6 } from './sociales/grade6';
import { topics as sci4 } from './science/grade4';
import { topics as sci6 } from './science/grade6';
import { topics as ing4 } from './ingles/grade4';
import { topics as ing6 } from './ingles/grade6';

/** Añade a los temas de Matemáticas sus generadores de ejercicios aleatorios. */
function withGenerators(topics: Topic[], grade: Grade): Topic[] {
  return topics.map((t) => ({ ...t, generators: mathGenerators[grade][t.id] ?? t.generators }));
}

const CONTENT: Record<Grade, Record<SubjectId, Topic[]>> = {
  4: { matematicas: withGenerators(mat4, 4), lengua: len4, sociales: soc4, science: sci4, ingles: ing4 },
  6: { matematicas: withGenerators(mat6, 6), lengua: len6, sociales: soc6, science: sci6, ingles: ing6 },
};

export function getTopics(grade: Grade, subject: SubjectId): Topic[] {
  return CONTENT[grade][subject];
}

const LESSONS: Record<Grade, Record<SubjectId, Lesson[]>> = {
  4: { matematicas: matL4, lengua: lenL4, sociales: socL4, science: sciL4, ingles: ingL4 },
  6: { matematicas: matL6, lengua: lenL6, sociales: socL6, science: sciL6, ingles: ingL6 },
};

export function getLesson(grade: Grade, subject: SubjectId, topicId: string): Lesson | undefined {
  return LESSONS[grade][subject].find((l) => l.topicId === topicId);
}
