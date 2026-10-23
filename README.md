# Estudia con tus peluches

Web app gamificada para que África (4.º) y Leire (6.º) repasen el temario de Primaria con flashcards y sus peluches como profes.

## Arrancar

```bash
npm install
npm run dev
```

Abre http://localhost:5173. Para revisar los dibujos de mascotas y de Javi y Celia: http://localhost:5173/#galeria

```bash
npm run build
```

Genera `dist/`, listo para Vercel (Vite se detecta solo: build `npm run build`, salida `dist`).

## Estructura

| Ruta | Qué hay |
|---|---|
| `src/types.ts` | Tipos de tarjetas, temas, frases y curiosidades |
| `src/data/subjects.ts` | Asignaturas, mascotas y perfiles |
| `src/content/<asignatura>/grade4.ts`, `grade6.ts` | Tarjetas fijas por tema (cada una con su pista) |
| `src/content/<asignatura>/lessons4.ts`, `lessons6.ts` | Lección de estudio de cada tema |
| `src/lib/hints.ts` | Pistas: espera de 20 s, segundo nivel automático, XP con pista |
| `src/content/phrases.ts` | Frases de Javi, Celia y los profes por situación (es/en) |
| `src/content/curiosities.ts` | Curiosidades por asignatura |
| `src/lib/mathgen.ts` | Generadores de ejercicios aleatorios de Matemáticas |
| `src/lib/game.ts` | XP, niveles, rachas, insignias, misiones y dominio de temas |
| `src/lib/session.ts` | Elección de tarjetas de cada ronda (repetición espaciada) |
| `src/lib/storage.ts` | Persistencia (localStorage) tras una interfaz para cambiar a Supabase |
| `src/components/Mascot.tsx` | Las 5 mascotas en SVG, con estados de ánimo y accesorios |
| `src/components/Parents.tsx` | Javi y Celia en SVG (animando o con la zapatilla) |
| `src/screens/` | Pantallas: perfiles, inicio, asignatura, ronda, resultados, logros, galería |

## Añadir contenido

Añade tarjetas al array `cards` del tema en `src/content/<asignatura>/gradeN.ts`. Tipos: `mc` (test), `write` (respuesta escrita) y `match` (emparejar). En Science e Inglés cada tarjeta lleva `helpEs` con la ayuda en español. Ver `src/types.ts`.

Más detalles del diseño en [docs/PROYECTO.md](docs/PROYECTO.md) y [docs/PELUCHES.md](docs/PELUCHES.md).
