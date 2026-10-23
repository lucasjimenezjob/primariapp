import type { Lesson } from '../../types';

export const lessons: Lesson[] = [
  {
    topicId: 'weather-atmosphere',
    intro: "Hello! I am Rojichi. Today we learn about the air, the clouds and the weather. Let's look at the sky together!",
    sections: [
      {
        emoji: '🌍',
        title: 'The air around us',
        body: [
          'The **atmosphere** is a layer of **air** around the Earth. It is like a blanket.',
          'Air is a mix of **gases**. One gas is very important: **oxygen**. We need oxygen to **breathe**.',
        ],
        bullets: ['Atmosphere = a layer of air around the Earth', 'Oxygen = the gas we breathe', 'A gas is not solid and not liquid'],
        tip: 'The atmosphere is a blanket of air around our planet.',
        helpEs: 'La atmósfera es una capa de aire que rodea la Tierra. El aire es una mezcla de gases y el oxígeno es el gas que necesitamos para respirar. (air = aire, breathe = respirar, gas = gas)',
      },
      {
        emoji: '☁️',
        title: 'Water in the sky',
        body: [
          'Water can be a gas. **Water vapour** is water as a gas. It is in the air. When water boils, we see **steam**.',
          'High in the sky, water vapour turns into tiny drops. Many tiny drops make a **cloud**.',
          'When the drops are big, they fall as **rain**. When it is very cold, water freezes. It falls as **snow**, soft white flakes. Hard balls of ice are **hail**. **Fog** is a cloud near the ground.',
        ],
        table: {
          head: ['Word', 'What is it?'],
          rows: [
            ['Water vapour', 'Water as a gas'],
            ['Cloud', 'Tiny drops of water in the sky'],
            ['Rain', 'Drops of water that fall'],
            ['Snow', 'Frozen water, soft white flakes'],
            ['Hail', 'Hard balls of ice'],
            ['Fog', 'A cloud near the ground'],
          ],
        },
        helpEs: 'El vapor de agua es agua en forma de gas y está en el aire. Cuando el vapor se convierte en gotitas se forman las nubes; si hace mucho frío cae nieve. (water vapour = vapor de agua, cloud = nube, rain = lluvia, snow = nieve, hail = granizo, fog = niebla)',
      },
      {
        emoji: '🍂',
        title: 'The four seasons',
        body: [
          'There are four **seasons** in a year: **winter**, **spring**, **summer** and **autumn**.',
          '**Summer** is the **hottest** season. Winter is the coldest. After winter, spring comes. Flowers start to grow.',
        ],
        bullets: ['1. Winter: cold', '2. Spring: flowers grow', '3. Summer: the hottest season', '4. Autumn: leaves fall'],
        tip: 'The order is winter, spring, summer, autumn.',
        helpEs: 'El año tiene cuatro estaciones: invierno, primavera, verano y otoño. El verano es la estación más calurosa y después del invierno viene la primavera. (season = estación, hottest = la más calurosa, spring = primavera, autumn = otoño)',
      },
      {
        emoji: '🌤️',
        title: 'Weather words',
        body: ['The **weather** tells us what the sky and the air are like today. We use special words.'],
        table: {
          head: ['Weather', 'Meaning'],
          rows: [
            ['Sunny', 'The sun is shining'],
            ['Cloudy', 'The sky has many clouds'],
            ['Rainy', 'Water drops fall'],
            ['Windy', 'The air moves fast'],
          ],
        },
        helpEs: 'Aprendemos palabras para describir el tiempo atmosférico: soleado, nublado, lluvioso y ventoso. (sunny = soleado, cloudy = nublado, rainy = lluvioso, windy = ventoso)',
      },
      {
        emoji: '🌡️',
        title: 'Weather instruments',
        body: [
          'Scientists use **instruments** to measure the weather. Each instrument measures one thing.',
          'A **weather vane** is on a roof. It shows where the wind comes from.',
        ],
        table: {
          head: ['Instrument', 'It measures'],
          rows: [
            ['Thermometer', 'Temperature (hot or cold)'],
            ['Rain gauge', 'Rainfall'],
            ['Anemometer', 'Wind speed'],
            ['Barometer', 'Air pressure'],
            ['Weather vane', 'Wind direction'],
          ],
        },
        tip: "'Thermo' means heat. A thermometer measures how hot it is.",
        helpEs: 'Los instrumentos miden el tiempo: el termómetro mide la temperatura, el pluviómetro la lluvia, el anemómetro la velocidad del viento y el barómetro la presión del aire. La veleta muestra de dónde viene el viento. (thermometer = termómetro, rain gauge = pluviómetro, weather vane = veleta)',
      },
    ],
    keyPoints: [
      'The atmosphere is a layer of air around the Earth.',
      'We breathe oxygen.',
      'Water vapour is water as a gas. Tiny drops make clouds.',
      'The seasons: winter, spring, summer, autumn. Summer is the hottest.',
      'Each weather instrument measures one thing.',
    ],
    check: [
      { question: 'What do tiny drops of water in the sky make?', options: ['Rocks', 'Clouds', 'Oxygen'], answer: 1 },
      { question: 'Which instrument measures the speed of the wind?', options: ['Anemometer', 'Thermometer', 'Rain gauge'], answer: 0 },
      { question: 'Which season is after spring?', options: ['Winter', 'Autumn', 'Summer'], answer: 2 },
    ],
  },
  {
    topicId: 'rocks-minerals-landscape',
    intro: 'Hi! I am Rojichi. Today we study rocks, soil and the shapes of the land. Get your boots, scientist!',
    sections: [
      {
        emoji: '🪨',
        title: 'Rocks and minerals',
        body: [
          'A **rock** is a solid, natural material from the Earth. A rock is made of one or more **minerals**.',
          'We get **metals** from minerals in rocks, for example iron and gold. Metals are hard and shiny. Spoons, coins and keys are made of metal.',
        ],
        bullets: ['Rock = made of one or more minerals', 'Metals (iron, gold) come from minerals', 'Metals are hard and shiny'],
        helpEs: 'Una roca está hecha de uno o más minerales. De los minerales de las rocas sacamos los metales, como el hierro y el oro, que son duros y brillantes. (rock = roca, minerals = minerales, metal = metal)',
      },
      {
        emoji: '🏠',
        title: 'Useful rocks',
        body: [
          '**Granite** is very hard. We use it to build houses and kitchens. **Chalk** is soft and white. We use it to write on the board.',
          'People use many rocks. Each rock has a good use.',
        ],
        table: {
          head: ['Rock', 'Use'],
          rows: [
            ['Granite', 'Buildings and kitchens'],
            ['Chalk', 'Writing on the board'],
            ['Marble', 'Statues'],
            ['Slate', 'Roofs'],
            ['Clay', 'Bricks and pots'],
            ['Coal', 'Fuel'],
          ],
        },
        tip: 'Granite is hard. Chalk is soft.',
        helpEs: 'Cada roca tiene un uso: el granito (duro) para construir, la tiza para escribir, el mármol para estatuas, la pizarra para tejados, la arcilla para ladrillos y el carbón como combustible. (hard = duro, soft = blando, roof = tejado, fuel = combustible)',
      },
      {
        emoji: '🌬️',
        title: 'Erosion and soil',
        body: [
          'Wind, water and ice break rocks into small pieces. It takes a long time. This is **erosion**.',
          '**Soil** is the layer of soft, dark earth on the ground. Plants grow in soil.',
        ],
        helpEs: 'La erosión es cuando el viento, el agua y el hielo rompen las rocas poco a poco. El suelo es la capa de tierra blanda y oscura donde crecen las plantas. (erosion = erosión, soil = suelo)',
      },
      {
        emoji: '🏔️',
        title: 'Landscape words',
        body: ['The **landscape** is what the land looks like. Look at the words below.'],
        table: {
          head: ['Word', 'Meaning'],
          rows: [
            ['Mountain', 'A very high area of land'],
            ['Plain', 'A flat area of land'],
            ['Valley', 'Low land between mountains'],
            ['Coast', 'Land next to the sea'],
            ['Lake', 'Water surrounded by land'],
            ['Island', 'Land surrounded by water'],
          ],
        },
        tip: 'Lake: water with land around. Island: land with water around.',
        helpEs: 'Palabras del paisaje: montaña (zona muy alta), llanura (terreno plano), valle, costa, lago e isla. El lago es agua rodeada de tierra; la isla es tierra rodeada de agua. (mountain = montaña, plain = llanura, valley = valle, coast = costa, lake = lago, island = isla)',
      },
      {
        emoji: '🏞️',
        title: 'Rivers',
        body: [
          'A **river** starts in the **mountains**. The water runs down to the sea.',
          'The place where a river meets the sea is the **river mouth**.',
        ],
        bullets: ['Start: in the mountains', 'End: at the sea, in the river mouth'],
        helpEs: 'Un río nace en las montañas y baja hasta el mar. El lugar donde el río llega al mar se llama desembocadura. (river = río, river mouth = desembocadura)',
      },
    ],
    keyPoints: [
      'A rock is made of one or more minerals. Metals come from minerals.',
      'Granite is hard, chalk is soft. Each rock has a use.',
      'Erosion breaks rocks. Plants grow in soil.',
      'A mountain is very high. A plain is flat.',
      'A river starts in the mountains and ends at the sea in the river mouth.',
    ],
    check: [
      { question: 'What is made of one or more minerals?', options: ['A rock', 'A cloud', 'A river'], answer: 0 },
      { question: 'What is land surrounded by water?', options: ['A lake', 'A valley', 'An island'], answer: 2 },
      { question: 'Which rock do we use for statues?', options: ['Coal', 'Marble', 'Clay'], answer: 1 },
    ],
  },
  {
    topicId: 'living-things',
    intro: 'Hello! I am Rojichi. Today we learn about animals and plants. How do living things live?',
    sections: [
      {
        emoji: '🌳',
        title: 'What is a living thing?',
        body: [
          'A **living thing** is born, grows, feeds, reproduces and dies. A tree is a living thing. A stone or a chair is not.',
          'All living things do three **life processes**: **nutrition** (they get food), **interaction** (they feel the world around them) and **reproduction** (they make new living things).',
        ],
        bullets: ['Nutrition = getting food', 'Interaction = feeling the world', 'Reproduction = making new living things'],
        helpEs: 'Los seres vivos nacen, crecen, se alimentan, se reproducen y mueren. Hacen tres funciones vitales: nutrición (alimentarse), interacción (sentir lo que les rodea) y reproducción (tener crías). (living thing = ser vivo, life processes = funciones vitales)',
      },
      {
        emoji: '🐬',
        title: 'Animal groups',
        body: [
          '**Vertebrates** have a **backbone**. **Invertebrates** do not have a backbone.',
          'A **mammal** has hair, and its babies drink milk from their mother. A dolphin is a mammal. A **bird** has feathers and **lays eggs**. This is called oviparous. A **reptile** has scales. A **fish** has fins.',
        ],
        table: {
          head: ['Group', 'Example'],
          rows: [
            ['Mammal', 'Cat, dolphin'],
            ['Bird', 'Parrot, eagle'],
            ['Reptile', 'Lizard, snake'],
            ['Fish', 'Salmon'],
          ],
        },
        tip: 'Touch your back. You feel your backbone. You are a vertebrate!',
        helpEs: 'Los vertebrados tienen columna vertebral y los invertebrados no. Mamíferos (pelo; las crías toman leche), aves (plumas, ponen huevos), reptiles (escamas) y peces (aletas). (backbone = columna, mammal = mamífero, bird = ave, reptile = reptil, fish = pez, lay eggs = poner huevos)',
      },
      {
        emoji: '🥩',
        title: 'What animals eat',
        body: [
          'A **herbivore** eats only plants. A cow is a herbivore.',
          'A **carnivore** eats only meat (other animals). A lion is a carnivore.',
        ],
        tip: 'HERBivore = HERBs and plants. CARNivore = CARNe (meat).',
        helpEs: 'Un herbívoro come solo plantas y un carnívoro come solo carne. (herbivore = herbívoro, carnivore = carnívoro, plants = plantas, meat = carne)',
      },
      {
        emoji: '🌻',
        title: 'Parts of a plant',
        body: ['A plant has four main parts. Each part has a job.'],
        table: {
          head: ['Part', 'Job'],
          rows: [
            ['Root', 'Takes water from the soil'],
            ['Stem', 'Holds the plant up'],
            ['Leaf', 'Makes food'],
            ['Flower', 'Makes seeds'],
          ],
        },
        tip: 'The roots are under the ground. The leaves are green.',
        helpEs: 'Las partes de la planta: la raíz toma agua del suelo, el tallo sujeta la planta, las hojas (verdes) hacen la comida y la flor hace semillas. (root = raíz, stem = tallo, leaf = hoja, flower = flor)',
      },
      {
        emoji: '☀️',
        title: 'How plants make food',
        body: [
          'Plants do not have a mouth. They make their own food.',
          'To make food, a plant needs **sunlight**, **water** and **carbon dioxide**, a gas in the air. The **leaves** make the food.',
        ],
        bullets: ['Sunlight from the Sun', 'Water from the roots', 'Carbon dioxide from the air, through the leaves'],
        helpEs: 'Las plantas hacen su propia comida con luz del sol, agua y dióxido de carbono, un gas del aire. Las hojas son las que hacen la comida. (sunlight = luz del sol, water = agua, carbon dioxide = dióxido de carbono, air = aire)',
      },
    ],
    keyPoints: [
      'Living things do nutrition, interaction and reproduction.',
      'Vertebrates have a backbone. Invertebrates do not.',
      'Mammals, birds, reptiles and fish are vertebrates.',
      'Herbivores eat plants. Carnivores eat meat.',
      'Plants make food with sunlight, water and carbon dioxide. Leaves make the food and roots take water.',
    ],
    check: [
      { question: 'How do birds have babies?', options: ['They lay eggs', 'They drink milk', 'They split'], answer: 0 },
      { question: 'Which part of a plant holds it up?', options: ['Flower', 'Leaf', 'Stem'], answer: 2 },
      { question: 'A cow eats only grass. It is a ...', options: ['carnivore', 'herbivore', 'bird'], answer: 1 },
    ],
  },
  {
    topicId: 'ecosystems',
    intro: 'Hello! I am Rojichi. Today we explore ecosystems. Who lives together, and who eats who?',
    sections: [
      {
        emoji: '🌲',
        title: 'What is an ecosystem?',
        body: [
          'An **ecosystem** has living things and their **environment** together. Think of a forest.',
          'Animals and plants are **living**. Water, sun, air and rocks are **non-living**.',
        ],
        bullets: ['Living: animals, plants', 'Non-living: water, air, sun, rocks'],
        helpEs: 'Un ecosistema son los seres vivos y su entorno, todos juntos. Los animales y las plantas son seres vivos; el agua, el aire, el sol y las rocas son no vivos. (environment = entorno, living = vivo, non-living = no vivo)',
      },
      {
        emoji: '🏡',
        title: 'Habitats and ecosystems',
        body: [
          'A **habitat** is the home of a living thing. Fish live in the sea. Bears live in the forest.',
          'A **population** is a group of animals of the same kind that live in one place.',
        ],
        table: {
          head: ['Ecosystem', 'Animal'],
          rows: [
            ['Ocean', 'Whale'],
            ['Forest', 'Deer'],
            ['Desert', 'Camel'],
            ['Pond', 'Frog'],
          ],
        },
        helpEs: 'El hábitat es la casa de un ser vivo. Una población es un grupo de animales de la misma especie en un lugar. Cada ecosistema tiene sus animales: océano (ballena), bosque (ciervo), desierto (camello), estanque (rana). (habitat = hábitat, population = población, ocean = océano, desert = desierto, pond = estanque)',
      },
      {
        emoji: '🏜️',
        title: 'The desert',
        body: [
          'A **desert** is hot and dry. There is very little rain. There is a lot of sand.',
          'Camels live in the desert. They need very little water.',
        ],
        helpEs: 'El desierto es un ecosistema caliente y seco, con muy poca lluvia. Los camellos viven allí. (desert = desierto, hot = caliente, dry = seco)',
      },
      {
        emoji: '🍃',
        title: 'The food chain',
        body: [
          'A **food chain** shows who eats who. It starts with plants and the Sun.',
          'Living things in an ecosystem have different jobs.',
        ],
        table: {
          head: ['Word', 'Meaning'],
          rows: [
            ['Producer', 'Makes its own food (plants)'],
            ['Consumer', 'Eats other living things'],
            ['Decomposer', 'Breaks down dead things (fungi)'],
            ['Habitat', 'Home of a living thing'],
          ],
        },
        tip: 'Decomposers turn dead things into soil nutrients.',
        helpEs: 'En la cadena alimentaria, los productores (las plantas) fabrican su propio alimento, los consumidores comen otros seres vivos y los descomponedores (como los hongos) descomponen lo muerto y lo convierten en nutrientes del suelo. (food chain = cadena alimentaria, producer = productor, consumer = consumidor, decomposer = descomponedor, dead = muerto)',
      },
      {
        emoji: '🦁',
        title: 'Predator and prey',
        body: [
          'A **predator** hunts other animals to eat them. A lion is a predator.',
          '**Prey** is the animal that is hunted. A zebra is prey.',
          'A rabbit eats grass. A fox eats the rabbit. The fox is the predator and the rabbit is the prey.',
        ],
        tip: 'Predator = hunter. Prey = hunted.',
        helpEs: 'El depredador caza a otros animales para comérselos y la presa es el animal cazado. Si el zorro come al conejo, el zorro es el depredador y el conejo es la presa. (predator = depredador, prey = presa, hunt = cazar)',
      },
    ],
    keyPoints: [
      'An ecosystem is living things and their environment together.',
      'A habitat is the home of a living thing. A population is a group of the same kind.',
      'Producers make food, consumers eat, decomposers break down dead things.',
      'A predator hunts. The prey is hunted.',
      'A desert is hot and dry with very little rain.',
    ],
    check: [
      { question: 'Which one is a non-living part of an ecosystem?', options: ['A deer', 'The air', 'A plant'], answer: 1 },
      { question: 'Fungi break down dead things. They are ...', options: ['predators', 'producers', 'decomposers'], answer: 2 },
      { question: 'A lion hunts a zebra. The zebra is the ...', options: ['prey', 'predator', 'habitat'], answer: 0 },
    ],
  },
  {
    topicId: 'forces-movement',
    intro: 'Hi! I am Rojichi. Today we learn about pushes, pulls and magnets. Ready to move?',
    sections: [
      {
        emoji: '💪',
        title: 'What is a force?',
        body: [
          'A **force** is a **push** or a **pull**. When you open a door, you push or pull it.',
          'An **object** is a thing. Forces act on objects.',
        ],
        tip: 'Force = push or pull.',
        helpEs: 'Una fuerza es un empujón o un tirón. Un objeto es una cosa. (force = fuerza, push = empujar, pull = tirar, object = objeto)',
      },
      {
        emoji: '⚽',
        title: 'What forces can do',
        body: [
          'A force can **move** an object or **stop** it. A force can change the **shape** of an object, like squeezing play dough.',
          'A force can also change the **speed** of an object. Speed is how fast it moves.',
        ],
        bullets: ['Move an object', 'Stop an object', 'Change its shape', 'Change its speed (how fast it moves)'],
        helpEs: 'Una fuerza puede mover un objeto, pararlo, cambiar su forma o cambiar su velocidad (lo rápido que se mueve). (shape = forma, speed = velocidad)',
      },
      {
        emoji: '🍎',
        title: 'Gravity and friction',
        body: [
          '**Gravity** pulls things down to the ground. An apple falls because of gravity.',
          '**Friction** happens when two surfaces rub together. It slows things down. Brakes on a bike use friction. When you rub your hands, they feel warm.',
        ],
        table: {
          head: ['Force', 'Example'],
          rows: [
            ['Gravity', 'An apple falls'],
            ['Friction', 'Rubbing your hands'],
            ['Magnetism', 'A magnet picks up a pin'],
            ['Push', 'Opening a door'],
          ],
        },
        helpEs: 'La gravedad atrae los objetos hacia el suelo. El rozamiento (fricción) aparece cuando dos superficies se frotan y frena las cosas, como los frenos de una bici. (gravity = gravedad, friction = rozamiento, rub = frotar, apple = manzana)',
      },
      {
        emoji: '🧲',
        title: 'Magnets',
        body: [
          'A **magnet** attracts **iron**, like a pin or a nail. It does not attract wood, plastic or paper.',
          'A magnet has two ends. They are called **poles**: the north pole and the south pole.',
        ],
        bullets: ['Magnetism is the force of a magnet', 'Magnets pick up iron things'],
        helpEs: 'Un imán atrae el hierro (por ejemplo un clavo), pero no la madera, el plástico ni el papel. Los extremos del imán se llaman polos: norte y sur. (magnet = imán, iron = hierro, poles = polos)',
      },
      {
        emoji: '↔️',
        title: 'Attract and repel',
        body: [
          '**Attract** means pull closer. **Repel** means push away.',
          'Different poles attract. The same poles repel. Two north poles repel each other.',
        ],
        table: {
          head: ['Word', 'Meaning'],
          rows: [
            ['Attract', 'Pull closer'],
            ['Repel', 'Push away'],
            ['Speed', 'How fast it moves'],
            ['Object', 'A thing'],
          ],
        },
        tip: 'Same poles say "go away". Different poles say "come here".',
        helpEs: 'Atraer es acercar y repeler es alejar. Los polos distintos se atraen y los polos iguales se repelen; dos polos norte se repelen. (attract = atraer, repel = repeler)',
      },
    ],
    keyPoints: [
      'A force is a push or a pull.',
      'Forces can move, stop, change the shape or change the speed of an object.',
      'Gravity pulls things down. Friction slows things down.',
      'A magnet attracts iron and has two poles.',
      'Same poles repel. Different poles attract.',
    ],
    check: [
      { question: 'Which force makes an apple fall?', options: ['Friction', 'Gravity', 'Light'], answer: 1 },
      { question: 'What does "repel" mean?', options: ['Push away', 'Pull closer', 'Fall down'], answer: 0 },
      { question: 'A magnet picks up a ...', options: ['wooden spoon', 'paper cup', 'nail'], answer: 2 },
    ],
  },
  {
    topicId: 'energy-machines',
    intro: 'Hello! I am Rojichi. Today we learn about energy and simple machines. They help us every day!',
    sections: [
      {
        emoji: '⚡',
        title: 'What is energy?',
        body: [
          '**Energy** makes things move, grow or change. We need energy to run, to jump and to turn on a lamp.',
          'Energy has different forms.',
        ],
        table: {
          head: ['Energy', 'Example'],
          rows: [
            ['Light', 'A lamp'],
            ['Heat', 'A radiator, a hot cooker'],
            ['Sound', 'A drum'],
            ['Movement', 'A running dog'],
          ],
        },
        helpEs: 'La energía hace que las cosas se muevan, crezcan o cambien. Tiene distintas formas: luz (lámpara), calor (radiador), sonido (tambor) y movimiento (un perro corriendo). (energy = energía, heat = calor, lamp = lámpara)',
      },
      {
        emoji: '☀️',
        title: 'Sources of energy',
        body: [
          'The Sun is a **source** of energy. It gives us **light** and **heat**.',
          '**Wind turbines** use the energy of the **wind**. They make electricity.',
        ],
        bullets: ['Source = where energy comes from', 'The Sun gives light and heat', 'Wind turns turbines'],
        helpEs: 'El Sol es una fuente de energía: nos da luz y calor. Los molinos eólicos (aerogeneradores) usan la energía del viento para hacer electricidad. (source = fuente, wind = viento)',
      },
      {
        emoji: '♻️',
        title: 'Renewable or not?',
        body: [
          '**Renewable** energy never runs out. The Sun, the wind and water are renewable.',
          '**Non-renewable** energy will run out one day. Oil and coal are non-renewable.',
        ],
        table: {
          head: ['Source', 'Type'],
          rows: [
            ['Sun', 'Renewable'],
            ['Wind', 'Renewable'],
            ['Water', 'Renewable'],
            ['Oil', 'Non-renewable'],
            ['Coal', 'Non-renewable'],
          ],
        },
        tip: 'Re-new-able: it can be used again and again.',
        helpEs: 'La energía renovable no se acaba (Sol, viento, agua). La no renovable se acabará algún día (petróleo, carbón). (renewable = renovable, non-renewable = no renovable, oil = petróleo, coal = carbón)',
      },
      {
        emoji: '🔧',
        title: 'Simple machines',
        body: [
          '**Simple machines** make our work easier. There are four kinds.',
          'A **lever** is a bar that turns. A seesaw is a lever. Scissors are levers, too.',
          'A **wheel** is round and helps things move. Bikes and cars have wheels.',
        ],
        table: {
          head: ['Machine', 'Example'],
          rows: [
            ['Lever', 'Seesaw, scissors'],
            ['Wheel', 'Bicycle, car'],
            ['Ramp', 'Slide'],
            ['Pulley', 'Well bucket, crane'],
          ],
        },
        helpEs: 'Las máquinas simples nos facilitan el trabajo. La palanca (balancín, tijeras) es una barra que gira; la rueda es redonda y ayuda a mover las cosas, como en una bici o un coche. (simple machine = máquina simple, lever = palanca, wheel = rueda, scissors = tijeras)',
      },
      {
        emoji: '🪢',
        title: 'Ramps and pulleys',
        body: [
          'A **ramp** is a sloping surface. A slide is a ramp. It helps us go up or down.',
          'A **pulley** has a rope over a wheel. It helps us **lift** heavy things up. A crane and a well use pulleys.',
        ],
        tip: 'Pulley = rope + wheel = lift heavy things.',
        helpEs: 'La rampa es una superficie inclinada, como un tobogán. La polea es una cuerda sobre una rueda y sirve para subir cosas pesadas, como en un pozo o una grúa. (ramp = rampa, pulley = polea, lift = levantar)',
      },
    ],
    keyPoints: [
      'Energy makes things move, grow or change.',
      'Energy has forms: light, heat, sound and movement.',
      'Renewable energy (Sun, wind, water) never ends. Oil and coal will run out.',
      'Simple machines make work easier.',
      'Lever, wheel, ramp and pulley are simple machines.',
    ],
    check: [
      { question: 'Which energy source is renewable?', options: ['Oil', 'Coal', 'Wind'], answer: 2 },
      { question: 'What does a pulley help us do?', options: ['Lift heavy things', 'Make light', 'Hear sounds'], answer: 0 },
      { question: 'A drum gives us ... energy.', options: ['light', 'sound', 'heat'], answer: 1 },
    ],
  },
  {
    topicId: 'health-diet',
    intro: 'Hi! I am Rojichi. Today we learn how to eat well and keep our body healthy. Yummy science!',
    sections: [
      {
        emoji: '🍝',
        title: 'Food groups',
        body: [
          'Food gives us what our body needs. There are four groups.',
          '**Carbohydrates** give us **energy**. **Proteins** help our body **grow** and repair. **Vitamins** are in fruit and vegetables. **Fats** give us a lot of energy, but we should not eat too much.',
        ],
        table: {
          head: ['Group', 'Foods'],
          rows: [
            ['Carbohydrates', 'Bread, pasta, rice'],
            ['Proteins', 'Meat, chicken, fish, eggs'],
            ['Vitamins', 'Fruit and vegetables, orange'],
            ['Fats', 'Oil, olive oil, butter'],
          ],
        },
        tip: 'Athletes eat pasta for energy!',
        helpEs: 'Hay cuatro grupos de alimentos: los hidratos de carbono (pan, pasta, arroz) dan energía; las proteínas (carne, pescado, huevos) ayudan a crecer y reparar el cuerpo; las vitaminas están en la fruta y la verdura; las grasas (aceite, mantequilla) dan mucha energía. (carbohydrates = hidratos de carbono, proteins = proteínas, vitamins = vitaminas, fats = grasas, rice = arroz, chicken = pollo)',
      },
      {
        emoji: '💧',
        title: 'Water and calcium',
        body: [
          'We must drink **water** every day. It keeps us **hydrated**.',
          '**Calcium** is a mineral. It makes our bones and teeth strong. Milk, cheese and yoghurt have calcium.',
        ],
        bullets: ['Drink water every day', 'Calcium = strong bones and teeth', 'Calcium is in milk, cheese and yoghurt'],
        helpEs: 'Debemos beber agua cada día para estar hidratados. El calcio es un mineral que fortalece los huesos y los dientes; está en la leche, el queso y el yogur. (water = agua, calcium = calcio, bones = huesos, strong = fuerte)',
      },
      {
        emoji: '🏃',
        title: 'Exercise and sleep',
        body: [
          '**Exercise** is physical activity, like running or playing football. It keeps our body strong and healthy.',
          'We also need to **sleep**. Children need about **9 to 11 hours** every night. Sleep gives us rest and energy.',
        ],
        tip: 'Exercise = strong body. Sleep = rest and energy.',
        helpEs: 'El ejercicio (actividad física) mantiene el cuerpo fuerte y sano. Los niños necesitan dormir unas 9 a 11 horas cada noche para descansar y tener energía. (exercise = ejercicio, sleep = dormir, hours = horas)',
      },
      {
        emoji: '🧼',
        title: 'Clean and healthy',
        body: [
          '**Germs** are tiny living things. We cannot see them. They can make us ill.',
          'We **wash our hands** to remove germs. We **brush our teeth** to keep them healthy.',
        ],
        table: {
          head: ['Habit', 'Benefit'],
          rows: [
            ['Exercise', 'Strong body'],
            ['Sleep', 'Rest and energy'],
            ['Wash hands', 'Remove germs'],
            ['Drink water', 'Stay hydrated'],
            ['Brush teeth', 'Healthy teeth'],
          ],
        },
        helpEs: 'Los gérmenes son seres diminutos que no vemos y pueden enfermarnos. Nos lavamos las manos para quitarlos y nos cepillamos los dientes para mantenerlos sanos. (germs = gérmenes, wash = lavar, brush = cepillar, teeth = dientes)',
      },
    ],
    keyPoints: [
      'Carbohydrates give energy. Proteins help us grow and repair.',
      'Fruit and vegetables have vitamins. Fats give energy but not too much.',
      'We drink water every day. Calcium makes bones strong.',
      'Exercise keeps us strong. Children sleep 9 to 11 hours.',
      'We wash our hands to remove germs.',
    ],
    check: [
      { question: 'Which food group has bread, rice and pasta?', options: ['Proteins', 'Carbohydrates', 'Vitamins'], answer: 1 },
      { question: 'What does calcium do?', options: ['Makes bones strong', 'Removes germs', 'Gives light'], answer: 0 },
      { question: 'Why do we wash our hands?', options: ['To get taller', 'To sleep well', 'To remove germs'], answer: 2 },
    ],
  },
];
