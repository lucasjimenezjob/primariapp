import type { Lesson } from '../../types';

export const lessons: Lesson[] = [
  {
    topicId: 'relieve-rios-clima',
    intro: '¡Hola, soy Pico! Hoy damos la vuelta a España y a Europa siguiendo sus ríos, sus cordilleras y sus climas. ¡Saca tu mapa mental!',
    sections: [
      {
        emoji: '🏞️',
        title: 'Los ríos de España',
        body: [
          'El **Tajo** es el río más largo de la Península Ibérica. Nace en la sierra de Albarracín y desemboca en el Atlántico, en Lisboa.',
          'El **Ebro** desemboca en el mar **Mediterráneo**, donde forma un delta.',
        ],
        tip: 'Tajo = el más largo de la Península. Ebro = delta en el Mediterráneo.',
      },
      {
        emoji: '⛰️',
        title: 'Las cordilleras',
        body: [
          'Los **Pirineos** separan Francia y España y están en el norte de España.',
          'Los **Alpes** atraviesan Suiza, Austria, Francia e Italia. Son la cordillera más extensa de Europa occidental.',
        ],
      },
      {
        emoji: '🌊',
        title: 'Los grandes ríos de Europa',
        body: [
          'El **Volga**, en Rusia, es el río más largo de Europa y desemboca en el mar Caspio.',
          'El **Danubio** es el segundo más largo. Atraviesa diez países, pasa por **Viena**, Bratislava, **Budapest** y Belgrado, y desemboca en el **mar Negro**.',
        ],
        table: {
          head: ['Río', 'Ciudad', 'Desemboca en'],
          rows: [
            ['Sena', 'París', 'Canal de la Mancha'],
            ['Támesis', 'Londres', 'Mar del Norte'],
            ['Tíber', 'Roma', 'Mar Tirreno (Mediterráneo)'],
            ['Danubio', 'Viena', 'Mar Negro'],
            ['Volga', '—', 'Mar Caspio'],
          ],
        },
      },
      {
        emoji: '🌦️',
        title: 'Los climas',
        body: [
          'El clima depende de la **latitud**, la **altitud** y la **cercanía al mar**.',
          'El clima **mediterráneo** es el predominante en la mayor parte de España: veranos secos y calurosos.',
        ],
        table: {
          head: ['Clima', 'Característica'],
          rows: [
            ['Mediterráneo', 'Veranos secos y calurosos'],
            ['Oceánico', 'Lluvias todo el año'],
            ['Continental', 'Inviernos fríos y veranos calurosos'],
            ['De montaña', 'Frío y nieve'],
          ],
        },
        tip: 'Oceánico: cerca del océano, lluvia. Continental: lejos del mar, extremos.',
      },
    ],
    keyPoints: [
      'El Tajo es el más largo de la Península; el Ebro forma un delta en el Mediterráneo.',
      'Pirineos separan Francia y España; los Alpes cruzan Suiza, Austria, Francia e Italia.',
      'Volga es el más largo de Europa (mar Caspio); Danubio desemboca en el mar Negro.',
      'Sena (París), Támesis (Londres), Tíber (Roma) y Danubio (Viena, Budapest).',
      'El clima depende de la latitud, la altitud y el mar.',
    ],
    check: [
      { question: '¿En qué país está el Volga?', options: ['Francia', 'Rusia', 'Austria'], answer: 1 },
      { question: '¿Qué río pasa por Roma?', options: ['El Tíber', 'El Sena', 'El Támesis'], answer: 0 },
      { question: 'Un clima con inviernos fríos y veranos calurosos es...', options: ['oceánico', 'mediterráneo', 'continental'], answer: 2 },
    ],
  },
  {
    topicId: 'poblacion',
    intro: '¡Hola, soy Pico! Hoy contamos personas: cuántas somos, cómo cambiamos y dónde vivimos. Es la demografía, ¡y es más divertida de lo que parece!',
    sections: [
      {
        emoji: '👥',
        title: 'Contar a la población',
        body: [
          'España tiene unos **49 millones** de habitantes, casi 50.',
          'El **censo** es el recuento oficial de los habitantes de un lugar y se hace cada 10 años. Los ayuntamientos llevan además el **padrón**, la lista de sus vecinos.',
          'La **densidad de población** es el número de habitantes por kilómetro cuadrado. Se calcula dividiendo los habitantes entre la superficie.',
        ],
        tip: 'Densidad = personas / km².',
      },
      {
        emoji: '🍼',
        title: 'Natalidad, mortalidad y crecimiento',
        body: [
          'La **natalidad** son los nacimientos en un lugar durante un año. La **mortalidad** son los fallecimientos.',
          'El **crecimiento natural** es nacimientos menos fallecimientos. Si nacen más personas de las que mueren, la población crece.',
          'La **esperanza de vida** son los años que se espera vivir.',
        ],
      },
      {
        emoji: '✈️',
        title: 'Migraciones',
        body: [
          '**Emigrar** es salir de un país para vivir en otro. **Inmigrar** es llegar a un país para vivir en él.',
          'Una misma persona es emigrante en su país de origen e inmigrante en el país de destino.',
        ],
        table: {
          head: ['Concepto', 'Significado'],
          rows: [
            ['Natalidad', 'Nacimientos'],
            ['Mortalidad', 'Fallecimientos'],
            ['Emigrar', 'Salir de un país para vivir en otro'],
            ['Inmigrar', 'Llegar a un país para vivir en él'],
          ],
        },
      },
      {
        emoji: '🏙️',
        title: 'Dónde vivimos',
        body: [
          'La población **urbana** vive en ciudades. La población **rural** vive en pueblos pequeños y suele trabajar en el campo.',
          'La población se concentra donde hay trabajo y servicios: en la **costa**, en las **grandes ciudades** y en la **Comunidad de Madrid** hay más densidad. El interior rural tiene menos.',
          'La **pirámide de población** es un gráfico que muestra cuántos hombres y mujeres hay de cada edad.',
        ],
      },
    ],
    keyPoints: [
      'España tiene unos 49 millones de habitantes; el censo los cuenta.',
      'Densidad: habitantes por km². Crecimiento natural: nacimientos menos fallecimientos.',
      'Natalidad = nacimientos; mortalidad = fallecimientos.',
      'Emigrar es salir; inmigrar es llegar.',
      'Urbana en ciudades, rural en pueblos; la pirámide muestra edades y sexo.',
    ],
    check: [
      { question: 'Si nacen 100 personas y mueren 80, el crecimiento natural es...', options: ['Positivo (+20)', 'Negativo (-20)', 'Cero'], answer: 0 },
      { question: 'Una persona que llega a España para vivir aquí es...', options: ['emigrante', 'rural', 'inmigrante'], answer: 2 },
      { question: '¿Dónde hay más densidad de población?', options: ['En el interior rural', 'En la costa y las grandes ciudades', 'En las montañas'], answer: 1 },
    ],
  },
  {
    topicId: 'actividades-economicas',
    intro: '¡Hola, soy Pico! Todo lo que comes, usas y los servicios que te ayudan salen de actividades económicas. Vamos a clasificarlas en tres sectores.',
    sections: [
      {
        emoji: '🌾',
        title: 'El sector primario',
        body: [
          'El **sector primario** obtiene **materias primas** de la naturaleza. Una **materia prima** es un recurso natural sin transformar, como la madera o el algodón.',
          'Incluye la **agricultura** (cultivar la tierra: cereales, frutas, hortalizas), la **ganadería** (criar animales: vacas, ovejas, cerdos), la **pesca** y la **minería**.',
        ],
        tip: 'Primario = lo primero que da la naturaleza.',
      },
      {
        emoji: '🏭',
        title: 'El sector secundario',
        body: [
          'El **sector secundario** **transforma** las materias primas en productos. Incluye la **industria** y la construcción.',
          'Por ejemplo, una fábrica de coches pertenece al sector secundario.',
        ],
      },
      {
        emoji: '🛍️',
        title: 'El sector terciario',
        body: [
          'El **sector terciario** presta **servicios**: comercio, turismo, sanidad, educación, banca y transporte. Es el que más empleos da en España.',
          'Un médico, una profesora o un comerciante pertenecen al sector terciario.',
        ],
      },
      {
        emoji: '🔗',
        title: 'Resumen de los sectores',
        body: ['Los tres sectores se necesitan entre sí.'],
        table: {
          head: ['Actividad', 'Descripción'],
          rows: [
            ['Agricultura', 'Cultivar la tierra'],
            ['Ganadería', 'Criar animales'],
            ['Industria', 'Transformar materias primas'],
            ['Comercio', 'Comprar y vender productos'],
            ['Pesca', 'Obtener recursos del mar (primario)'],
          ],
        },
        tip: 'Primario obtiene, secundario transforma, terciario presta servicios.',
      },
    ],
    keyPoints: [
      'Primario: obtiene materias primas (agricultura, ganadería, pesca, minería).',
      'Secundario: transforma las materias primas (industria y construcción).',
      'Terciario: servicios (comercio, turismo, sanidad, educación...) y da más empleos en España.',
      'Materia prima: recurso natural sin transformar.',
    ],
    check: [
      { question: 'El algodón con el que se hace una camiseta es...', options: ['un servicio', 'una materia prima', 'un producto terminado'], answer: 1 },
      { question: 'Una fábrica de muebles es del sector...', options: ['secundario', 'primario', 'terciario'], answer: 0 },
      { question: 'Un banco pertenece al sector...', options: ['primario', 'secundario', 'terciario'], answer: 2 },
    ],
  },
  {
    topicId: 'constitucion-organizacion',
    intro: '¡Hola, soy Pico! Hoy vemos cómo se gobierna España: qué es la Constitución y cómo se reparten el poder las instituciones.',
    sections: [
      {
        emoji: '📜',
        title: 'La Constitución de 1978',
        body: [
          'La **Constitución** es la ley más importante de España. Los ciudadanos la aprobaron en referéndum el **6 de diciembre de 1978**.',
          'Por eso el **6 de diciembre** se celebra el **Día de la Constitución**.',
        ],
        tip: '1978 y 6 de diciembre: ¡fecha doble para recordar!',
      },
      {
        emoji: '👑',
        title: 'Una monarquía parlamentaria',
        body: [
          'España es una **monarquía parlamentaria**. El **rey** es el jefe del Estado, pero no hace las leyes: gobiernan los representantes elegidos por los ciudadanos.',
        ],
      },
      {
        emoji: '⚖️',
        title: 'Los tres poderes',
        body: [
          'Para que una sola persona no lo controle todo, el poder se divide en tres: **legislativo**, **ejecutivo** y **judicial**.',
          'El **Gobierno** (ejecutivo) aplica las leyes y dirige la política. Lo dirige el **presidente del Gobierno**, elegido por el Congreso.',
          'Los **jueces y tribunales** (judicial) aplican las leyes y resuelven conflictos.',
        ],
        table: {
          head: ['Poder', 'Lo ejerce'],
          rows: [
            ['Legislativo', 'Cortes Generales'],
            ['Ejecutivo', 'Gobierno'],
            ['Judicial', 'Jueces y tribunales'],
            ['Jefatura del Estado', 'El rey'],
          ],
        },
      },
      {
        emoji: '🏛️',
        title: 'Las Cortes Generales',
        body: [
          'Las **Cortes Generales** hacen las leyes y están formadas por dos cámaras: el **Congreso de los Diputados**, con 350 diputados, y el **Senado**, cámara de representación territorial.',
          'Los ciudadanos eligen a sus representantes con su voto.',
        ],
        table: {
          head: ['Institución', 'Descripción'],
          rows: [
            ['Congreso de los Diputados', 'Cámara con 350 diputados'],
            ['Senado', 'Cámara de representación territorial'],
            ['Cortes Generales', 'Congreso y Senado'],
            ['Día de la Constitución', '6 de diciembre'],
          ],
        },
      },
    ],
    keyPoints: [
      'La Constitución se aprobó en 1978 y se celebra el 6 de diciembre.',
      'España es una monarquía parlamentaria; el rey es el jefe del Estado.',
      'Poderes: legislativo (Cortes), ejecutivo (Gobierno) y judicial (jueces).',
      'Las Cortes son Congreso (350 diputados) y Senado (representación territorial).',
      'El presidente del Gobierno dirige el Gobierno y lo elige el Congreso.',
    ],
    check: [
      { question: '¿Qué poder tienen los diputados y senadores?', options: ['Legislativo', 'Judicial', 'Ejecutivo'], answer: 0 },
      { question: 'En una monarquía parlamentaria, el rey...', options: ['hace las leyes', 'es el jefe del Estado', 'dirige el Gobierno'], answer: 1 },
      { question: '¿Cuántos diputados tiene el Congreso?', options: ['27', '49', '350'], answer: 2 },
    ],
  },
  {
    topicId: 'union-europea',
    intro: '¡Hola, soy Pico! España forma parte de la Unión Europea, una familia de países que cooperan. Vamos a ver sus símbolos, su historia y las capitales.',
    sections: [
      {
        emoji: '🇪🇺',
        title: 'Qué es la Unión Europea',
        body: [
          'La **Unión Europea (UE)** está formada hoy por **27 países**. Suiza no pertenece a la UE.',
          'España ingresó en la Comunidad Económica Europea (hoy UE) en **1986**, el 1 de enero. Ese año también entró Portugal.',
        ],
        tip: '1986: España y Portugal, década de los 80.',
      },
      {
        emoji: '🏛️',
        title: 'Instituciones y símbolos',
        body: [
          'El **Parlamento Europeo** está formado por eurodiputados elegidos por los ciudadanos cada cinco años. La **Comisión Europea** tiene su sede en **Bruselas**, la capital de Bélgica.',
          'La bandera es **azul con un círculo de 12 estrellas doradas**: simbolizan la unidad, no el número de países.',
          'El himno es la **Oda a la Alegría**, de Beethoven. El **Día de Europa** es el **9 de mayo**, por la declaración de Schuman de 1950.',
        ],
      },
      {
        emoji: '💶',
        title: 'El euro',
        body: [
          'Muchos países de la UE usan una moneda común: el **euro**. Empezó a circular en **2002** y en España sustituyó a la peseta.',
        ],
      },
      {
        emoji: '🗺️',
        title: 'Capitales de la UE (1)',
        body: ['Países grandes y vecinos de España.'],
        table: {
          head: ['País', 'Capital'],
          rows: [
            ['Francia', 'París'],
            ['Italia', 'Roma'],
            ['Alemania', 'Berlín'],
            ['Portugal', 'Lisboa'],
            ['Bélgica', 'Bruselas'],
          ],
        },
      },
      {
        emoji: '🧭',
        title: 'Capitales de la UE (2)',
        body: ['Más países de la UE.'],
        table: {
          head: ['País', 'Capital'],
          rows: [
            ['Grecia', 'Atenas'],
            ['Polonia', 'Varsovia'],
            ['Irlanda', 'Dublín'],
            ['Austria', 'Viena'],
          ],
        },
      },
    ],
    keyPoints: [
      'La UE tiene 27 países; España ingresó en 1986.',
      'Parlamento Europeo: eurodiputados elegidos por los ciudadanos. Comisión en Bruselas.',
      'Bandera: azul con 12 estrellas doradas. Himno: Oda a la Alegría de Beethoven.',
      'Día de Europa: 9 de mayo. Euro desde 2002.',
      'Aprende las capitales de las tablas.',
    ],
    check: [
      { question: 'Las 12 estrellas de la bandera simbolizan...', options: ['los países miembros', 'la unidad', 'los meses del año'], answer: 1 },
      { question: '¿Cuál es la capital de Grecia?', options: ['Atenas', 'Roma', 'Varsovia'], answer: 0 },
      { question: 'Con la entrada en el euro, en España dejó de usarse...', options: ['el franco', 'el dólar', 'la peseta'], answer: 2 },
    ],
  },
  {
    topicId: 'edad-moderna',
    intro: '¡Hola, soy Pico! La Edad Moderna es la era de los grandes descubrimientos y de los reyes poderosos. Navegamos juntos por fechas y personajes.',
    sections: [
      {
        emoji: '👑',
        title: 'Los Reyes Católicos',
        body: [
          '**Isabel I de Castilla** y **Fernando II de Aragón** unieron las coronas de Castilla y Aragón. Son los **Reyes Católicos**.',
          'En **1492** tomaron Granada, y con ello terminó la Reconquista.',
        ],
      },
      {
        emoji: '⛵',
        title: 'Colón y América',
        body: [
          'En **1492**, Cristóbal Colón partió con tres naves: **La Pinta**, **La Niña** (carabelas) y la nao capitana **Santa María**.',
          'Llegó a América el **12 de octubre de 1492**.',
        ],
        tip: 'Santa María era la nao capitana; Pinta y Niña, las carabelas.',
      },
      {
        emoji: '🏰',
        title: 'La casa de Austria',
        body: [
          '**Carlos I** fue el primer rey de la **casa de Austria** en España. Reinó desde 1516 y fue también emperador del Sacro Imperio Romano Germánico (como Carlos V).',
          '**Felipe II** trasladó la corte a **Madrid** en **1561**, que desde entonces es la capital. En **1588** su flota, la **Armada Invencible**, fue derrotada cuando quiso invadir Inglaterra.',
        ],
      },
      {
        emoji: '⚜️',
        title: 'La casa de Borbón',
        body: [
          '**Felipe V** fue el primer rey de la casa de **Borbón** en España. Empezó a reinar en **1700**.',
        ],
        table: {
          head: ['Personaje', 'Dato'],
          rows: [
            ['Isabel y Fernando', 'Reyes Católicos'],
            ['Carlos I', 'Primer rey Austria'],
            ['Felipe II', 'Capital en Madrid'],
            ['Felipe V', 'Primer Borbón'],
          ],
        },
      },
      {
        emoji: '📅',
        title: 'Fechas clave',
        body: ['Estas fechas ayudan a situar la Edad Moderna.'],
        table: {
          head: ['Año', 'Hecho'],
          rows: [
            ['1492', 'Colón llega a América'],
            ['1561', 'Madrid, capital de España'],
            ['1588', 'Armada Invencible'],
            ['1700', 'Felipe V, primer Borbón'],
          ],
        },
        tip: '1492, 1561, 1588 y 1700: ¡cuatro fechas para ordenar la época!',
      },
    ],
    keyPoints: [
      'Isabel y Fernando son los Reyes Católicos; en 1492 tomaron Granada.',
      'Colón llegó a América en 1492 con La Pinta, La Niña y la Santa María.',
      'Carlos I fue el primer Austria; Felipe II puso la capital en Madrid (1561).',
      'La Armada Invencible fue derrotada en 1588.',
      'Felipe V fue el primer Borbón (1700).',
    ],
    check: [
      { question: '¿A qué casa real pertenece Felipe V?', options: ['Austria', 'Borbón', 'Reyes Católicos'], answer: 1 },
      { question: '¿Qué quiso invadir la Armada Invencible?', options: ['Inglaterra', 'Francia', 'Portugal'], answer: 0 },
      { question: '¿Qué nave era la nao capitana de Colón?', options: ['La Niña', 'La Pinta', 'Santa María'], answer: 2 },
    ],
  },
  {
    topicId: 'espana-siglo-xix',
    intro: '¡Hola, soy Pico! El siglo XIX trajo guerra, una Constitución famosa, máquinas de vapor y la pérdida de las últimas colonias.',
    sections: [
      {
        emoji: '⚔️',
        title: 'La Guerra de la Independencia',
        body: [
          'En **1808** comenzó la **Guerra de la Independencia** (1808-1814) contra el ejército francés de **Napoleón**.',
          'El **2 de mayo de 1808**, los madrileños se alzaron contra las tropas francesas: es el **Dos de Mayo**. Al terminar la guerra, el rey fue **Fernando VII**.',
          'El pintor aragonés **Goya** retrató esa guerra en «Los fusilamientos del 3 de mayo».',
        ],
      },
      {
        emoji: '📜',
        title: 'La Constitución de 1812',
        body: [
          'En **1812** se aprobó en **Cádiz** la primera Constitución importante de España. Se la llamó **La Pepa** porque se aprobó el 19 de marzo, día de San José.',
        ],
        tip: 'Pepa es el apodo de José: ¡San José!',
      },
      {
        emoji: '👸',
        title: 'Isabel II y el ferrocarril',
        body: [
          'Isabel II, hija de Fernando VII, reinó desde **1833** hasta **1868**.',
          'En **1848** llegó a la Península el **ferrocarril**, un transporte con máquina de vapor, con la línea Barcelona-Mataró.',
          'La **Revolución Industrial** fue el cambio hacia las máquinas y las fábricas. En España se desarrolló sobre todo en **Cataluña** y el **País Vasco**.',
        ],
      },
      {
        emoji: '🌴',
        title: '1898: el final del imperio',
        body: [
          'En **1898**, tras la guerra con Estados Unidos, España perdió **Cuba, Puerto Rico y Filipinas**. Terminó así el imperio colonial español.',
        ],
        table: {
          head: ['Año', 'Hecho'],
          rows: [
            ['1808', 'Comienza la Guerra de la Independencia'],
            ['1812', 'Constitución de Cádiz'],
            ['1833', 'Comienza el reinado de Isabel II'],
            ['1848', 'Primer ferrocarril (Barcelona-Mataró)'],
            ['1898', 'Se pierden Cuba, Puerto Rico y Filipinas'],
          ],
        },
      },
    ],
    keyPoints: [
      '1808: Guerra de la Independencia contra Napoleón; el Dos de Mayo comenzó en Madrid.',
      '1812: Constitución de Cádiz, La Pepa.',
      'Goya retrató la guerra; Fernando VII fue el rey después.',
      'Isabel II reinó de 1833 a 1868; el tren llegó en 1848.',
      '1898: se pierden Cuba, Puerto Rico y Filipinas.',
    ],
    check: [
      { question: '¿Quién fue el jefe del ejército francés en la guerra?', options: ['Carlos I', 'Napoleón', 'Goya'], answer: 1 },
      { question: '¿Qué transporte con máquina de vapor llegó en 1848?', options: ['El ferrocarril', 'El avión', 'El coche'], answer: 0 },
      { question: '¿En qué ciudad se aprobó La Pepa?', options: ['Madrid', 'Sevilla', 'Cádiz'], answer: 2 },
    ],
  },
  {
    topicId: 'espana-siglos-xx-xxi',
    intro: '¡Hola, soy Pico! Hoy repasamos más de cien años de historia reciente de España, desde la república hasta la actualidad, con datos claros y neutrales.',
    sections: [
      {
        emoji: '🗳️',
        title: 'La II República y la Guerra Civil',
        body: [
          'La **II República** se proclamó el **14 de abril de 1931**.',
          'La **Guerra Civil española** enfrentó a dos bandos entre **1936 y 1939**. Comenzó en julio de 1936.',
        ],
      },
      {
        emoji: '🕰️',
        title: 'La dictadura',
        body: [
          'Después de la guerra hubo una **dictadura**, la de Franco, entre **1939 y 1975**.',
        ],
        tip: 'Dictadura: 1939 a 1975, unos 36 años.',
      },
      {
        emoji: '🔄',
        title: 'La Transición a la democracia',
        body: [
          'En **1975** comenzó la **Transición**: el periodo de paso de la dictadura a la democracia.',
          'Culminó con la **Constitución de 1978**.',
        ],
      },
      {
        emoji: '🇪🇺',
        title: 'Europa y el euro',
        body: [
          'En **1986** España entró en la **Comunidad Económica Europea**. En **1992** se celebraron los **Juegos Olímpicos de Barcelona** y la **Expo de Sevilla**.',
          'En **2002** el **euro** empezó a circular en efectivo y sustituyó a la peseta. En **2020** llegó la **pandemia de COVID-19**.',
        ],
        table: {
          head: ['Año', 'Hecho'],
          rows: [
            ['1931', 'II República'],
            ['1936', 'Comienzo de la Guerra Civil'],
            ['1975', 'Comienza la Transición'],
            ['1978', 'Constitución'],
            ['1986', 'España entra en la CEE'],
            ['2002', 'El euro en circulación'],
          ],
        },
      },
    ],
    keyPoints: [
      '1931: II República. 1936-1939: Guerra Civil.',
      'Dictadura de 1939 a 1975.',
      'La Transición (desde 1975) llevó a la democracia y a la Constitución de 1978.',
      '1986: España en la CEE. 1992: JJ. OO. de Barcelona y Expo de Sevilla.',
      '2002: el euro. 2020: la pandemia de COVID-19.',
    ],
    check: [
      { question: '¿Qué periodo va de la dictadura a la democracia?', options: ['La Transición', 'La Reconquista', 'La Ilustración'], answer: 0 },
      { question: '¿Cuántos años duró la Guerra Civil (1936-1939)?', options: ['2 años', 'Unos 3 años', '10 años'], answer: 1 },
      { question: '¿Qué evento deportivo se celebró en Barcelona en 1992?', options: ['El Mundial', 'La Eurocopa', 'Los Juegos Olímpicos'], answer: 2 },
    ],
  },
];
