import type { Lesson } from '../../types';

export const lessons: Lesson[] = [
  {
    topicId: 'digestion-respiration',
    intro: 'Hello! I am Rojichi. Today we follow food through the body and air through the lungs. What a trip!',
    sections: [
      {
        emoji: '👄',
        title: 'Digestion starts in the mouth',
        body: [
          '**Digestion** is how the body breaks food into small parts. It starts in the **mouth**. We **chew** the food with our teeth. **Saliva** is a liquid in the mouth. It mixes with the food and starts to break it down.',
          'Then we swallow. The food goes down a long tube called the **oesophagus**. It carries the food to the stomach.',
        ],
        bullets: ['Mouth: chews food, saliva starts digestion', 'Oesophagus: tube from the mouth to the stomach'],
        helpEs: 'La digestión empieza en la boca: masticamos y la saliva se mezcla con la comida y empieza a descomponerla. Después el esófago, un tubo largo, lleva la comida al estómago. (mouth = boca, chew = masticar, saliva = saliva, oesophagus = esófago)',
      },
      {
        emoji: '🫃',
        title: 'Stomach and intestines',
        body: [
          'The **stomach** is like a bag. It mixes the food with strong **gastric juices**. The food becomes soft and wet.',
          'Then the food goes to the **small intestine**. This organ is long and thin. The **nutrients** pass into the **blood** here.',
          'The rest goes to the **large intestine**. It absorbs water. What is left is **waste**, called **faeces**.',
        ],
        table: {
          head: ['Organ', 'Job'],
          rows: [
            ['Mouth', 'Chews food'],
            ['Stomach', 'Mixes food with juices'],
            ['Small intestine', 'Absorbs nutrients'],
            ['Large intestine', 'Absorbs water'],
          ],
        },
        tip: 'Follow the food: mouth, oesophagus, stomach, small intestine, large intestine.',
        helpEs: 'El estómago mezcla la comida con jugos gástricos. En el intestino delgado los nutrientes pasan a la sangre. En el intestino grueso se absorbe el agua y lo que sobra son desechos (heces). (stomach = estómago, small intestine = intestino delgado, large intestine = intestino grueso, waste = desechos, faeces = heces)',
      },
      {
        emoji: '👃',
        title: 'The way of the air',
        body: [
          '**Respiration** is how we take in air. We **breathe in** **oxygen**. We **breathe out** **carbon dioxide**.',
          'Air goes in through the **nose**. The nose warms and cleans the air. Then the air goes down the **trachea**, a tube that carries air to the lungs. The **lungs** take oxygen into the blood.',
        ],
        table: {
          head: ['Part', 'Job'],
          rows: [
            ['Nose', 'Warms and cleans air'],
            ['Trachea', 'Carries air to the lungs'],
            ['Lungs', 'Take oxygen into the blood'],
            ['Diaphragm', 'Helps us breathe'],
          ],
        },
        helpEs: 'Inspiramos oxígeno y espiramos dióxido de carbono. El aire entra por la nariz (que lo calienta y limpia), baja por la tráquea hasta los pulmones, que pasan el oxígeno a la sangre. (breathe in = inspirar, breathe out = espirar, oxygen = oxígeno, carbon dioxide = dióxido de carbono, nose = nariz, trachea = tráquea, lungs = pulmones)',
      },
      {
        emoji: '🍇',
        title: 'Inside the lungs',
        body: [
          'In the lungs, the air tubes are called **bronchi**. At the end of the tubes there are tiny air sacs called **alveoli**. They look like grapes on a branch.',
          'Gas exchange happens in the alveoli. Oxygen enters the blood and carbon dioxide leaves it.',
          'The **diaphragm** is a flat muscle under the lungs. It moves down so air can come in, and it moves up so air goes out.',
        ],
        tip: 'Alveoli are like grapes. Gas exchange happens there.',
        helpEs: 'Dentro de los pulmones, los bronquios terminan en unos saquitos diminutos llamados alvéolos. Allí se intercambian los gases: entra oxígeno en la sangre y sale dióxido de carbono. El diafragma es un músculo bajo los pulmones que baja y sube al respirar. (bronchi = bronquios, alveoli = alvéolos, diaphragm = diafragma, gas exchange = intercambio de gases)',
      },
    ],
    keyPoints: [
      'Digestion starts in the mouth with chewing and saliva.',
      'Food goes: oesophagus, stomach, small intestine (nutrients into blood), large intestine (water, faeces).',
      'We breathe in oxygen and breathe out carbon dioxide.',
      'Air goes: nose, trachea, bronchi, alveoli in the lungs.',
      'The diaphragm helps us breathe.',
    ],
    check: [
      { question: 'Which organ takes food from the mouth to the stomach?', options: ['Trachea', 'Oesophagus', 'Bladder'], answer: 1 },
      { question: 'Where do nutrients pass into the blood?', options: ['Small intestine', 'Mouth', 'Nose'], answer: 0 },
      { question: 'Which waste gas leaves the body when we breathe out?', options: ['Oxygen', 'Saliva', 'Carbon dioxide'], answer: 2 },
    ],
  },
  {
    topicId: 'circulation-excretion',
    intro: 'Hi! I am Rojichi. Today we learn how blood travels around the body and how the body gets rid of waste.',
    sections: [
      {
        emoji: '❤️',
        title: 'The heart and the blood',
        body: [
          '**Blood** is the red liquid that moves around our body. It carries oxygen and nutrients to all parts of the body.',
          'The **heart** is a muscle that pumps the blood. When the heart beats, we can feel the **pulse** in our wrist.',
        ],
        bullets: ['Heart = pumps the blood', 'Blood = carries oxygen and nutrients', 'Pulse = the beat of the heart, in the wrist'],
        helpEs: 'La sangre es el líquido rojo que lleva oxígeno y nutrientes a todo el cuerpo. El corazón es un músculo que bombea la sangre; su latido se nota en la muñeca como el pulso. (blood = sangre, heart = corazón, pulse = pulso, wrist = muñeca)',
      },
      {
        emoji: '🛣️',
        title: 'Blood vessels',
        body: [
          'Blood travels in tubes called **blood vessels**.',
          '**Arteries** carry blood away from the heart. **Veins** bring blood back to the heart.',
        ],
        tip: 'Arteries go Away from the heart. Both start with A.',
        helpEs: 'La sangre viaja por los vasos sanguíneos. Las arterias llevan la sangre fuera del corazón y las venas la traen de vuelta al corazón. (arteries = arterias, veins = venas, blood vessels = vasos sanguíneos)',
      },
      {
        emoji: '🩸',
        title: 'Parts of the blood',
        body: ['Blood has four parts. Each part has a job.'],
        table: {
          head: ['Part', 'Job'],
          rows: [
            ['Red blood cells', 'Carry oxygen'],
            ['White blood cells', 'Fight germs'],
            ['Platelets', 'Stop bleeding'],
            ['Plasma', 'Liquid part of blood'],
          ],
        },
        tip: 'White cells are little soldiers. They defend the body from germs.',
        helpEs: 'La sangre tiene cuatro partes: los glóbulos rojos llevan oxígeno, los glóbulos blancos luchan contra los gérmenes, las plaquetas paran las hemorragias y el plasma es la parte líquida. (red blood cells = glóbulos rojos, white blood cells = glóbulos blancos, platelets = plaquetas, plasma = plasma, germs = gérmenes)',
      },
      {
        emoji: '🫘',
        title: 'Excretion: the kidneys',
        body: [
          '**Excretion** is how the body removes waste.',
          'The two **kidneys** are shaped like beans. They clean the blood and make **urine**. The urine goes to the **bladder**. The bladder stores urine until we go to the toilet.',
        ],
        bullets: ['Kidneys: filter the blood and make urine', 'Bladder: stores urine'],
        helpEs: 'La excreción es la forma en que el cuerpo elimina desechos. Los riñones limpian la sangre y fabrican la orina, y la vejiga guarda la orina hasta que vamos al baño. (excretion = excreción, kidneys = riñones, urine = orina, bladder = vejiga)',
      },
      {
        emoji: '💦',
        title: 'Other ways to remove waste',
        body: [
          'The body removes waste in other ways, too. When we are hot, the skin gives out **sweat**. Sweat helps us lose heat and waste.',
          'The lungs remove carbon dioxide when we breathe out. The large intestine removes faeces.',
        ],
        table: {
          head: ['Organ', 'Waste'],
          rows: [
            ['Lungs', 'Carbon dioxide'],
            ['Kidneys', 'Urine'],
            ['Skin', 'Sweat'],
            ['Large intestine', 'Faeces'],
          ],
        },
        helpEs: 'El cuerpo elimina desechos de otras formas: la piel saca el sudor cuando tenemos calor, los pulmones eliminan dióxido de carbono y el intestino grueso elimina las heces. (sweat = sudor, skin = piel, faeces = heces)',
      },
    ],
    keyPoints: [
      'Blood carries oxygen and nutrients. The heart pumps it. We feel the pulse in the wrist.',
      'Arteries take blood away from the heart. Veins bring it back.',
      'Red cells carry oxygen, white cells fight germs, platelets stop bleeding, plasma is the liquid.',
      'Kidneys clean the blood and make urine. The bladder stores it.',
      'Lungs, skin and the large intestine remove waste, too.',
    ],
    check: [
      { question: 'Which blood part helps stop bleeding?', options: ['Platelets', 'Plasma', 'White blood cells'], answer: 0 },
      { question: 'Where is urine stored?', options: ['Kidneys', 'Heart', 'Bladder'], answer: 2 },
      { question: 'What do veins do?', options: ['Make urine', 'Bring blood back to the heart', 'Pump blood'], answer: 1 },
    ],
  },
  {
    topicId: 'muscles-bones-nerves-senses',
    intro: 'Hello! I am Rojichi. Today we study bones, muscles, the brain and the five senses. Your body is amazing!',
    sections: [
      {
        emoji: '🦴',
        title: 'The skeleton',
        body: [
          'The **skeleton** is all the bones in the body. It supports the body and protects the organs.',
          'The **skull** protects the brain. The ribs protect the heart and lungs. The femur is the long bone in the leg.',
        ],
        bullets: ['Skeleton = supports and protects the body', 'Skull = protects the brain', 'Ribs = protect heart and lungs'],
        helpEs: 'El esqueleto son todos los huesos: sujeta el cuerpo y protege los órganos. El cráneo protege el cerebro, las costillas protegen el corazón y los pulmones, y el fémur es el hueso largo de la pierna. (skeleton = esqueleto, skull = cráneo, ribs = costillas, femur = fémur)',
      },
      {
        emoji: '🦵',
        title: 'Joints and cartilage',
        body: [
          'A **joint** connects two bones. Joints let us bend. Your elbow and your knee are joints.',
          '**Cartilage** is soft and flexible. It is not bone. We have cartilage in our ears and nose.',
        ],
        tip: 'Bend your ear. It is cartilage, not bone.',
        helpEs: 'Una articulación une dos huesos y nos permite doblarnos (codo, rodilla). El cartílago es blando y flexible, no es hueso, y está en las orejas y la nariz. (joint = articulación, cartilage = cartílago, bend = doblar)',
      },
      {
        emoji: '💪',
        title: 'Muscles',
        body: [
          '**Muscles** make us move. When a muscle **contracts**, it gets shorter and pulls the bone.',
          'Bones give support, muscles make movement and joints let bones bend.',
        ],
        table: {
          head: ['Part', 'Job'],
          rows: [
            ['Bones', 'Give support'],
            ['Muscles', 'Make movement'],
            ['Joints', 'Let bones bend'],
            ['Brain', 'Controls the body'],
          ],
        },
        helpEs: 'Los músculos nos hacen mover: al contraerse se acortan y tiran del hueso. Los huesos dan soporte, los músculos hacen el movimiento y las articulaciones dejan que los huesos se doblen. (muscle = músculo, contract = contraerse, shorter = más corto, support = soporte)',
      },
      {
        emoji: '🧠',
        title: 'Brain and nerves',
        body: [
          'The **brain** is the control centre of the **nervous system**. It thinks, remembers and gives orders to the body.',
          '**Nerves** are like cables. They carry messages (electrical signals) between the brain and the body.',
        ],
        bullets: ['Brain = control centre', 'Nerves = carry messages'],
        helpEs: 'El cerebro es el centro de control del sistema nervioso: piensa, recuerda y da órdenes. Los nervios son como cables que llevan mensajes entre el cerebro y el cuerpo. (brain = cerebro, nerves = nervios, nervous system = sistema nervioso)',
      },
      {
        emoji: '👀',
        title: 'The five senses',
        body: ['We have five senses. Each sense uses a sense organ.'],
        table: {
          head: ['Sense', 'Organ'],
          rows: [
            ['Sight', 'Eyes'],
            ['Hearing', 'Ears'],
            ['Smell', 'Nose'],
            ['Taste', 'Tongue'],
            ['Touch', 'Skin'],
          ],
        },
        tip: 'The tongue has taste buds. We use it to taste food.',
        helpEs: 'Tenemos cinco sentidos: vista (ojos), oído (orejas), olfato (nariz), gusto (lengua) y tacto (piel). La lengua tiene papilas gustativas para saborear. (sight = vista, hearing = oído, smell = olfato, taste = gusto, touch = tacto, eyes = ojos, tongue = lengua)',
      },
    ],
    keyPoints: [
      'The skeleton supports and protects the body. The skull protects the brain.',
      'A joint connects two bones. Cartilage is soft and flexible.',
      'Muscles contract (get shorter) to make us move.',
      'The brain controls the body. Nerves carry messages.',
      'Five senses: eyes, ears, nose, tongue, skin.',
    ],
    check: [
      { question: 'What do muscles do when they contract?', options: ['Get longer', 'Get shorter', 'Make bones'], answer: 1 },
      { question: 'Which organ do we use to smell?', options: ['Ears', 'Skin', 'Nose'], answer: 2 },
      { question: 'What connects two bones and lets them bend?', options: ['A joint', 'A nerve', 'A skull'], answer: 0 },
    ],
  },
  {
    topicId: 'reproduction-health',
    intro: 'Hi! I am Rojichi. Today we learn about the stages of life, how new life begins and how to stay healthy.',
    sections: [
      {
        emoji: '👶',
        title: 'Stages of human life',
        body: [
          'Humans pass through different **stages**. The order is: **baby**, **child**, **adolescent**, **adult** and **old age**.',
          'Old age is the last stage of life.',
        ],
        table: {
          head: ['Stage', 'Description'],
          rows: [
            ['Baby', 'Needs care all the time'],
            ['Child', 'Grows and learns'],
            ['Adolescent', 'Body changes (puberty)'],
            ['Adult', 'Fully grown'],
            ['Old age', 'Last stage of life'],
          ],
        },
        helpEs: 'Las etapas de la vida humana en orden son: bebé, niño, adolescente, adulto y vejez (old age). La vejez es la última etapa. (stages = etapas, baby = bebé, child = niño, adolescent = adolescente, adult = adulto)',
      },
      {
        emoji: '🌱',
        title: 'Adolescence and puberty',
        body: [
          '**Adolescence** is the stage between childhood and adulthood.',
          '**Puberty** happens at the start of adolescence. The body changes and grows as boys and girls become adults.',
        ],
        tip: 'Adolescence comes after childhood and before adulthood.',
        helpEs: 'La adolescencia es la etapa entre la infancia y la edad adulta. La pubertad ocurre al principio de la adolescencia: el cuerpo cambia y crece para convertirse en adulto. (adolescence = adolescencia, puberty = pubertad, grow = crecer)',
      },
      {
        emoji: '🤰',
        title: 'Reproduction',
        body: [
          '**Reproduction** is the process of making new living things. Parents have a baby. Plants make seeds.',
          'In humans, a baby grows in the mother\'s **uterus** before birth.',
        ],
        bullets: ['Reproduction = making new living things', 'The baby grows in the uterus'],
        helpEs: 'La reproducción es el proceso de tener crías o nuevos seres vivos. En las personas, el bebé crece en el útero de la madre antes de nacer. (reproduction = reproducción, uterus = útero, birth = nacimiento)',
      },
      {
        emoji: '🦠',
        title: 'Germs and vaccines',
        body: [
          '**Germs** are very tiny things, like bacteria and viruses. They are too small to see. They can make us ill.',
          'We wash our hands to remove germs. **Vaccines** help the body to fight some diseases. They prevent diseases.',
        ],
        tip: 'A vaccine prepares your body before you get ill.',
        helpEs: 'Los gérmenes (microbios, bacterias, virus) son cosas diminutas que pueden enfermarnos. Nos lavamos las manos para quitarlos. Las vacunas ayudan al cuerpo a luchar contra algunas enfermedades y las previenen. (germs = gérmenes, vaccine = vacuna, disease = enfermedad, prevent = prevenir)',
      },
      {
        emoji: '🥗',
        title: 'Healthy habits',
        body: [
          'Healthy habits keep us well. Children need about 9 to 11 hours of sleep. An **adolescent** needs a little less: about **8 to 10 hours**.',
        ],
        table: {
          head: ['Habit', 'Benefit'],
          rows: [
            ['Eat fruit', 'Gives vitamins'],
            ['Exercise', 'Keeps the heart strong'],
            ['Sleep well', 'Gives rest'],
            ['Brush teeth', 'Stops tooth decay'],
            ['Wash hands', 'Stops germs spreading'],
          ],
        },
        helpEs: 'Los hábitos saludables: comer fruta (vitaminas), hacer ejercicio (corazón fuerte), dormir bien (descanso; un adolescente necesita de 8 a 10 horas), cepillarse los dientes (evita las caries) y lavarse las manos. (sleep = dormir, tooth decay = caries, healthy habit = hábito saludable)',
      },
    ],
    keyPoints: [
      'Life stages: baby, child, adolescent, adult, old age.',
      'Puberty happens at the start of adolescence. The body changes and grows.',
      'Reproduction makes new living things. A baby grows in the uterus.',
      'Germs can make us ill. Washing hands and vaccines help.',
      'Adolescents need about 8 to 10 hours of sleep.',
    ],
    check: [
      { question: 'Where does a baby grow before birth?', options: ['In the uterus', 'In the lungs', 'In the bladder'], answer: 0 },
      { question: 'What do vaccines do?', options: ['Make us taller', 'Help prevent diseases', 'Give us sleep'], answer: 1 },
      { question: 'Which stage comes after child?', options: ['Old age', 'Baby', 'Adolescent'], answer: 2 },
    ],
  },
  {
    topicId: 'energy',
    intro: 'Hello! I am Rojichi. Today we study the types of energy and where it comes from. Let us save the planet!',
    sections: [
      {
        emoji: '🏃',
        title: 'Types of energy',
        body: [
          'Energy is in everything around us. There are different types.',
          '**Kinetic energy** is the energy of movement. **Chemical energy** is stored in food and batteries. **Thermal energy** is heat energy. **Light energy** comes from a lamp or the Sun.',
        ],
        table: {
          head: ['Energy', 'Example'],
          rows: [
            ['Kinetic', 'A rolling ball'],
            ['Chemical', 'A battery'],
            ['Light', 'A torch'],
            ['Thermal', 'A hot cup of tea'],
          ],
        },
        tip: "'Kine' means movement. 'Thermo' means heat.",
        helpEs: 'La energía cinética es la del movimiento, la química está almacenada en la comida y las pilas, la térmica es la del calor y la luminosa viene de una lámpara o del Sol. (kinetic = cinética, chemical = química, thermal = térmica, battery = pila, torch = linterna)',
      },
      {
        emoji: '🔄',
        title: 'Energy changes',
        body: [
          'Energy is never lost or destroyed. It **changes** from one type to another.',
          'A lamp changes electricity into light. A solar panel changes sunlight into electricity.',
        ],
        bullets: ['Lamp: electricity to light', 'Solar panel: sunlight to electricity', 'Wind turbine: wind to electricity'],
        helpEs: 'La energía no se pierde ni se destruye: cambia de un tipo a otro. Una lámpara cambia electricidad en luz y un panel solar cambia luz del sol en electricidad. (solar panel = panel solar, changes = cambia)',
      },
      {
        emoji: '🌬️',
        title: 'Renewable sources',
        body: [
          '**Renewable** sources do not run out. The **Sun** gives solar energy. The **wind** gives **wind energy**: it turns turbines to make electricity.',
          '**Geothermal** energy comes from the heat inside the Earth. "Geo" means Earth and "thermal" means heat.',
        ],
        table: {
          head: ['Source', 'Type'],
          rows: [
            ['Sun', 'Renewable'],
            ['Wind', 'Renewable'],
            ['Geothermal', 'Renewable'],
          ],
        },
        helpEs: 'Las fuentes renovables no se agotan: el Sol (energía solar), el viento (energía eólica) y la energía geotérmica, que viene del calor del interior de la Tierra. (renewable = renovable, wind energy = energía eólica, geothermal = geotérmica)',
      },
      {
        emoji: '🛢️',
        title: 'Fossil fuels',
        body: [
          '**Coal**, **oil** and **natural gas** are **fossil fuels**. They come from very old plants and animals. We burn them to make heat.',
          'They are **non-renewable**. They will run out one day.',
        ],
        table: {
          head: ['Source', 'Type'],
          rows: [
            ['Sun', 'Renewable'],
            ['Wind', 'Renewable'],
            ['Oil', 'Non-renewable'],
            ['Coal', 'Non-renewable'],
            ['Natural gas', 'Non-renewable'],
          ],
        },
        helpEs: 'El carbón, el petróleo y el gas natural son combustibles fósiles. Vienen de plantas y animales muy antiguos, los quemamos para obtener calor y son no renovables: se acabarán algún día. (coal = carbón, oil = petróleo, natural gas = gas natural, fossil fuel = combustible fósil)',
      },
      {
        emoji: '💡',
        title: 'Save energy',
        body: [
          'We must **save** energy and not waste it. This protects the planet.',
          'For example, we turn off the light when we leave a room.',
        ],
        tip: 'Save energy: turn off the lights!',
        helpEs: 'Debemos ahorrar energía y no malgastarla para proteger el planeta; por ejemplo, apagando la luz al salir de una habitación. (save = ahorrar, waste = malgastar)',
      },
    ],
    keyPoints: [
      'Kinetic = movement. Chemical = food and batteries. Thermal = heat. Light = lamps and the Sun.',
      'Energy changes from one type to another. It is never lost.',
      'Renewable: Sun, wind, geothermal. They do not run out.',
      'Fossil fuels (coal, oil, natural gas) are non-renewable.',
      'We should save energy.',
    ],
    check: [
      { question: 'Which energy do moving objects have?', options: ['Chemical', 'Kinetic', 'Thermal'], answer: 1 },
      { question: 'What does a solar panel change into electricity?', options: ['Sunlight', 'Coal', 'Wind'], answer: 0 },
      { question: 'Which one is a fossil fuel?', options: ['Wind', 'Sun', 'Natural gas'], answer: 2 },
    ],
  },
  {
    topicId: 'electricity-magnetism',
    intro: 'Hi! I am Rojichi. Today we build a circuit in our minds and play with magnets. Let us switch on!',
    sections: [
      {
        emoji: '🔋',
        title: 'The electric circuit',
        body: [
          'A **circuit** is the path that electricity follows. It goes around and returns to the start.',
          'A simple **electric circuit** needs a **battery**, **wires** and a **bulb**. The battery is the power source and gives energy.',
        ],
        table: {
          head: ['Part', 'Job'],
          rows: [
            ['Battery', 'Gives energy'],
            ['Wire', 'Carries electricity'],
            ['Bulb', 'Makes light'],
            ['Switch', 'Opens and closes'],
          ],
        },
        helpEs: 'Un circuito es el camino que sigue la electricidad. Un circuito simple necesita una pila (da la energía), cables (llevan la electricidad) y una bombilla (hace luz). (circuit = circuito, battery = pila, wire = cable, bulb = bombilla)',
      },
      {
        emoji: '🔘',
        title: 'The switch',
        body: [
          'A **switch** opens or closes the circuit. When the circuit is closed, electricity flows and the bulb is on. When it is open, the bulb is off.',
        ],
        tip: 'Switch = open or close the path.',
        helpEs: 'El interruptor abre o cierra el circuito. Si está cerrado, pasa la electricidad y la bombilla se enciende; si está abierto, se apaga. (switch = interruptor, open = abrir, close = cerrar)',
      },
      {
        emoji: '🧈',
        title: 'Conductors and insulators',
        body: [
          'A **conductor** lets electricity pass. Metals are good conductors. **Copper** and aluminium are conductors. Cables have copper inside.',
          'An **insulator** does not let electricity pass. **Plastic** and rubber are insulators. They cover cables so we are safe.',
        ],
        table: {
          head: ['Material', 'Type'],
          rows: [
            ['Copper', 'Conductor'],
            ['Aluminium', 'Conductor'],
            ['Iron', 'Conductor'],
            ['Plastic', 'Insulator'],
            ['Rubber', 'Insulator'],
            ['Wood', 'Insulator'],
          ],
        },
        helpEs: 'Un conductor deja pasar la electricidad (los metales como el cobre y el aluminio). Un aislante no la deja pasar (plástico, goma, madera) y cubre los cables para protegernos. (conductor = conductor, insulator = aislante, copper = cobre, plastic = plástico, rubber = goma)',
      },
      {
        emoji: '🧲',
        title: 'Magnets',
        body: [
          'A **magnet** attracts iron things, like a **nail**. It does not attract plastic, rubber or glass.',
          'A magnet has two ends. They are the north and south **poles**.',
        ],
        helpEs: 'Un imán atrae las cosas de hierro, como un clavo, pero no el plástico, la goma ni el vidrio. Sus dos extremos se llaman polos: norte y sur. (magnet = imán, nail = clavo, poles = polos)',
      },
      {
        emoji: '↔️',
        title: 'Attract and repel',
        body: [
          'Different poles **attract**. North and south pull together.',
          'The same poles **repel**. They push away.',
        ],
        bullets: ['North + south = attract', 'North + north = repel', 'South + south = repel'],
        tip: 'Opposites attract!',
        helpEs: 'Los polos distintos se atraen (norte y sur) y los polos iguales se repelen (se alejan). (attract = atraer, repel = repeler, opposite = opuesto)',
      },
    ],
    keyPoints: [
      'A circuit is the path of electricity. It needs a battery, wires and a bulb.',
      'A switch opens or closes the circuit.',
      'Conductors (copper, aluminium) let electricity pass. Insulators (plastic, rubber) do not.',
      'Magnets attract iron things and have two poles.',
      'Different poles attract. Same poles repel.',
    ],
    check: [
      { question: 'Which part of a circuit gives energy?', options: ['Bulb', 'Battery', 'Wire'], answer: 1 },
      { question: 'Which material is an insulator?', options: ['Rubber', 'Copper', 'Aluminium'], answer: 0 },
      { question: 'What happens when two south poles meet?', options: ['They attract', 'They break', 'They repel'], answer: 2 },
    ],
  },
  {
    topicId: 'light-sound',
    intro: 'Hello! I am Rojichi. Today we learn how light and sound travel. Open your eyes and ears!',
    sections: [
      {
        emoji: '🔦',
        title: 'How light travels',
        body: [
          'Light travels in **straight lines**. A torch makes a long, narrow beam.',
          'A **luminous** object makes its own light. The Sun and a lamp are luminous. The Moon is not luminous. It only **reflects** the light of the Sun.',
        ],
        bullets: ['Light travels in straight lines', 'Luminous = makes its own light (Sun, lamp)', 'The Moon only reflects light'],
        helpEs: 'La luz viaja en línea recta. Un objeto luminoso produce su propia luz (el Sol, una lámpara); la Luna no, solo refleja la luz del Sol. (straight = recto, luminous = luminoso, reflect = reflejar)',
      },
      {
        emoji: '🪞',
        title: 'Reflection and shadows',
        body: [
          'When light hits a **mirror**, it **reflects**. It bounces back.',
          'When an object blocks light, it makes a **shadow**. A shadow is a dark area.',
        ],
        tip: 'On a sunny day, your shadow follows you.',
        helpEs: 'Cuando la luz toca un espejo, se refleja (rebota). Cuando un objeto bloquea la luz, se forma una sombra, que es una zona oscura. (mirror = espejo, reflect = reflejar, shadow = sombra)',
      },
      {
        emoji: '🌈',
        title: 'Materials and colours',
        body: [
          'Materials let different amounts of light pass.',
          'A **rainbow** shows that white light has many colours: red, orange, yellow, green, blue, indigo and violet.',
        ],
        table: {
          head: ['Type', 'Example'],
          rows: [
            ['Transparent', 'Clear glass (light passes fully)'],
            ['Translucent', 'Frosted glass (a little light)'],
            ['Opaque', 'Wood (no light)'],
            ['Luminous', 'A lamp (makes light)'],
          ],
        },
        helpEs: 'Los materiales dejan pasar distinta cantidad de luz: transparentes (todo), translúcidos (un poco), opacos (nada). El arcoíris muestra que la luz blanca tiene muchos colores. (transparent = transparente, translucent = translúcido, opaque = opaco, rainbow = arcoíris)',
      },
      {
        emoji: '🔊',
        title: 'How sound is made',
        body: [
          'Sound is made by **vibrations**. Touch your throat when you speak. You feel the vibrations.',
          'Sound needs matter to travel. It travels fastest through **solids**, then liquids, then gases. Sound cannot travel through a **vacuum**, like space.',
        ],
        tip: 'Tap a table with your ear on it. The sound is very clear.',
        helpEs: 'El sonido se produce por vibraciones. Viaja más rápido por sólidos que por líquidos o gases y no puede viajar por el vacío (el espacio), porque necesita materia. (vibration = vibración, solid = sólido, vacuum = vacío)',
      },
      {
        emoji: '📢',
        title: 'Sound words',
        body: [
          'When sound bounces back from a wall, we hear an **echo**.',
          '**Volume** tells us if a sound is loud or quiet. **Pitch** tells us if it is high or low. **Noise** is unwanted loud sound.',
        ],
        table: {
          head: ['Word', 'Meaning'],
          rows: [
            ['Pitch', 'High or low sound'],
            ['Volume', 'Loud or quiet sound'],
            ['Echo', 'Sound that bounces back'],
            ['Noise', 'Unwanted loud sound'],
          ],
        },
        helpEs: 'Cuando el sonido rebota en una pared oímos un eco. El volumen es lo fuerte o suave que es un sonido, el tono es si es agudo o grave, y el ruido es un sonido fuerte no deseado. (echo = eco, volume = volumen, pitch = tono, noise = ruido)',
      },
    ],
    keyPoints: [
      'Light travels in straight lines. The Sun makes its own light; the Moon reflects it.',
      'A mirror reflects light. A shadow forms when light is blocked.',
      'Transparent, translucent and opaque materials let different amounts of light pass.',
      'Sound is made by vibrations and travels fastest through solids. It cannot travel through a vacuum.',
      'Echo, volume, pitch and noise describe sounds.',
    ],
    check: [
      { question: 'Which object is luminous?', options: ['A mirror', 'A lamp', 'The Moon'], answer: 1 },
      { question: 'Which material lets no light pass?', options: ['Opaque', 'Transparent', 'Translucent'], answer: 0 },
      { question: 'What does sound need to travel?', options: ['Only light', 'A vacuum', 'Matter'], answer: 2 },
    ],
  },
];
