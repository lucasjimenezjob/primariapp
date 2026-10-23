// Generadores de ejercicios aleatorios de Matemáticas. Cada llamada devuelve una tarjeta nueva.
// Los ids empiezan por "gen-" para que no cuenten en el dominio de temas (no son tarjetas fijas).
import type { Card, MCCard, WriteCard } from '../types';
import { shuffle } from './text';

const rnd = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const pickOne = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
let seq = 0;
const gid = () => `gen-${Date.now().toString(36)}-${(seq++).toString(36)}`;

/** Formato español: punto de millares (desde 1.000) y coma decimal. */
export function fmt(n: number, decimals = 2): string {
  const rounded = Math.round(n * 10 ** decimals) / 10 ** decimals;
  const [int, dec] = Math.abs(rounded).toString().split('.');
  const intFmt = int.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return (rounded < 0 ? '-' : '') + intFmt + (dec ? ',' + dec : '');
}

/** Euros: si hay céntimos, siempre con dos cifras (1,50 y no 1,5). */
const money = (n: number) => {
  const s = fmt(n);
  return /,\d$/.test(s) ? s + '0' : s;
};

/** Variantes aceptadas de una respuesta numérica (con y sin millares, coma o punto decimal). */
function numAnswers(n: number, unit?: string): string[] {
  const rounded = Math.round(n * 100) / 100;
  const plain = rounded.toString(); // 1234.5
  const comma = plain.replace('.', ',');
  const set = new Set([unit === '€' ? money(rounded) : fmt(rounded), fmt(rounded), plain, comma]);
  if (!Number.isInteger(rounded)) {
    const fixed = rounded.toFixed(2); // 1.50
    set.add(fixed);
    set.add(fixed.replace('.', ','));
  }
  if (unit) for (const v of [...set]) set.add(`${v} ${unit}`);
  return [...set];
}

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
const lcm = (a: number, b: number) => (a * b) / gcd(a, b);

function write(prompt: string, n: number, explain: string, unit?: string, hint?: string): WriteCard {
  return { id: gid(), type: 'write', prompt, answers: numAnswers(n, unit), explain, hint };
}

function fracAnswers(num: number, den: number): string[] {
  const g = gcd(num, den);
  const out = new Set([`${num}/${den}`, `${num / g}/${den / g}`]);
  if (den / g === 1) out.add(String(num / g));
  return [...out];
}

/** Test con distractores numéricos cercanos y distintos. */
function mcNumber(prompt: string, correct: number, distractors: number[], explain: string): MCCard {
  const uniq = [...new Set(distractors.filter((d) => d !== correct && d >= 0))].slice(0, 3);
  while (uniq.length < 3) {
    const d = correct + rnd(-9, 9);
    if (d !== correct && d >= 0 && !uniq.includes(d)) uniq.push(d);
  }
  const options = shuffle([correct, ...uniq]);
  return { id: gid(), type: 'mc', prompt, options: options.map((o) => fmt(o)), answer: options.indexOf(correct), explain };
}

// ---------------- 4.º ----------------

const g4: Record<string, Array<() => Card>> = {
  numeros: [
    () => {
      const n = rnd(10000, 999999);
      const places = [
        ['unidades', 1],
        ['decenas', 10],
        ['centenas', 100],
        ['unidades de millar', 1000],
        ['decenas de millar', 10000],
      ] as const;
      const [name, value] = pickOne([...places]);
      const digit = Math.floor(n / value) % 10;
      return mcNumber(`¿Qué cifra ocupa las ${name} en el número ${fmt(n)}?`, digit, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5), `En ${fmt(n)}, la cifra de las ${name} es ${digit}.`);
    },
    () => {
      const n = rnd(1000, 99999);
      const to = pickOne([10, 100, 1000]);
      const r = Math.round(n / to) * to;
      const name = to === 10 ? 'decenas' : to === 100 ? 'centenas' : 'millares';
      return write(`Redondea ${fmt(n)} a las ${name}.`, r, `Miramos la cifra de la derecha: si es 5 o más, subimos. ${fmt(n)} → ${fmt(r)}.`);
    },
  ],
  operaciones: [
    () => {
      const a = rnd(1000, 49999), b = rnd(1000, 49999);
      return write(`Calcula: ${fmt(a)} + ${fmt(b)}`, a + b, `${fmt(a)} + ${fmt(b)} = ${fmt(a + b)}.`);
    },
    () => {
      const a = rnd(5000, 99999), b = rnd(1000, a - 1);
      return write(`Calcula: ${fmt(a)} − ${fmt(b)}`, a - b, `${fmt(a)} − ${fmt(b)} = ${fmt(a - b)}. Compruébalo sumando: ${fmt(a - b)} + ${fmt(b)} = ${fmt(a)}.`);
    },
    () => {
      const a = rnd(102, 999), b = rnd(2, 9);
      return write(`Calcula: ${a} × ${b}`, a * b, `${a} × ${b} = ${fmt(a * b)}.`);
    },
    () => {
      const a = rnd(21, 99), b = rnd(11, 39);
      return write(`Calcula: ${a} × ${b}`, a * b, `${a} × ${b} = ${fmt(a * b)}.`);
    },
    () => {
      const d = rnd(2, 9), q = rnd(12, 199);
      return write(`Calcula: ${fmt(d * q)} : ${d}`, q, `${fmt(d * q)} : ${d} = ${q}, porque ${q} × ${d} = ${fmt(d * q)}.`);
    },
    () => {
      const a = rnd(2, 10), b = rnd(2, 10);
      return mcNumber(`¿Cuánto es ${a} × ${b}?`, a * b, [a * b + a, a * b - b, a * (b + 1), a + b], `${a} × ${b} = ${a * b}.`);
    },
  ],
  fracciones: [
    () => {
      const den = pickOne([2, 3, 4, 5, 6, 8, 10]);
      const num = rnd(1, den - 1);
      const k = rnd(2, 8);
      const total = den * k;
      return write(`¿Cuánto es ${num}/${den} de ${total}?`, num * k, `${total} : ${den} = ${k}, y ${k} × ${num} = ${num * k}.`);
    },
    () => {
      const den = rnd(4, 12);
      const a = rnd(1, den - 2), b = rnd(1, den - 1 - a);
      return { id: gid(), type: 'write', prompt: `Suma: ${a}/${den} + ${b}/${den}`, answers: fracAnswers(a + b, den), explain: `Mismo denominador: sumamos numeradores. ${a} + ${b} = ${a + b}, así que ${a + b}/${den}.`, hint: 'El denominador no cambia.' };
    },
    () => {
      const den = rnd(4, 12);
      const a = rnd(2, den - 1), b = rnd(1, a - 1);
      return { id: gid(), type: 'write', prompt: `Resta: ${a}/${den} − ${b}/${den}`, answers: fracAnswers(a - b, den), explain: `Mismo denominador: restamos numeradores. ${a} − ${b} = ${a - b}, así que ${a - b}/${den}.`, hint: 'El denominador no cambia.' };
    },
    () => {
      const den = rnd(5, 12);
      const nums = shuffle(Array.from({ length: den - 1 }, (_, i) => i + 1)).slice(0, 3);
      const options = nums.map((x) => `${x}/${den}`);
      const bigger = `${Math.max(...nums)}/${den}`;
      return { id: gid(), type: 'mc', prompt: '¿Qué fracción es mayor?', options, answer: options.indexOf(bigger), explain: 'Con el mismo denominador, es mayor la que tiene el numerador más grande.' };
    },
  ],
  decimales: [
    () => {
      const a = rnd(100, 999) / 100, b = rnd(100, 999) / 100;
      return write(`Suma los euros: ${money(a)} € + ${money(b)} €`, a + b, `Colocamos la coma debajo de la coma y sumamos: ${money(a + b)} €.`, '€');
    },
    () => {
      const vals = new Set<number>();
      while (vals.size < 3) vals.add(rnd(10, 99) / 10);
      const options = shuffle([...vals].map((v) => fmt(v)));
      return { id: gid(), type: 'mc', prompt: '¿Qué número es mayor?', options, answer: options.indexOf(fmt(Math.max(...vals))), explain: 'Comparamos primero la parte entera y luego las décimas.' };
    },
    () => {
      const c = rnd(105, 995);
      return write(`¿Cuántos euros son ${c} céntimos?`, c / 100, `100 céntimos = 1 €, así que ${c} céntimos = ${money(c / 100)} €.`, '€');
    },
  ],
  medida: [
    () => {
      const [from, to, f] = pickOne([
        ['m', 'cm', 100],
        ['km', 'm', 1000],
        ['kg', 'g', 1000],
        ['l', 'ml', 1000],
        ['m', 'dm', 10],
        ['cm', 'mm', 10],
      ] as const);
      const n = rnd(2, 15);
      return write(`¿Cuántos ${to} son ${n} ${from}?`, n * f, `1 ${from} = ${fmt(f)} ${to}, así que ${n} ${from} = ${fmt(n * f)} ${to}.`, to);
    },
    () => {
      const h = rnd(1, 5);
      return write(`¿Cuántos minutos hay en ${h} hora${h > 1 ? 's' : ''} y media?`, h * 60 + 30, `${h} × 60 = ${h * 60}, más 30 minutos = ${h * 60 + 30}.`, 'minutos');
    },
  ],
  geometria: [
    () => {
      const a = rnd(3, 20), b = rnd(2, 15);
      return write(`Un rectángulo mide ${a} cm de largo y ${b} cm de ancho. ¿Cuál es su perímetro?`, 2 * (a + b), `Perímetro = suma de los lados: ${a} + ${b} + ${a} + ${b} = ${2 * (a + b)} cm.`, 'cm');
    },
    () => {
      const l = rnd(2, 15);
      const shape = pickOne([['cuadrado', 4], ['triángulo equilátero', 3], ['pentágono regular', 5], ['hexágono regular', 6]] as const);
      return write(`¿Cuál es el perímetro de un ${shape[0]} de lado ${l} cm?`, l * shape[1], `Tiene ${shape[1]} lados iguales: ${shape[1]} × ${l} = ${l * shape[1]} cm.`, 'cm');
    },
  ],
  problemas: [
    () => {
      const cajas = rnd(3, 9), por = rnd(6, 24);
      return write(`En una tienda hay ${cajas} cajas con ${por} lápices cada una. ¿Cuántos lápices hay en total?`, cajas * por, `${cajas} × ${por} = ${cajas * por} lápices.`, 'lapices');
    },
    () => {
      const tiene = rnd(20, 60), gasta = rnd(5, tiene - 5);
      return write(`Leire tiene ${tiene} € y se gasta ${gasta} € en un libro. ¿Cuánto dinero le queda?`, tiene - gasta, `${tiene} − ${gasta} = ${tiene - gasta} €.`, '€');
    },
    () => {
      const ninos = rnd(2, 6), cromos = ninos * rnd(4, 15);
      return write(`África reparte ${cromos} cromos entre ${ninos} amigas a partes iguales. ¿Cuántos recibe cada una?`, cromos / ninos, `${cromos} : ${ninos} = ${cromos / ninos} cromos.`, 'cromos');
    },
  ],
};

// ---------------- 6.º ----------------

const g6: Record<string, Array<() => Card>> = {
  numeros: [
    () => {
      const b = rnd(2, 10), e = b <= 3 ? rnd(2, 5) : rnd(2, 3);
      return write(`Calcula la potencia: ${b}${sup(e)}`, b ** e, `${b}${sup(e)} = ${Array(e).fill(b).join(' × ')} = ${fmt(b ** e)}.`);
    },
    () => {
      const r = rnd(2, 15);
      return write(`¿Cuál es la raíz cuadrada de ${r * r}?`, r, `${r} × ${r} = ${r * r}, así que √${r * r} = ${r}.`);
    },
    () => {
      const pairs = [[4, 6], [6, 8], [6, 9], [4, 10], [8, 12], [10, 15], [9, 12], [6, 10], [12, 18], [5, 6]];
      const [a, b] = pickOne(pairs);
      return write(`Calcula el m.c.m. de ${a} y ${b}.`, lcm(a, b), `Múltiplos comunes de ${a} y ${b}: el menor es ${lcm(a, b)}.`);
    },
    () => {
      const pairs = [[12, 18], [8, 12], [15, 25], [16, 24], [20, 30], [14, 21], [18, 27], [24, 36], [10, 25]];
      const [a, b] = pickOne(pairs);
      return write(`Calcula el m.c.d. de ${a} y ${b}.`, gcd(a, b), `El mayor número que divide a ${a} y a ${b} es ${gcd(a, b)}.`);
    },
    () => {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
      const composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 21, 25, 27, 33, 35, 39, 49, 51];
      const p = pickOne(primes);
      const opts = shuffle([p, ...shuffle(composites).slice(0, 3)]);
      return { id: gid(), type: 'mc', prompt: '¿Cuál de estos números es primo?', options: opts.map(String), answer: opts.indexOf(p), explain: `${p} solo es divisible entre 1 y entre sí mismo.` };
    },
    () => {
      const vals = new Set<number>([rnd(-15, -1)]);
      while (vals.size < 3) vals.add(rnd(-15, 15));
      const options = shuffle([...vals].map(String));
      return { id: gid(), type: 'mc', prompt: '¿Qué número es mayor?', options, answer: options.indexOf(String(Math.max(...vals))), explain: 'En la recta numérica, es mayor el que está más a la derecha.' };
    },
  ],
  operaciones: [
    () => {
      const a = rnd(2, 20), b = rnd(2, 9), c = rnd(2, 9);
      return write(`Calcula: ${a} + ${b} × ${c}`, a + b * c, `Primero la multiplicación: ${b} × ${c} = ${b * c}. Luego ${a} + ${b * c} = ${a + b * c}.`);
    },
    () => {
      const a = rnd(2, 12), b = rnd(2, 12), c = rnd(2, 9);
      return write(`Calcula: (${a} + ${b}) × ${c}`, (a + b) * c, `Primero el paréntesis: ${a} + ${b} = ${a + b}. Luego × ${c} = ${(a + b) * c}.`);
    },
    () => {
      const b = rnd(2, 9), q = rnd(2, 9), a = rnd(b * q + 1, 60);
      return write(`Calcula: ${a} − ${b * q} : ${b}`, a - q, `Primero la división: ${b * q} : ${b} = ${q}. Luego ${a} − ${q} = ${a - q}.`);
    },
    () => {
      const a = rnd(2, 9), b = rnd(2, 9), c = rnd(1, 9), d = rnd(2, 5);
      const r = a * b - c * d;
      if (r < 0) return g6.operaciones[0]();
      return write(`Calcula: ${a} × ${b} − ${c} × ${d}`, r, `Primero las multiplicaciones: ${a * b} − ${c * d} = ${r}.`);
    },
  ],
  fracciones: [
    () => {
      const den = pickOne([4, 6, 8, 9, 10, 12, 15, 16, 18, 20]);
      const k = pickOne([2, 3, 4, 5].filter((x) => den % x === 0));
      const num = k * rnd(1, den / k - 1);
      return { id: gid(), type: 'write', prompt: `Simplifica al máximo la fracción ${num}/${den}`, answers: [simplified(num, den)], explain: `Dividimos numerador y denominador entre ${gcd(num, den)}: ${simplified(num, den)}.`, hint: 'Busca el m.c.d. del numerador y el denominador.' };
    },
    () => {
      const [b, d] = pickOne([[2, 3], [2, 5], [3, 4], [4, 6], [2, 4], [3, 5], [6, 4], [5, 10]]);
      const a = rnd(1, b - 1), c = rnd(1, d - 1);
      const den = lcm(b, d), num = a * (den / b) + c * (den / d);
      return { id: gid(), type: 'write', prompt: `Suma: ${a}/${b} + ${c}/${d}`, answers: [...new Set([simplified(num, den), ...fracAnswers(num, den), ...fracAnswers(a * d + c * b, b * d)])], explain: `Reducimos a común denominador (${den}): ${a * (den / b)}/${den} + ${c * (den / d)}/${den} = ${num}/${den}${simpNote(num, den)}.`, hint: 'Busca un denominador común.' };
    },
    () => {
      const a = rnd(1, 5), b = rnd(2, 6), c = rnd(1, 5), d = rnd(2, 6);
      return { id: gid(), type: 'write', prompt: `Multiplica: ${a}/${b} × ${c}/${d}`, answers: [...new Set([simplified(a * c, b * d), ...fracAnswers(a * c, b * d)])], explain: `Numerador por numerador y denominador por denominador: ${a * c}/${b * d}${simpNote(a * c, b * d)}.` };
    },
    () => {
      const a = rnd(1, 5), b = rnd(2, 6), c = rnd(1, 5), d = rnd(2, 6);
      return { id: gid(), type: 'write', prompt: `Divide: ${a}/${b} : ${c}/${d}`, answers: [...new Set([simplified(a * d, b * c), ...fracAnswers(a * d, b * c)])], explain: `Multiplicamos en cruz: (${a} × ${d}) / (${b} × ${c}) = ${a * d}/${b * c}${simpNote(a * d, b * c)}.` };
    },
    () => {
      const den = pickOne([3, 4, 5, 6, 8]), num = rnd(1, den - 1), k = rnd(3, 25);
      return write(`¿Cuánto es ${num}/${den} de ${den * k}?`, num * k, `${den * k} : ${den} = ${k}, y ${k} × ${num} = ${num * k}.`);
    },
  ],
  decimales: [
    () => {
      const a = rnd(11, 999) / 10, b = rnd(2, 9);
      return write(`Calcula: ${fmt(a)} × ${b}`, a * b, `${fmt(a)} × ${b} = ${fmt(a * b)}.`);
    },
    () => {
      const a = rnd(101, 9999) / 100, p = pickOne([10, 100, 1000]);
      return write(`Calcula: ${fmt(a)} × ${fmt(p)}`, a * p, `Al multiplicar por ${fmt(p)}, la coma se mueve ${String(p).length - 1} lugar${p > 10 ? 'es' : ''} a la derecha: ${fmt(a * p)}.`);
    },
    () => {
      const a = rnd(100, 9999), p = pickOne([10, 100]);
      return write(`Calcula: ${fmt(a)} : ${p}`, a / p, `Al dividir entre ${p}, la coma se mueve ${String(p).length - 1} lugar${p > 10 ? 'es' : ''} a la izquierda: ${fmt(a / p)}.`);
    },
    () => {
      const a = rnd(100, 999) / 100, b = rnd(100, 999) / 100;
      const [x, y] = a > b ? [a, b] : [b, a];
      return write(`Calcula: ${fmt(x)} − ${fmt(y)}`, x - y, `Colocamos la coma debajo de la coma: ${fmt(x - y)}.`);
    },
  ],
  porcentajes: [
    () => {
      const p = pickOne([10, 20, 25, 50, 75, 5, 30, 40]);
      const base = pickOne([20, 40, 60, 80, 100, 120, 200, 300, 400]);
      return write(`¿Cuánto es el ${p} % de ${base}?`, (p * base) / 100, `${p} % de ${base} = ${base} × ${p} : 100 = ${fmt((p * base) / 100)}.`);
    },
    () => {
      const price = pickOne([20, 30, 40, 50, 60, 80, 100]), p = pickOne([10, 20, 25, 50]);
      const final = price - (price * p) / 100;
      return write(`Unas zapatillas cuestan ${price} € y tienen un ${p} % de descuento. ¿Cuánto pagas?`, final, `Descuento: ${money((price * p) / 100)} €. Pagas ${price} − ${money((price * p) / 100)} = ${money(final)} €.`, '€');
    },
    () => {
      const unit = rnd(2, 6), a = rnd(2, 5), b = rnd(6, 12);
      return write(`Si ${a} cuadernos cuestan ${a * unit} €, ¿cuánto cuestan ${b} cuadernos?`, b * unit, `Cada cuaderno cuesta ${a * unit} : ${a} = ${unit} €. ${b} × ${unit} = ${b * unit} €.`, '€');
    },
    () => {
      const scale = pickOne([100, 1000, 10000, 50000]), cm = rnd(2, 9);
      const realM = (cm * scale) / 100;
      return write(`En un mapa a escala 1:${fmt(scale)}, ¿cuántos metros reales son ${cm} cm del mapa?`, realM, `${cm} cm × ${fmt(scale)} = ${fmt(cm * scale)} cm = ${fmt(realM)} m.`, 'm');
    },
  ],
  medida: [
    () => {
      const [from, to, f] = pickOne([
        ['km', 'm', 1000],
        ['hm', 'm', 100],
        ['m', 'mm', 1000],
        ['kg', 'g', 1000],
        ['l', 'cl', 100],
        ['m²', 'dm²', 100],
        ['m²', 'cm²', 10000],
        ['dm³', 'cm³', 1000],
      ] as const);
      const n = rnd(2, 9);
      return write(`¿Cuántos ${to} son ${n} ${from}?`, n * f, `1 ${from} = ${fmt(f)} ${to}, así que ${n} ${from} = ${fmt(n * f)} ${to}.`, to);
    },
    () => {
      const n = rnd(2, 12) * 1000;
      return write(`¿Cuántos kilos son ${fmt(n)} gramos?`, n / 1000, `1.000 g = 1 kg, así que ${fmt(n)} g = ${n / 1000} kg.`, 'kg');
    },
  ],
  geometria: [
    () => {
      const b = rnd(3, 20), h = rnd(2, 15);
      return write(`Calcula el área de un rectángulo de ${b} cm de base y ${h} cm de altura.`, b * h, `Área = base × altura = ${b} × ${h} = ${b * h} cm².`, 'cm²');
    },
    () => {
      const b = rnd(2, 10) * 2, h = rnd(3, 15);
      return write(`Calcula el área de un triángulo de ${b} cm de base y ${h} cm de altura.`, (b * h) / 2, `Área = (base × altura) : 2 = (${b} × ${h}) : 2 = ${(b * h) / 2} cm².`, 'cm²');
    },
    () => {
      const r = rnd(1, 10);
      return write(`Calcula la longitud de una circunferencia de radio ${r} cm (usa π = 3,14).`, 2 * 3.14 * r, `L = 2 × π × r = 2 × 3,14 × ${r} = ${fmt(2 * 3.14 * r)} cm.`, 'cm');
    },
    () => {
      const a = rnd(2, 6), b = rnd(2, 6), c = rnd(2, 6);
      return write(`Calcula el volumen de un ortoedro de ${a} cm × ${b} cm × ${c} cm.`, a * b * c, `V = largo × ancho × alto = ${a} × ${b} × ${c} = ${a * b * c} cm³.`, 'cm³');
    },
    () => {
      const a = rnd(20, 80), b = rnd(20, 80);
      const c = 180 - a - b;
      if (c <= 0) return g6.geometria[0]();
      return write(`Un triángulo tiene dos ángulos de ${a}° y ${b}°. ¿Cuánto mide el tercero?`, c, `Los ángulos de un triángulo suman 180°: 180 − ${a} − ${b} = ${c}°.`, '°');
    },
  ],
  estadistica: [
    () => {
      const n = rnd(3, 5);
      const mean = rnd(4, 9);
      const nums = Array.from({ length: n - 1 }, () => rnd(mean - 3, mean + 3));
      const last = mean * n - nums.reduce((s, x) => s + x, 0);
      if (last < 0 || last > 20) return g6.estadistica[0]();
      const all = shuffle([...nums, last]);
      return write(`Calcula la media de: ${all.join(', ')}`, mean, `Sumamos (${all.reduce((s, x) => s + x, 0)}) y dividimos entre ${n}: ${mean}.`);
    },
    () => {
      const mode = rnd(1, 9);
      const others = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter((x) => x !== mode)).slice(0, 3);
      const all = shuffle([mode, mode, mode, ...others, others[0]]);
      return write(`¿Cuál es la moda de: ${all.join(', ')}?`, mode, `La moda es el dato que más se repite: ${mode}.`);
    },
    () => {
      const nums = Array.from({ length: 5 }, () => rnd(1, 30));
      const r = Math.max(...nums) - Math.min(...nums);
      return write(`¿Cuál es el rango de: ${nums.join(', ')}?`, r, `Rango = mayor − menor = ${Math.max(...nums)} − ${Math.min(...nums)} = ${r}.`);
    },
  ],
  problemas: [
    () => {
      const entradas = rnd(3, 6), precio = rnd(5, 12), pagado = Math.ceil((entradas * precio) / 10) * 10 + 10;
      return write(`Una familia compra ${entradas} entradas de cine a ${precio} € cada una y paga con ${pagado} €. ¿Cuánto le devuelven?`, pagado - entradas * precio, `Gasta ${entradas} × ${precio} = ${entradas * precio} €. Le devuelven ${pagado} − ${entradas * precio} = ${pagado - entradas * precio} €.`, '€');
    },
    () => {
      const km = rnd(40, 90), h = rnd(2, 5);
      return write(`Un coche va a ${km} km por hora. ¿Cuántos km recorre en ${h} horas y media?`, km * h + km / 2, `${km} × ${h} = ${km * h} km, más media hora (${fmt(km / 2)} km) = ${fmt(km * h + km / 2)} km.`, 'km');
    },
    () => {
      const total = rnd(4, 12) * 12, frac = pickOne([[1, 3], [1, 4], [2, 3], [3, 4], [1, 2]]);
      const part = (total / frac[1]) * frac[0];
      return write(`En un colegio hay ${total} alumnos. ${frac[0]}/${frac[1]} van al comedor. ¿Cuántos NO van al comedor?`, total - part, `Van ${frac[0]}/${frac[1]} de ${total} = ${part}. No van ${total} − ${part} = ${total - part}.`, 'alumnos');
    },
  ],
};

function sup(n: number): string {
  const map = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  return String(n).split('').map((d) => map[+d]).join('');
}

function simplified(num: number, den: number): string {
  const g = gcd(num, den);
  return den / g === 1 ? String(num / g) : `${num / g}/${den / g}`;
}

/** " = 1/2" si la fracción se puede simplificar; vacío si ya es irreducible. */
function simpNote(num: number, den: number): string {
  const s = simplified(num, den);
  return s === `${num}/${den}` ? '' : ` = ${s}`;
}

export const mathGenerators: Record<4 | 6, Record<string, Array<() => Card>>> = { 4: g4, 6: g6 };
