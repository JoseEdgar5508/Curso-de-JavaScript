// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

console.log("--------------------------------");

// 2 - Ops. aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);

console.log(5 + (4 * 2));

console.log("----------------------------------");

// 3 - Special Numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

console.log("----------------------------------");

// 4 -  Strings
console.log("Um texto");
console.log('Mais um texto');
console.log('13');

console.log(typeof "Um texto");
console.log(typeof 'Mais um texto');

console.log("----------------------------------");

// 5 -  Símbolo espercial em String
console.log("Testando a \nquebra de linha");

console.log("Espasamento \t de tab");

console.log("-----------------------------------");

// 6 - Concatenação
console.log("Oi," + " tudo" + " bem?");

console.log(`Testando ` + `com ` + `crase!`);

console.log("----------------------------------");

// 7 - Templante String
console.log(`A soma de 2 + 2 = ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("testeS")}`);

console.log("----------------------------------");

// 8 - Boolean
console.log(true);

console.log(5 > 20);

console.log(30 > 10);

console.log(typeof false);

console.log("----------------------------------");

// 9 - Comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log("-----------------------------------");

// 10 - Indêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

console.log("-----------------------------------");

// 11 - Operadores lógicos
console.log(true && true);

console.log(true && false);

console.log(5  >2 && 2 < 10);

console.log(5 > 2 && "Edgar" === 1);

console.log(5 > 2 || "Edgar" === 1);

console.log(5 < 2 || 5 > 100);

console.log(!true)

console.log(!5 > 2);

console.log("---------------------------------");

// 12 - Empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

console.log("---------------------------------");

// 13 - Mudança de tipos
console.log(5 * null);

console.log("Teste" * "Opa");

console.log("10" + 1);

console.log("10" - 1);