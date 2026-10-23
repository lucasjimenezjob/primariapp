import type { Lesson } from '../../types';

export const lessons: Lesson[] = [
  {
    topicId: 'sustantivo',
    intro: "¡Hola, soy Luna! Hoy vamos a conocer a los sustantivos, las palabras que sirven para ponerle nombre a todo lo que existe. ¡Prepárate a descubrir sus secretos!",
    sections: [
      {
        emoji: '🏷️',
        title: 'Qué es un sustantivo',
        body: [
          "El **sustantivo** (o nombre) es la palabra que nombra personas, animales, cosas, lugares o ideas.",
          "Los sustantivos pueden ser **comunes** o **propios**.",
        ],
        bullets: [
          "**Común**: nombra cualquier ser de su clase: niña, río, ciudad, perro.",
          "**Propio**: nombra a un ser concreto y único: Marta, Duero, Madrid, Luna.",
          "Los sustantivos propios se escriben siempre con **mayúscula inicial**.",
        ],
        tip: "Si solo hay uno en el mundo con ese nombre (Tajo, Francia), es propio y lleva mayúscula.",
      },
      {
        emoji: '🐝',
        title: 'Individuales y colectivos',
        body: [
          "Un sustantivo **individual** nombra un solo ser: una abeja, un árbol, un soldado.",
          "Un sustantivo **colectivo** nombra, en singular, a un **grupo** de seres de la misma clase.",
        ],
        table: {
          head: ['Individual', 'Colectivo'],
          rows: [
            ['abeja', 'enjambre'],
            ['oveja', 'rebaño'],
            ['pez', 'banco de peces'],
            ['árbol', 'bosque, arboleda'],
            ['libro', 'biblioteca'],
            ['estrella', 'constelación'],
          ],
        },
        tip: "Fíjate: el colectivo está en singular pero habla de muchos. ¡Un solo enjambre tiene miles de abejas!",
      },
      {
        emoji: '👧',
        title: 'El género: masculino y femenino',
        body: [
          "Los sustantivos pueden ser **masculinos** o **femeninos**. Muchos cambian la terminación: niño → niña, gato → gata.",
          "Otros cambian por completo de palabra, y otros usan terminaciones especiales, como -triz o -esa.",
        ],
        bullets: [
          "Palabra distinta: **padre → madre**, **rey → reina**, **yerno → nuera**.",
          "Más ejemplos de palabra distinta: **toro → vaca**, **caballo → yegua**, **hombre → mujer**.",
          "Cambio de terminación: **actor → actriz**, **emperador → emperatriz**.",
          "Sustantivos **comunes en cuanto al género**: no cambian, solo cambia el artículo: **el/la estudiante**, el/la cantante, el/la pianista.",
        ],
        tip: "Si puedes decir «el» y «la» delante sin cambiar la palabra (el/la artista), es común en cuanto al género.",
      },
      {
        emoji: '➕',
        title: 'El plural',
        body: [
          "Para formar el plural, a las palabras que acaban en vocal se les añade **-s**: mesa → mesas.",
          "A las que acaban en consonante se les añade **-es**: ciudad → ciudades.",
          "Atención con la **z**: cuando una palabra termina en **-z**, en el plural la z se cambia por **c** y se añade **-es**.",
        ],
        table: {
          head: ['Singular', 'Plural'],
          rows: [
            ['lápiz', 'lápices'],
            ['pez', 'peces'],
            ['luz', 'luces'],
            ['vez', 'veces'],
            ['nariz', 'narices'],
            ['cruz', 'cruces'],
          ],
        },
        tip: "La z se «disfraza» de c delante de e: nunca existen «lápizes» ni «pezes».",
      },
    ],
    keyPoints: [
      "El sustantivo nombra personas, animales, cosas, lugares e ideas.",
      "Los propios nombran algo único y llevan mayúscula; los comunes, no.",
      "Un colectivo es un singular que nombra un grupo: rebaño, enjambre, bosque.",
      "El femenino puede ser otra palabra (rey/reina) o cambiar la terminación (actor/actriz).",
      "Las palabras en -z hacen el plural en -ces: pez → peces.",
    ],
    check: [
      {
        question: "¿Cuál de estas palabras es un sustantivo colectivo?",
        options: ["flota", "barco", "capitán"],
        answer: 0,
      },
      {
        question: "¿Cuál es el plural de «cruz»?",
        options: ["cruzes", "cruces", "cruzs"],
        answer: 1,
      },
      {
        question: "¿Cuál es el femenino de «emperador»?",
        options: ["emperatriz", "emperadora", "emperadriz"],
        answer: 0,
      },
    ],
  },
  {
    topicId: 'adjetivo-determinantes',
    intro: "¡Hola, soy Luna! Hoy vamos a descubrir las palabras que acompañan al sustantivo: unas lo describen y otras lo presentan. ¡Verás qué fácil es!",
    sections: [
      {
        emoji: '🎨',
        title: 'El adjetivo',
        body: [
          "El **adjetivo** es la palabra que dice **cómo es** el sustantivo: su color, su tamaño, su forma o su carácter.",
          "En «la casa grande», el sustantivo es «casa» y el adjetivo es **grande**.",
        ],
        bullets: [
          "Cualidades: nieve **blanca**, perro **simpático**, tarta **dulce**.",
          "Los adjetivos tienen **antónimos** (contrarios): alto ↔ bajo, grande ↔ pequeño, caliente ↔ frío.",
        ],
        tip: "Si puedes preguntar «¿cómo es?» y la palabra responde, ¡es un adjetivo!",
      },
      {
        emoji: '🤝',
        title: 'La concordancia',
        body: [
          "El adjetivo **concuerda** con el sustantivo en **género** (masculino o femenino) y en **número** (singular o plural).",
          "Por eso decimos «unas flores amarillas», no «unas flores amarillo».",
        ],
        table: {
          head: ['Regla', 'Ejemplo'],
          rows: [
            ['Masculino en -o → femenino en -a', 'bonito → bonita'],
            ['Plural de vocal: añade -s', 'alta → altas'],
            ['Plural de consonante: añade -es', 'azul → azules'],
            ['Los acabados en -e no cambian en femenino', 'dulce → dulce'],
          ],
        },
        tip: "Mira siempre el sustantivo: el adjetivo se «viste» igual que él.",
      },
      {
        emoji: '🧢',
        title: 'Los determinantes: los artículos',
        body: [
          "Los **determinantes** son palabras que van delante del sustantivo y lo concretan. Hay varios tipos.",
          "Los **artículos** son los más usados. El **determinado** habla de algo ya conocido; el **indeterminado**, de algo nuevo o no concreto.",
        ],
        table: {
          head: ['Tipo', 'Masc. sing.', 'Fem. sing.', 'Masc. pl.', 'Fem. pl.'],
          rows: [
            ['Determinado', 'el', 'la', 'los', 'las'],
            ['Indeterminado', 'un', 'una', 'unos', 'unas'],
          ],
        },
        tip: "El, la, los, las = «el de siempre». Un, una, unos, unas = «uno cualquiera».",
      },
      {
        emoji: '👉',
        title: 'Demostrativos y posesivos',
        body: [
          "Los **demostrativos** señalan lo cerca o lo lejos que está algo de quien habla: **este** (cerca), **ese** (a media distancia), **aquel** (lejos).",
          "Los **posesivos** dicen a quién pertenece algo: mi, tu, su, nuestro, vuestro.",
        ],
        table: {
          head: ['Demostrativos', 'Masc.', 'Fem.'],
          rows: [
            ['Cerca', 'este / estos', 'esta / estas'],
            ['Media distancia', 'ese / esos', 'esa / esas'],
            ['Lejos', 'aquel / aquellos', 'aquella / aquellas'],
          ],
        },
        bullets: [
          "Posesivos: **mi** libro, **tus** amigas, **su** casa, **nuestras** bicicletas, **sus** juguetes.",
        ],
        tip: "Este-ese-aquel: de más cerca a más lejos, como si fueras alejándote.",
      },
    ],
    keyPoints: [
      "El adjetivo dice cómo es el sustantivo.",
      "Adjetivo y sustantivo concuerdan en género y número.",
      "Los artículos pueden ser determinados (el, la, los, las) o indeterminados (un, una, unos, unas).",
      "Los demostrativos indican distancia: este, ese, aquel.",
      "Los posesivos indican pertenencia: mi, tu, su, nuestro...",
    ],
    check: [
      {
        question: "Completa: «los gatos ___».",
        options: ["negra", "negro", "negros"],
        answer: 2,
      },
      {
        question: "¿Qué palabra es un posesivo?",
        options: ["aquella", "tus", "unas"],
        answer: 1,
      },
      {
        question: "¿Cuál es el plural de «feliz»?",
        options: ["felices", "felizes", "felizs"],
        answer: 0,
      },
    ],
  },
  {
    topicId: 'pronombres-personales',
    intro: "¡Hola, soy Luna! Hoy aprenderemos los pronombres personales, unas palabritas muy prácticas que evitan que repitamos siempre los mismos nombres. ¡Vamos allá!",
    sections: [
      {
        emoji: '🙋',
        title: 'Qué es un pronombre personal',
        body: [
          "El **pronombre personal** es una palabra que **sustituye al nombre** de una persona, animal o cosa para no repetirlo.",
          "En lugar de decir «María canta, María baila», decimos «María canta y **ella** baila».",
        ],
        bullets: [
          "Pedro come manzanas → **Él** come manzanas.",
          "Mis primas juegan → **Ellas** juegan.",
        ],
        tip: "Pro-nombre: «en lugar del nombre».",
      },
      {
        emoji: '🗣️',
        title: 'Las tres personas gramaticales',
        body: [
          "Hay tres personas: la **1.ª** es quien **habla**, la **2.ª** es a quien **se habla** y la **3.ª** es de quien o de qué **se habla**.",
          "Cada una tiene forma de singular y de plural.",
        ],
        table: {
          head: ['Persona', 'Singular', 'Plural'],
          rows: [
            ['1.ª (quien habla)', 'yo', 'nosotros, nosotras'],
            ['2.ª (a quien se habla)', 'tú', 'vosotros, vosotras'],
            ['3.ª (de quien se habla)', 'él, ella', 'ellos, ellas'],
          ],
        },
        tip: "Yo hablo, tú escuchas, él o ella son los que no están en la conversación.",
      },
      {
        emoji: '👥',
        title: 'Grupos: nosotros, vosotros, ellos',
        body: [
          "Si en el grupo estoy **yo**, usamos **nosotros/nosotras**: «Ana y yo» = nosotras (si quien habla es una chica); «tú y yo» = nosotros.",
          "Si hablo con **varias personas** a las que tuteo, usamos **vosotros/vosotras**: «tú y Luis estudiáis» = vosotros estudiáis.",
          "Si hablo **de** varias personas, usamos **ellos/ellas**.",
        ],
        bullets: [
          "Un grupo **solo de chicas** → ellas / nosotras / vosotras.",
          "Un grupo **mixto** (niños y niñas) → se usa el masculino plural: **ellos**.",
          "«Lucas y Pablo» → ellos. «Marta y Sara» → ellas.",
        ],
        tip: "Truco: si estoy yo, es «nosotros»; si estás tú pero no yo, es «vosotros»; si no estamos ni tú ni yo, es «ellos».",
      },
    ],
    keyPoints: [
      "El pronombre personal sustituye al nombre para no repetirlo.",
      "1.ª persona: quien habla (yo, nosotros).",
      "2.ª persona: a quien se habla (tú, vosotros).",
      "3.ª persona: de quien se habla (él, ella, ellos, ellas).",
      "Un grupo mixto se nombra con el masculino plural.",
    ],
    check: [
      {
        question: "«Tú y yo vamos al cine» = ___ vamos al cine.",
        options: ["vosotros", "nosotros", "ellos"],
        answer: 1,
      },
      {
        question: "¿A qué persona gramatical pertenece «tú»?",
        options: ["a la 3.ª", "a la 1.ª", "a la 2.ª"],
        answer: 2,
      },
      {
        question: "«Mi hermano y mi hermana duermen» = ___ duermen.",
        options: ["ellos", "ellas", "nosotros"],
        answer: 0,
      },
    ],
  },
  {
    topicId: 'verbo',
    intro: "¡Hola, soy Luna! Hoy vamos a estudiar el verbo, la palabra que dice lo que hacemos y cuándo lo hacemos. ¡Es el corazón de la oración!",
    sections: [
      {
        emoji: '🏃',
        title: 'Qué es un verbo y su infinitivo',
        body: [
          "El **verbo** es la palabra que expresa una **acción**, un estado o un suceso: cantar, correr, ser.",
          "El nombre del verbo es el **infinitivo** y siempre acaba en **-ar**, **-er** o **-ir**: cantar, comer, vivir.",
        ],
        bullets: [
          "**1.ª conjugación**: verbos en **-ar** (cantar, saltar, bailar).",
          "**2.ª conjugación**: verbos en **-er** (comer, correr, beber).",
          "**3.ª conjugación**: verbos en **-ir** (vivir, escribir, partir).",
        ],
        tip: "Primera: -ar. Segunda: -er. Tercera: -ir. ¡En el mismo orden que las vocales: a, e, i!",
      },
      {
        emoji: '🌱',
        title: 'Raíz y desinencia',
        body: [
          "Todo verbo tiene dos partes: la **raíz**, que no cambia, y la **desinencia**, que sí cambia e indica persona, número y tiempo.",
          "Para hallar la raíz, quita la terminación del infinitivo (-ar, -er, -ir).",
        ],
        table: {
          head: ['Infinitivo', 'Raíz', 'Forma', 'Desinencia'],
          rows: [
            ['cantar', 'cant-', 'cantamos', '-amos'],
            ['comer', 'com-', 'comemos', '-emos'],
            ['vivir', 'viv-', 'vivís', '-ís'],
            ['saltar', 'salt-', 'saltáis', '-áis'],
            ['correr', 'corr-', 'corremos', '-emos'],
            ['bailar', 'bail-', 'bailáis', '-áis'],
          ],
        },
        tip: "La raíz es la «semilla» que da el significado; la desinencia cambia como las hojas.",
      },
      {
        emoji: '⏰',
        title: 'Los tiempos: pasado, presente y futuro',
        body: [
          "Los verbos cambian según **cuándo** ocurre la acción: en el **pasado** (ya ocurrió), en el **presente** (ocurre ahora) o en el **futuro** (ocurrirá después).",
        ],
        table: {
          head: ['Tiempo', 'Ejemplo', 'Pista'],
          rows: [
            ['Pasado', 'ayer canté, jugábamos', 'ya ocurrió'],
            ['Presente', 'hoy canto, escribo', 'ocurre ahora'],
            ['Futuro', 'mañana cantaré, saltaré', 'ocurrirá luego'],
          ],
        },
        tip: "Palabras pista: ayer → pasado; hoy → presente; mañana → futuro.",
      },
      {
        emoji: '🧪',
        title: 'Cómo conjugar: presente y futuro',
        body: [
          "En el **presente**, la 3.ª persona del plural (ellos/ellas) de los verbos en -ar termina en **-an**: cantar → ellos **cantan**. En -er e -ir termina en **-en**: comer → comen.",
          "El **futuro** se forma con el **infinitivo completo** + la desinencia: -é, -ás, -á, -emos, -éis, **-án**.",
        ],
        table: {
          head: ['Persona', 'Presente de cantar', 'Futuro de comer'],
          rows: [
            ['yo', 'canto', 'comeré'],
            ['tú', 'cantas', 'comerás'],
            ['él, ella', 'canta', 'comerá'],
            ['nosotros', 'cantamos', 'comeremos'],
            ['vosotros', 'cantáis', 'comeréis'],
            ['ellos, ellas', 'cantan', 'comerán'],
          ],
        },
        tip: "Futuro = infinitivo + terminación. ¡Comer + án = comerán!",
      },
    ],
    keyPoints: [
      "El verbo expresa acciones; su nombre es el infinitivo (-ar, -er, -ir).",
      "Hay tres conjugaciones: 1.ª en -ar, 2.ª en -er, 3.ª en -ir.",
      "El verbo tiene raíz (no cambia) y desinencia (cambia).",
      "Los tiempos básicos son pasado, presente y futuro.",
      "El futuro = infinitivo + -é, -ás, -á, -emos, -éis, -án.",
    ],
    check: [
      {
        question: "¿Cuál es la raíz de «escribimos»?",
        options: ["escrib-", "-imos", "escribir"],
        answer: 0,
      },
      {
        question: "«Mañana viajaremos a Sevilla» está en...",
        options: ["pasado", "futuro", "presente"],
        answer: 1,
      },
      {
        question: "¿A qué conjugación pertenece «partir»?",
        options: ["1.ª", "2.ª", "3.ª"],
        answer: 2,
      },
    ],
  },
  {
    topicId: 'acentuacion',
    intro: "¡Hola, soy Luna! Hoy aprenderemos a colocar las tildes sin miedo. Primero escucharemos cómo suenan las palabras y después veremos las reglas.",
    sections: [
      {
        emoji: '👏',
        title: 'Las sílabas',
        body: [
          "Las palabras se dividen en **sílabas**, que son los golpes de voz con los que las pronunciamos. Para contarlas, ¡da una palmada por cada golpe!",
        ],
        table: {
          head: ['Palabra', 'Sílabas', 'Número'],
          rows: [
            ['sol', 'sol', '1'],
            ['mesa', 'me-sa', '2'],
            ['ventana', 'ven-ta-na', '3'],
            ['mariposa', 'ma-ri-po-sa', '4'],
            ['murciélago', 'mur-cié-la-go', '4'],
            ['elefante', 'e-le-fan-te', '4'],
          ],
        },
        tip: "Cada sílaba tiene siempre al menos una vocal.",
      },
      {
        emoji: '🔊',
        title: 'La sílaba tónica',
        body: [
          "En cada palabra hay una sílaba que suena **más fuerte** que las demás: es la **sílaba tónica**.",
          "Según el lugar de la sílaba tónica, las palabras son **agudas**, **llanas** o **esdrújulas**.",
        ],
        table: {
          head: ['Clase', 'Sílaba tónica', 'Ejemplo'],
          rows: [
            ['Aguda', 'la última', 'can-CIÓN, ca-FÉ'],
            ['Llana', 'la penúltima', 'ME-sa, ÁR-bol'],
            ['Esdrújula', 'la antepenúltima', 'te-LÉ-fo-no'],
          ],
        },
        tip: "Aguda: la fuerza al final. Llana: antes del final. Esdrújula: la fuerza cae en la tercera sílaba empezando por el final.",
      },
      {
        emoji: '✏️',
        title: 'Cuándo llevan tilde',
        body: [
          "La **tilde** es la rayita (´) que se escribe sobre la vocal de la sílaba tónica. No todas las palabras la llevan; depende de la clase.",
        ],
        table: {
          head: ['Clase', 'Lleva tilde si...', 'Ejemplos'],
          rows: [
            ['Aguda', 'acaba en vocal, n o s', 'café, canción, jamás'],
            ['Llana', 'NO acaba en vocal, n ni s', 'árbol, cárcel, lápiz'],
            ['Esdrújula', 'SIEMPRE', 'teléfono, murciélago'],
          ],
        },
        bullets: [
          "Aguda sin tilde: reloj, ciudad, papel (no acaban en vocal, n o s).",
          "Llana sin tilde: mesa, cielo, examen (sí acaban en vocal, n o s).",
        ],
        tip: "Las agudas y las llanas hacen lo contrario: las agudas llevan tilde si acaban en vocal, n o s; las llanas, si NO acaban así.",
      },
    ],
    keyPoints: [
      "Las palabras se dividen en sílabas; la más fuerte es la sílaba tónica.",
      "Aguda: tónica en la última. Llana: en la penúltima. Esdrújula: en la antepenúltima.",
      "Las agudas llevan tilde si acaban en vocal, n o s.",
      "Las llanas llevan tilde si NO acaban en vocal, n o s.",
      "Las esdrújulas siempre llevan tilde.",
    ],
    check: [
      {
        question: "¿Cuántas sílabas tiene «cocodrilo»?",
        options: ["3", "5", "4"],
        answer: 2,
      },
      {
        question: "¿Qué palabra está bien escrita?",
        options: ["lápiz", "lapiz", "lápíz"],
        answer: 0,
      },
      {
        question: "«Pájaro» es una palabra...",
        options: ["aguda", "esdrújula", "llana"],
        answer: 1,
      },
    ],
  },
  {
    topicId: 'ortografia',
    intro: "¡Hola, soy Luna! Hoy repasaremos las reglas que nos ayudan a escribir sin faltas. Con unos pocos trucos, escribirás de maravilla.",
    sections: [
      {
        emoji: '🅷',
        title: 'La letra h',
        body: [
          "La **h** no suena, pero hay que escribirla. Se escribe en estos casos:",
        ],
        bullets: [
          "Palabras que empiezan por **hue-** y **hie-**: huevo, hueso, hielo, hierba.",
          "Algunas palabras que hay que memorizar: **hebilla**, **hermano**, hoja, hormiga.",
          "Palabras de la familia de otra con h: huevo → huevera.",
        ],
        tip: "Piensa en hielo, huevo, hermano y hebilla: ¡todos llevan h!",
      },
      {
        emoji: '🅱️',
        title: 'B y V',
        body: [
          "Suenan igual, así que hay que recordar algunas reglas.",
        ],
        bullets: [
          "Los verbos acabados en **-bir** se escriben con **b**: escribir, recibir, subir. (Excepciones: hervir, servir, vivir.)",
          "Palabras que memorizamos con **b**: **abeja**, **cabeza**.",
          "Palabras que memorizamos con **v**: **avión**, vaca, lluvia.",
        ],
        tip: "Escribir, recibir, subir: ¡los -bir llevan b!",
      },
      {
        emoji: '🅶',
        title: 'G y J',
        body: [
          "La **g** (delante de e, i) y la **j** suenan igual, así que ten cuidado.",
        ],
        bullets: [
          "Los verbos acabados en **-ger** y **-gir** se escriben con **g**: coger, proteger, escoger, dirigir. (Excepciones: tejer, crujir.)",
          "Con **j** se escriben, por ejemplo: **jirafa**, **abeja**, jardín, ojo.",
          "La forma «yo recojo» lleva j, pero su infinitivo es **recoger**, con g.",
        ],
        tip: "Si dudas con un verbo, mira el infinitivo: acabado en -ger, ¡g!",
      },
      {
        emoji: '🔠',
        title: 'Mayúsculas y plurales en -z',
        body: [
          "Se escribe **mayúscula inicial** al empezar un texto, después de un punto y en los **nombres propios**: Marta, Tajo, Francia, Sevilla, Madrid.",
          "Los **días de la semana**, los **meses** y las **estaciones** se escriben con **minúscula**: lunes, viernes, enero, otoño.",
          "Recuerda además que las palabras acabadas en -z cambian la z por c en el plural: vez → **veces**.",
        ],
        tip: "Personas, ríos, países y ciudades: mayúscula. Días, meses y estaciones: minúscula.",
      },
    ],
    keyPoints: [
      "Llevan h las palabras que empiezan por hue- y hie-, y hebilla, hermano...",
      "Los verbos acabados en -bir llevan b.",
      "Los verbos acabados en -ger llevan g (coger, proteger).",
      "Los nombres propios llevan mayúscula; los días y meses, minúscula.",
      "El plural de las palabras en -z se escribe con c: vez → veces.",
    ],
    check: [
      {
        question: "¿Qué palabra está bien escrita?",
        options: ["ierba", "hierba", "jierba"],
        answer: 1,
      },
      {
        question: "Completa: «prote_er».",
        options: ["j", "h", "g"],
        answer: 2,
      },
      {
        question: "¿Qué palabra debe llevar mayúscula inicial?",
        options: ["sábado", "Segovia", "marzo"],
        answer: 1,
      },
    ],
  },
  {
    topicId: 'vocabulario',
    intro: "¡Hola, soy Luna! A mí me encantan las palabras, y hoy te enseño a jugar con ellas: parecidas, contrarias, de la misma familia... ¡y hasta a construirlas!",
    sections: [
      {
        emoji: '🤝',
        title: 'Sinónimos',
        body: [
          "Los **sinónimos** son palabras que tienen un significado **igual o muy parecido**.",
        ],
        table: {
          head: ['Palabra', 'Sinónimo'],
          rows: [
            ['contento', 'alegre'],
            ['bonito', 'hermoso, bello, lindo'],
            ['casa', 'vivienda'],
            ['coche', 'automóvil'],
            ['niño', 'chico'],
            ['enorme', 'gigante'],
          ],
        },
        tip: "Sinónimo: «sin» confusión, ¡significan lo mismo!",
      },
      {
        emoji: '↔️',
        title: 'Antónimos',
        body: [
          "Los **antónimos** son palabras de significado **contrario**.",
        ],
        table: {
          head: ['Palabra', 'Antónimo'],
          rows: [
            ['rápido', 'lento'],
            ['ancho', 'estrecho'],
            ['subir', 'bajar'],
            ['día', 'noche'],
            ['abrir', 'cerrar'],
            ['limpio', 'sucio'],
          ],
        },
        tip: "Antónimo: «anti», en contra. ¡Significa lo contrario!",
      },
      {
        emoji: '👪',
        title: 'La familia de palabras',
        body: [
          "Las palabras de una misma **familia** comparten la **raíz** y tienen significados relacionados.",
          "Fíjate: no basta con que se parezcan al escribirlas, deben estar relacionadas en significado.",
        ],
        bullets: [
          "Familia de **pan**: panadero, panadería, panecillo.",
          "Familia de **mar**: marino, marinero, marítimo.",
          "**Martes** NO es de la familia de «mar»: viene de Marte, el dios romano. Tampoco «pantalón» es de la familia de «pan».",
        ],
        tip: "Pregúntate: ¿tiene que ver con el significado de la palabra base? Si no, es una falsa familia.",
      },
      {
        emoji: '🧩',
        title: 'Prefijos y sufijos',
        body: [
          "Podemos formar palabras nuevas añadiendo piezas a una palabra. Si van **al principio**, se llaman **prefijos**; si van **al final**, **sufijos**.",
        ],
        table: {
          head: ['Palabra', 'Prefijo / sufijo', 'Significado'],
          rows: [
            ['deshacer', 'des- (prefijo)', 'lo contrario'],
            ['imposible', 'im- (prefijo)', 'negación'],
            ['infeliz', 'in- (prefijo)', 'negación'],
            ['zapatero', '-ero (sufijo)', 'oficio'],
            ['panadero', '-ero (sufijo)', 'oficio'],
            ['relojería', '-ería (sufijo)', 'tienda'],
          ],
        },
        tip: "PREfijo = al PRINCIPIO (pre = antes). SUfijo = al final.",
      },
    ],
    keyPoints: [
      "Los sinónimos significan casi lo mismo.",
      "Los antónimos significan lo contrario.",
      "Una familia de palabras comparte raíz y significado.",
      "Los prefijos van al principio (des-, im-, in-).",
      "Los sufijos van al final (-ero, -ería).",
    ],
    check: [
      {
        question: "¿Cuál es un antónimo de «alegre»?",
        options: ["contento", "triste", "feliz"],
        answer: 1,
      },
      {
        question: "¿Cuál es el prefijo de «incapaz»?",
        options: ["-az", "in-", "capaz"],
        answer: 1,
      },
      {
        question: "¿Qué palabra es de la familia de «flor»?",
        options: ["florero", "flotar", "flaco"],
        answer: 0,
      },
    ],
  },
  {
    topicId: 'oracion-sujeto-predicado',
    intro: "¡Hola, soy Luna! Hoy descubriremos cómo está construida una oración, como si fuera un edificio con dos grandes partes. ¡Vamos a desmontarla!",
    sections: [
      {
        emoji: '🧩',
        title: 'Qué es una oración',
        body: [
          "Una **oración** es un grupo de palabras con **sentido completo** que tiene un **verbo**.",
          "No es lo mismo que unas palabras sueltas («perro casa verde») ni que un párrafo, que contiene varias oraciones.",
        ],
        bullets: [
          "Oración: «El gato duerme.»",
          "No es oración: «El gato verde y grande.» (no tiene verbo)",
        ],
        tip: "Si cuenta algo con sentido completo y hay un verbo, ¡es una oración!",
      },
      {
        emoji: '👤',
        title: 'El sujeto',
        body: [
          "La oración se divide en dos partes: el **sujeto** y el **predicado**.",
          "El **sujeto** es **quien realiza la acción** o de quien se dice algo. Para hallarlo, pregunta al verbo: **¿quién?**",
        ],
        bullets: [
          "«Mi hermana canta en el coro» → ¿quién canta? **Mi hermana**.",
          "«Ana corre» → ¿quién corre? **Ana**.",
          "El **núcleo del sujeto** es la palabra más importante y es un **sustantivo**: en «Los niños pequeños corren», el núcleo es **niños**.",
        ],
        tip: "Pregunta mágica: ¿quién + verbo? La respuesta es el sujeto.",
      },
      {
        emoji: '🎬',
        title: 'El predicado',
        body: [
          "El **predicado** es lo que se dice del sujeto: **lo que hace** o **cómo es**. Es todo lo demás de la oración.",
          "El **núcleo del predicado** es el **verbo**, la palabra más importante del predicado.",
        ],
        bullets: [
          "«Los gatos **duermen en el sofá**» → el predicado es «duermen en el sofá», con núcleo **duermen**.",
          "«El perro negro **ladra**» → núcleo del sujeto: *perro*; núcleo del predicado: **ladra**.",
        ],
        tip: "Sujeto = quién. Predicado = qué hace. El núcleo del predicado siempre es un verbo.",
      },
      {
        emoji: '🤐',
        title: 'Sujeto omitido y concordancia',
        body: [
          "A veces el sujeto **no aparece**, pero lo sabemos por la **desinencia** del verbo. En «Cantamos mucho», la terminación **-amos** nos dice que el sujeto es **nosotros**.",
          "El verbo **concuerda** con el sujeto en persona y número: si el sujeto es plural, el verbo también.",
        ],
        table: {
          head: ['Verbo', 'Sujeto omitido'],
          rows: [
            ['Cantamos', 'nosotros'],
            ['Juegas', 'tú'],
            ['Viven', 'ellos / ellas'],
            ['Bailo', 'yo'],
          ],
        },
        tip: "El verbo te lo cuenta todo: la terminación indica quién hace la acción.",
      },
    ],
    keyPoints: [
      "Una oración tiene sentido completo y un verbo.",
      "La oración se divide en sujeto y predicado.",
      "El sujeto responde a ¿quién? y su núcleo es un sustantivo.",
      "El predicado dice lo que hace el sujeto y su núcleo es el verbo.",
      "El verbo concuerda con el sujeto en persona y número.",
    ],
    check: [
      {
        question: "¿Cuál es el sujeto de «Mi prima toca el piano»?",
        options: ["toca el piano", "Mi prima", "el piano"],
        answer: 1,
      },
      {
        question: "En «La profesora explica la lección», el núcleo del predicado es...",
        options: ["explica", "profesora", "lección"],
        answer: 0,
      },
      {
        question: "En «Corréis rápido», el sujeto omitido es...",
        options: ["ellos", "nosotros", "vosotros"],
        answer: 2,
      },
    ],
  },
  {
    topicId: 'signos-puntuacion',
    intro: "¡Hola, soy Luna! Hoy conocerás los signos de puntuación, esos pequeños símbolos que le dan voz y ritmo a lo que escribimos. ¡Sin ellos, nadie nos entendería!",
    sections: [
      {
        emoji: '⚫',
        title: 'El punto y la coma',
        body: [
          "El **punto** (.) marca el **final de una oración** o de un párrafo. Después del punto se escribe mayúscula.",
          "La **coma** (,) indica una **pausa breve** y sirve para **separar los elementos de una enumeración**.",
        ],
        bullets: [
          "Compré pan**,** leche **y** huevos. (Antes de «y» no se pone coma.)",
          "El **punto y coma** (;) separa partes más largas que la coma pero que no cierran la oración.",
        ],
        tip: "Punto = parada. Coma = pausa pequeña. Punto y coma = pausa mediana.",
      },
      {
        emoji: '❓',
        title: 'Interrogación y exclamación',
        body: [
          "En español las preguntas se escriben entre **¿ ?** y las exclamaciones entre **¡ !**. Siempre se abren y se cierran.",
        ],
        table: {
          head: ['Signo', 'Nombre', 'Ejemplo'],
          rows: [
            ['¿ ?', 'interrogación', '¿Dónde vives?'],
            ['¡ !', 'exclamación', '¡Cuidado!'],
          ],
        },
        tip: "En español no vale solo cerrar: ¡hay que abrir con el signo del revés!",
      },
      {
        emoji: '💬',
        title: 'Comillas, raya y dos puntos',
        body: [
          "Las **comillas** (« ») sirven para **citar palabras textuales**: Dijo «hola».",
          "La **raya** (—) se usa en los **diálogos** para marcar lo que dice cada personaje.",
          "Los **dos puntos** (:) se escriben tras el **saludo** de una carta (Querida Ana:) y antes de una enumeración.",
        ],
        bullets: [
          "—¿Vienes? —preguntó Leo.",
          "Querida abuela:",
          "Necesito tres cosas: lápiz, goma y regla.",
        ],
        tip: "Raya para hablar, comillas para citar, dos puntos para presentar.",
      },
      {
        emoji: '…',
        title: 'Los puntos suspensivos',
        body: [
          "Los **puntos suspensivos** (...) son siempre **tres** y indican que la frase queda **sin terminar**, o que hay duda, suspense o una enumeración abierta.",
        ],
        table: {
          head: ['Signo', 'Nombre'],
          rows: [
            ['.', 'punto'],
            [',', 'coma'],
            [';', 'punto y coma'],
            [':', 'dos puntos'],
            ['...', 'puntos suspensivos'],
            ['—', 'raya'],
          ],
        },
        tip: "Tres puntitos: la frase se queda en el aire...",
      },
    ],
    keyPoints: [
      "El punto cierra la oración; la coma separa elementos de una enumeración.",
      "Las preguntas llevan ¿ ?; las exclamaciones, ¡ !.",
      "Las comillas citan palabras textuales; la raya introduce los diálogos.",
      "Los dos puntos van tras el saludo de una carta.",
      "Los puntos suspensivos son tres y dejan la frase sin terminar.",
    ],
    check: [
      {
        question: "¿Cuál está bien escrita?",
        options: ["¿Qué hora es", "¿Qué hora es?", "Qué hora es?"],
        answer: 1,
      },
      {
        question: "¿Qué signo se escribe tras «Querido Pablo» al empezar una carta?",
        options: ["dos puntos", "coma", "punto"],
        answer: 0,
      },
      {
        question: "¿Para qué sirve la raya (—)?",
        options: ["para sumar", "para marcar lo que dice cada personaje", "para terminar un párrafo"],
        answer: 1,
      },
    ],
  },
];
