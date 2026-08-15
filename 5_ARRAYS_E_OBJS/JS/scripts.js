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