import type { Lesson } from '../../types';

export const lessons: Lesson[] = [
  {
    topicId: 'numeros',
    intro: '¡Bzzz, hola! Soy Clarita. Hoy repasamos los números grandes y descubrimos herramientas potentes: potencias, raíces, múltiplos, divisores, primos, m.c.m., m.c.d. y números negativos.',
    sections: [
      {
        emoji: '📖',
        title: 'Leer y escribir números grandes',
        body: [
          'Los números se agrupan de tres en tres cifras: **unidades**, **miles** y **millones**. Para escribirlos con cifras, pon cada grupo en su sitio y rellena con **ceros** los lugares vacíos.',
        ],
        bullets: [
          '«Cuatro millones sesenta mil trescientos» → 4.060.300 (4 millones, 060 miles, 300 unidades).',
          '«Dos millones ochocientos mil cuarenta» → 2.800.040.',
          '5.002.010 se lee «cinco millones dos mil diez».',
        ],
        tip: 'Escribe los tres grupos con tres cifras cada uno (menos el primero) y pon 0 donde no haya nada.',
      },
      {
        emoji: '⚡',
        title: 'Potencias y raíces cuadradas',
        body: [
          'Una **potencia** es una multiplicación del mismo número varias veces. La **base** es el número que se repite y el **exponente** dice cuántas veces. Por ejemplo, 4³ = 4 × 4 × 4 = 64. Ojo: 4³ **no** es 4 × 3.',
          'La **raíz cuadrada** es la operación contraria a elevar al cuadrado: √49 = 7 porque 7 × 7 = 49. Los números como 49 se llaman **cuadrados perfectos**.',
        ],
        table: {
          head: ['Potencia', 'Se calcula', 'Valor'],
          rows: [
            ['2⁵', '2 × 2 × 2 × 2 × 2', '32'],
            ['3³', '3 × 3 × 3', '27'],
            ['6²', '6 × 6', '36'],
            ['7²', '7 × 7', '49'],
            ['4³', '4 × 4 × 4', '64'],
            ['10⁴', '10 × 10 × 10 × 10', '10.000'],
          ],
        },
        bullets: [
          'Cuadrados perfectos: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225.',
          'Las potencias de 10 son un 1 seguido de tantos ceros como indica el exponente: 10³ = 1.000.',
          '√100 = 10 porque 10 × 10 = 100; √225 = 15 porque 15 × 15 = 225.',
        ],
        tip: 'Para una raíz, pregunta: ¿qué número multiplicado por sí mismo da este?',
      },
      {
        emoji: '🔁',
        title: 'Múltiplos y divisores',
        body: [
          'Los **múltiplos** de un número son los que salen al multiplicarlo por 1, 2, 3, 4... Los múltiplos de 7 son 7, 14, 21, 28, 35... (¡infinitos!).',
          'Los **divisores** de un número son los que lo dividen de forma **exacta** (con resto 0). Para hallarlos, busca parejas de factores.',
        ],
        bullets: [
          'Divisores de 18: 1 × 18, 2 × 9, 3 × 6 → 1, 2, 3, 6, 9 y 18.',
          'Un número siempre es múltiplo de sus divisores: 18 es múltiplo de 6 y 6 es divisor de 18.',
          '**Divisible por 2**: acaba en cifra par. **Por 5**: acaba en 0 o 5. **Por 10**: acaba en 0.',
          '**Divisible por 3**: la suma de sus cifras es múltiplo de 3. Ejemplo: 231 → 2 + 3 + 1 = 6, sí; 134 → 1 + 3 + 4 = 8, no.',
        ],
        tip: 'Los divisores siempre vienen por parejas: si 3 divide a 18, también lo hace 18 ÷ 3 = 6.',
      },
      {
        emoji: '🔑',
        title: 'Números primos y compuestos',
        body: [
          'Un número es **primo** si solo tiene **dos divisores**: el 1 y él mismo. Si tiene más de dos divisores, es **compuesto**. El 1 no es primo ni compuesto.',
          'Para saber si un número es primo, prueba a dividirlo entre 2, 3, 5 y 7. Si ninguno lo divide, es primo (en los números pequeños).',
        ],
        bullets: [
          'Primos hasta 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 y 47.',
          'El 2 es el único primo par.',
          '51 es compuesto: 5 + 1 = 6, así que 3 lo divide (51 = 3 × 17).',
          '37 es primo: no es par, 3 + 7 = 10 no es múltiplo de 3, no acaba en 0 ni en 5 y 7 × 5 = 35, 7 × 6 = 42 (no sale 37).',
        ],
        tip: 'Si un número es par (y mayor que 2), ¡ya sabes que es compuesto!',
      },
      {
        emoji: '🤝',
        title: 'M.c.m. y m.c.d.',
        body: [
          'El **mínimo común múltiplo** (m.c.m.) de dos números es el **menor** múltiplo que tienen en común. Escribe los múltiplos de cada uno y busca el primero que se repite.',
          'El **máximo común divisor** (m.c.d.) es el **mayor** divisor que tienen en común. Escribe los divisores de cada uno y busca el mayor que se repite.',
        ],
        bullets: [
          'm.c.m. de 9 y 12: múltiplos de 12 → 12, 24, 36; de 9 → 9, 18, 27, 36. El primero común es **36**.',
          'm.c.m. de 10 y 15 → 10, 20, 30 y 15, 30 → **30**.',
          'm.c.d. de 20 y 30: divisores de 20 → 1, 2, 4, 5, 10, 20; de 30 → 1, 2, 3, 5, 6, 10, 15, 30. El mayor común es **10**.',
          'm.c.d. de 16 y 24 → 1, 2, 4, 8, 16 y 1, 2, 3, 4, 6, 8, 12, 24 → **8**.',
        ],
        tip: 'El m.c.m. es mayor o igual que los dos números. El m.c.d. es menor o igual que los dos.',
      },
      {
        emoji: '🌡️',
        title: 'Números negativos',
        body: [
          'Los números **negativos** se escriben con un signo menos (−) y se usan para temperaturas bajo cero, sótanos o deudas.',
          'En la **recta numérica**, los números aumentan hacia la derecha. Es **mayor** el que está más a la derecha. Entre los negativos, el que está más lejos del cero es el **menor**.',
        ],
        bullets: [
          '−8 < −2 < 0 < 5.',
          '−2 > −9, porque −2 está más a la derecha (más cerca del cero).',
          'Cualquier negativo es menor que cualquier positivo: −4 < 3.',
        ],
        tip: 'En los negativos, ¡al revés! Cuanto más lejos del cero, más pequeño.',
      },
    ],
    keyPoints: [
      'Los números grandes se leen en grupos de tres cifras: unidades, miles y millones.',
      'Una potencia es multiplicar la base por sí misma tantas veces como indica el exponente; la raíz cuadrada es la operación contraria.',
      'Un número primo solo tiene dos divisores: el 1 y él mismo.',
      'El m.c.m. es el menor múltiplo común y el m.c.d. es el mayor divisor común.',
      'Con números negativos, es mayor el que está más a la derecha en la recta numérica.',
    ],
    check: [
      { question: '¿Cuál es el m.c.m. de 9 y 12?', options: ['3', '36', '108'], answer: 1 },
      { question: '¿Cuánto es 4³?', options: ['12', '81', '64'], answer: 2 },
      { question: '¿Cuál de estos números es primo?', options: ['31', '45', '51'], answer: 0 },
    ],
  },
  {
    topicId: 'operaciones',
    intro: '¡Bzzz! Soy Clarita. Cuando una cuenta tiene muchas operaciones, ¿por dónde se empieza? Hoy aprenderemos el orden correcto y las propiedades que nos hacen el cálculo más fácil.',
    sections: [
      {
        emoji: '📋',
        title: 'La jerarquía de operaciones',
        body: [
          'Cuando hay varias operaciones juntas, **no se calcula de izquierda a derecha sin más**. Existe un orden:',
        ],
        table: {
          head: ['Orden', 'Qué se hace primero'],
          rows: [
            ['1.º', 'Lo que hay dentro de los paréntesis'],
            ['2.º', 'Potencias y raíces'],
            ['3.º', 'Multiplicaciones y divisiones (de izquierda a derecha)'],
            ['4.º', 'Sumas y restas (de izquierda a derecha)'],
          ],
        },
        bullets: [
          '3 + 4 × 2 = 3 + 8 = **11** (no 14).',
          '(3 + 4) × 2 = 7 × 2 = **14**: el paréntesis cambia el orden.',
        ],
        tip: 'Primero los paréntesis, luego las «fuertes» (× ÷) y por último las «débiles» (+ −).',
      },
      {
        emoji: '🔢',
        title: 'Operaciones sin paréntesis',
        body: [
          'Primero resuelves todas las multiplicaciones y divisiones. Después, sumas y restas, **de izquierda a derecha**.',
          'Si hay varias operaciones del mismo nivel, las haces en el orden en que aparecen.',
        ],
        bullets: [
          '5 + 6 × 3 = 5 + 18 = **23**.',
          '45 − 12 ÷ 4 = 45 − 3 = **42**.',
          '24 ÷ 6 + 3 × 5 = 4 + 15 = **19**.',
          '7 × 4 − 2 × 5 = 28 − 10 = **18**.',
          '40 ÷ 5 × 2 = 8 × 2 = **16** (de izquierda a derecha).',
          '50 − 20 + 5 = 30 + 5 = **35** (no 25).',
        ],
        tip: 'Subraya las multiplicaciones y divisiones y resuélvelas primero.',
      },
      {
        emoji: '🧩',
        title: 'Operaciones con paréntesis',
        body: [
          'Los **paréntesis** mandan: resuelve primero lo que hay dentro. Si hay varios paréntesis, resuélvelos todos antes de seguir.',
        ],
        bullets: [
          '50 − (12 − 7) = 50 − 5 = **45**.',
          '(20 − 8) ÷ (1 + 3) = 12 ÷ 4 = **3**.',
          '3 × (8 − 2) + 1 = 3 × 6 + 1 = 18 + 1 = **19**.',
          '60 − 2 × (4 + 5) = 60 − 2 × 9 = 60 − 18 = **42**.',
        ],
        tip: 'Escribe cada paso en una línea nueva, y en cada paso resuelve una sola operación.',
      },
      {
        emoji: '🧠',
        title: 'Propiedades de las operaciones',
        body: [
          'Las propiedades nos permiten cambiar una cuenta por otra más fácil. Sirven para la suma y la multiplicación.',
        ],
        table: {
          head: ['Propiedad', 'Qué dice y ejemplo'],
          rows: [
            ['Conmutativa', 'El orden no importa: 6 + 9 = 9 + 6; 4 × 7 = 7 × 4.'],
            ['Asociativa', 'La agrupación no importa: (5 × 2) × 7 = 5 × (2 × 7).'],
            ['Distributiva', 'Se reparte: 8 × (5 + 2) = 8 × 5 + 8 × 2 = 56.'],
            ['Elemento neutro', 'Sumar 0 o multiplicar por 1 no cambia nada: 14 + 0 = 14; 14 × 1 = 14.'],
          ],
        },
        bullets: [
          'Cálculo mental: 25 × 12 = 25 × (10 + 2) = 250 + 50 = **300**.',
          'También con restas: 99 × 6 = (100 − 1) × 6 = 600 − 6 = **594**.',
          'La resta y la división **no** son conmutativas: 8 − 3 no es 3 − 8.',
        ],
        tip: 'Conmutativa = cambiar de sitio. Asociativa = agrupar. Distributiva = repartir.',
      },
    ],
    keyPoints: [
      'Orden: paréntesis, potencias y raíces, × y ÷, y por último + y −.',
      'Las operaciones del mismo nivel se hacen de izquierda a derecha.',
      'Los paréntesis cambian el orden de los cálculos.',
      'Propiedades: conmutativa, asociativa, distributiva y elemento neutro.',
    ],
    check: [
      { question: '¿Cuánto es 9 + 6 × 4 ÷ 2?', options: ['30', '21', '15'], answer: 1 },
      { question: '¿Cuánto es 40 − (12 + 8) ÷ 5?', options: ['36', '12', '4'], answer: 0 },
      { question: '¿Qué propiedad usamos al calcular 6 × 13 como 6 × 10 + 6 × 3?', options: ['Conmutativa', 'Asociativa', 'Distributiva'], answer: 2 },
    ],
  },
  {
    topicId: 'fracciones',
    intro: '¡Bzzz! Soy Clarita. Hoy llevamos las fracciones al siguiente nivel: simplificarlas, compararlas, sumarlas, multiplicarlas y dividirlas. ¡Vas a ser una experta!',
    sections: [
      {
        emoji: '🟰',
        title: 'Fracciones equivalentes y simplificar',
        body: [
          'Dos fracciones son **equivalentes** si valen lo mismo. Se obtienen multiplicando o dividiendo numerador y denominador por el **mismo número**. Para comprobarlo, multiplica en cruz: 1/4 y 5/20 son equivalentes porque 1 × 20 = 4 × 5.',
          '**Simplificar** es dividir arriba y abajo entre el mismo número. Una fracción es **irreducible** cuando ya no se puede simplificar. Para llegar a ella de un golpe, divide entre el **m.c.d.** del numerador y el denominador.',
        ],
        bullets: [
          '2/5 = 6/15 (multiplicando por 3).',
          '15/20 = 3/4 (dividiendo entre 5).',
          '24/36: el m.c.d. es 12, así que 24/36 = 2/3.',
          '20/50: el m.c.d. es 10, así que 20/50 = 2/5.',
        ],
        tip: 'Si no ves el m.c.d., ve simplificando poco a poco: entre 2, entre 3... hasta que ya no se pueda.',
      },
      {
        emoji: '⚖️',
        title: 'Comparar y fracciones mayores que 1',
        body: [
          'Para comparar fracciones con distinto denominador, hay que **reducirlas a común denominador** (puedes usar el m.c.m.) y después comparar los numeradores.',
          'Una fracción es **propia** si el numerador es menor que el denominador (vale menos que 1). Es **impropia** si el numerador es mayor (vale más que 1). Si son iguales, vale exactamente 1.',
        ],
        bullets: [
          '5/6 y 7/9: el m.c.m. de 6 y 9 es 18 → 15/18 y 14/18. Mayor: **5/6**.',
          '3/5 y 1/2: el m.c.m. de 5 y 2 es 10 → 6/10 y 5/10. Mayor: **3/5**.',
          '9/5 es mayor que 1; 4/11 es menor que 1; 7/7 = 1.',
        ],
        tip: 'Para saber si una fracción pasa de 1, mira si el numerador gana al denominador.',
      },
      {
        emoji: '➕',
        title: 'Sumar y restar fracciones',
        body: [
          'Con el **mismo denominador**, se suman o restan los numeradores y el denominador se queda igual.',
          'Con **distinto denominador**, primero se buscan fracciones equivalentes con un **denominador común** (el m.c.m. es lo más cómodo) y después se opera. Al final, simplifica.',
        ],
        bullets: [
          '1/3 + 1/4: m.c.m. = 12 → 4/12 + 3/12 = **7/12**.',
          '5/6 − 1/4: m.c.m. = 12 → 10/12 − 3/12 = **7/12**.',
          '1/2 + 1/6: m.c.m. = 6 → 3/6 + 1/6 = 4/6 = **2/3**.',
          '7/10 − 3/10 = 4/10 = 2/5.',
        ],
        tip: 'Si los denominadores no son iguales, no puedes operar aún: ¡iguálalos primero!',
      },
      {
        emoji: '✖️',
        title: 'Multiplicar y dividir fracciones',
        body: [
          '**Multiplicar**: numerador por numerador y denominador por denominador. Después, simplifica.',
          '**Dividir**: se multiplica **en cruz**. El numerador del resultado es el numerador de la primera por el denominador de la segunda; el denominador es el denominador de la primera por el numerador de la segunda.',
        ],
        bullets: [
          '3/5 × 2/7 = 6/35.',
          '4/9 × 3/8 = 12/72 = **1/6**.',
          '2/3 : 4/5 = (2 × 5)/(3 × 4) = 10/12 = **5/6**.',
          '1/2 : 1/4 = (1 × 4)/(2 × 1) = 4/2 = **2**.',
        ],
        tip: 'Para multiplicar no necesitas denominador común. Para dividir: en cruz.',
      },
      {
        emoji: '🧮',
        title: 'La fracción de una cantidad',
        body: [
          'Para calcular una fracción de una cantidad: **divide** entre el denominador y **multiplica** por el numerador.',
          'Una fracción mayor que 1 de una cantidad da más que esa cantidad.',
        ],
        bullets: [
          '2/7 de 35: 35 ÷ 7 = 5 y 5 × 2 = **10**.',
          '5/6 de 54: 54 ÷ 6 = 9 y 9 × 5 = **45**.',
          '3/4 de 60: 60 ÷ 4 = 15 y 15 × 3 = **45**.',
          'Para lo que **no** es la fracción: si van 3/4, no van 1/4. O resta: total − parte.',
        ],
        tip: 'Primero divido entre el de abajo, luego multiplico por el de arriba.',
      },
    ],
    keyPoints: [
      'Fracciones equivalentes: multiplica o divide arriba y abajo por el mismo número.',
      'Fracción irreducible: la que no se puede simplificar; se obtiene dividiendo entre el m.c.d.',
      'Para comparar o sumar con distinto denominador, usa un denominador común (m.c.m.).',
      'Multiplicar: arriba con arriba y abajo con abajo. Dividir: en cruz.',
      'Fracción de una cantidad: divide entre el denominador y multiplica por el numerador.',
    ],
    check: [
      { question: '¿Cuál es la fracción irreducible de 16/24?', options: ['4/6', '2/3', '8/12'], answer: 1 },
      { question: '¿Cuánto es 3/4 − 1/6?', options: ['2/10', '5/12', '7/12'], answer: 2 },
      { question: '¿Cuánto es 3/4 × 2/9?', options: ['1/6', '5/13', '6/13'], answer: 0 },
    ],
  },
  {
    topicId: 'decimales',
    intro: '¡Bzzz! Soy Clarita. Los decimales aparecen en precios, medidas y notas. Vamos a leerlos, redondearlos, pasarlos a fracción y calcular con ellos.',
    sections: [
      {
        emoji: '🔟',
        title: 'Valor de las cifras, comparar y redondear',
        body: [
          'Tras la coma van las **décimas**, las **centésimas** y las **milésimas**. En 3,456, el 4 son décimas, el 5 centésimas y el 6 milésimas.',
          'Para **comparar**, mira la parte entera y luego las cifras decimales. Para no liarte, **iguala las cifras** con ceros.',
          'Para **redondear**, mira la cifra siguiente: si es 5 o más, sube; si es menos, se queda.',
        ],
        bullets: [
          '0,6; 0,58 y 0,065 → 0,600; 0,580 y 0,065. El mayor es 0,6 y el menor, 0,065.',
          '5,364 a las centésimas: la milésima es 4, se queda → 5,36.',
          '5,364 a las décimas: la centésima es 6, sube → 5,4.',
          '5,364 a las unidades: la décima es 3, se queda → 5.',
        ],
        tip: 'Iguala el número de decimales con ceros: 0,8 = 0,800.',
      },
      {
        emoji: '🔄',
        title: 'Fracciones y decimales',
        body: [
          'Para pasar una **fracción a decimal**, divide el numerador entre el denominador. Si el denominador es 10, 100 o 1.000, se escribe directamente.',
          'Para pasar un **decimal a fracción**, escribe el número sin coma sobre 10, 100 o 1.000 (según las cifras decimales) y simplifica.',
        ],
        table: {
          head: ['Fracción', 'Decimal'],
          rows: [
            ['1/2', '0,5'],
            ['1/4', '0,25'],
            ['3/4', '0,75'],
            ['1/5', '0,2'],
            ['1/10', '0,1'],
            ['1/8', '0,125'],
          ],
        },
        bullets: [
          '3/8: 3 ÷ 8 = **0,375** (30 ÷ 8 = 3, sobran 6; 60 ÷ 8 = 7, sobran 4; 40 ÷ 8 = 5).',
          '7/20 = 35/100 = **0,35**.',
          '0,6 = 6/10 = **3/5**.',
          '0,125 = 125/1.000 = **1/8**.',
        ],
        tip: 'Fracción a decimal: dividir. Decimal a fracción: poner sobre 10, 100 o 1.000 y simplificar.',
      },
      {
        emoji: '↔️',
        title: 'Multiplicar y dividir por 10, 100 y 1.000',
        body: [
          'Al **multiplicar** por 10, 100 o 1.000, la coma se mueve 1, 2 o 3 lugares a la **derecha** (si faltan cifras, añade ceros).',
          'Al **dividir** entre 10, 100 o 1.000, la coma se mueve 1, 2 o 3 lugares a la **izquierda**.',
        ],
        bullets: [
          '7,23 × 100 = **723**.',
          '0,5 × 1.000 = **500** (añadimos ceros).',
          '8,9 × 10 = 89.',
          '12,5 ÷ 100 = **0,125**.',
          '345 ÷ 100 = **3,45** (el número entero tiene la coma al final).',
          '6,4 ÷ 10 = 0,64.',
        ],
        tip: 'Multiplicar = la coma va hacia la derecha (el número crece). Dividir = hacia la izquierda.',
      },
      {
        emoji: '➕',
        title: 'Sumar y restar decimales',
        body: [
          'Coloca los números con la **coma debajo de la coma** y rellena con ceros las cifras que falten. Luego suma o resta como si fueran números enteros.',
        ],
        bullets: [
          '12,4 + 3,85 → 12,40 + 3,85 = **16,25**.',
          '9,4 − 3,76 → 9,40 − 3,76 = **5,64**.',
          '20 − 7,35 → 20,00 − 7,35 = **12,65**.',
        ],
        tip: 'Si un número es entero, pon la coma y rellena con ceros: 20 = 20,00.',
      },
      {
        emoji: '✖️',
        title: 'Multiplicar decimales',
        body: [
          'Multiplica como si no hubiera comas. Después, pon en el resultado **tantos decimales como tengan entre los dos factores**.',
        ],
        bullets: [
          '12,7 × 6: 127 × 6 = 762 y hay 1 decimal → **76,2**.',
          '3,4 × 2,5: 34 × 25 = 850 y hay 2 decimales en total → 8,50 = **8,5**.',
          '0,3 × 0,4: 3 × 4 = 12 y hay 2 decimales → **0,12**.',
          '4,2 × 5: 42 × 5 = 210 con 1 decimal → 21,0 = **21**.',
        ],
        tip: 'Cuenta los decimales de los dos números y suma esa cantidad: ¡esa es la cantidad de decimales del resultado!',
      },
      {
        emoji: '➗',
        title: 'Dividir con decimales',
        body: [
          'Si una división de enteros no es exacta, puedes seguir dividiendo: pones una **coma** en el cociente, bajas un 0 y continúas.',
          'Para dividir un decimal entre un entero, se divide igual y la coma del cociente se pone al bajar la primera cifra decimal.',
        ],
        bullets: [
          '7 ÷ 2 = 3 y sobra 1 → 10 ÷ 2 = 5 → **3,5**.',
          '15 ÷ 4 = 3, sobran 3 → 30 ÷ 4 = 7, sobran 2 → 20 ÷ 4 = 5 → **3,75**.',
          '7,5 ÷ 3 = **2,5**.',
          '21 ÷ 8 = **2,625**.',
        ],
        tip: 'Para comprobar, multiplica: 3,75 × 4 = 15.',
      },
    ],
    keyPoints: [
      'Tras la coma van décimas, centésimas y milésimas; para comparar, iguala las cifras con ceros.',
      'Fracción a decimal: divide el numerador entre el denominador.',
      'Multiplicar por 10, 100 o 1.000 mueve la coma a la derecha; dividir, a la izquierda.',
      'Al sumar y restar, coma debajo de coma.',
      'Al multiplicar, se cuentan los decimales de los dos factores.',
    ],
    check: [
      { question: '¿Cuánto es 6,7 × 100?', options: ['67', '670', '6.700'], answer: 1 },
      { question: '¿Qué decimal es igual a 3/20?', options: ['0,15', '0,3', '0,2'], answer: 0 },
      { question: 'Calcula 2,4 × 0,5.', options: ['12', '0,12', '1,2'], answer: 2 },
    ],
  },
  {
    topicId: 'porcentajes',
    intro: '¡Bzzz! Soy Clarita. Los porcentajes están en las rebajas, en los mapas y en las recetas. Hoy aprenderemos a calcularlos y a usar la proporcionalidad.',
    sections: [
      {
        emoji: '％',
        title: '¿Qué es un porcentaje?',
        body: [
          'Un **porcentaje** es una fracción con denominador 100. «Por ciento» significa «de cada 100»: el 30 % es 30/100.',
          'Para pasar un porcentaje a fracción, escribe el número sobre 100 y **simplifica**.',
        ],
        table: {
          head: ['Porcentaje', 'Fracción'],
          rows: [
            ['50 %', '1/2'],
            ['25 %', '1/4'],
            ['75 %', '3/4'],
            ['10 %', '1/10'],
            ['20 %', '1/5'],
            ['5 %', '1/20'],
          ],
        },
        tip: 'Aprende estos: el 50 % es la mitad, el 25 % es la cuarta parte y el 10 % es la décima parte.',
      },
      {
        emoji: '🧮',
        title: 'Calcular el porcentaje de una cantidad',
        body: [
          'Hay trucos para calcular mentalmente: el **10 %** se halla dividiendo entre 10; el **50 %**, entre 2; el **25 %**, entre 4. El **5 %** es la mitad del 10 %.',
          'Para cualquier porcentaje: **cantidad × porcentaje ÷ 100**.',
        ],
        bullets: [
          '10 % de 350 = 350 ÷ 10 = **35**.',
          '5 % de 240: el 10 % es 24 y la mitad es **12**.',
          '75 % de 80: 80 ÷ 4 = 20 y 20 × 3 = **60** (el 75 % son 3/4).',
          '30 % de 120: el 10 % es 12 y 12 × 3 = **36**.',
          '20 % de 50: el 10 % es 5, el doble es 10.',
        ],
        tip: 'Empieza siempre por el 10 %: casi todos los demás salen de ahí.',
      },
      {
        emoji: '🏷️',
        title: 'Descuentos y rebajas',
        body: [
          'Para saber cuánto se paga con un descuento: **1.º** calcula el descuento en euros y **2.º** réstalo del precio.',
          'Truco: con un 20 % de descuento se paga el 80 % del precio, o sea, **precio × 0,8**.',
        ],
        bullets: [
          'Chaqueta de 80 € con un 25 % de descuento: 80 ÷ 4 = 20 € de rebaja. Pagas 80 − 20 = **60 €**.',
          'Libro de 30 € con un 25 % de rebaja: 30 × 25 ÷ 100 = 7,50 €. Pagas 30 − 7,50 = **22,50 €**.',
          'Mochila de 90 € con un 10 % de rebaja: 9 €. Pagas **81 €**.',
          'Con un 20 % de rebaja en una camiseta de 45 €: 45 × 0,8 = **36 €**.',
        ],
        tip: 'Pagas el 100 % menos el descuento. Un 20 % de rebaja es pagar el 80 %.',
      },
      {
        emoji: '⚖️',
        title: 'Proporcionalidad directa',
        body: [
          'Dos magnitudes son **directamente proporcionales** cuando, si una se multiplica por un número, la otra también. Si compras el doble de cuadernos, pagas el doble.',
          'El método más sencillo es la **reducción a la unidad**: calcula cuánto vale **uno** y después multiplica.',
        ],
        table: {
          head: ['Bolsas', 'Precio'],
          rows: [
            ['5', '20 €'],
            ['1', '4 €'],
            ['8', '32 €'],
          ],
        },
        bullets: [
          '5 bolsas cuestan 20 € → 1 bolsa cuesta 20 ÷ 5 = 4 €.',
          '8 bolsas cuestan 8 × 4 = **32 €**.',
          'Con 4 cuadernos por 10 €: cada uno cuesta 2,50 € y 9 cuestan 9 × 2,50 = 22,50 €.',
        ],
        tip: 'Primero a la unidad (dividir), después a lo que piden (multiplicar).',
      },
      {
        emoji: '🗺️',
        title: 'Escalas de planos y mapas',
        body: [
          'Una **escala 1:100** significa que 1 cm del plano son 100 cm en la realidad. Para pasar del plano a la realidad: **multiplica** los centímetros por la escala.',
          'Después cambia de unidad: cm → m, **divide entre 100**; cm → km, **divide entre 100.000**.',
        ],
        bullets: [
          'Escala 1:500, 8 cm en el plano: 8 × 500 = 4.000 cm = **40 m**.',
          'Escala 1:10.000, 3 cm: 30.000 cm = **300 m**.',
          'Escala 1:50.000, 6 cm: 300.000 cm = 3.000 m = **3 km**.',
          'Escala 1:2.000, 4 cm: 8.000 cm = **80 m**.',
        ],
        tip: 'Escala × cm del plano da centímetros reales. ¡No olvides pasar a metros o kilómetros!',
      },
    ],
    keyPoints: [
      'Un porcentaje es una fracción con denominador 100.',
      'El 10 % se calcula dividiendo entre 10, el 50 % entre 2, el 25 % entre 4 y el 5 % es la mitad del 10 %.',
      'En un descuento se calcula la rebaja y se resta del precio.',
      'En proporcionalidad directa, se calcula primero el valor de una unidad.',
      'Escala: multiplica los cm del plano por la escala y cambia de unidad.',
    ],
    check: [
      { question: '¿Cuánto es el 30 % de 90?', options: ['3', '27', '60'], answer: 1 },
      { question: 'Una camiseta de 40 € tiene un 25 % de descuento. ¿Cuánto se paga?', options: ['30 €', '10 €', '35 €'], answer: 0 },
      { question: 'En un plano a escala 1:200, 6 cm del plano son en la realidad...', options: ['1,2 m', '120 m', '12 m'], answer: 2 },
    ],
  },
  {
    topicId: 'medida',
    intro: '¡Bzzz! Soy Clarita. Hoy ponemos orden en las unidades de medida: la escalera de las unidades de longitud, superficie, volumen, capacidad, masa y tiempo.',
    sections: [
      {
        emoji: '📏',
        title: 'Longitud',
        body: [
          'Las unidades de longitud forman una escalera: **km, hm, dam, m, dm, cm, mm**. Cada unidad es **10 veces mayor** que la siguiente.',
        ],
        table: {
          head: ['Unidad', 'Equivale a'],
          rows: [
            ['1 km', '1.000 m'],
            ['1 hm', '100 m'],
            ['1 dam', '10 m'],
            ['1 dm', '0,1 m'],
            ['1 cm', '0,01 m'],
            ['1 mm', '0,001 m'],
          ],
        },
        bullets: [
          '5 hm = 5 × 100 = **500 m**.',
          '7 m = 7 × 1.000 = **7.000 mm**.',
          'Deca significa diez y hecto significa cien.',
        ],
        tip: 'Hacia abajo en la escalera, multiplica por 10 por cada escalón. Hacia arriba, divide.',
      },
      {
        emoji: '⬜',
        title: 'Superficie',
        body: [
          'La superficie se mide en unidades **cuadradas**: km², hm², dam², m², dm², cm², mm². Aquí, cada unidad es **100 veces mayor** que la siguiente.',
          'Es lógico: 1 m son 10 dm, así que 1 m² es un cuadrado de 10 dm × 10 dm = 100 dm².',
        ],
        bullets: [
          '1 m² = 100 dm² = 10.000 cm².',
          '3 m² = 3 × 100 = **300 dm²**.',
          '600 cm² = 600 ÷ 100 = **6 dm²**.',
          '2 m² = 2 × 10.000 = **20.000 cm²**.',
        ],
        tip: 'Longitud: de 10 en 10. Superficie: de 100 en 100.',
      },
      {
        emoji: '🧊',
        title: 'Volumen y capacidad',
        body: [
          'El volumen se mide en unidades **cúbicas** (m³, dm³, cm³...). Cada unidad es **1.000 veces mayor** que la siguiente.',
          'La capacidad se mide en litros: kl, hl, dal, l, dl, cl, ml. Cada unidad es 10 veces mayor que la siguiente. Hay una relación muy útil: **1 dm³ = 1 litro**.',
        ],
        bullets: [
          '1 dm³ = 1 l y 1 cm³ = 1 ml.',
          '1 m³ = 1.000 dm³ = **1.000 l**.',
          '1 l = 100 cl = 1.000 ml; 1 kl = 1.000 l.',
          '6 dm³ = 6.000 cm³; 5 dm³ = 5 l; 2 m³ = 2.000 l.',
          '4 l = 4 × 100 = 400 cl.',
          '0,75 l = 0,75 × 1.000 = **750 ml**.',
        ],
        tip: 'Volumen: de 1.000 en 1.000. Y un litro es lo que cabe en un cubo de 1 dm de lado.',
      },
      {
        emoji: '⚖️',
        title: 'Masa y tiempo',
        body: [
          'La masa se mide en kg, hg, dag, g, dg, cg, mg: cada unidad es 10 veces mayor que la siguiente. Lo más usado: **1 kg = 1.000 g** y **1 tonelada = 1.000 kg**.',
          'El tiempo no va de 10 en 10: **1 h = 60 min** y **1 min = 60 s**, así que 1 h = 3.600 s.',
        ],
        bullets: [
          '4,5 kg = 4,5 × 1.000 = **4.500 g**.',
          '8.000 g = 8.000 ÷ 1.000 = **8 kg**.',
          '5.400 s ÷ 3.600 = 1,5 h = **1 h 30 min**.',
          '9.000 s = 9.000 ÷ 3.600 = 2,5 h.',
        ],
        tip: 'Con el tiempo, olvida el 10: piensa en 60.',
      },
      {
        emoji: '🔁',
        title: 'Cambiar de unidad y formas complejas',
        body: [
          'Para cambiar de unidad, cuenta los escalones y multiplica (si bajas) o divide (si subes) por el factor de cada escalón.',
        ],
        table: {
          head: ['Magnitud', 'Cada escalón'],
          rows: [
            ['Longitud, masa, capacidad', '× o ÷ 10'],
            ['Superficie (m², dm²...)', '× o ÷ 100'],
            ['Volumen (m³, dm³...)', '× o ÷ 1.000'],
            ['Tiempo', '× o ÷ 60'],
          ],
        },
        bullets: [
          '350 cm = 350 ÷ 100 = **3,5 m**.',
          '0,2 km = 0,2 × 1.000 = **200 m**.',
          'Forma compleja: 4 km 80 m = 4.000 + 80 = **4.080 m**.',
          '3 h 20 min = 180 + 20 = **200 min**.',
        ],
        tip: 'En una forma compleja, pasa cada parte a la unidad pequeña y suma.',
      },
    ],
    keyPoints: [
      'Longitud, masa y capacidad: cada unidad es 10 veces mayor que la siguiente.',
      'Superficie: de 100 en 100. Volumen: de 1.000 en 1.000.',
      '1 dm³ = 1 litro y 1 m³ = 1.000 litros.',
      '1 h = 60 min = 3.600 s.',
      'Bajar de unidad = multiplicar; subir de unidad = dividir.',
    ],
    check: [
      { question: '¿Cuántos dm² son 7 m²?', options: ['70', '700', '7.000'], answer: 1 },
      { question: '¿Cuántos litros son 5.000 cm³?', options: ['5', '50', '500'], answer: 0 },
      { question: '¿Cuántos minutos son 3 h 20 min?', options: ['320', '180', '200'], answer: 2 },
    ],
  },
  {
    topicId: 'geometria',
    intro: '¡Bzzz! Soy Clarita. En geometría vamos a calcular ángulos, áreas, longitudes y volúmenes, y a conocer los cuerpos geométricos. ¡Saca la regla y el compás!',
    sections: [
      {
        emoji: '🔺',
        title: 'Los ángulos de un triángulo',
        body: [
          'Los tres ángulos de **cualquier triángulo** suman siempre **180°**. Si cortas las tres esquinas y las juntas, forman una línea recta.',
          'Para hallar el ángulo que falta, **resta** a 180° los otros dos.',
        ],
        bullets: [
          'Ángulos de 40° y 75°: 180 − 40 − 75 = **65°**.',
          'Ángulos de 90° y 35°: 180 − 90 − 35 = **55°**.',
          'Un triángulo equilátero tiene tres ángulos iguales: 180 ÷ 3 = **60°** cada uno.',
        ],
        tip: 'Suma los dos que conoces y réstalo de 180.',
      },
      {
        emoji: '⬛',
        title: 'Área del rectángulo, cuadrado y paralelogramo',
        body: [
          'El **área** es la medida de la superficie. Se mide en unidades cuadradas: cm², m²... No confundas el área con el perímetro.',
          'Rectángulo: **base × altura**. Cuadrado: **lado × lado**. Paralelogramo: **base × altura**, usando la altura (la distancia perpendicular), **no** el lado inclinado.',
        ],
        bullets: [
          'Rectángulo de 8 cm por 5 cm: 8 × 5 = **40 cm²**.',
          'Cuadrado de 6 cm de lado: 6 × 6 = **36 cm²**.',
          'Paralelogramo de base 10 cm, altura 4 cm y lado inclinado 5 cm: 10 × 4 = **40 cm²** (el lado de 5 cm no se usa).',
        ],
        tip: 'En el paralelogramo, la altura forma un ángulo recto con la base.',
      },
      {
        emoji: '🔼',
        title: 'Área del triángulo y del círculo',
        body: [
          'El triángulo es **la mitad de un rectángulo** con la misma base y altura: **A = base × altura ÷ 2**.',
          'El círculo: **A = π × radio²**, donde radio² es radio × radio y π ≈ 3,14.',
        ],
        bullets: [
          'Triángulo de base 14 cm y altura 5 cm: (14 × 5) ÷ 2 = 70 ÷ 2 = **35 cm²**.',
          'Círculo de radio 4 cm: 3,14 × 4 × 4 = 3,14 × 16 = **50,24 cm²**.',
          'Si te dan el diámetro, halla primero el radio (diámetro ÷ 2).',
        ],
        tip: 'radio² significa radio × radio, no radio × 2.',
      },
      {
        emoji: '⭕',
        title: 'Longitud de la circunferencia',
        body: [
          'La **longitud de la circunferencia** es lo que mide su contorno: **L = 2 × π × radio** (con π = 3,14). También sirve L = π × diámetro.',
          'No la confundas con el área del círculo (π × r²), que mide lo que hay dentro.',
        ],
        bullets: [
          'Radio de 10 cm: 2 × 3,14 × 10 = **62,8 cm**.',
          'Radio de 3 cm: 2 × 3,14 × 3 = **18,84 cm**.',
          'Diámetro de 8 cm: 3,14 × 8 = **25,12 cm**.',
        ],
        tip: 'Longitud lleva un 2 y un radio (2πr). El área lleva el radio dos veces (πr²).',
      },
      {
        emoji: '🧊',
        title: 'Cuerpos geométricos',
        body: [
          'Los **poliedros** son cuerpos con todas sus caras planas (prismas y pirámides). Los **cuerpos redondos** (cilindro, cono y esfera) tienen superficie curva.',
          'En un poliedro, las **caras** son las superficies planas, las **aristas** son donde se unen dos caras y los **vértices** son los puntos donde se unen varias aristas. El **cubo** tiene 6 caras, 12 aristas y 8 vértices.',
        ],
        table: {
          head: ['Poliedro regular', 'Caras'],
          rows: [
            ['Tetraedro', '4'],
            ['Cubo (hexaedro)', '6'],
            ['Octaedro', '8'],
            ['Dodecaedro', '12'],
            ['Icosaedro', '20'],
          ],
        },
        tip: 'Poli = muchas, edro = caras. Los prefijos tetra, hexa, octo, dodeca e icosa son números.',
      },
      {
        emoji: '📦',
        title: 'Volumen del ortoedro y el cubo',
        body: [
          'Un **ortoedro** es una caja con forma de ladrillo. Su volumen es **V = largo × ancho × alto**. Se mide en unidades cúbicas (cm³, dm³...).',
          'En un cubo, las tres medidas son iguales: V = lado × lado × lado.',
        ],
        bullets: [
          'Ortoedro de 4 cm × 3 cm × 2 cm: 4 × 3 × 2 = **24 cm³**.',
          'Cubo de 3 cm de lado: 3 × 3 × 3 = **27 cm³**.',
          'Ortoedro de 3 dm × 2 dm × 5 dm: 30 dm³ = **30 litros**.',
        ],
        tip: 'El volumen cuenta cuántos cubitos de 1 cm de lado caben dentro.',
      },
    ],
    keyPoints: [
      'Los ángulos de un triángulo suman 180°.',
      'Rectángulo y paralelogramo: base × altura. Cuadrado: lado × lado. Triángulo: base × altura ÷ 2.',
      'Área del círculo: π × radio². Longitud de la circunferencia: 2 × π × radio.',
      'Poliedros: caras planas. El cubo tiene 6 caras, 12 aristas y 8 vértices.',
      'Volumen del ortoedro: largo × ancho × alto.',
    ],
    check: [
      { question: 'Dos ángulos de un triángulo miden 90° y 35°. ¿Cuánto mide el tercero?', options: ['55°', '145°', '45°'], answer: 0 },
      { question: '¿Cuál es el área de un triángulo de base 12 cm y altura 7 cm?', options: ['84 cm²', '42 cm²', '19 cm²'], answer: 1 },
      { question: '¿Cuál es el volumen de un cubo de 5 cm de lado?', options: ['15 cm³', '25 cm³', '125 cm³'], answer: 2 },
    ],
  },
  {
    topicId: 'estadistica',
    intro: '¡Bzzz! Soy Clarita. La estadística nos ayuda a resumir muchos datos con unos pocos números: media, moda, mediana y rango. Y la probabilidad nos dice lo posible que es algo.',
    sections: [
      {
        emoji: '⚖️',
        title: 'La media',
        body: [
          'La **media** es el valor que tendrían todos los datos si se repartieran por igual. Se calcula **sumando todos los datos y dividiendo entre cuántos son**.',
        ],
        bullets: [
          'Media de 5, 6, 8, 6 y 10: suma 35 y hay 5 datos → 35 ÷ 5 = **7**.',
          'Media de 12, 15 y 18: 45 ÷ 3 = **15**.',
          'La media puede ser decimal: 6, 9, 5 y 10 → 30 ÷ 4 = **7,5**.',
        ],
        tip: 'Suma todo y reparte entre el número de datos.',
      },
      {
        emoji: '🏆',
        title: 'La moda y la mediana',
        body: [
          'La **moda** es el dato que **más se repite**. Puede haber más de una moda si dos datos se repiten lo mismo.',
          'La **mediana** es el dato **central** cuando los datos están **ordenados** de menor a mayor. Si hay dos datos centrales, la mediana es su **media**.',
        ],
        bullets: [
          'Moda de 4, 7, 7, 2, 7, 4: el 7 aparece 3 veces → **7**.',
          'Mediana de 9, 2, 6, 14, 5: ordenados 2, 5, 6, 9, 14 → el central es **6**.',
          'Mediana de 2, 4, 8, 10 (cuatro datos): los centrales son 4 y 8 → (4 + 8) ÷ 2 = **6**.',
        ],
        tip: 'Mediana: ¡ordena primero! Moda: el que más se repite.',
      },
      {
        emoji: '📏',
        title: 'El rango y el resumen',
        body: [
          'El **rango** mide cuánto se separan los datos: es la diferencia entre el dato **mayor** y el **menor**.',
          'Con los mismos datos puedes calcular las cuatro medidas. Ejemplo con 2, 4, 4, 6, 9:',
        ],
        table: {
          head: ['Medida', 'Resultado'],
          rows: [
            ['Media', '(2 + 4 + 4 + 6 + 9) ÷ 5 = 25 ÷ 5 = 5'],
            ['Moda', '4 (aparece dos veces)'],
            ['Mediana', '4 (el central ya ordenado)'],
            ['Rango', '9 − 2 = 7'],
          ],
        },
        bullets: [
          'Rango de 18, 7, 25 y 10: 25 − 7 = **18**.',
        ],
        tip: 'Rango = mayor − menor. Solo hace falta encontrar los dos extremos.',
      },
      {
        emoji: '📊',
        title: 'Elegir un gráfico',
        body: [
          'El gráfico adecuado depende de lo que quieras mostrar.',
        ],
        table: {
          head: ['Gráfico', 'Para qué sirve'],
          rows: [
            ['Barras', 'Comparar cantidades de distintas categorías'],
            ['Líneas', 'Ver la evolución de algo en el tiempo'],
            ['Sectores', 'Mostrar las partes de un total (suman el 100 %)'],
            ['Pictograma', 'Representar datos con dibujos'],
          ],
        },
        tip: 'Pregunta: ¿comparo, veo el cambio o miro las partes de un total?',
      },
      {
        emoji: '🎲',
        title: 'Probabilidad',
        body: [
          'La **probabilidad** de un suceso es: **casos favorables ÷ casos posibles**, escrita como fracción (y simplificada). Un suceso **seguro** tiene probabilidad 1 y uno **imposible**, 0.',
        ],
        bullets: [
          'Dado de 6 caras, sacar más de 4 (el 5 o el 6): 2 casos de 6 → 2/6 = **1/3**.',
          'Bolsa con 2 bolas rojas, 3 verdes y 5 azules (10 en total): P(verde) = **3/10**.',
          'P(que no sea roja) = 8/10 = **4/5**.',
          'Moneda: P(cara) = 1/2.',
        ],
        tip: 'Siempre: lo que quiero (favorables) partido entre todo lo que puede pasar (posibles).',
      },
    ],
    keyPoints: [
      'Media = suma de los datos ÷ cuántos son.',
      'Moda = dato que más se repite.',
      'Mediana = dato central con los datos ordenados.',
      'Rango = dato mayor − dato menor.',
      'Probabilidad = casos favorables ÷ casos posibles.',
    ],
    check: [
      { question: '¿Cuál es la media de 2, 9, 10 y 7?', options: ['28', '7', '10'], answer: 1 },
      { question: '¿Cuál es la mediana de 8, 3, 11, 5, 9?', options: ['5', '9', '8'], answer: 2 },
      { question: 'Una bolsa tiene 4 bolas amarillas y 6 verdes. ¿Qué probabilidad hay de sacar una amarilla?', options: ['2/5', '4/6', '1/4'], answer: 0 },
    ],
  },
  {
    topicId: 'problemas',
    intro: '¡Bzzz! Soy Clarita. Hoy juntamos todo lo aprendido para resolver problemas de varios pasos: precios, descuentos, velocidades, fracciones, mapas y notas. ¡Detectives al ataque!',
    sections: [
      {
        emoji: '🔍',
        title: 'Un plan para cualquier problema',
        body: [
          'Sigue siempre estos pasos: **lee**, **subraya los datos** y la pregunta, **elige las operaciones**, **calcula** y **comprueba** si la respuesta tiene sentido, con su unidad.',
          'En problemas de varios pasos, anota el resultado de cada paso. A veces conviene hacer un esquema.',
        ],
        tip: 'Pregúntate: ¿qué me piden? ¿qué datos necesito? ¿qué falta por calcular antes?',
      },
      {
        emoji: '🛒',
        title: 'Precios, recetas y vueltas',
        body: [
          'En problemas de precios y proporciones, calcula primero el **valor de una unidad** (precio unitario) y después multiplica.',
          'Para saber lo que **te devuelven**, calcula el gasto total y réstalo de lo que has pagado.',
        ],
        bullets: [
          'Una receta para 4 personas lleva 200 g de harina. Para 6 personas: 200 ÷ 4 = 50 g por persona y 50 × 6 = **300 g**.',
          '4 kg de patatas a 0,90 €/kg = 3,60 € y 2 kg de cebollas a 1,20 €/kg = 2,40 €. Total 6,00 €. Si pagas con 10 €, te devuelven **4 €**.',
          '5 entradas a 8 € = 40 €. Pagando con 50 €, te devuelven **10 €**.',
          'Un pack de 8 latas cuesta 4 €: cada lata cuesta 0,50 € y 12 latas cuestan **6 €**.',
        ],
        tip: 'El precio de uno es la clave: ¡divide primero!',
      },
      {
        emoji: '🏷️',
        title: 'Porcentajes y descuentos',
        body: [
          'Para un descuento: calcula el descuento y réstalo, o multiplica directamente por lo que **pagas** (el resto del 100 %).',
          'Puedes descomponer un porcentaje: el 15 % es el 10 % más el 5 %.',
        ],
        bullets: [
          'Abrigo de 120 € con un 30 % de rebaja: 36 € de descuento → 120 − 36 = **84 €** (o 120 × 0,7).',
          'Camiseta de 45 € con un 20 % de rebaja: se paga el 80 % → 45 × 0,8 = **36 €**.',
          '15 % de 80: el 10 % son 8 y el 5 %, 4 → 12.',
        ],
        tip: 'Rebaja del 20 % → pagas 80 % → × 0,8. Rebaja del 30 % → pagas 70 % → × 0,7.',
      },
      {
        emoji: '🚗',
        title: 'Velocidad, capacidad y tiempo',
        body: [
          'La distancia se calcula así: **distancia = velocidad × tiempo**. Si el tiempo trae minutos, pásalos a una fracción o decimal de hora: 30 min = 0,5 h; 15 min = 0,25 h; 45 min = 0,75 h.',
          'Si algo entra o sale a un ritmo constante (litros por minuto), **multiplica** ritmo × tiempo.',
        ],
        bullets: [
          'Un coche a 60 km/h durante 4 horas y media: 60 × 4 = 240 y media hora = 30 km → **270 km**.',
          'Una moto a 50 km/h durante 2 h 30 min = 2,5 h → 50 × 2,5 = **125 km**.',
          'Un grifo echa 8 l/min durante 20 min = 160 l. En un depósito de 400 l faltan 400 − 160 = **240 l**.',
        ],
        tip: 'Pasa los minutos a horas decimales antes de multiplicar por la velocidad.',
      },
      {
        emoji: '🍕',
        title: 'Fracciones en los problemas',
        body: [
          'Para una fracción de una cantidad, divide entre el denominador y multiplica por el numerador.',
          'Si te preguntan por los que **no** cumplen algo, calcula la parte y réstala del total. O usa la fracción complementaria.',
        ],
        bullets: [
          'Un depósito de 200 l está lleno por los 3/5: 200 ÷ 5 = 40 y 40 × 3 = **120 l**.',
          'En un colegio hay 72 alumnos y 3/4 van al comedor: 72 ÷ 4 = 18 y 18 × 3 = 54 van. No van 72 − 54 = **18**.',
          'Otra forma: no van 1/4 de 72 = 18.',
        ],
        tip: 'Todo = 1 entero. Si van 3/4, los otros son 1/4.',
      },
      {
        emoji: '📐',
        title: 'Geometría, escala y media',
        body: [
          'Si hay que **rodear** algo (valla, borde), calcula el **perímetro**. Si hay que **cubrir** una superficie (suelo, césped), calcula el **área**.',
          'Con una escala, multiplica los cm del mapa por el valor de la escala. Con notas o datos, usa la media.',
        ],
        bullets: [
          'Huerto de 12 m × 8 m: valla = 2 × (12 + 8) = **40 m**; césped = 12 × 8 = **96 m²**.',
          'Mapa 1:100.000 y 3 cm: 300.000 cm = 3.000 m = **3 km**.',
          'Notas 5, 8, 9, 6 y 7: suma 35 ÷ 5 = **7** de media.',
        ],
        tip: 'Rodear = perímetro. Cubrir = área.',
      },
    ],
    keyPoints: [
      'Lee, subraya datos y pregunta, elige operaciones, calcula y comprueba.',
      'Calcula siempre primero el valor de una unidad en problemas de precios y recetas.',
      'En un descuento se paga el resto del 100 %: rebaja del 20 % → × 0,8.',
      'Distancia = velocidad × tiempo; pasa los minutos a horas decimales.',
      'Rodear es perímetro; cubrir es área.',
    ],
    check: [
      { question: '3 kg de uvas cuestan 7,50 €. ¿Cuánto cuestan 4 kg?', options: ['9 €', '10 €', '11 €'], answer: 1 },
      { question: 'Una moto va a 50 km/h durante 2 h 30 min. ¿Cuántos km recorre?', options: ['125 km', '100 km', '152 km'], answer: 0 },
      { question: 'Una mochila de 90 € tiene una rebaja del 10 %. ¿Cuánto se paga?', options: ['9 €', '80 €', '81 €'], answer: 2 },
    ],
  },
];
