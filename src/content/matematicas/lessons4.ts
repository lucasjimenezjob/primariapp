import type { Lesson } from '../../types';

export const lessons: Lesson[] = [
  {
    topicId: 'numeros',
    intro: '¡Bzzz, hola! Soy Clarita. Hoy vamos a ser exploradoras de los números enormes: aprenderemos a leerlos, escribirlos, compararlos y redondearlos, ¡hasta el millón!',
    sections: [
      {
        emoji: '📖',
        title: 'Leer y escribir números grandes',
        body: [
          'Los números grandes se leen en grupos de tres cifras, de derecha a izquierda: **unidades**, **miles** y **millones**. Los grupos se separan con un punto.',
          'Para leer, dices cada grupo y le pones su nombre. Por ejemplo, 512.340 se lee «quinientos doce **mil** trescientos cuarenta».',
        ],
        bullets: [
          '708.015 → setecientos ocho mil quince (miles: 708, unidades: 015).',
          'Para escribir «cuatrocientos mil veinte»: 400 miles y 20 unidades → 400.020. Los huecos se rellenan con **ceros**.',
          'Después de 999.999 viene 1.000.000: **un millón**. Un millón son 1.000 miles.',
        ],
        tip: 'Si en un grupo no hay nada, escribe 000. Así no se te pierde ninguna cifra.',
      },
      {
        emoji: '🔢',
        title: 'El valor de cada cifra',
        body: [
          'Cada cifra vale según el **lugar** que ocupa. Los lugares, contando desde la derecha, son: unidades (U), decenas (D), centenas (C), unidades de millar (UM), decenas de millar (DM), centenas de millar (CM) y unidades de millón (UMM).',
          'Cada lugar vale **10 veces más** que el de su derecha. Por eso 10 centenas de millar (10 × 100.000) forman un millón.',
        ],
        table: {
          head: ['Cifra', 'Lugar en 6.309.254', 'Valor'],
          rows: [
            ['6', 'unidades de millón', '6.000.000'],
            ['3', 'centenas de millar', '300.000'],
            ['9', 'unidades de millar', '9.000'],
            ['2', 'centenas', '200'],
            ['5', 'decenas', '50'],
            ['4', 'unidades', '4'],
          ],
        },
        bullets: [
          'En 6.309.254 la cifra 0 está en las decenas de millar y vale cero.',
          'En 54.718, las centenas son 7 y las decenas de millar son 5.',
        ],
        tip: 'Para saber qué cifra ocupa un lugar, cuenta desde la derecha: U, D, C, UM, DM, CM.',
      },
      {
        emoji: '⚖️',
        title: 'Comparar y ordenar',
        body: [
          'Para comparar dos números, primero mira cuántas cifras tienen: el que tiene **más cifras** es mayor. Por ejemplo, 12.300 > 7.950.',
          'Si tienen las mismas cifras, compara de **izquierda a derecha** y para en la primera cifra distinta.',
        ],
        bullets: [
          '52.481 y 52.418: empiezan igual (5, 2, 4). Las decenas son 8 y 1, así que 52.481 > 52.418.',
          'Ordenar de menor a mayor 8.350, 83.500 y 835: 835 < 8.350 < 83.500.',
          'Usamos los signos < (menor que) y > (mayor que): 4.000 < 9.000.',
        ],
        tip: 'El signo es como la boca de un cocodrilo: siempre se abre hacia el número mayor.',
      },
      {
        emoji: '🎯',
        title: 'Redondear números',
        body: [
          'Redondear es cambiar un número por otro cercano que termina en ceros. Elige el lugar al que redondeas (decenas, centenas o millares) y mira la **cifra de su derecha**.',
          'Si esa cifra es **5 o más**, la cifra del lugar **sube** una unidad. Si es **menos de 5** (0, 1, 2, 3 o 4), se **queda igual**. Las cifras de la derecha se convierten en ceros.',
        ],
        bullets: [
          '27.349 a las decenas: la cifra de las unidades es 9, sube → 27.350.',
          '27.349 a las centenas: la cifra de las decenas es 4, se queda → 27.300.',
          '27.349 a los millares: la cifra de las centenas es 3, se queda → 27.000.',
          '7.962 a las centenas: las decenas son 6, sube el 9 y se llega a 8.000.',
        ],
        tip: 'Del 0 al 4 me quedo, del 5 al 9 subo. ¡Un 5 siempre sube!',
      },
      {
        emoji: '🏛️',
        title: 'Números romanos',
        body: [
          'Los romanos usaban letras para escribir números. Estas son las que necesitas:',
          'Si una letra menor va **detrás** de otra mayor, se **suma** (VI = 5 + 1 = 6). Si va **delante**, se **resta** (IV = 5 − 1 = 4).',
        ],
        table: {
          head: ['Letra', 'Valor'],
          rows: [
            ['I', '1'],
            ['V', '5'],
            ['X', '10'],
            ['L', '50'],
            ['C', '100'],
          ],
        },
        bullets: [
          'I, X y C se pueden repetir hasta **3 veces** seguidas (XXX = 30), nunca 4. V y L no se repiten.',
          'Se restan solo: IV (4), IX (9), XL (40) y XC (90).',
          '74 = 70 + 4 = LXX + IV → **LXXIV**.',
          'XXXVIII = 30 + 8 = 38. XCIV = 90 + 4 = 94.',
        ],
        tip: 'Descompón el número en decenas y unidades, escribe cada parte en romano y júntalas.',
      },
    ],
    keyPoints: [
      'Los números se leen en grupos de tres cifras: unidades, miles y millones.',
      'Cada cifra vale según su lugar, y cada lugar vale 10 veces más que el de su derecha.',
      'Para comparar: más cifras es mayor; si hay las mismas, se compara de izquierda a derecha.',
      'Para redondear, mira la cifra de la derecha: 5 o más sube, menos de 5 se queda.',
      'En romanos, menor detrás suma y menor delante resta.',
    ],
    check: [
      { question: 'En 852.047, ¿qué valor tiene la cifra 5?', options: ['50.000', '500.000', '5.000'], answer: 0 },
      { question: 'Redondea 7.962 a las centenas.', options: ['7.900', '7.960', '8.000'], answer: 2 },
      { question: '¿Qué número representa XCIV?', options: ['106', '94', '96'], answer: 1 },
    ],
  },
  {
    topicId: 'operaciones',
    intro: '¡Bzzz! Soy Clarita. Vamos a repasar los nombres de las operaciones, a calcular con números grandes y a descubrir las propiedades que nos hacen las cuentas más fáciles.',
    sections: [
      {
        emoji: '🏷️',
        title: 'Cada número tiene su nombre',
        body: [
          'En cada operación, los números y el resultado tienen un nombre especial. ¡Conocerlos ayuda a entender los problemas!',
        ],
        table: {
          head: ['Operación', 'Los números se llaman', 'El resultado es'],
          rows: [
            ['Suma: 6 + 3 = 9', 'sumandos (6 y 3)', 'total (9)'],
            ['Resta: 9 − 4 = 5', 'minuendo (9) y sustraendo (4)', 'diferencia (5)'],
            ['Multiplicación: 3 × 4 = 12', 'factores (3 y 4)', 'producto (12)'],
            ['División: 56 ÷ 8 = 7', 'dividendo (56) y divisor (8)', 'cociente (7)'],
          ],
        },
        bullets: [
          'En la resta, el **minuendo** es el número del que se resta (va primero).',
          'En la división, el **divisor** es el número que reparte (va después de ÷).',
        ],
        tip: 'El minuendo «manda» porque va primero: de él se quita el sustraendo.',
      },
      {
        emoji: '➕',
        title: 'Sumar y restar números grandes',
        body: [
          'Escribe los números uno debajo del otro, con unidades bajo unidades, decenas bajo decenas... Calcula de **derecha a izquierda**.',
          'En la suma, si una columna llega a 10 o más, escribes la cifra de las unidades y **llevas** la otra a la siguiente columna.',
        ],
        bullets: [
          '23.450 + 18.775: unidades 0 + 5 = 5; decenas 5 + 7 = 12 (escribo 2, llevo 1); centenas 4 + 7 + 1 = 12 (escribo 2, llevo 1); millares 3 + 8 + 1 = 12 (escribo 2, llevo 1); decenas de millar 2 + 1 + 1 = 4. Total: **42.225**.',
          '61.200 − 24.375 = **36.825**.',
          'Prueba de la resta: sumando la diferencia y el sustraendo debe salir el minuendo: 36.825 + 24.375 = 61.200.',
          '¿Qué número sumado a 180 da 450? Es una resta: 450 − 180 = 270.',
        ],
        tip: 'Siempre puedes comprobar una resta con una suma. ¡Es una detective!',
      },
      {
        emoji: '✖️',
        title: 'Multiplicar',
        body: [
          'Multiplicar es sumar el mismo número varias veces. Para hacerlo bien necesitas dominar las **tablas de multiplicar** del 2 al 10.',
          'Con varias cifras, multiplicas cada cifra de arriba por la de abajo y vas sumando los resultados.',
        ],
        bullets: [
          'Por una cifra: 348 × 6 = 300 × 6 + 40 × 6 + 8 × 6 = 1.800 + 240 + 48 = **2.088**.',
          'Por dos cifras: 47 × 23. Primero 47 × 3 = 141. Luego 47 × 20 = 940. Se suman: 141 + 940 = **1.081**.',
          'Si multiplicas por 10, 100 o 1.000, añades uno, dos o tres ceros: 35 × 100 = 3.500.',
        ],
        tip: 'Si dudas con una tabla, recuerda que multiplicar es sumar repetido: 7 × 4 = 7 + 7 + 7 + 7.',
      },
      {
        emoji: '➗',
        title: 'Dividir y la prueba de la división',
        body: [
          'Dividir es repartir en partes iguales. En una división hay dividendo, divisor, **cociente** y **resto**. El resto siempre es **menor que el divisor**.',
          'La prueba de la división es: **dividendo = divisor × cociente + resto**. Si el resto es 0, la división es exacta.',
        ],
        bullets: [
          '1.512 : 6: en 15 caben 2 veces el 6 (12), sobran 3; bajo el 1 → 31, caben 5 (30), sobra 1; bajo el 2 → 12, caben 2. Cociente: **252**.',
          '83 ÷ 7: 7 × 11 = 77 y 83 − 77 = 6. Cociente 11 y resto 6.',
          'Prueba: 7 × 11 + 6 = 83.',
          'Para hallar el dividendo: divisor 9, cociente 5 y resto 2 → 9 × 5 + 2 = 47.',
        ],
        tip: 'Para el resto, busca en la tabla el número más cercano al dividendo sin pasarte y réstalo.',
      },
      {
        emoji: '🧠',
        title: 'Propiedades de las operaciones',
        body: [
          'Las propiedades son trucos que nos permiten cambiar una cuenta por otra más fácil sin que cambie el resultado.',
        ],
        table: {
          head: ['Propiedad', 'Qué dice y ejemplo'],
          rows: [
            ['Conmutativa', 'Si cambias el orden, no cambia el resultado: 5 + 8 = 8 + 5 y 4 × 9 = 9 × 4.'],
            ['Asociativa', 'Puedes agrupar como quieras: (3 + 2) + 6 = 3 + (2 + 6).'],
            ['Distributiva', 'Se reparte entre los sumandos: 6 × (10 + 4) = 6 × 10 + 6 × 4 = 84.'],
            ['Elemento neutro', 'Sumar 0 o multiplicar por 1 no cambia nada: 12 + 0 = 12 y 12 × 1 = 12.'],
          ],
        },
        bullets: [
          'La conmutativa y la asociativa valen para la suma y la multiplicación, pero **no** para la resta ni la división: 8 − 3 no es igual que 3 − 8.',
          'Con la asociativa: 4 × 5 × 17 = (4 × 5) × 17 = 20 × 17 = 340.',
        ],
        tip: 'Conmutar es cambiar de sitio. Asociar es agrupar. Distribuir es repartir.',
      },
    ],
    keyPoints: [
      'Sumandos dan el total; minuendo menos sustraendo da la diferencia; los factores dan el producto.',
      'En la división: dividendo = divisor × cociente + resto, y el resto es menor que el divisor.',
      'La resta se comprueba sumando y la división, multiplicando.',
      'Propiedades: conmutativa (orden), asociativa (agrupar), distributiva (repartir) y elemento neutro (0 y 1).',
    ],
    check: [
      { question: 'En 60 − 25 = 35, ¿cómo se llama el 25?', options: ['Minuendo', 'Sustraendo', 'Diferencia'], answer: 1 },
      { question: '¿Cuál es el resto de 29 ÷ 4?', options: ['7', '5', '1'], answer: 2 },
      { question: '¿Qué propiedad permite calcular 25 × 4 × 7 haciendo primero 25 × 4?', options: ['Asociativa', 'Conmutativa', 'Distributiva'], answer: 0 },
    ],
  },
  {
    topicId: 'fracciones',
    intro: '¡Bzzz! Soy Clarita y me encantan las fracciones: son como cortar un panal de miel en trozos iguales. Vamos a aprender a leerlas, compararlas y usarlas.',
    sections: [
      {
        emoji: '🍕',
        title: '¿Qué es una fracción?',
        body: [
          'Una fracción tiene dos números. El **denominador** (abajo) dice en cuántas partes **iguales** se divide el todo. El **numerador** (arriba) dice cuántas de esas partes se cogen.',
          'La fracción 3/8 significa: la pizza se corta en 8 trozos iguales y tomamos 3.',
        ],
        table: {
          head: ['Fracción', 'Se lee'],
          rows: [
            ['1/2', 'un medio'],
            ['1/3', 'un tercio'],
            ['1/4', 'un cuarto'],
            ['1/5', 'un quinto'],
            ['1/8', 'un octavo'],
            ['1/10', 'un décimo'],
          ],
        },
        bullets: [
          'Si el numerador es más de 1, se lee en plural: 2/5 = dos quintos; 5/8 = cinco octavos.',
          'Los demás denominadores: 6 sextos, 7 séptimos, 9 novenos.',
        ],
        tip: 'El denominador está abajo, como el suelo: D de «debajo» y de «dividir».',
      },
      {
        emoji: '⚖️',
        title: 'Lo que queda y comparar',
        body: [
          'Una fracción como 8/8 es el todo entero. Para saber **lo que queda**, resta lo que has tomado al total de partes.',
          'Para comparar fracciones con el **mismo denominador**, las partes son del mismo tamaño: es mayor la que tiene el **numerador más grande**.',
        ],
        bullets: [
          'Una tableta de chocolate tiene 6 onzas y te comes 1: quedan 5/6.',
          'Un depósito se divide en 10 partes y hay 7 llenas: las vacías son 10 − 7 = 3, es decir, 3/10.',
          'Comparar 4/9 y 7/9: tienen igual denominador, así que 7/9 es mayor.',
        ],
        tip: 'Mismo denominador: gana el numerador más grande.',
      },
      {
        emoji: '➕',
        title: 'Sumar y restar fracciones',
        body: [
          'Si las fracciones tienen el **mismo denominador**, solo se suman o se restan los **numeradores**. El denominador se queda igual.',
          'Al final, si se puede, simplifica el resultado: dividir arriba y abajo entre el mismo número.',
        ],
        bullets: [
          '2/7 + 3/7 = 5/7 (2 + 3 = 5 y el 7 no cambia).',
          '8/9 − 5/9 = 3/9, que es igual a 1/3 (dividiendo arriba y abajo entre 3).',
          '1/6 + 2/6 = 3/6 = 1/2.',
        ],
        tip: 'Los trozos son del mismo tamaño, así que solo cuentas trozos. ¡No sumes los denominadores!',
      },
      {
        emoji: '🧮',
        title: 'La fracción de una cantidad',
        body: [
          'Para calcular una fracción de una cantidad: **divide** la cantidad entre el denominador y **multiplica** el resultado por el numerador.',
        ],
        bullets: [
          '1/5 de 30: 30 ÷ 5 = **6**.',
          '2/3 de 18: 18 ÷ 3 = 6 y 6 × 2 = **12**.',
          '3/8 de 40: 40 ÷ 8 = 5 y 5 × 3 = **15**.',
          'Si el numerador es 1, solo divides: 1/4 de 24 = 24 ÷ 4 = 6.',
        ],
        tip: 'Primero divido (el denominador reparte), después multiplico (el numerador coge).',
      },
      {
        emoji: '🟰',
        title: 'Fracciones equivalentes',
        body: [
          'Dos fracciones son **equivalentes** si valen lo mismo, aunque se escriban distinto. Para obtenerlas, multiplica el numerador y el denominador por el **mismo número**.',
        ],
        bullets: [
          '1/2 = 4/8, porque 1 × 4 = 4 y 2 × 4 = 8.',
          '3/5 = ?/20. El 5 se multiplica por 4 para llegar a 20, así que 3 × 4 = 12 → 3/5 = 12/20.',
          'También puedes dividir arriba y abajo entre el mismo número: 6/9 = 2/3 (entre 3). Eso es **simplificar**.',
        ],
        tip: 'Lo que haces abajo, hazlo arriba. ¡Siempre con el mismo número!',
      },
    ],
    keyPoints: [
      'El denominador dice en cuántas partes iguales se divide el todo; el numerador, cuántas se toman.',
      'Con igual denominador, es mayor la fracción de mayor numerador.',
      'Para sumar o restar con igual denominador, opera los numeradores y deja el denominador.',
      'Fracción de una cantidad: divide entre el denominador y multiplica por el numerador.',
      'Fracciones equivalentes: multiplica (o divide) arriba y abajo por el mismo número.',
    ],
    check: [
      { question: '¿Cuánto es 2/5 de 30?', options: ['12', '6', '75'], answer: 0 },
      { question: '¿Cuánto es 3/9 + 4/9?', options: ['7/18', '7/9', '12/9'], answer: 1 },
      { question: '¿Qué fracción es equivalente a 2/3?', options: ['2/6', '3/4', '4/6'], answer: 2 },
    ],
  },
  {
    topicId: 'decimales',
    intro: '¡Bzzz! Soy Clarita. Los números decimales están por todas partes: en los precios, en las pesas y en las reglas. ¡Vamos a dominarlos!',
    sections: [
      {
        emoji: '🔟',
        title: 'Décimas y centésimas',
        body: [
          'La **coma** separa la parte entera de la parte decimal. La primera cifra tras la coma son las **décimas** (1/10) y la segunda, las **centésimas** (1/100).',
          'Para leer un decimal, lees la parte entera y luego la parte decimal con el nombre de su **última cifra**.',
        ],
        bullets: [
          '0,3 = tres décimas.',
          '0,08 = ocho centésimas.',
          '0,25 = veinticinco centésimas (2 décimas y 5 centésimas).',
          '1,4 = una unidad y cuatro décimas.',
          '0,5 y 0,50 son el mismo número: añadir un cero al final de los decimales no lo cambia.',
        ],
        tip: 'Una cifra tras la coma son décimas; dos cifras, centésimas, como los céntimos de un euro.',
      },
      {
        emoji: '🔄',
        title: 'Fracciones y decimales',
        body: [
          'Una fracción con denominador 10 o 100 se escribe como decimal directamente: 7/10 = 0,7 y 9/100 = 0,09.',
          'Otras fracciones se pasan a 10 o 100 con una fracción equivalente: 1/2 = 5/10 = 0,5 y 3/4 = 75/100 = 0,75.',
        ],
        table: {
          head: ['Fracción', 'Decimal'],
          rows: [
            ['1/10', '0,1'],
            ['3/10', '0,3'],
            ['1/100', '0,01'],
            ['25/100', '0,25'],
            ['1/2', '0,5'],
            ['3/4', '0,75'],
          ],
        },
        tip: 'Aprende de memoria 1/2 = 0,5; 1/4 = 0,25 y 3/4 = 0,75. ¡Salen mucho!',
      },
      {
        emoji: '⚖️',
        title: 'Comparar decimales',
        body: [
          'Para comparar, mira primero la **parte entera**: el mayor es el que tiene la parte entera más grande.',
          'Si la parte entera es igual, compara las décimas, luego las centésimas. Para no liarte, **iguala las cifras** añadiendo ceros.',
        ],
        bullets: [
          '7,8 > 7,3 (misma parte entera; 8 décimas > 3 décimas).',
          '6,1 > 4,9, porque 6 > 4.',
          '0,7 > 0,25, aunque 25 parezca mayor que 7: 0,7 = 0,70 y 70 centésimas > 25 centésimas.',
        ],
        tip: 'Iguala las cifras con ceros: 0,7 = 0,70. Así comparas como si fueran números normales.',
      },
      {
        emoji: '➕',
        title: 'Sumar decimales',
        body: [
          'Se suma como los números enteros, pero **colocando la coma debajo de la coma** (décimas con décimas, centésimas con centésimas). Si falta alguna cifra, ponemos un cero.',
        ],
        bullets: [
          '0,6 + 0,2 = 0,8 (6 décimas + 2 décimas = 8 décimas).',
          '4,7 + 1,35 → 4,70 + 1,35 = **6,05**.',
          '3,40 € + 2,85 € = **6,25 €**.',
        ],
        tip: 'Coma debajo de coma. Si faltan cifras, rellena con ceros.',
      },
      {
        emoji: '💶',
        title: 'Euros y céntimos',
        body: [
          'Un euro tiene **100 céntimos**. En un precio, lo que va **antes de la coma** son euros y lo que va **después**, céntimos.',
          'Para pasar de céntimos a euros, divides entre 100 (la coma se corre dos lugares a la izquierda). Para pasar de euros a céntimos, multiplicas por 100.',
        ],
        bullets: [
          '3,60 € = 3 euros y 60 céntimos = 360 céntimos.',
          '640 céntimos = 6,40 €.',
          '8 euros y 5 céntimos = 8,05 €.',
        ],
        tip: 'Los céntimos siempre ocupan dos cifras tras la coma: 5 céntimos = 0,05 €.',
      },
    ],
    keyPoints: [
      'La primera cifra tras la coma son las décimas y la segunda, las centésimas.',
      'Una fracción con 10 o 100 abajo se escribe directamente como decimal.',
      'Para comparar, primero la parte entera y luego las décimas; iguala las cifras con ceros.',
      'Al sumar, la coma va debajo de la coma.',
      '1 € = 100 céntimos: antes de la coma, euros; después, céntimos.',
    ],
    check: [
      { question: '¿Cuál es mayor, 2,4 o 2,09?', options: ['2,09', '2,4', 'Son iguales'], answer: 1 },
      { question: '¿Cuántos céntimos son 3,20 €?', options: ['3.200', '32', '320'], answer: 2 },
      { question: 'Calcula 2,5 + 1,5.', options: ['4', '3,10', '4,10'], answer: 0 },
    ],
  },
  {
    topicId: 'medida',
    intro: '¡Bzzz! Soy Clarita. Medir es contar cuántas veces cabe una unidad en algo. Hoy aprenderemos las unidades de longitud, masa, capacidad y tiempo, y a pasar de unas a otras.',
    sections: [
      {
        emoji: '📏',
        title: 'Magnitudes y unidades',
        body: [
          'Una **magnitud** es algo que se puede medir. Cada magnitud tiene una unidad principal.',
          'Los prefijos de las unidades te dan pistas: **kilo** = mil veces mayor, **centi** = cien veces menor, **mili** = mil veces menor y **deci** = diez veces menor.',
        ],
        table: {
          head: ['Magnitud', 'Unidad principal'],
          rows: [
            ['Longitud', 'metro (m)'],
            ['Masa', 'gramo (g)'],
            ['Capacidad', 'litro (l)'],
            ['Tiempo', 'segundo (s)'],
          ],
        },
        tip: 'Para elegir la unidad, piensa en el tamaño: kilómetros para ciudades, centímetros para un lápiz, milímetros para un grano de arroz.',
      },
      {
        emoji: '📐',
        title: 'Longitud',
        body: [
          'Las unidades de longitud son el kilómetro (km), el metro (m), el decímetro (dm), el centímetro (cm) y el milímetro (mm).',
        ],
        table: {
          head: ['Equivalencia', 'Cuánto es'],
          rows: [
            ['1 km', '1.000 m'],
            ['1 m', '10 dm'],
            ['1 m', '100 cm'],
            ['1 dm', '10 cm'],
            ['1 cm', '10 mm'],
          ],
        },
        bullets: [
          'En una regla, cada centímetro tiene 10 rayitas pequeñas: son los milímetros.',
          'Para distancias muy largas, como de una ciudad a otra, se usan los kilómetros.',
        ],
        tip: 'Kilo significa mil: 1 kilómetro son mil metros, igual que 1 kilogramo son mil gramos.',
      },
      {
        emoji: '⚖️',
        title: 'Masa y capacidad',
        body: [
          'La masa (el «peso») se mide en kilogramos (kg) y gramos (g). La capacidad (lo que cabe en un recipiente) se mide en litros (l) y mililitros (ml).',
          'En los dos casos, la equivalencia es la misma: **1 kg = 1.000 g** y **1 l = 1.000 ml**.',
        ],
        bullets: [
          '4 kg = 4 × 1.000 = 4.000 g.',
          '2.500 g = 2.500 ÷ 1.000 = 2,5 kg.',
          'Medio litro = 1.000 ÷ 2 = 500 ml.',
          'Un cuarto de kilo = 250 g.',
        ],
        tip: 'Para ir de la unidad grande a la pequeña, multiplicas por 1.000. Al revés, divides.',
      },
      {
        emoji: '⏰',
        title: 'Tiempo',
        body: [
          'Una hora tiene **60 minutos** y un minuto tiene **60 segundos**. Media hora son 30 minutos.',
        ],
        bullets: [
          '3 horas = 3 × 60 = 180 minutos.',
          '4 horas y media = 240 + 30 = **270 minutos**.',
          '5 minutos = 5 × 60 = 300 segundos.',
          '1 hora y media = 60 + 30 = 90 minutos.',
        ],
        tip: 'Para pasar horas a minutos, multiplica por 60 y suma los minutos que sobren.',
      },
      {
        emoji: '🔁',
        title: 'Pasar de una unidad a otra',
        body: [
          'Si pasas a una unidad **más pequeña**, necesitas más unidades: **multiplicas**. Si pasas a una unidad **más grande**, necesitas menos: **divides**.',
          'Multiplicas o divides por la equivalencia: 10, 100 o 1.000.',
        ],
        bullets: [
          '6 km a metros: 6 × 1.000 = **6.000 m**.',
          '12 cm a milímetros: 12 × 10 = **120 mm**.',
          '750 cm a metros: 750 ÷ 100 = **7,5 m**.',
          '4 l a mililitros: 4 × 1.000 = **4.000 ml**.',
        ],
        tip: 'Pequeña = más unidades (multiplico). Grande = menos unidades (divido).',
      },
    ],
    keyPoints: [
      'Cada magnitud tiene una unidad principal: metro, gramo, litro y segundo.',
      '1 km = 1.000 m; 1 m = 100 cm; 1 m = 10 dm; 1 cm = 10 mm.',
      '1 kg = 1.000 g y 1 l = 1.000 ml.',
      '1 h = 60 min y 1 min = 60 s.',
      'A una unidad más pequeña se multiplica; a una más grande se divide.',
    ],
    check: [
      { question: '¿Cuántos centímetros son 7 m?', options: ['70', '7.000', '700'], answer: 2 },
      { question: '¿Cuántos gramos son 5 kg?', options: ['5.000', '500', '50'], answer: 0 },
      { question: '¿Cuántos minutos son 3 horas?', options: ['120', '180', '300'], answer: 1 },
    ],
  },
  {
    topicId: 'geometria',
    intro: '¡Bzzz! Soy Clarita. Las abejas somos expertas en geometría: ¡nuestros panales son hexágonos perfectos! Vamos a conocer rectas, ángulos, figuras y a calcular perímetros.',
    sections: [
      {
        emoji: '↔️',
        title: 'Rectas',
        body: [
          'Una **recta** no tiene principio ni fin. Una **semirrecta** empieza en un punto y no acaba. Un **segmento** está entre dos puntos.',
          'Dos rectas pueden ser **paralelas** (van siempre a la misma distancia y no se cortan nunca), **secantes** (se cortan en un punto) o **perpendiculares** (se cortan formando ángulos rectos).',
        ],
        tip: 'Las vías de un tren son paralelas. Las líneas de una cuadrícula que se cruzan son perpendiculares.',
      },
      {
        emoji: '📐',
        title: 'Ángulos',
        body: [
          'Un ángulo mide la abertura entre dos semirrectas. Se mide en **grados (°)**. Se clasifican comparándolos con el ángulo **recto**, que es la esquina de un folio.',
        ],
        table: {
          head: ['Ángulo', 'Medida'],
          rows: [
            ['Agudo', 'menos de 90° (por ejemplo, 30°)'],
            ['Recto', 'exactamente 90°'],
            ['Obtuso', 'más de 90° y menos de 180° (por ejemplo, 150°)'],
            ['Llano', 'exactamente 180° (una línea recta)'],
          ],
        },
        tip: 'Agudo es «aguja»: cerrado y puntiagudo. Obtuso es más abierto que la esquina de un folio.',
      },
      {
        emoji: '⬡',
        title: 'Polígonos',
        body: [
          'Un **polígono** es una figura plana cerrada formada por segmentos (lados). Su nombre depende de cuántos lados tiene. Si tiene todos los lados y todos los ángulos iguales, es **regular**.',
        ],
        table: {
          head: ['Polígono', 'Lados'],
          rows: [
            ['Triángulo', '3'],
            ['Cuadrilátero', '4'],
            ['Pentágono', '5'],
            ['Hexágono', '6'],
            ['Heptágono', '7'],
            ['Octógono', '8'],
          ],
        },
        tip: 'Penta = 5, hexa = 6, hepta = 7, octo = 8. Vienen del griego y son números.',
      },
      {
        emoji: '🔺',
        title: 'Triángulos y cuadriláteros',
        body: [
          'Los triángulos se clasifican por sus lados: **equilátero** (3 lados iguales), **isósceles** (2 iguales) y **escaleno** (los 3 distintos).',
          'Los cuadriláteros tienen 4 lados. Estos son los más importantes:',
        ],
        table: {
          head: ['Cuadrilátero', 'Cómo es'],
          rows: [
            ['Cuadrado', '4 lados iguales y 4 ángulos rectos'],
            ['Rectángulo', '4 ángulos rectos y lados opuestos iguales'],
            ['Rombo', '4 lados iguales, sin ángulos rectos'],
            ['Trapecio', 'Solo 2 lados paralelos'],
          ],
        },
        tip: 'El cuadrado es un rectángulo especial, con todos los lados iguales.',
      },
      {
        emoji: '⭕',
        title: 'Circunferencia y círculo',
        body: [
          'La **circunferencia** es la línea curva cuyos puntos están todos a la misma distancia del **centro**. El **círculo** es la superficie que queda dentro.',
          'El **radio** va del centro a la circunferencia. El **diámetro** la atraviesa pasando por el centro. El diámetro es el **doble** del radio.',
        ],
        bullets: [
          'Si el radio mide 7 cm, el diámetro mide 7 × 2 = 14 cm.',
          'Si el diámetro mide 10 cm, el radio mide 10 ÷ 2 = 5 cm.',
        ],
        tip: 'El radio llega hasta la mitad; el diámetro atraviesa todo el círculo.',
      },
      {
        emoji: '🔁',
        title: 'Perímetro',
        body: [
          'El **perímetro** es la longitud del contorno de una figura: es la **suma de todos sus lados**. Se mide en cm, m, km...',
        ],
        bullets: [
          'Cuadrado de lado 5 cm: 5 × 4 = **20 cm**.',
          'Rectángulo de 12 cm por 5 cm: 12 + 5 + 12 + 5 = 2 × (12 + 5) = **34 cm**.',
          'Triángulo equilátero de lado 8 cm: 8 × 3 = **24 cm**.',
          'Pentágono regular de lado 7 cm: 7 × 5 = **35 cm**. Hexágono regular de lado 4 cm: 4 × 6 = **24 cm**.',
        ],
        tip: 'En un polígono regular, el perímetro es el lado multiplicado por el número de lados.',
      },
    ],
    keyPoints: [
      'Rectas paralelas no se cortan; secantes se cortan; perpendiculares forman ángulos rectos.',
      'Ángulo agudo menos de 90°, recto 90°, obtuso entre 90° y 180° y llano 180°.',
      'Triángulo 3 lados, cuadrilátero 4, pentágono 5, hexágono 6 y octógono 8.',
      'El diámetro es el doble del radio.',
      'El perímetro es la suma de los lados.',
    ],
    check: [
      { question: 'Un ángulo de 30° es...', options: ['Obtuso', 'Agudo', 'Recto'], answer: 1 },
      { question: '¿Cuál es el perímetro de un rectángulo de 10 cm por 4 cm?', options: ['28 cm', '40 cm', '14 cm'], answer: 0 },
      { question: 'Si el diámetro de un círculo mide 10 cm, ¿cuánto mide el radio?', options: ['20 cm', '10 cm', '5 cm'], answer: 2 },
    ],
  },
  {
    topicId: 'estadistica',
    intro: '¡Bzzz! Soy Clarita. Vamos a aprender a recoger datos, ordenarlos, dibujarlos en gráficos y a decidir qué cosas son seguras, posibles o imposibles.',
    sections: [
      {
        emoji: '📝',
        title: 'Datos y tablas',
        body: [
          'Un **dato** es una información que se recoge para estudiarla. Para organizarlos hacemos un **recuento**: contamos cuántas veces aparece cada uno. Ese número es su **frecuencia**.',
          'El dato **más frecuente** es el que tiene el número más grande. El **total** se obtiene sumando todas las frecuencias.',
        ],
        table: {
          head: ['Mascota', 'Alumnos'],
          rows: [
            ['Perros', '6'],
            ['Gatos', '4'],
            ['Peces', '2'],
          ],
        },
        bullets: [
          'En esta tabla, la mascota más frecuente son los perros (6).',
          'Total de alumnos: 6 + 4 + 2 = 12.',
          'Datos: 4, 1, 4, 4, 2, 1. El 4 aparece 3 veces y el 1 aparece 2 veces.',
        ],
        tip: 'Cuando cuentes datos, tacha cada uno con un lápiz según lo cuentas para no repetir.',
      },
      {
        emoji: '📊',
        title: 'Gráficos de barras y pictogramas',
        body: [
          'En un **gráfico de barras**, la altura de cada barra es el valor del dato. Para comparar dos barras, **resta**: si una mide 15 y otra 9, la primera es 15 − 9 = 6 más alta.',
          'En un **pictograma** se usan dibujos. Cada dibujo vale una cantidad, que se indica en la leyenda. Para saber el total, **multiplica** la cantidad de cada dibujo por cuántos hay.',
        ],
        bullets: [
          'Si cada ★ vale 10 niños y hay 7 ★: 7 × 10 = 70 niños.',
          'Si cada ★ vale 10 y hay media estrella, son 5 niños.',
          'En un pictograma o en un gráfico de barras, siempre mira primero qué representa cada dibujo o cada barra.',
        ],
        tip: 'Antes de contar dibujos, lee cuánto vale cada uno.',
      },
      {
        emoji: '📈',
        title: 'Tipos de gráficos',
        body: [
          'Hay varios modos de mostrar datos. Cada uno sirve para algo distinto.',
        ],
        table: {
          head: ['Tipo', 'Cómo es'],
          rows: [
            ['Tabla de frecuencias', 'Filas con cada dato y su recuento'],
            ['Gráfico de barras', 'Columnas de distinta altura'],
            ['Pictograma', 'Dibujos que representan cantidades'],
            ['Gráfico de líneas', 'Puntos unidos que muestran cambios en el tiempo'],
          ],
        },
        tip: 'Si algo cambia con el tiempo (la temperatura, tu altura), un gráfico de líneas es perfecto.',
      },
      {
        emoji: '🎲',
        title: 'Seguro, posible o imposible',
        body: [
          'Un suceso es **seguro** si ocurre siempre, **imposible** si no puede ocurrir nunca y **posible** si puede ocurrir o no.',
        ],
        bullets: [
          'Sacar una bola azul de una bolsa con solo bolas azules es **seguro**.',
          'Sacar una bola roja de una bolsa sin ninguna roja es **imposible**.',
          'Sacar una bola verde de una bolsa con bolas verdes y rojas es **posible**, pero no seguro.',
          'Al tirar un dado de 6 caras, sacar un 7 es imposible; sacar un número del 1 al 6 es seguro; sacar un 4 es posible.',
          'Al lanzar una moneda, sale cara o cruz: las dos son posibles.',
        ],
        tip: 'Piensa en «siempre», «a veces» y «nunca».',
      },
    ],
    keyPoints: [
      'La frecuencia de un dato es cuántas veces se repite; el total es la suma de todas.',
      'En un gráfico de barras, comparamos restando las alturas.',
      'En un pictograma, multiplicamos lo que vale cada dibujo por cuántos hay.',
      'Seguro: ocurre siempre. Posible: puede ocurrir o no. Imposible: nunca ocurre.',
    ],
    check: [
      { question: 'Tabla: rojo 4, azul 9, verde 6. ¿Cuántos datos hay en total?', options: ['19', '9', '15'], answer: 0 },
      { question: 'En un pictograma, cada 🍎 vale 4 kilos y hay 3 🍎. ¿Cuántos kilos son?', options: ['7', '12', '43'], answer: 1 },
      { question: 'En una bolsa con bolas verdes y rojas, sacar una verde es...', options: ['Seguro', 'Imposible', 'Posible'], answer: 2 },
    ],
  },
  {
    topicId: 'problemas',
    intro: '¡Bzzz! Soy Clarita. Resolver problemas es como ser detective: leemos las pistas, elegimos la operación y comprobamos. ¡Vamos a ello!',
    sections: [
      {
        emoji: '🔍',
        title: 'Los pasos para resolver un problema',
        body: [
          'Para no perderte, sigue siempre estos pasos:',
        ],
        bullets: [
          '**1. Lee** el problema despacio, las veces que haga falta.',
          '**2. Busca los datos** y subraya la pregunta: ¿qué te piden?',
          '**3. Elige la operación** (o las operaciones, si hay varios pasos).',
          '**4. Calcula** con cuidado.',
          '**5. Escribe la respuesta** con su unidad y comprueba que tiene sentido.',
        ],
        tip: 'Antes de calcular, cuéntate el problema con tus propias palabras.',
      },
      {
        emoji: '🕵️',
        title: 'Palabras pista',
        body: [
          'Algunas palabras del enunciado te dicen qué operación toca. Fíjate bien en ellas.',
        ],
        table: {
          head: ['Palabras pista', 'Operación'],
          rows: [
            ['juntar, añadir, en total, más', 'Sumar'],
            ['quedan, perder, gastar, diferencia, menos', 'Restar'],
            ['cajas iguales, cada uno, veces más', 'Multiplicar'],
            ['repartir en partes iguales, entre', 'Dividir'],
          ],
        },
        bullets: [
          '8 cajas con 12 lápices cada una: 8 × 12 = 96 lápices en total.',
          'Se reparten 63 cromos entre 7 amigas: 63 ÷ 7 = 9 cromos para cada una.',
        ],
        tip: 'Lee la pregunta final primero: te dice qué quieres averiguar.',
      },
      {
        emoji: '🪜',
        title: 'Problemas de varios pasos',
        body: [
          'Muchos problemas necesitan **más de una operación**. Haz una cuenta para cada cosa que pasa, en el orden del enunciado.',
          'Si te piden **lo que te devuelven**, calcula primero cuánto cuesta todo y réstalo de lo que has pagado.',
        ],
        bullets: [
          'Marta tiene 30 cromos, le regalan 12 y da 7 a su primo: 30 + 12 = 42 y 42 − 7 = **35**.',
          'Compro 2 helados de 3 € y un batido de 4 € y pago con 20 €: 2 × 3 = 6; 6 + 4 = 10; 20 − 10 = **10 € de vuelta**.',
          'Pablo tiene 45 € y se gasta 18 €: le quedan 45 − 18 = 27 €.',
        ],
        tip: 'Si el problema tiene varios pasos, escribe el resultado de cada paso antes de seguir.',
      },
      {
        emoji: '🚌',
        title: 'Repartos, restos y horas',
        body: [
          'Cuando una división tiene **resto** y necesitas que todos quepan (autobuses, cajas, mesas), hay que **sumar uno** al cociente.',
          'Para calcular una hora de llegada, suma primero las horas y luego los minutos. Recuerda que 60 minutos son 1 hora.',
        ],
        bullets: [
          '100 alumnos y autobuses de 30 plazas: 100 ÷ 30 da 3 y sobran 10. Hacen falta **4 autobuses**.',
          'Un tren sale a las 10:30 y tarda 1 h 45 min: 10:30 + 1 h = 11:30 y + 45 min = **12:15**.',
        ],
        tip: 'Si sobra gente, el que sobra también necesita su sitio: ¡otro autobús!',
      },
      {
        emoji: '⚖️',
        title: 'Unidades y comprobar',
        body: [
          'Escribe siempre la **unidad** de la respuesta (€, g, cm...). A veces hay que cambiar de unidad antes de contestar.',
          'Al terminar, **comprueba** si la solución tiene sentido: ¿puede costar un cuaderno 500 €?',
        ],
        bullets: [
          '6 paquetes de 500 g: 6 × 500 = 3.000 g = **3 kg**.',
          'Si ahorras 4 € cada semana, en 9 semanas tendrás 4 × 9 = **36 €**.',
          'Tres amigos reparten 60 € por igual: 60 ÷ 3 = **20 €** cada uno.',
        ],
        tip: 'Una respuesta sin unidad está incompleta: ¡pon siempre €, g, cm o lo que toque!',
      },
    ],
    keyPoints: [
      'Lee, busca los datos, elige la operación, calcula y comprueba.',
      'Las palabras pista te dicen si sumar, restar, multiplicar o dividir.',
      'En problemas de varios pasos, haz una operación por cada cosa que pasa.',
      'Si una división deja resto y todos deben caber, suma uno al cociente.',
      'Escribe siempre la respuesta con su unidad.',
    ],
    check: [
      { question: 'Pablo tiene 40 € y gasta 15 € en un juego y 8 € en un helado. ¿Cuánto le queda?', options: ['17 €', '23 €', '33 €'], answer: 0 },
      { question: 'Una caja tiene 15 bombones. ¿Cuántos bombones hay en 4 cajas iguales?', options: ['19', '60', '45'], answer: 1 },
      { question: 'Se reparten 90 € entre 5 personas por igual. ¿Cuánto toca a cada una?', options: ['450 €', '85 €', '18 €'], answer: 2 },
    ],
  },
];
