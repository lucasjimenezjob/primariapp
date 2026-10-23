import type { Lesson } from '../../types';

export const lessons: Lesson[] = [
  {
    topicId: 'categorias-gramaticales',
    intro: "¡Hola, soy Luna! Hoy repasamos las ocho categorías gramaticales: cada palabra de una oración es como una pieza de construcción con su función. ¡Aprende a reconocerlas todas!",
    sections: [
      {
        emoji: '🧱',
        title: 'Las ocho categorías',
        body: [
          "Todas las palabras se clasifican en **categorías gramaticales** según su función en la oración. Son ocho, y se agrupan en variables e invariables.",
        ],
        table: {
          head: ['Categoría', 'Qué hace', 'Ejemplos'],
          rows: [
            ['Sustantivo', 'nombra seres y cosas', 'casa, Ana'],
            ['Adjetivo', 'dice cómo es el sustantivo', 'veloz, azul'],
            ['Determinante', 'acompaña y presenta al sustantivo', 'el, este, mi'],
            ['Pronombre', 'sustituye al sustantivo', 'ella, nosotras'],
            ['Verbo', 'expresa acciones o estados', 'escribimos, ser'],
            ['Adverbio', 'modifica a verbo, adjetivo u otro adverbio', 'muy, nunca'],
          ],
        },
        tip: "Las que cambian (género, número, persona): sustantivo, adjetivo, determinante, pronombre y verbo. Las **invariables** nunca cambian: adverbio, preposición y conjunción.",
      },
      {
        emoji: '🤝',
        title: 'Sustantivo, adjetivo, determinante y pronombre',
        body: [
          "El **sustantivo** es el núcleo: nombra. El **adjetivo** lo describe y el **determinante** lo acompaña y lo presenta (artículos, demostrativos, posesivos...).",
          "El **pronombre** hace de sustituto del sustantivo para no repetirlo: «Ana llegó y **ella** saludó».",
        ],
        bullets: [
          "**Este** libro **azul** → este (determinante), libro (sustantivo), azul (adjetivo).",
          "**Nosotras** escribimos → nosotras (pronombre), escribimos (verbo).",
          "Un pronombre va **solo**; un determinante va **con** un sustantivo.",
        ],
        tip: "Si la palabra acompaña a un nombre es determinante; si lo reemplaza, pronombre.",
      },
      {
        emoji: '🏷️',
        title: 'El adverbio',
        body: [
          "El **adverbio** es invariable (no cambia nunca) y **modifica** a un verbo, a un adjetivo o a otro adverbio. Muchos acaban en **-mente**: rápidamente.",
          "Hay adverbios de varias clases según lo que expresan.",
        ],
        table: {
          head: ['Clase', 'Ejemplos'],
          rows: [
            ['Tiempo', 'ayer, hoy, mañana, siempre'],
            ['Lugar', 'aquí, allí, cerca, lejos'],
            ['Modo', 'bien, despacio, rápidamente'],
            ['Cantidad', 'muy, poco, mucho, bastante'],
            ['Afirmación / negación', 'sí, claro / no, nunca, tampoco'],
            ['Duda', 'quizá, acaso, tal vez'],
          ],
        },
        tip: "En «Iré mañana», mañana es adverbio de tiempo. En «corre muy rápido», muy modifica a rápido.",
      },
      {
        emoji: '🔗',
        title: 'Preposición y conjunción',
        body: [
          "Las **preposiciones** son palabras invariables que introducen complementos. Hay una lista cerrada que conviene aprender: **a, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, so, sobre, tras**.",
          "Las **conjunciones** son palabras invariables que **unen** palabras u oraciones: **y, o, pero, aunque, porque, ni, que**.",
        ],
        bullets: [
          "Preposición: voy **a** casa, café **con** leche, juguete **de** madera, vivo **en** Madrid, el libro está **sobre** la mesa.",
          "Conjunción: pan **y** queso, quiero ir **pero** llueve, no salgo **porque** estoy enfermo, iré **aunque** llueva.",
        ],
        tip: "Preposición = introduce un complemento. Conjunción = pega dos cosas.",
      },
    ],
    keyPoints: [
      "Hay ocho categorías: sustantivo, adjetivo, determinante, pronombre, verbo, adverbio, preposición y conjunción.",
      "El determinante acompaña al sustantivo; el pronombre lo sustituye.",
      "El adverbio modifica a un verbo, un adjetivo u otro adverbio, y no varía.",
      "Las preposiciones introducen complementos: a, ante, bajo, con, de, en, sobre...",
      "Las conjunciones unen palabras u oraciones: y, o, pero, aunque, porque.",
    ],
    check: [
      {
        question: "En «Mi casa está cerca», la palabra «cerca» es...",
        options: ["adjetivo", "adverbio de lugar", "preposición"],
        answer: 1,
      },
      {
        question: "¿Qué palabra es una preposición?",
        options: ["entre", "pero", "ellos"],
        answer: 0,
      },
      {
        question: "En «Quiero té o café», la palabra «o» es...",
        options: ["pronombre", "conjunción", "adverbio"],
        answer: 1,
      },
    ],
  },
  {
    topicId: 'verbo',
    intro: "¡Hola, soy Luna! Hoy vamos a estudiar el verbo a fondo: sus modos, sus tiempos simples y compuestos, y los verbos irregulares. ¡Prepárate para conjugar como una experta!",
    sections: [
      {
        emoji: '🎭',
        title: 'Los tres modos',
        body: [
          "El **modo** indica la actitud de quien habla ante lo que dice. Hay tres modos verbales.",
        ],
        table: {
          head: ['Modo', 'Expresa', 'Ejemplo'],
          rows: [
            ['Indicativo', 'hechos reales', 'Ayer comimos pasta'],
            ['Subjuntivo', 'deseo, duda o posibilidad', 'Ojalá llueva mañana'],
            ['Imperativo', 'órdenes o ruegos', 'Cierra la puerta'],
          ],
        },
        tip: "Indicativo = lo que es. Subjuntivo = lo que desearías o dudas. Imperativo = lo que ordenas.",
      },
      {
        emoji: '🕰️',
        title: 'Tiempos simples',
        body: [
          "Los **tiempos simples** se forman con **una sola palabra**. Los principales del indicativo son:",
        ],
        table: {
          head: ['Tiempo', 'Ejemplo (cantar)', 'Idea'],
          rows: [
            ['Presente', 'canto', 'ocurre ahora'],
            ['Pretérito imperfecto', 'cantaba', 'pasado en desarrollo'],
            ['Pretérito perfecto simple', 'canté, cantó', 'pasado terminado'],
            ['Futuro simple', 'cantaré', 'ocurrirá después'],
          ],
        },
        tip: "Mañana → cantaré (futuro). Ayer → canté (pretérito perfecto simple).",
      },
      {
        emoji: '🧳',
        title: 'Tiempos compuestos y participio',
        body: [
          "Los **tiempos compuestos** se forman con el verbo auxiliar **haber** + el **participio** del verbo. Ejemplo: **he cantado**.",
          "El **participio** se forma así: verbos en -ar → **-ado** (cantar → cantado); verbos en -er e -ir → **-ido** (beber → bebido, vivir → vivido).",
        ],
        table: {
          head: ['Tiempo compuesto', 'Ejemplo'],
          rows: [
            ['Pretérito perfecto compuesto', 'he cantado'],
            ['Pretérito pluscuamperfecto', 'había comido, habíamos comido'],
            ['Futuro compuesto', 'habré salido'],
          ],
        },
        bullets: [
          "Algunos participios son **irregulares**: decir → **dicho**, hacer → **hecho**, ver → **visto**, escribir → **escrito**, poner → puesto.",
          "Así, «hemos dicho» es del infinitivo **decir**.",
        ],
        tip: "Tiempos compuestos = HABER + participio. «Habíamos comido» es pluscuamperfecto.",
      },
      {
        emoji: '🔀',
        title: 'Verbos irregulares',
        body: [
          "Un verbo es **regular** si su raíz no cambia y sus desinencias son las normales (cantar, saltar). Es **irregular** si cambia su raíz o sus desinencias.",
        ],
        table: {
          head: ['Infinitivo', '1.ª persona del presente'],
          rows: [
            ['ir', 'voy'],
            ['tener', 'tengo'],
            ['hacer', 'hago'],
            ['decir', 'digo'],
            ['caber', 'quepo'],
            ['ser', 'soy'],
          ],
        },
        tip: "Si el verbo cambia su raíz al conjugarlo (tener → tengo), es irregular.",
      },
    ],
    keyPoints: [
      "Modos: indicativo (hechos), subjuntivo (deseo, duda) e imperativo (órdenes).",
      "Los tiempos simples tienen una sola palabra: canto, cantaba, canté, cantaré.",
      "Los tiempos compuestos = haber + participio: he cantado, había comido.",
      "Participios: -ado en los verbos en -ar; -ido en -er e -ir; algunos irregulares (dicho, hecho).",
      "Los verbos irregulares cambian su raíz: tener → tengo, ir → voy.",
    ],
    check: [
      {
        question: "¿Cuál es el participio de «salir»?",
        options: ["salido", "salado", "salída"],
        answer: 0,
      },
      {
        question: "«Ojalá vengas pronto» está en modo...",
        options: ["imperativo", "indicativo", "subjuntivo"],
        answer: 2,
      },
      {
        question: "¿Qué forma es un tiempo compuesto?",
        options: ["había leído", "leíamos", "leeré"],
        answer: 0,
      },
    ],
  },
  {
    topicId: 'oracion-sintaxis',
    intro: "¡Hola, soy Luna! Hoy exploramos por dentro la oración: su sujeto, su predicado y los complementos del verbo. ¡Serás una detective de la sintaxis!",
    sections: [
      {
        emoji: '🧩',
        title: 'Sujeto y predicado',
        body: [
          "La oración tiene dos partes: el **sujeto** (de quien se dice algo; responde a ¿quién?) y el **predicado** (lo que se dice del sujeto). El núcleo del predicado es siempre un **verbo**.",
          "El sujeto no siempre va antes del verbo: «Llegaron **los invitados**» (¿quién llegó? los invitados).",
        ],
        bullets: [
          "Ana come manzanas → sujeto: **Ana**; predicado: come manzanas; núcleo: **come**.",
          "Cuando el sujeto es omitido, se deduce por el verbo: «Cantamos» → nosotros.",
        ],
        tip: "Para el sujeto, pregunta ¿quién? al verbo y comprueba que concuerdan.",
      },
      {
        emoji: '🧷',
        title: 'Predicado nominal y verbal',
        body: [
          "Cuando el verbo es **copulativo** (**ser, estar, parecer**) el predicado es **nominal** y lleva un **atributo**, que dice cómo es o qué es el sujeto.",
          "Con cualquier otro verbo (correr, jugar, leer) el predicado es **verbal**.",
        ],
        table: {
          head: ['Oración', 'Predicado', 'Atributo'],
          rows: [
            ['Mi madre es médica', 'nominal', 'médica'],
            ['El cielo está azul', 'nominal', 'azul'],
            ['Ella es ingeniera', 'nominal', 'ingeniera'],
            ['Los niños juegan al fútbol', 'verbal', 'no tiene'],
          ],
        },
        tip: "Ser, estar, parecer: verbo copulativo → atributo → predicado nominal.",
      },
      {
        emoji: '🍕',
        title: 'Complemento directo e indirecto',
        body: [
          "El **complemento directo (CD)** es lo que recibe directamente la acción del verbo. Responde a **¿qué?** o **¿a quién?** + verbo. Se puede sustituir por **lo, la, los, las**.",
          "El **complemento indirecto (CI)** indica el destinatario de la acción. Responde a **¿a quién?** o **¿para quién?** y suele llevar la preposición **a** o **para**. Se puede sustituir por **le, les**.",
        ],
        bullets: [
          "Comimos **paella** → ¿qué comimos? CD: paella (la comimos).",
          "Leo **un cuento** → ¿qué leo? CD: un cuento.",
          "Di el libro **a Ana** → ¿a quién se lo di? CI: a Ana (le di el libro).",
          "Di flores **a mi abuela** → CD: flores; CI: a mi abuela.",
        ],
        tip: "CD: ¿qué? CI: ¿a quién? Ejemplo: Regalo flores a mi madre → flores (qué), a mi madre (a quién).",
      },
      {
        emoji: '📍',
        title: 'Complementos circunstanciales',
        body: [
          "Los **complementos circunstanciales (CC)** nos dan información sobre **cuándo, dónde, cómo, cuánto** o con qué ocurre la acción.",
        ],
        table: {
          head: ['Tipo', 'Pregunta', 'Ejemplo'],
          rows: [
            ['De lugar', '¿dónde?', 'Vivo en Madrid'],
            ['De tiempo', '¿cuándo?', 'Llegué ayer'],
            ['De modo', '¿cómo?', 'Camina despacio'],
            ['De compañía', '¿con quién?', 'Voy con mi amiga'],
          ],
        },
        tip: "Los CC suelen poder cambiar de sitio: «Ayer llegué» o «Llegué ayer».",
      },
    ],
    keyPoints: [
      "La oración se divide en sujeto (¿quién?) y predicado (lo que se dice del sujeto).",
      "Con ser, estar y parecer (copulativos) el predicado es nominal y lleva atributo.",
      "El complemento directo responde a ¿qué? o ¿a quién? y se sustituye por lo, la, los, las.",
      "El complemento indirecto responde a ¿a quién? o ¿para quién? y se sustituye por le, les.",
      "Los circunstanciales indican lugar (¿dónde?), tiempo (¿cuándo?), modo (¿cómo?)...",
    ],
    check: [
      {
        question: "En «Mi hermano está cansado», el atributo es...",
        options: ["Mi hermano", "cansado", "está"],
        answer: 1,
      },
      {
        question: "En «Compré un regalo a Laura», el complemento indirecto es...",
        options: ["un regalo", "a Laura", "Compré"],
        answer: 1,
      },
      {
        question: "En «Estudio por la tarde», «por la tarde» es circunstancial de...",
        options: ["lugar", "modo", "tiempo"],
        answer: 2,
      },
    ],
  },
  {
    topicId: 'tipos-oraciones',
    intro: "¡Hola, soy Luna! Hoy aprenderemos que las oraciones se clasifican según la intención de quien las dice: preguntar, ordenar, desear... ¡Son seis tipos!",
    sections: [
      {
        emoji: '🗨️',
        title: 'Oraciones según la actitud del hablante',
        body: [
          "Las oraciones se clasifican según lo que **quiere expresar** el hablante. Es lo que se llama su **modalidad**.",
        ],
        table: {
          head: ['Tipo', 'Expresa', 'Ejemplo'],
          rows: [
            ['Enunciativa', 'un hecho', 'Hoy hace sol.'],
            ['Interrogativa', 'una pregunta', '¿Vienes a mi fiesta?'],
            ['Exclamativa', 'una emoción', '¡Qué día tan bonito!'],
            ['Exhortativa', 'una orden o ruego', 'Pásame la sal.'],
            ['Dubitativa', 'duda o probabilidad', 'Quizás llegue tarde.'],
            ['Desiderativa', 'un deseo', 'Ojalá apruebe.'],
          ],
        },
        tip: "Pregunta clave: ¿qué quiere hacer quien habla? ¿Contar, preguntar, sentir, ordenar, dudar o desear?",
      },
      {
        emoji: '✅',
        title: 'Enunciativas: afirmativas y negativas',
        body: [
          "Las **enunciativas** cuentan o enuncian un hecho. Pueden ser **afirmativas** o **negativas**.",
          "Las negativas llevan una palabra de negación (**no, nunca, tampoco, nada**).",
        ],
        bullets: [
          "Afirmativa: Hoy hace sol. / Me gusta el chocolate.",
          "Negativa: **No** me gusta el brócoli. / **Nunca** llego tarde. / **No** tengo frío.",
        ],
        tip: "Si hay un «no», «nunca» o «tampoco», es enunciativa negativa.",
      },
      {
        emoji: '📣',
        title: 'Exhortativas, dubitativas y desiderativas',
        body: [
          "Las **exhortativas** (o imperativas) expresan una **orden, ruego o consejo**: Cierra la ventana. Siéntate. Ven aquí.",
          "Las **dubitativas** expresan **duda o probabilidad** y llevan palabras como quizá, quizás, tal vez, acaso, probablemente: Tal vez vaya.",
          "Las **desiderativas** expresan un **deseo** y suelen empezar por **ojalá**: Ojalá nieve.",
        ],
        bullets: [
          "Exhortativa: Pásame la sal. / Ven aquí.",
          "Dubitativa: Quizás llegue tarde. / Probablemente llueva.",
          "Desiderativa: Ojalá apruebe el examen. / Que tengas suerte.",
        ],
        tip: "Quizás = duda. Ojalá = deseo. Orden = exhortativa.",
      },
    ],
    keyPoints: [
      "La modalidad depende de la intención de quien habla.",
      "Enunciativa: cuenta un hecho (afirmativa o negativa).",
      "Interrogativa pregunta y exclamativa expresa emoción.",
      "Exhortativa: orden o ruego; dubitativa: duda; desiderativa: deseo.",
    ],
    check: [
      {
        question: "«Tal vez nos veamos mañana» es una oración...",
        options: ["desiderativa", "exclamativa", "dubitativa"],
        answer: 2,
      },
      {
        question: "«No he terminado todavía» es una oración...",
        options: ["enunciativa negativa", "exhortativa", "interrogativa"],
        answer: 0,
      },
      {
        question: "«Ojalá haga buen tiempo» expresa...",
        options: ["una orden", "un deseo", "una pregunta"],
        answer: 1,
      },
    ],
  },
  {
    topicId: 'acentuacion',
    intro: "¡Hola, soy Luna! Hoy repasamos las vocales que viajan juntas (diptongos, hiatos y triptongos) y la tilde diacrítica, que distingue palabras gemelas. ¡Será pan comido!",
    sections: [
      {
        emoji: '🔤',
        title: 'Vocales abiertas y cerradas',
        body: [
          "Las vocales se dividen en **abiertas o fuertes** (**a, e, o**) y **cerradas o débiles** (**i, u**).",
          "Según cómo se combinan dentro de una palabra, forman diptongos, hiatos o triptongos.",
        ],
        tip: "Abiertas: a, e, o (la boca se abre). Cerradas: i, u.",
      },
      {
        emoji: '🤏',
        title: 'Diptongo y triptongo',
        body: [
          "Un **diptongo** es un grupo de **dos vocales en la misma sílaba**. Se forma con vocal abierta + cerrada (**ai**re, **au**la), cerrada + abierta (cie-lo, hue-vo) o dos cerradas distintas (ciu-dad).",
          "Un **triptongo** es un grupo de **tres vocales** en la misma sílaba: cerrada + abierta + cerrada, como en **estudiáis** (-iái-) o **buey** (uey).",
        ],
        bullets: [
          "Diptongos: **ai**re, **cau**sa, **cie**lo, **ciu**dad.",
          "Triptongos: estud**iái**s, b**uey**, Urug**uay**.",
        ],
        tip: "Diptongo = 2 vocales en 1 sílaba. Triptongo = 3 vocales en 1 sílaba.",
      },
      {
        emoji: '✂️',
        title: 'Hiato',
        body: [
          "Un **hiato** son dos vocales juntas que se pronuncian en **sílabas distintas**. Hay dos casos:",
        ],
        bullets: [
          "**Dos vocales abiertas** (a, e, o) siempre se separan: ca-os, te-a-tro, po-e-ta.",
          "**Vocal cerrada tónica + abierta** (o al revés): la cerrada lleva **tilde** y se rompe el diptongo: **pa-ís**, **ba-úl**, ma-íz, rí-o.",
        ],
        tip: "Si la i o la u lleva la tilde, no puede formar diptongo: ¡hiato! (país, baúl).",
      },
      {
        emoji: '🎩',
        title: 'La tilde diacrítica',
        body: [
          "La **tilde diacrítica** distingue palabras que se escriben igual pero tienen distinta función o significado. Las **monosílabas** normalmente no llevan tilde, salvo en estos pares.",
        ],
        table: {
          head: ['Con tilde', 'Sin tilde'],
          rows: [
            ['tú (pronombre personal)', 'tu (posesivo)'],
            ['él (pronombre personal)', 'el (artículo)'],
            ['mí (pronombre personal)', 'mi (posesivo)'],
            ['sí (afirmación)', 'si (condicional)'],
            ['té (bebida)', 'te (pronombre)'],
            ['sé (verbo saber / ser)', 'se (pronombre)'],
          ],
        },
        bullets: [
          "**Tú** juegas con **tu** pelota.",
          "**Sí**, **si** quieres puedes venir.",
          "Para **mí**, **mi** casa es la mejor.",
        ],
        tip: "Si puedes cambiarla por «yo» o por «a ti», lleva tilde (tú, mí).",
      },
    ],
    keyPoints: [
      "Vocales abiertas: a, e, o. Cerradas: i, u.",
      "Diptongo: dos vocales en la misma sílaba. Triptongo: tres.",
      "Hiato: vocales en sílabas distintas (dos abiertas, o cerrada tónica con tilde: país, baúl).",
      "La tilde diacrítica distingue tú/tu, él/el, mí/mi, sí/si, té/te, sé/se.",
    ],
    check: [
      {
        question: "¿Qué palabra tiene un hiato?",
        options: ["cuidado", "reír", "viaje"],
        answer: 1,
      },
      {
        question: "Completa: «¿Quieres un ___ con leche?» (bebida).",
        options: ["te", "tè", "té"],
        answer: 2,
      },
      {
        question: "¿En cuál de estas palabras hay un triptongo?",
        options: ["limpiáis", "peine", "poeta"],
        answer: 0,
      },
    ],
  },
  {
    topicId: 'ortografia',
    intro: "¡Hola, soy Luna! Hoy repasamos reglas de ortografía muy útiles: h, x, g/j, b/v, ll/y... ¡y cuándo usar haya, halla y aya! Con ellas, adiós a las faltas.",
    sections: [
      {
        emoji: '❌',
        title: 'La letra x y la m antes de p y b',
        body: [
          "La **x** aparece en palabras que empiezan por **extra-** (extraño, extraordinario), por **ex-** seguido de **pl** o **pr** (explicar, exprimir) y en otras que hay que memorizar, como **examen**, **extranjero** o exacto.",
          "Antes de **p** y **b** siempre se escribe **m**, nunca n: **compañero**, campo, también, hombre, cambiar.",
        ],
        tip: "Antes de p y b, siempre m: compañero, hombre, también.",
      },
      {
        emoji: '🅷',
        title: 'La letra h y haya / halla / aya',
        body: [
          "Llevan h las palabras que empiezan por **hum-** (humo, **humedad**, húmedo), por **hue-** (huevo, hueso) y por **hie-** (hielo, hierro).",
          "Cuidado con las palabras que suenan igual:",
        ],
        table: {
          head: ['Palabra', 'Significado', 'Ejemplo'],
          rows: [
            ['haya', 'verbo haber (o el árbol)', 'Espero que haya buen tiempo'],
            ['halla', 'verbo hallar (encontrar)', 'Ella halla la solución'],
            ['aya', 'persona que cuida niños', 'El aya cuidaba al príncipe'],
          ],
        },
        tip: "Si puedes cambiarlo por «encuentra», es halla. Si va con un participio (haya comido), es haya.",
      },
      {
        emoji: '🅱️',
        title: 'Terminaciones con b y con g/j',
        body: [
          "El **pretérito imperfecto** de los verbos en **-ar** se escribe siempre con **b**: cantaba, jugaba, saltaba, **llevaba**. También el de **ir**: iba.",
          "Los verbos acabados en **-ger** se escriben con **g**: coger, proteger, escoger, recoger. (Excepciones: tejer, crujir.) Lo mismo en **-gir**: dirigir.",
          "También se escriben con **g** las palabras que empiezan por **gira-** (**girasol**, girar) y con **j** las acabadas en **-aje** (**viaje**).",
        ],
        bullets: [
          "Lleva **b**: cantaba, jugaba, caminaba, llevaba.",
          "Lleva **g**: coger (yo **cojo**), proteger (yo **protejo**), girasol.",
          "Acabadas en **-aje**: viaje, paisaje, equipaje, mensaje.",
        ],
        tip: "-aba siempre con b. Si es -ger/-gir, el infinitivo lleva g aunque yo «cojo» lleve j.",
      },
      {
        emoji: '🅈',
        title: 'Y y LL',
        body: [
          "Se escribe **ll** en muchas palabras que hay que memorizar: **calle**, lluvia, llave, pollo, llamar.",
          "Se escribe **y** en palabras como **ayuda**, **apoyo**, ayer, playa, rayo, mayo. También se escribe **y** como conjunción («pan y queso») y al final de palabra: hoy, rey, muy.",
        ],
        table: {
          head: ['Con ll', 'Con y'],
          rows: [
            ['calle', 'ayuda'],
            ['lluvia', 'apoyo'],
            ['llave', 'playa'],
            ['pollo', 'mayo'],
          ],
        },
        tip: "El verbo ayudar y todos sus derivados (ayuda, ayudante) llevan y.",
      },
    ],
    keyPoints: [
      "Antes de p y b se escribe m: compañero.",
      "Llevan h hum-, hue-, hie-: humedad, huevo, hielo.",
      "Haya = verbo haber; halla = verbo hallar; aya = niñera.",
      "El imperfecto en -aba lleva b; los verbos en -ger/-gir llevan g.",
      "Con ll: calle, lluvia. Con y: ayuda, apoyo. Con x: examen, extranjero.",
    ],
    check: [
      {
        question: "Completa: «Ayer ___ al parque a pie.» (verbo ir, imperfecto, 1.ª persona).",
        options: ["iva", "iba", "hiba"],
        answer: 1,
      },
      {
        question: "¿Qué palabra está bien escrita?",
        options: ["canpo", "cambo", "campo"],
        answer: 2,
      },
      {
        question: "Completa: «Quiero que ___ paz en el mundo.»",
        options: ["haya", "halla", "aya"],
        answer: 0,
      },
    ],
  },
  {
    topicId: 'vocabulario',
    intro: "¡Hola, soy Luna! Las palabras tienen mil trucos: pueden significar varias cosas, sonar igual o formarse uniendo otras. Hoy los descubrimos todos.",
    sections: [
      {
        emoji: '🃏',
        title: 'Polisemia',
        body: [
          "Una palabra **polisémica** tiene **varios significados relacionados** entre sí. Su origen es el mismo.",
        ],
        bullets: [
          "**Hoja**: de un árbol, de papel o de una puerta.",
          "**Pie**: del cuerpo, de una montaña o de una foto.",
          "**Cabeza**: del cuerpo o de una fila (cabeza de la manifestación).",
        ],
        tip: "Polisemia: poli = muchos, sema = significado. ¡Muchos significados con relación!",
      },
      {
        emoji: '🔊',
        title: 'Palabras homófonas',
        body: [
          "Las **homófonas** son palabras que **suenan igual** pero se **escriben distinto** y significan cosas distintas.",
        ],
        table: {
          head: ['Palabra', 'Significado', 'Su homófona'],
          rows: [
            ['hola', 'saludo', 'ola (del mar)'],
            ['vaca', 'animal', 'baca (del coche)'],
            ['tuvo', 'de tener', 'tubo (cilindro)'],
            ['hecho', 'de hacer', 'echo (de echar)'],
            ['bello', 'hermoso', 'vello (pelo)'],
            ['cabo', 'extremo', 'cavo (de cavar)'],
          ],
        },
        tip: "Suenan igual pero su ortografía cambia: usa el contexto para elegir.",
      },
      {
        emoji: '🧱',
        title: 'Palabras simples, compuestas y derivadas',
        body: [
          "Las palabras **simples** tienen una sola raíz (pan, sol). Las **compuestas** se forman uniendo **dos o más palabras**. Las **derivadas** se forman añadiendo **prefijos o sufijos** a una raíz.",
        ],
        table: {
          head: ['Tipo', 'Cómo se forma', 'Ejemplo'],
          rows: [
            ['Simple', 'una raíz', 'pan, zapato'],
            ['Compuesta', 'dos palabras', 'paraguas (para + aguas)'],
            ['Compuesta', 'verbo + sustantivo', 'abrelatas, sacacorchos'],
            ['Derivada', 'raíz + sufijo', 'panadero, zapatería'],
            ['Derivada', 'prefijo + raíz', 'deshacer, imposible'],
          ],
        },
        tip: "Compuesta = 2 palabras con vida propia. Derivada = raíz + pieza que no existe sola (-ero, des-).",
      },
      {
        emoji: '🗂️',
        title: 'Campos semánticos',
        body: [
          "Un **campo semántico** es un grupo de palabras que se refieren a un mismo **tema** o ámbito.",
        ],
        table: {
          head: ['Campo semántico', 'Palabras'],
          rows: [
            ['frutas', 'manzana, pera, naranja'],
            ['herramientas', 'martillo, sierra, destornillador'],
            ['colores', 'rojo, azul, verde'],
            ['instrumentos', 'guitarra, violín, flauta'],
            ['cocina', 'sartén, olla, cuchillo'],
            ['hortalizas', 'zanahoria, lechuga'],
          ],
        },
        tip: "Cada palabra «encaja» en un tema: la zanahoria es hortaliza, no fruta.",
      },
    ],
    keyPoints: [
      "Palabra polisémica: varios significados relacionados (hoja).",
      "Homófonas: suenan igual y se escriben distinto (hola/ola, vaca/baca).",
      "Compuestas: dos palabras unidas (paraguas, abrelatas).",
      "Derivadas: raíz + prefijo o sufijo (panadero, deshacer).",
      "Campo semántico: palabras del mismo tema.",
    ],
    check: [
      {
        question: "«Sacapuntas» es una palabra...",
        options: ["derivada", "compuesta", "simple"],
        answer: 1,
      },
      {
        question: "¿Qué palabra NO pertenece al campo semántico de los instrumentos musicales?",
        options: ["trompeta", "tambor", "tijeras"],
        answer: 2,
      },
      {
        question: "«Bello» y «vello» son palabras...",
        options: ["homófonas", "polisémicas", "compuestas"],
        answer: 0,
      },
    ],
  },
  {
    topicId: 'literatura',
    intro: "¡Hola, soy Luna! La literatura es mi pasión. Hoy repasamos los géneros literarios, cómo riman los versos y las figuras que hacen bello el lenguaje.",
    sections: [
      {
        emoji: '📚',
        title: 'Los tres géneros literarios',
        body: [
          "Los textos literarios se agrupan en tres **géneros**, según cómo se escriben.",
        ],
        table: {
          head: ['Género', 'Cómo es', 'Ejemplos'],
          rows: [
            ['Narrativo', 'cuenta una historia en prosa', 'novela, cuento, fábula'],
            ['Lírico', 'expresa sentimientos en verso', 'poema, canción'],
            ['Dramático', 'se escribe para ser representado', 'obra de teatro'],
          ],
        },
        tip: "Narrar = cuento y novela. Lírico = poesía en verso. Dramático = teatro.",
      },
      {
        emoji: '🎼',
        title: 'Verso y estrofa',
        body: [
          "Cada línea de un poema es un **verso**. Un grupo de versos forma una **estrofa**.",
          "El nombre de la estrofa depende del número de versos.",
        ],
        table: {
          head: ['Estrofa', 'Número de versos'],
          rows: [
            ['Pareado', '2 versos'],
            ['Terceto', '3 versos'],
            ['Cuarteta', '4 versos'],
            ['Quintilla', '5 versos'],
            ['Sextilla', '6 versos'],
          ],
        },
        tip: "Pareado = pareja (2). Terceto = tres. Cuarteta = cuatro. Quintilla = cinco.",
      },
      {
        emoji: '🎵',
        title: 'La rima',
        body: [
          "La **rima** es la coincidencia de sonidos al final de los versos, a partir de la **última vocal acentuada**.",
          "Si coinciden **todos** los sonidos (vocales y consonantes) la rima es **consonante**. Si solo coinciden las **vocales**, es **asonante**.",
        ],
        table: {
          head: ['Pareja', 'Rima', 'Por qué'],
          rows: [
            ['mano - hermano', 'consonante', 'coincide -ano'],
            ['casa - pasa', 'consonante', 'coincide -asa'],
            ['luna - uva', 'asonante', 'solo coinciden u-a'],
            ['cielo - viento', 'asonante', 'solo coinciden e-o'],
          ],
        },
        tip: "Consonante = todo igual. Asonante = solo vocales iguales.",
      },
      {
        emoji: '✨',
        title: 'Figuras literarias',
        body: [
          "Las **figuras literarias** son recursos que hacen más bello y expresivo el lenguaje.",
        ],
        table: {
          head: ['Figura', 'Qué hace', 'Ejemplo'],
          rows: [
            ['Comparación (símil)', 'une dos cosas con «como»', 'Blanco como la nieve'],
            ['Metáfora', 'identifica una cosa con otra, sin «como»', 'Tus dientes son perlas'],
            ['Personificación', 'da cualidades humanas a cosas o animales', 'El viento susurra'],
            ['Hipérbole', 'exagera la realidad', 'Estoy muerto de sueño'],
          ],
        },
        tip: "Con «como» → comparación. Sin «como» → metáfora. Exagera → hipérbole. Actúa como persona → personificación.",
      },
    ],
    keyPoints: [
      "Géneros: narrativo (cuento, novela), lírico (poesía en verso) y dramático (teatro).",
      "Cada línea de un poema es un verso; la cuarteta tiene cuatro versos.",
      "Rima consonante: coinciden todas las letras; asonante: solo las vocales.",
      "Comparación (como), metáfora (identifica), personificación (humaniza), hipérbole (exagera).",
    ],
    check: [
      {
        question: "«Sus ojos son estrellas» es una...",
        options: ["comparación", "metáfora", "hipérbole"],
        answer: 1,
      },
      {
        question: "«Corazón» y «canción» tienen rima...",
        options: ["asonante", "libre", "consonante"],
        answer: 2,
      },
      {
        question: "Una estrofa de tres versos se llama...",
        options: ["terceto", "pareado", "cuarteta"],
        answer: 0,
      },
    ],
  },
];
