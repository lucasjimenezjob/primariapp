# Primaria WebApp: documentación del proyecto

Aplicación web interactiva para repasar temario de **4.º** (África) y **6.º** (Leire) de Primaria, con flashcards gamificadas, perfiles sin contraseña y mascotas-profesor (peluches).

Estado: **primera versión implementada** (React + Vite + TypeScript, ver [README](../README.md)). Este documento recoge las decisiones tomadas y las pendientes.

### Qué hay implementado (v0.1)

- Selección de perfil (África 4.º / Leire 6.º), progreso separado en localStorage.
- 5 asignaturas con su mascota-profe en SVG: dos estilos (kawaii para Clarita, Rojichi y Pico; semirrealista para Luna y Tuk-Tuk). Galería de revisión en `#galeria`.
- ~980 tarjetas fijas (8-9 temas por asignatura y curso) + generadores de ejercicios aleatorios de Matemáticas.
- Rondas de 10 o 20 tarjetas por temas elegidos, y repaso general de 15 tarjetas de todas las asignaturas.
- Test, respuesta escrita (tolera una errata salvo en Lengua y Matemáticas) y emparejar.
- Ayuda en español opcional en Science e Inglés; toda la interfaz de la ronda en inglés en esas asignaturas.
- Repetición espaciada: se repiten más las tarjetas nuevas y las falladas.
- XP, niveles con títulos, combos, rachas diarias con escudos, 19 insignias, 4 misiones semanales y regalos para cada profe (medalla, birrete, brillo dorado).
- Javi y Celia: saludo al entrar, persecución con la zapatilla tras 3 fallos seguidos, felicitación en resultados. 241 frases.
- 125 curiosidades que salen tras fallar, a veces al acertar, y siempre al final de la ronda.

### v0.2: pistas y lecciones de estudio

- **Pistas:** si la niña lleva 20 segundos en una tarjeta (`HINT_DELAY_S` en `src/lib/hints.ts`), se activa el botón "💡 Pista". Mientras espera, el botón se va rellenando para que vea que la ayuda llega.
  - Nivel 1: la pista de la tarjeta (truco para recordar o pista para pensar, nunca la respuesta). Todas las tarjetas fijas tienen una; los ejercicios aleatorios de Matemáticas usan una pista por tema.
  - Nivel 2 ("Otra pista"): en test quita opciones incorrectas hasta dejar dos; en escribir enseña cómo empieza la respuesta (`p _ _ _ _`); en emparejar resuelve una pareja.
  - Acertar con pista da algo menos de XP (−25 % por nivel, mínimo la mitad), pero no rompe el combo.
- **Lecciones de estudio:** cada tema tiene una lección (`src/content/<asignatura>/lessonsN.ts`) que se abre con "📖 Estudiar" en la pantalla de la asignatura.
  - Por páginas: portada con el índice, 3-6 páginas con explicación, ejemplos, tablas y trucos, resumen de ideas clave y 2-3 preguntas rápidas de comprobación.
  - Escritas a partir de las tarjetas de cada tema, para que las flashcards solo pregunten lo que se ha estudiado.
  - Science e Inglés: en inglés, con "Ayuda en español" en cada página.
  - Al terminar: +30 XP la primera vez (+10 al repasarla), marca "✓ estudiado" en el tema, insignias "A estudiar" y "Estudiosa", y botón para practicar ese tema con flashcards.

### Pendiente de revisar

- Contenido escrito con IA: conviene que un adulto revise las tarjetas, sobre todo las de 6.º (historia, sintaxis).
- Javi y Celia tienen un aspecto genérico: ajustar con fotos si se quiere parecido.

---

## 1. Usuarias y contexto

| Perfil | Curso | Colegio | Libros de referencia |
|---|---|---|---|
| África | 4.º Primaria | Bilingüe | Oxford (Science/inglés), Anaya (resto) |
| Leire | 6.º Primaria | Bilingüe | Oxford (Science/inglés), Anaya (resto) |

- Comunidad: **Madrid** (Decreto 61/2022 + Real Decreto 157/2022).
- Nivel de inglés: no alto. Las asignaturas en inglés se adaptan en vocabulario y frases.
- El contenido no tiene que calcar los libros. Se toma el temario oficial y se adapta.
- Sus padres se llaman **Javi** y **Celia** (personajes de humor, ver sección 6).

---

## 2. Decisiones cerradas

- **Idioma por asignatura:**
  - **Science** y **Inglés**: todo en inglés. El apoyo en español solo si la niña lo pide (botón explícito por tarjeta).
  - **Matemáticas, Lengua, Sociales**: en español.
- **Asignaturas (5):** Science, Inglés, Matemáticas, Lengua, Sociales.
- **Perfiles:** selección de perfil al entrar (África o Leire). Sin contraseña ni cuenta.
- **Tipos de tarjeta:** test (opción múltiple), respuesta escrita y emparejar. Las tres.
- **Audio/pronunciación:** fuera de alcance por ahora.
- **Persistencia:** en el navegador (localStorage) con una clave por perfil. Más adelante se puede migrar a una base de datos (Supabase u otra), por eso la capa de datos se aísla desde el principio.
- **Temas:** se puede elegir uno, varios, o una asignatura entera, o repaso general de todo.
- **Estética:** visualmente atractiva, colorida, animada, pensada para niñas de 9-11 años. Móvil y ordenador.

---

## 3. Asignaturas y peluches-profesor

Cada asignatura tiene un peluche como profesor/mascota. Son cuatro peluches existentes más un quinto inventado.

| Asignatura | Idioma | Peluche (propuesta) | Motivo |
|---|---|---|---|
| Inglés | Inglés | **Tuk Tuk** | Propuesta, a confirmar |
| Science | Inglés | **Rojichi** | Propuesta, a confirmar |
| Matemáticas | Español | **Clarita** | Propuesta, a confirmar |
| Lengua | Español | **Luna** | Propuesta, a confirmar |
| Sociales | Español | **Pico** (búho sabio con gafas, nombre provisional) | Peluche inventado para la asignatura sobrante |

- Cada peluche tiene una **ficha** (nombre, asignatura, personalidad corta) y frases propias para sus reacciones.
- Los peluches se representan como **SVG o CSS**, generados por el proyecto.
- **Referencias:** las fotos están en `fotos pelcuhes/`. La descripción detallada de cada peluche, con colores aproximados, está en [docs/PELUCHES.md](PELUCHES.md).
- **Estilo:** Clarita y Rojichi son peluches de tela; Luna y Tuk-Tuk son muñecas realistas (piel azul tipo Avatar). Pico es un búho kawaii nuevo. El estilo unificado está pendiente de decidir (ver PELUCHES.md, sección 0).

---

## 4. Contenido curricular (Madrid)

### Advertencia sobre las fuentes

- Las búsquedas no devolvieron el texto consolidado de **Decreto 61/2022 (BOCM)** con las tablas de saberes básicos por curso. Las listas de abajo son **referencia de trabajo** y deben verificarse contra el BOCM antes de dar el contenido por bueno.
- Libros de referencia (sin copiar índices, solo como guía):
  - **Oxford "Social and Natural Sciences" 4 y 6**: [ficha 4](https://shoppre.blinklearning.com/es/plan_escolar9-4503/34273-SocialandNaturalSciences4.html), [ficha 6](https://shoppre.blinklearning.com/en/plan_escolar11-4507/34279-SocialandNaturalSciences6.html). Confirmar que es la edición que usan.
  - **Anaya Ciencias Sociales 6** (edición Andalucía, solo como guía): [ficha](https://shoppre.blinklearning.com/es/plan_escolar11-2923/31459-CienciasSociales6InfocusPrimariaAnayaDigital-Andaluca.html).
  - Anaya Matemáticas y Lengua: no se pudo obtener el índice. No hace falta para la app.
- Fuentes del currículo: [BOCM](https://www.bocm.es) (Decreto 61/2022), [boe.es](https://www.boe.es/eli/es/rd/2022/03/01/157) (RD 157/2022).

### 4.º Primaria (referencia)

**Matemáticas**
- Números hasta los millones, valor posicional, redondeo.
- Las cuatro operaciones, incluida multiplicación y división por dos cifras.
- Fracciones: equivalentes, suma y resta con igual denominador, fracción de una cantidad.
- Decimales básicos (décimas y centésimas).
- Medida: longitud, masa, capacidad, tiempo.
- Geometría: ángulos, polígonos, perímetro.
- Estadística básica: tablas y gráficos.
- Problemas de una y dos operaciones.

**Science (Oxford, en inglés)**
- Atmósfera y tiempo atmosférico.
- Rocas, minerales y relieve.
- Seres vivos y funciones vitales.
- Ecosistemas.
- Fuerzas y movimiento; energía; máquinas simples y compuestas.
- Salud y alimentación (4.º).

**Sociales (en español)**
- Comunidades autónomas de España.
- Paisajes y relieve de España.
- Historia: inventos, la vida en otras épocas.
- Cultura y patrimonio.

**Lengua (en español)**
- Ortografía: acentuación básica, mayúsculas, signos de puntuación.
- Gramática: sustantivo, adjetivo, verbo (presente, pasado, futuro), determinantes.
- Comprensión lectora y vocabulario.

**Inglés (en inglés)**
- Vocabulario de la vida cotidiana (colegio, casa, comida, animales, tiempo).
- Present simple y present continuous. There is / there are. Can. Prepositions de lugar.
- Nivel orientativo A1-A2.

### 6.º Primaria (referencia)

**Matemáticas**
- Las cuatro operaciones con decimales y fracciones.
- Fracciones: las cuatro operaciones, fracción de una cantidad, fracciones equivalentes y simplificación.
- Porcentajes, proporcionalidad directa, escalas.
- Geometría: área y perímetro de figuras planas, volumen básico.
- Estadística: media, moda, gráficos.
- Problemas de varios pasos.

**Science (Oxford, en inglés)**
- Cuerpo humano: digestión, respiración, circulación y excreción.
- Músculos, huesos, nervios y sentidos.
- Reproducción humana y salud.
- Energía, electricidad y magnetismo.
- Luz y sonido.
- Ciencia y tecnología.

**Sociales (en español)**
- Relieve, hidrografía y clima de España y Europa.
- Actividades económicas.
- Historia de España: Edad Moderna, Edad Contemporánea, siglos XIX-XXI.
- Organización política de España y Unión Europea.
- Población.

**Lengua (en español)**
- Ortografía avanzada.
- Análisis sintáctico básico: sujeto y predicado.
- Tipos de oraciones y de textos.
- Figuras literarias y tipos de texto.

**Inglés (en inglés)**
- Past simple y futuro (will / going to).
- Comparativos y superlativos.
- Vocabulario de viajes, deportes, medio ambiente.
- Nivel orientativo A2-B1.

---

## 5. Mecánica de estudio

### Selección de temas
- Pantalla de inicio: elegir **perfil** → elegir **modo**:
  - Una asignatura.
  - Uno o varios temas concretos.
  - Repaso general (mezcla de todo).

### Tipos de tarjeta
- **Test:** pregunta con 3-4 opciones.
- **Respuesta escrita:** escribir la palabra o el dato. Se acepta con tolerancia a mayúsculas y pequeñas faltas.
- **Emparejar:** unir parejas (palabra-definición, número-fracción, etc.).

### Sesión
- Tandas cortas (p. ej. 10 tarjetas) para no cansar.
- Retroalimentación inmediata: acierto o fallo, con explicación breve.
- Al terminar la tanda: resumen y recompensas.

### Ayuda en español (solo Science e Inglés)
- Botón opcional "Ayuda en español" por tarjeta. Por defecto, todo en inglés.

---

## 6. Gamificación

Propuesta inicial, para ajustar después:

- **Puntos (XP)** por acierto. Más por respuesta escrita y por emparejar, que cuestan más.
- **Niveles:** por XP acumulado. Nombres temáticos (p. ej. "Explorer", "Scientist").
- **Rachas:** días seguidos estudiando. La racha se "rompe" sin castigar: se puede recuperar con un "escudo" ganado.
- **Insignias:** por tema completado, por asignatura completada, por rachas largas, por repaso general.
- **Misiones semanales:** pequeños objetivos (p. ej. "10 fracciones esta semana"). Dan un bonus.
- **Peluches que evolucionan:** cada peluche-profesor tiene accesorios o ropa que se desbloquean con el progreso de su asignatura.
- **Mapa de progreso:** una vista tipo mapa donde cada tema es un nodo; se va iluminando al completarlo.

Principios:
- Nada de rankings ni comparativas entre hermanas.
- Los fallos se tratan con humor, no con castigo (ver sección 7).

---

## 7. Javi y Celia: reacciones con humor

Javi y Celia son los padres, personajes de humor que reaccionan a lo que pasa en la app. **No regañan**: su gracia es que la niña sonría y quiera volver a jugar.

Situaciones y reacciones (cada una con un banco de frases):

| Situación | Reacción |
|---|---|
| Fallo tras un rato estudiando | Javi o Celia persiguen con la zapatilla (animación cómica, sin violencia). Frases tipo "¡Eso no era, cariño! ¡A repasar!". |
| Fallo puntual | Frase corta de ánimo con el peluche. |
| Acierto | Felicitación del peluche. |
| Lección o tema completo | Felicitación conjunta de Javi, Celia y el peluche. |
| Racha perdida | Broma suave sobre el sofá o el despertador. |
| Vuelta tras días sin entrar | Bienvenida con humor. |

Reglas de tono:
- Siempre con humor amable. Nada de humillación, insultos ni bronca.
- No comparar con la hermana.
- Frases cortas y en el idioma correcto según la asignatura. En Science e Inglés, las frases de Javi y Celia también van en inglés (o en español si se pide ayuda).

### Banco de frases
Se guarda en un archivo de datos (JSON), separado del código, para poder ampliarlo sin tocar la lógica:
- `fallo_test`, `fallo_escrito`, `fallo_emparejar`
- `acierto`
- `leccion_completa`
- `racha_perdida`
- `vuelta`
- `curiosidad` (ver abajo)

---

## 8. Datos curiosos

- Se muestran **después de estudiar** o **tras un fallo**, como premio o como chispa de interés.
- Pueden salirse del temario, pero con contenido real y verificable. Cada dato va con su asignatura.
- Banco de datos en JSON, separado de la lógica, con campos: asignatura, idioma, texto, y si se considera verificado.
- Antes de publicarlos hay que revisar que sean correctos, sobre todo los de Science e Historia.

---

## 9. Arquitectura propuesta (sin confirmar)

- **Frontend:** web estática. Propuesta: React + Vite + TypeScript. Confirmar en la siguiente interacción.
- **Despliegue:** Vercel.
- **Datos:** localStorage, una clave por perfil (p. ej. `primaria:v1:africa`, `primaria:v1:leire`). Envuelto en try/catch.
- **Capa de datos aislada:** una interfaz de "repositorio de progreso" para cambiar a Supabase sin reescribir la UI.
- **Contenido:** tarjetas en JSON por asignatura y tema. Frases y datos curiosos en JSON aparte.
- **Assets:** SVG/CSS para peluches, fondos y animaciones. Sin dependencias de imágenes externas.

### Modelo de datos (esbozo)

```
perfil: { id: "africa" | "leire", curso: 4 | 6 }
progreso[perfil][cardId]: { intentos, aciertos, ultimoRepaso, dominio }
gamificacion[perfil]: { xp, nivel, racha, ultimoDia, insignias: [...], misiones: [...] }
```

---

## 10. Diseño y accesibilidad

- Colores vivos, alto contraste, tipografía redondeada y legible.
- Botones grandes, táctiles.
- Animaciones cortas y con sentido (acierto, fallo, premio), sin distraer.
- Responsive: móvil, tablet y ordenador.
- Sin sonido por ahora.

---

## 11. Pendientes

- [ ] Verificar el contenido de 4.º y 6.º contra el BOCM (Decreto 61/2022).
- [ ] Confirmar que los libros Oxford son "Social and Natural Sciences 4" y "6".
- [ ] Confirmar la asignación de peluches a asignaturas y el nombre del quinto peluche (Pico, provisional).
- [ ] Subir las fotos de los peluches al repositorio.
- [x] Confirmar el stack (React + Vite + TypeScript).
- [x] Redactar el banco inicial de frases de Javi y Celia.
- [x] Redactar el banco inicial de datos curiosos (falta revisión humana).

---

## 12. Hoja de ruta

1. **Fase 1:** base de la app, selección de perfil, flashcards de Matemáticas (test, escrita, emparejar), progreso en localStorage.
2. **Fase 2:** resto de asignaturas (Lengua, Sociales, Science, Inglés), gamificación completa, peluches y reacciones de Javi y Celia.
3. **Fase 3:** datos curiosos, misiones semanales, mapa de progreso y pulido visual.
4. **Fase 4 (futuro):** migrar el progreso a una base de datos (Supabase) para persistir entre dispositivos.
