import type { Lesson } from '../../types';

export const lessons: Lesson[] = [
  {
    topicId: 'relieve-espana',
    intro: '¡Hola! Soy Pico, el búho sabio. Hoy vamos a recorrer el relieve de España: sus montañas, sus llanuras y sus islas de volcán. ¡Ponte las gafas de exploradora!',
    sections: [
      {
        emoji: '⛰️',
        title: 'Las formas del relieve',
        body: [
          'El **relieve** son las formas que tiene la superficie de la Tierra. Las más importantes son la montaña, la llanura, el valle y la meseta.',
          'Una **montaña** es una elevación del terreno. Una **llanura** es un terreno plano. Un **valle** es un terreno bajo que queda entre montañas y por donde suele pasar un río.',
          'Una **meseta** es una llanura situada a mucha altura, como si fuera una mesa gigante.',
        ],
        tip: 'Meseta suena a «mesa»: ¡una mesa plana pero muy alta!',
      },
      {
        emoji: '🟫',
        title: 'La Meseta Central',
        body: [
          'En el centro de la Península Ibérica está la **Meseta Central**, una gran llanura elevada que ocupa buena parte del territorio.',
          'Una cordillera, el **Sistema Central**, la divide en dos partes: la Submeseta Norte y la Submeseta Sur. Sus sierras más conocidas son **Guadarrama** y **Gredos**.',
        ],
        bullets: ['Meseta Central: gran llanura elevada en el centro', 'Sistema Central: la cordillera que la divide en dos'],
      },
      {
        emoji: '🏔️',
        title: 'Cordilleras importantes',
        body: [
          'Los **Pirineos** están en el norte y separan España de Francia. Allí está el pico **Aneto**.',
          'La **Cordillera Cantábrica** recorre el norte de España, paralela al mar Cantábrico (el mar que baña esa costa).',
          '**Sierra Nevada**, en Granada, tiene el **Mulhacén**, que con 3.479 metros es la montaña más alta de la Península Ibérica.',
        ],
        table: {
          head: ['Montaña', 'Dónde está'],
          rows: [
            ['Aneto', 'Pirineos'],
            ['Mulhacén', 'Sierra Nevada'],
            ['Almanzor', 'Sistema Central'],
            ['Teide', 'Tenerife (Canarias)'],
          ],
        },
        tip: 'Cantábrica y Cantábrico se llaman igual porque están juntos, ¡cordillera y mar!',
      },
      {
        emoji: '🌋',
        title: 'Las islas y el Teide',
        body: [
          'Las **islas Canarias** nacieron de volcanes, por eso son de origen volcánico.',
          'En la isla de **Tenerife**, la más grande de Canarias, está el volcán **Teide**. Mide 3.715 metros y es la montaña más alta de toda España.',
        ],
        tip: 'Teide = Tenerife = la más alta de España. Mulhacén = la más alta de la Península.',
      },
    ],
    keyPoints: [
      'Montaña es una elevación, llanura es terreno plano, valle es terreno bajo entre montañas y meseta es una llanura alta.',
      'La Meseta Central está dividida por el Sistema Central.',
      'Pirineos (Aneto) separan España de Francia; la Cordillera Cantábrica corre junto al mar Cantábrico.',
      'El Mulhacén (Sierra Nevada) es el más alto de la Península; el Teide (Tenerife) es el más alto de España.',
      'Las islas Canarias son de origen volcánico.',
    ],
    check: [
      { question: '¿Qué sierra de las del Sistema Central aparece en la lección junto a Gredos?', options: ['Guadarrama', 'Sierra Nevada', 'Pirineos'], answer: 0 },
      { question: '¿Cuántos metros mide el Teide?', options: ['3.479', '3.715', '2.428'], answer: 1 },
      { question: 'Un terreno plano a mucha altura es...', options: ['un valle', 'una llanura baja', 'una meseta'], answer: 2 },
    ],
  },
  {
    topicId: 'rios-costas-espana',
    intro: '¡Hola, soy Pico! Hoy seguimos el camino del agua: ríos que bajan de las montañas y mares que rodean España. ¡Vamos a navegar!',
    sections: [
      {
        emoji: '💧',
        title: 'Cómo es un río',
        body: [
          'Un río empieza en el **nacimiento**, que puede ser un manantial o una fuente en la montaña, y termina en la **desembocadura**.',
          'La **desembocadura** es el lugar donde el río se une al mar o a otro río.',
        ],
        tip: 'Nacimiento = principio. Desembocadura = final.',
      },
      {
        emoji: '🏞️',
        title: 'Los grandes ríos',
        body: [
          'El **Tajo** es el río más largo de la Península Ibérica (más de 1.000 km). Desemboca en el océano Atlántico, en Portugal.',
          'El **Ebro** desemboca en el mar Mediterráneo y forma allí un delta, en Tarragona. El **Guadalquivir** desemboca en el Atlántico, en el golfo de Cádiz.',
        ],
        table: {
          head: ['Río', 'Ciudad por la que pasa', 'Desemboca en'],
          rows: [
            ['Ebro', 'Zaragoza', 'Mediterráneo'],
            ['Tajo', 'Toledo', 'Atlántico'],
            ['Duero', 'Zamora', 'Atlántico'],
            ['Guadalquivir', 'Córdoba y Sevilla', 'Atlántico'],
          ],
        },
      },
      {
        emoji: '🏙️',
        title: 'El río de Madrid',
        body: [
          'El **Manzanares** es un río pequeño que atraviesa la ciudad de **Madrid**. Es afluente del Jarama.',
          'Muchas ciudades importantes nacieron junto a un río, porque el agua era muy útil para vivir.',
        ],
      },
      {
        emoji: '🌊',
        title: 'Los mares que rodean España',
        body: [
          'El **mar Cantábrico** baña la costa norte: Galicia, Asturias, Cantabria y el País Vasco.',
          'El **mar Mediterráneo** baña la costa este y sur: Cataluña, Valencia, Murcia y Andalucía oriental. El **océano Atlántico** está al oeste.',
          'El **estrecho de Gibraltar** separa Europa de África y une el Atlántico con el Mediterráneo.',
        ],
        table: {
          head: ['Mar', 'Dónde está'],
          rows: [
            ['Mar Cantábrico', 'Norte'],
            ['Mar Mediterráneo', 'Este y sur'],
            ['Océano Atlántico', 'Oeste'],
            ['Estrecho de Gibraltar', 'Separa Europa de África'],
          ],
        },
        tip: 'Mediterráneo = «en medio de las tierras»: es el mar del este y del sur de España.',
      },
    ],
    keyPoints: [
      'El río nace en el nacimiento y termina en la desembocadura.',
      'El Tajo es el más largo de la Península y desemboca en el Atlántico, en Portugal.',
      'El Ebro desemboca en el Mediterráneo; el Guadalquivir, en el Atlántico.',
      'El Manzanares pasa por Madrid; el Guadalquivir, por Córdoba y Sevilla.',
      'El Cantábrico baña el norte, el Mediterráneo el este y sur, y el Atlántico el oeste.',
    ],
    check: [
      { question: '¿Qué río forma un delta en Tarragona?', options: ['Tajo', 'Duero', 'Ebro'], answer: 2 },
      { question: 'Un río termina su recorrido en...', options: ['su desembocadura', 'su nacimiento', 'una montaña'], answer: 0 },
      { question: '¿Qué comunidad baña el mar Cantábrico?', options: ['Valencia', 'Asturias', 'Murcia'], answer: 1 },
    ],
  },
  {
    topicId: 'tiempo-clima',
    intro: '¡Hola, soy Pico! ¿Hoy llueve o hace sol? Eso es el tiempo. Vamos a descubrir qué es el clima y cómo se mide todo con instrumentos.',
    sections: [
      {
        emoji: '🌦️',
        title: 'Tiempo y clima',
        body: [
          'El **tiempo atmosférico** es lo que ocurre hoy: si llueve, hace sol o sopla viento. Cambia casi todos los días.',
          'El **clima** es lo que suele pasar en un lugar durante muchísimos años.',
        ],
        tip: 'El tiempo es de hoy; el clima es de siempre.',
      },
      {
        emoji: '🌡️',
        title: 'Instrumentos del tiempo',
        body: ['Los meteorólogos usan instrumentos para medir el tiempo.'],
        table: {
          head: ['Instrumento', 'Qué mide'],
          rows: [
            ['Termómetro', 'La temperatura'],
            ['Pluviómetro', 'La lluvia'],
            ['Anemómetro', 'La velocidad del viento'],
            ['Barómetro', 'La presión del aire'],
            ['Veleta', 'La dirección del viento'],
          ],
        },
        tip: 'Pluvia = lluvia: pluviómetro. Anemos = viento: anemómetro.',
      },
      {
        emoji: '🌳',
        title: 'Los climas de España (1)',
        body: [
          'El clima **mediterráneo** es el más extendido: inviernos suaves y veranos calurosos y secos. Se da en la costa mediterránea (por ejemplo, en Valencia).',
          'El clima **oceánico** se da en el norte (Galicia, Asturias, Cantabria): llueve mucho y las temperaturas son suaves.',
        ],
      },
      {
        emoji: '🏝️',
        title: 'Los climas de España (2)',
        body: [
          'Las islas **Canarias** tienen clima **subtropical**: temperaturas suaves todo el año y poca lluvia.',
          'En las montañas, como los **Pirineos**, hay clima de **alta montaña**: hace frío y nieva en invierno. Cuanto más alto, más frío.',
        ],
        table: {
          head: ['Clima', 'Dónde'],
          rows: [
            ['Oceánico', 'Galicia'],
            ['Mediterráneo', 'Valencia'],
            ['Subtropical', 'Canarias'],
            ['De montaña', 'Pirineos'],
          ],
        },
      },
    ],
    keyPoints: [
      'El tiempo es lo de hoy; el clima es lo habitual durante muchos años.',
      'Termómetro (temperatura), pluviómetro (lluvia), anemómetro (velocidad del viento), barómetro (presión) y veleta (dirección del viento).',
      'Mediterráneo: veranos calurosos y secos. Oceánico: lluvioso y suave en el norte.',
      'Canarias es subtropical; la alta montaña es fría y con nieve.',
    ],
    check: [
      { question: 'Hoy llueve en el cole. Eso es...', options: ['el clima', 'el tiempo', 'el relieve'], answer: 1 },
      { question: '¿Qué mide el anemómetro?', options: ['La lluvia', 'La temperatura', 'La velocidad del viento'], answer: 2 },
      { question: '¿Dónde hace más frío?', options: ['En la alta montaña', 'En la costa', 'En Canarias'], answer: 0 },
    ],
  },
  {
    topicId: 'comunidades-autonomas',
    intro: '¡Hola, soy Pico! España se organiza en comunidades autónomas, cada una con su capital. Vamos a aprenderlas poco a poco con tablas.',
    sections: [
      {
        emoji: '🗺️',
        title: 'Comunidades y ciudades autónomas',
        body: [
          'España tiene **17 comunidades autónomas** y **2 ciudades autónomas**: **Ceuta** y **Melilla**, que están en el norte de África.',
          'Cada comunidad tiene su capital. La capital de España es **Madrid**, que también es la capital de su comunidad.',
        ],
        tip: '17 comunidades + 2 ciudades = 19 territorios con gobierno propio.',
      },
      {
        emoji: '🧭',
        title: 'Capitales: el sur y el este',
        body: ['Estas son algunas comunidades del sur, el este y las islas.'],
        table: {
          head: ['Comunidad', 'Capital'],
          rows: [
            ['Andalucía', 'Sevilla'],
            ['Cataluña', 'Barcelona'],
            ['Comunidad Valenciana', 'Valencia'],
            ['Región de Murcia', 'Murcia'],
            ['Islas Baleares', 'Palma (de Mallorca)'],
            ['Islas Canarias', 'Las Palmas de Gran Canaria y Santa Cruz de Tenerife'],
          ],
        },
        tip: 'Canarias tiene dos capitales: las dos ciudades comparten la capitalidad.',
      },
      {
        emoji: '🏰',
        title: 'Capitales: el centro y el oeste',
        body: ['Y estas son las del centro, el oeste y la capital del país.'],
        table: {
          head: ['Comunidad', 'Capital'],
          rows: [
            ['Comunidad de Madrid', 'Madrid'],
            ['Castilla-La Mancha', 'Toledo'],
            ['Castilla y León', 'Valladolid (sede de sus instituciones)'],
            ['Extremadura', 'Mérida'],
            ['Galicia', 'Santiago de Compostela'],
            ['Principado de Asturias', 'Oviedo'],
          ],
        },
        tip: 'Mérida tiene un famoso teatro romano.',
      },
      {
        emoji: '⛰️',
        title: 'Capitales: el norte',
        body: ['Por último, las comunidades de la mitad norte.'],
        table: {
          head: ['Comunidad', 'Capital'],
          rows: [
            ['País Vasco', 'Vitoria-Gasteiz'],
            ['Cantabria', 'Santander'],
            ['La Rioja', 'Logroño'],
            ['Navarra', 'Pamplona'],
            ['Aragón', 'Zaragoza'],
          ],
        },
      },
    ],
    keyPoints: [
      'España tiene 17 comunidades autónomas y 2 ciudades autónomas: Ceuta y Melilla.',
      'La capital de España es Madrid.',
      'Canarias comparte capital entre Las Palmas y Santa Cruz de Tenerife.',
      'Repasa las tablas: cada comunidad tiene su capital.',
    ],
    check: [
      { question: '¿Cuántas ciudades autónomas hay?', options: ['2', '17', '5'], answer: 0 },
      { question: '¿Cuál es la capital de Galicia?', options: ['Oviedo', 'Santiago de Compostela', 'Santander'], answer: 1 },
      { question: '¿Cuál es la capital de Aragón?', options: ['Pamplona', 'Logroño', 'Zaragoza'], answer: 2 },
    ],
  },
  {
    topicId: 'comunidad-de-madrid',
    intro: '¡Hola, soy Pico! Vivimos en la Comunidad de Madrid, ¡nuestra casa! Vamos a conocer sus montañas, sus ríos y quién la gobierna.',
    sections: [
      {
        emoji: '🐻',
        title: 'Conociendo Madrid',
        body: [
          'La capital de la Comunidad de Madrid es **Madrid**, que además es la capital de España.',
          'La comunidad tiene **179 municipios**. Uno de ellos es **Alcalá de Henares**, que está al este de Madrid.',
        ],
        tip: '179: un número entre 170 y 190.',
      },
      {
        emoji: '⛰️',
        title: 'Sierras y montañas',
        body: [
          'Al noroeste está la **sierra de Guadarrama**, que pertenece al Sistema Central.',
          'En Guadarrama está **Peñalara**, el pico más alto de la comunidad: mide 2.428 metros. El norte es montañoso y el sur es más llano.',
        ],
      },
      {
        emoji: '🌊',
        title: 'Los ríos de Madrid',
        body: [
          'El **Manzanares** cruza la ciudad de Madrid. El **Jarama** es un río afluente del Tajo.',
          'El **Tajo**, un río importante, pasa por el sur de la comunidad, cerca de Aranjuez.',
        ],
        table: {
          head: ['Elemento', 'Qué es'],
          rows: [
            ['Peñalara', 'Pico más alto'],
            ['Guadarrama', 'Sierra del noroeste'],
            ['Manzanares', 'Río que cruza la capital'],
            ['Jarama', 'Río afluente del Tajo'],
            ['Tajo', 'Río del sur, cerca de Aranjuez'],
          ],
        },
      },
      {
        emoji: '🏛️',
        title: 'Quién gobierna',
        body: [
          'La **Asamblea de Madrid** es el parlamento de la comunidad: hace las leyes. Está formada por diputados elegidos por los madrileños.',
          'El **Gobierno regional** dirige y gestiona la comunidad. Tiene su sede en la **Real Casa de Correos**, en la Puerta del Sol.',
          'Cada municipio tiene un **ayuntamiento**, que lo gobierna, y lo preside el **alcalde**.',
        ],
        table: {
          head: ['Institución', 'Función'],
          rows: [
            ['Asamblea de Madrid', 'Hace las leyes de la comunidad'],
            ['Gobierno regional', 'Dirige y gestiona la comunidad'],
            ['Ayuntamiento', 'Gobierna un municipio'],
            ['Alcalde', 'Preside el ayuntamiento'],
          ],
        },
      },
    ],
    keyPoints: [
      'La capital de la comunidad es Madrid y tiene 179 municipios.',
      'Guadarrama está al noroeste y su pico más alto es Peñalara.',
      'El Manzanares cruza Madrid; el Jarama es afluente del Tajo; el Tajo pasa por el sur.',
      'La Asamblea hace las leyes, el Gobierno regional dirige y el ayuntamiento gobierna el municipio.',
    ],
    check: [
      { question: '¿Dónde tiene su sede el Gobierno de la comunidad?', options: ['Palacio Real', 'Real Casa de Correos', 'Museo del Prado'], answer: 1 },
      { question: '¿Qué municipio está al este de Madrid?', options: ['Alcalá de Henares', 'Aranjuez', 'Segovia'], answer: 0 },
      { question: '¿Quién hace las leyes de la comunidad?', options: ['El alcalde', 'El Gobierno regional', 'La Asamblea de Madrid'], answer: 2 },
    ],
  },
  {
    topicId: 'organizacion-territorial',
    intro: '¡Hola, soy Pico! España se organiza en tres niveles: municipio, comunidad y Estado. Vamos a ver quién manda en cada uno y para qué sirve.',
    sections: [
      {
        emoji: '🏘️',
        title: 'El municipio y el ayuntamiento',
        body: [
          'Un **municipio** es un pueblo o ciudad con su ayuntamiento. Es la unidad más pequeña de la organización territorial.',
          'El **ayuntamiento** lo dirige el **alcalde** (o alcaldesa), junto a los **concejales**. Los vecinos eligen a los concejales y estos eligen al alcalde.',
          'El ayuntamiento se ocupa de los servicios de la localidad, como la recogida de basura y la limpieza de las calles.',
        ],
        tip: 'Alcalde = A de Ayuntamiento. Concejal = C de Concejo (el grupo que ayuda).',
      },
      {
        emoji: '🗺️',
        title: 'La comunidad autónoma',
        body: [
          'Las **comunidades autónomas** gobiernan un territorio más grande que un municipio.',
          'Se ocupan sobre todo de la **sanidad** y la **educación**: los hospitales y los colegios dependen de ellas.',
        ],
      },
      {
        emoji: '🇪🇸',
        title: 'El Estado',
        body: [
          'El Estado gobierna todo el país. España es una **monarquía parlamentaria**: el **rey** es el **jefe del Estado**.',
          'Las leyes se hacen en las **Cortes Generales**, formadas por el **Congreso** (sus miembros son los **diputados**) y el **Senado**.',
          'El **presidente del Gobierno** dirige el Gobierno de España.',
        ],
      },
      {
        emoji: '📜',
        title: 'La Constitución',
        body: [
          'La **Constitución** es la ley más importante de España. Se aprobó en **1978** y todas las leyes deben respetarla.',
        ],
        table: {
          head: ['Institución o cargo', 'Función'],
          rows: [
            ['Ayuntamiento', 'Gobierna un pueblo o ciudad'],
            ['Gobierno autonómico', 'Gobierna una comunidad'],
            ['Gobierno de España', 'Gobierna todo el país'],
            ['Cortes Generales', 'Hacen las leyes de España'],
            ['Rey', 'Jefe del Estado'],
            ['Presidente del Gobierno', 'Dirige el Gobierno de España'],
          ],
        },
      },
    ],
    keyPoints: [
      'Tres niveles: municipio (ayuntamiento), comunidad autónoma y Estado.',
      'El alcalde dirige el ayuntamiento junto a los concejales; este presta servicios como la basura y la limpieza.',
      'Las comunidades se ocupan sobre todo de sanidad y educación.',
      'Las Cortes Generales (Congreso y Senado) hacen las leyes; el rey es el jefe del Estado.',
      'La Constitución, de 1978, es la ley más importante.',
    ],
    check: [
      { question: '¿Quién elige al alcalde?', options: ['Los concejales', 'El rey', 'Los jueces'], answer: 0 },
      { question: 'Un hospital público depende sobre todo de...', options: ['el ayuntamiento', 'la comunidad autónoma', 'el Senado'], answer: 1 },
      { question: 'Los diputados forman parte de...', options: ['un ayuntamiento', 'los tribunales', 'el Congreso'], answer: 2 },
    ],
  },
  {
    topicId: 'prehistoria-edad-antigua',
    intro: '¡Hola, soy Pico! Hoy viajamos muy lejos en el tiempo: desde los cazadores de las cavernas hasta los romanos que llegaron a Hispania. ¡Agárrate!',
    sections: [
      {
        emoji: '🦴',
        title: 'Prehistoria e Historia',
        body: [
          'La **Prehistoria** es la etapa antes de que existiera la escritura. La **Historia** empieza con la **invención de la escritura**, hace unos 5.000 años.',
          'La Prehistoria se divide en etapas: Paleolítico, Neolítico y Edad de los Metales.',
        ],
        tip: 'Escritura = se acaba la Prehistoria y empieza la Historia.',
      },
      {
        emoji: '🏹',
        title: 'Paleolítico y Neolítico',
        body: [
          'En el **Paleolítico** las personas eran **nómadas**: se movían de un lugar a otro y vivían de la **caza y la recolección**. Pintaron en las paredes de las cuevas: son las **pinturas rupestres**.',
          'Las **cuevas de Altamira**, en **Cantabria** (cerca de Santillana del Mar), son famosas por sus bisontes.',
          'En el **Neolítico** aparecieron la **agricultura** y la **ganadería**. Las personas se hicieron sedentarias y formaron poblados.',
        ],
        tip: 'Paleo = antiguo, nómada. Neo = nuevo: ¡agricultores en poblados!',
      },
      {
        emoji: '🔨',
        title: 'La Edad de los Metales',
        body: [
          'Después llegó la **Edad de los Metales**, cuando se usaron el **cobre**, el **bronce** y el **hierro**.',
        ],
        table: {
          head: ['Etapa', 'Forma de vida'],
          rows: [
            ['Paleolítico', 'Cazadores nómadas'],
            ['Neolítico', 'Agricultura y poblados'],
            ['Edad de los Metales', 'Uso de cobre, bronce y hierro'],
            ['Edad Antigua', 'Imperio romano en Hispania'],
          ],
        },
      },
      {
        emoji: '🏛️',
        title: 'Los romanos en Hispania',
        body: [
          'Los romanos llegaron a la Península en el año **218 a. C.** y poco a poco la conquistaron. Los romanos la llamaron **Hispania**. Hablaban **latín**, del que vienen el español, el francés o el italiano.',
          'Construyeron **calzadas** (carreteras que unían las ciudades) y **acueductos** (obras que traen agua a las ciudades). El de **Segovia** tiene unos 2.000 años.',
          'La **Edad Antigua** termina en el año **476**, con la caída del Imperio romano de Occidente.',
        ],
        tip: 'Calzadas = carreteras. Acueducto = acueo (agua) + conducto.',
      },
      {
        emoji: '🗿',
        title: 'Obras romanas que aún vemos',
        body: ['Todavía se conservan muchas obras romanas en España.'],
        table: {
          head: ['Obra', 'Ciudad'],
          rows: [
            ['Acueducto', 'Segovia'],
            ['Teatro romano', 'Mérida'],
            ['Torre de Hércules', 'A Coruña'],
            ['Muralla romana', 'Lugo'],
          ],
        },
      },
    ],
    keyPoints: [
      'La Historia empieza con la escritura, hace unos 5.000 años.',
      'Paleolítico: nómadas, caza y recolección. Neolítico: agricultura, ganadería y poblados.',
      'Edad de los Metales: cobre, bronce y hierro.',
      'Los romanos llegaron en 218 a. C. a Hispania, hablaban latín y construyeron calzadas y acueductos.',
      'La Edad Antigua termina en 476 con la caída del Imperio romano de Occidente.',
    ],
    check: [
      { question: '¿Qué se pintaba en las cuevas del Paleolítico?', options: ['Pinturas rupestres', 'Mapas', 'Cartas'], answer: 0 },
      { question: '¿Qué material NO se usaba en la Edad de los Metales?', options: ['Bronce', 'Plástico', 'Hierro'], answer: 1 },
      { question: '¿Dónde está la muralla romana?', options: ['Segovia', 'A Coruña', 'Lugo'], answer: 2 },
    ],
  },
  {
    topicId: 'paso-del-tiempo',
    intro: '¡Hola, soy Pico! Los historiadores miden el tiempo con años, siglos y milenios. Hoy aprendemos a ordenar el pasado y a leer años como un experto.',
    sections: [
      {
        emoji: '⏳',
        title: 'Medir el tiempo',
        body: [
          'Una **década** son **10 años**. Un **siglo** son **100 años** (diez décadas). Un **milenio** son **1.000 años** (diez siglos).',
          'Los años **a. C.** (antes de Cristo) se cuentan hacia atrás: cuanto mayor es el número, más antiguo es.',
        ],
        tip: 'Década 10, siglo 100, milenio 1.000: cada uno es diez veces el anterior.',
      },
      {
        emoji: '🔢',
        title: 'Los siglos y los números romanos',
        body: [
          'Los siglos se escriben con **números romanos**. El siglo I empezó en el año 1, así que cada siglo termina en un año acabado en 00.',
          'Truco: a los dos primeros números del año, súmale uno (1492 → 14 + 1 = 15, siglo **XV**). Si el año acaba en 00, es el de ese número (el año 2000 es del siglo XX).',
        ],
        table: {
          head: ['Siglo', 'Años'],
          rows: [
            ['Siglo XV', '1401 a 1500'],
            ['Siglo XIX', '1801 a 1900'],
            ['Siglo XX', '1901 a 2000'],
            ['Siglo XXI', '2001 a 2100'],
          ],
        },
        tip: '1999 es del siglo XX; 2024 es del siglo XXI (el XXI empezó en 2001).',
      },
      {
        emoji: '🏺',
        title: 'Las fuentes históricas',
        body: [
          'Una **fuente histórica** es cualquier resto o documento que nos da información sobre el pasado.',
        ],
        table: {
          head: ['Ejemplo', 'Tipo de fuente'],
          rows: [
            ['Una vasija antigua', 'Fuente material'],
            ['Una carta antigua', 'Fuente escrita'],
            ['El relato de un abuelo', 'Fuente oral'],
            ['Una fotografía', 'Fuente gráfica'],
          ],
        },
        tip: 'Material: se toca. Escrita: se lee. Oral: se escucha. Gráfica: se mira.',
      },
      {
        emoji: '⛏️',
        title: 'Arqueólogos y líneas del tiempo',
        body: [
          'Los **arqueólogos** excavan yacimientos para estudiar los restos del pasado.',
          'Una **línea del tiempo** sirve para ordenar los hechos según cuándo ocurrieron. Los hechos más antiguos van a la izquierda.',
        ],
      },
    ],
    keyPoints: [
      'Década = 10 años, siglo = 100 años, milenio = 1.000 años.',
      'Los siglos se escriben con números romanos: 1492 es del siglo XV, 1999 del XX y 2024 del XXI.',
      'Antes de Cristo (a. C.) se cuenta hacia atrás.',
      'Las fuentes históricas pueden ser materiales, escritas, orales o gráficas.',
      'La línea del tiempo ordena los hechos; el arqueólogo excava restos del pasado.',
    ],
    check: [
      { question: '¿Cuántos siglos hay en un milenio?', options: ['10', '100', '5'], answer: 0 },
      { question: '¿A qué siglo pertenece el año 1810?', options: ['XVIII', 'XIX', 'XX'], answer: 1 },
      { question: 'Un diario escrito hace 100 años es una fuente...', options: ['oral', 'material', 'escrita'], answer: 2 },
    ],
  },
];
