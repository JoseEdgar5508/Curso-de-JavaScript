//1 - Arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Edgar", true, 2, 2.14, []];

console.log(itens);

console.log("------------------------------------------");

//2 - mais sobre arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[10]);

console.log("----------------------------------------");

//3 - Propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Edgar";

console.log(myName.length);

console.log("----------------------------------------");

//4 - métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

console.log("---------------------------------------");

//5 - objetos
const person = {
    name: "Edgar",
    age: 31,
    job: "Programador",
}

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

console.log("-----------------------------------------");

//6 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.door = 4;

console.log(car);

delete car.km;

console.log(car);

console.log("------------------------------------------");

//7 - Mais sobre objetos
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj);

console.log("-------------------------------------------------");

//8 - Conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

console.log("-----------------------------------------------");

//9 -  Mutação
const a = {
    name: "Edgar",
}

const b = a;

console.log(a);
console.log(b);

a.age = 31;

console.log(a);
console.log(b);

delete a.age;

console.log(a);
console.log(b);

console.log("----------------------------------------------");

//10 - Loop em arrays
const users = ["Edgar", "José", "Neto", "Lucas"];

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
};

console.log("--------------------------------------------------");

//11 - Push e pop
const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const intemRemovido = array.pop;

console.log(intemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

console.log("-----------------------------------------------------");

//12 - Shift e unshift
const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("z", "x", "y");

letters.unshift("p");

console.log(letters);

console.log("------------------------------------------------------");

// 13 - indexof e lastindexof
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.lastIndexOf("Maçã"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

console.log("---------------------------------------------------");

// 14 - slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

// 2 em diante
const subArray4 = testeSlice.slice(2);
console.log(subArray4);

console.log("------------------------------------------------");

// 15 - foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((n) => {
  console.log(`O número atual é: ${n}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

console.log("-------------------------------------------------");

// 16 - includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("Kia"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW!");
}

console.log("-------------------------------------------------");

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

console.log("-------------------------------------------------");

// 18 - trim
const trimTest = "  testando \n   ";

console.log(trimTest.trim());

console.log(trimTest);

console.log(trimTest.trim().length);

console.log(trimTest.length);

console.lgo("----------------------------------------------------");

// 19 - padstart

const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

console.log("-----------------------------------------------------");

// 20 - split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split();

console.log(arrayDaFrase);

console.log("-------------------------------------------------------");

// 21 - join
const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

console.lgo("-----------------------------------------------------");

// 22 - repeat
const palavra = "Testando";

console.log(palavra.repeat(5));

console.log("----------------------------------------------------");

// 23 - rest operator
const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(1, 5, 10));

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

console.log("-------------------------------------------------");

// 24 - for...of
const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinita2(1, 5, 10));

console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

console.log("----------------------------------------------");

// 25 - destructuring objetos
const userDetails = {
  firstName: "Matheus",
  lastName: "Battisti",
  job: "Programador",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// renomeando variáveis
const { firstName: primeiroNome } = userDetails;

console.log(firstName);

console.log("---------------------------------------------");

// 26 - destructuring me arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

console.log("-------------------------------------------------------");

// 27 - json
const myJson =
  '{"name": "Matheus","age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

console.log("------------------------------------------------------------");

// 28 - json para objeto e objeto para json
const myObject = JSON.parse(myJson);

console.log(myObject);

// json invalido
const badJson =
  '{"name": Matheus,"age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// const myBadObject = JSON.parse(badJson);
myObject.isOpenToWork = true;

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);