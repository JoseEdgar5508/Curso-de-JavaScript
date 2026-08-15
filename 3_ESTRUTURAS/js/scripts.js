// 1- Variáveis
let nome = "Edgar";

console.log(nome);

nome = "José Edgar";

console.log(nome);

const idade = 31;

console.log(idade);

console.log("------------------------------------------")

// idade = 32;

console.log(typeof nome);

console.log(typeof idade);

console.log("-----------------------------------------")

// 2- Mais sobre variáveis
//let 2teste = "inválido";
//let @teste = "Inválido";

let a = 10, b = 20, c = 30;

console.log(a, b, c);

const nomecompleto = "José Edgar";

const nomeCompleto = "Edgar Neto";

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

console.log("----------------------------------------")

// 3- prompt
/*const age = prompt("Digite a sua idade");

console.log(`Você tem ${age} anos.`);*/

// 4- alert
/*alert("Testando");

const z = 10;

alert(`O número é ${z}`);*/

// 5- Math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

console.log("---------------------------------------");

// 6- console
console.log("Teste!");

console.error("Erro!");

console.warn("Aviso!");

console.log("------------------------------------------");

// 7- if
const m = 10;

if(m > 5){
    console.log("M é maior que 5!");
}

const user = "João";

if(user === "João"){
    console.log("Olá João");
}

if(user === "Maria"){
    console.log("Olá Maria");
}

console.log(user === "João", user === "Maria");

console.log("------------------------------------------");

// 8- else
const logggedin = false;

if(logggedin){
    console.log("Está autenticado");
} else{
    console.log("Não está autenticado");
}

const q = 10;
const w = 15;

if(q > 5 && w > 25){
    console.log("Números mais altos");
} else{
    console.log("Os números não são mais altos");
}

console.log("----------------------------------------");

// 9- else if
if(1 > 2){
    console.log("Teste");
} else if(2 > 3){
    console.log("Teste2");
} else if(5 > 1){
    console.log("Agora sim!");
}

const userName = "Edgar";
const userAge = 31;

if(userName === "José"){
    console.log("Bm vindo José!")
} else if(userName === "Edgar" && userAge === 31){
    console.log("Olá Edgar, você tem 31 anos.");
} else{
    console.log("NEnhuma condição acaita.");
}

console.log("--------------------------------------");

// 10- While
let p = 0;

while(p < 5){
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// loop infinito
// let x = 10;
// while (x > 5) {
//   console.log(`Imprimindo ${x}`);
// }

console.log("---------------------------------------")

// 11- do while
let o = 11;

do{
    console.log(`Valor de o ${o}`);
    o--
} while(o > 1);

console.log("--------------------------------------");

// 12- for
for(let t = 0; t < 10; t++){
    console.log("Repetindo algo...");
}

let r = 10;

for(r; r > 0; r = r - 1){
    console.log(`O r está diminuindo ${r}`);
}

console.log("--------------------------------------")

// 13- indentção
for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10! ${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("deu 0!");
    }
  }
}

console.log("-------------------------------------")

// 14- break
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`);

    if(g === 15){
        console.log("O g é igual a 15!");
        break;
    }
}

console.log("-------------------------------------")

// 15- continue
for(let s = 1; s < 10; s = s + 1){
    // operador de resto %
    if(s % 2 === 0){
        console.log("Número par!");
        continue;
    }

    console.log(s);
}

console.log("-------------------------------------");

// 16- switch
const job = "Advogado";

switch (job) {
  case "Programador":
    console.log("Voce é um programador!");
    break;
  case "Advogado":
    console.log("Voce é um advogado!");
    break;
  case "Engenheiro":
    console.log("Voce é um engenheiro!");
    break;
  default:
    console.log("Profissão não encontrada");
}

// switch "errado"
const l = 100;

switch (l) {
  case 200:
    console.log("L é 200!");
  case 100:
    console.log("L é 100!");
  case 10:
    console.log("L é 10!");
  default:
    console.log("L não foi encontrado");
}