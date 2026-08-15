/*  Exercício 1 — Variáveis e tipos
Crie uma variável let com seu nome, uma const com sua idade, 
e uma let com um valor booleano dizendo se você está estudando 
ou não. Depois, use console.log e typeof para mostrar o valor 
e o tipo de cada uma.*/
let nome = "Edgar";
const idade = 20;
let estudando = true;

console.log(nome, typeof nome);
console.log(idade, typeof idade);
console.log(estudando, typeof estudando);

console.log("----------------------------------");

/* Exercício 2 — if / else if / else
Crie uma variável nota com um número de 0 a 10. Escreva uma estrutura if/else if/else 
que mostre no console:

"Aprovado" se a nota for maior ou igual a 7
"Recuperação" se a nota for entre 5 e 6.9
"Reprovado" se for menor que 5*/
let nota = 9;

if(nota >= 7){
    console.log("Aprovado.");
} else if(nota >= 5 && nota < 6.9){
    console.log("Recuperação.");
} else{
    console.log("Reprovado");
}

console.log("------------------------------------");

/*Exercício 3 — for + operador de resto (%)
Use um for para percorrer os números de 1 a 20. Para cada número, 
mostre no console se ele é "Par" ou "Ímpar" (use o operador %, igual 
você usou no exercício 15 do seu arquivo).*/
for(let i = 1; i < 21; i++){
    if(i % 2 === 0){
        console.log("Par " + i);
    } else{
        console.log("Impar " + i);
    }
}

console.log("-----------------------------------");

/** Exercício 4 — while + break
Crie uma variável contador começando em 0. Use um while que vá 
somando 1 ao contador a cada repetição, mostrando o valor no console. 
Quando o contador chegar a 7, use break para parar o loop e mostrar a 
mensagem "Parou no 7!". */
let contador = 0;

while(contador <= 20){
    console.log(contador);

    if(contador === 7){
        console.log("Parou no 7!");
        break;
    }

    contador++;
}

console.log("---------------------------------");

/**Exercício 5 — switch
Crie uma variável diaDaSemana com um número de 1 a 7. 
Use um switch para mostrar o nome do dia correspondente 
(1 = "Segunda-feira", 2 = "Terça-feira", etc.), 
e um default para o caso de o número ser inválido. */
let dia_semana = 5;

switch(dia_semana){
    case 1:
        console.log("Domingo.");
        break;
    case 2:
        console.log("Segunda.");
        break;
    case 3:
        console.log("Terça.");
        break;
    case 4:
        console.log("Quarta.");
        break;
    case 5:
        console.log("Quinta.");
        break;
    case 6:
        console.log("Sexta.");
        break;
    case 7:
        console.log("Sábado.");
        break;
    default:
        console.log("Número errado!");
        break;
}