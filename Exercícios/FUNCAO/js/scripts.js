/**Primeiro exercício */

/**1. Função com parâmetro e retorno
Crie uma função chamada calcularArea que recebe largura e 
altura como parâmetros e retorna (não apenas imprime) a área 
do retângulo. Teste chamando console.log(calcularArea(5, 3)). */
function calcularArea(l, a){
    return l * a;
}

console.log(calcularArea(5, 3));

console.log("---------------------------------------");

/**2. Parâmetro opcional / valor default
Crie uma arrow function saudacao que recebe um nome e um periodo 
(com valor default "dia"). Ela deve retornar uma string tipo "Bom dia, 
Edgar!". Se periodo não for passado, deve usar "dia" automaticamente. 
Teste com e sem o segundo argumento. */
const saudacao = (name, periodo = "dia") => {
    return `Bom ${periodo}, ${name}!`;
}

console.log(saudacao("Edgar"));
console.log(saudacao("Edgar", "tarde"));

console.log("-------------------------------------------");

/**4. Closure
Crie uma função criarContador que retorna outra função. 
Cada vez que a função retornada é chamada, ela deve incrementar 
e imprimir um contador que começa em 0 (o valor deve "persistir" 
entre as chamadas, igual ao exemplo de multiplicationClosure do seu 
arquivo). Exemplo de uso esperado: */
function criarContador() {
    let contador = 0;

    return () => {
        contador++;
        console.log(contador);
    };
}

const contador1 = criarContador();

contador1(); // 1
contador1(); // 2
contador1(); // 3

console.log("------------------------------------------");

/**5. Recursão
Crie uma função recursiva chamada somaAte que recebe um número n e 
retorna a soma de todos os números de 1 até n (por exemplo, somaAte(5) 
deve retornar 15, pois 1+2+3+4+5=15). Use o mesmo padrão de caso base 
que você viu na função factorial. */
function somaAte(n) {
    if (n === 1) {
        return 1;
    }
    return n + somaAte(n - 1);
}

const num = 6;

const result = somaAte(num);

console.log(`A soma de 1 até ${num} é ${result}`);

console.log("--------------------------------------------------");

/**Segundo exercício */

/**1. Função simples com parâmetro
Crie uma função chamada saudacao que recebe um nome e imprime "Bem-vindo(a), [nome]!" no console. */
const saudacao1 = (nome) => {
    console.log(`Bem-vindo(a) ${nome}`);
}

saudacao1("Edgar");

console.log("----------------------------------------------");

/**2. Return e variáveis
Crie uma função subtrai(n1, n2) que retorna a subtração entre os dois números.
Chame a função com dois valores diferentes e imprima os resultados com console.log. */
const subretacao = (n1, n2) => {
    return console.log(n1 - n2);
}

subretacao(12, 2);

console.log("-----------------------------------------------");

/**3. Escopo
Declare uma variável idade = 25 fora de qualquer função. Dentro de uma função chamada 
testeIdade, declare outra variável idade = 18 e imprima seu valor. Depois, fora da 
função, imprima o valor da variável idade original. Explique com suas palavras por 
que os valores são diferentes. */
const idade = 25;

const testeIdade = () => {
    const idade = 18;
    console.log(idade);
}

console.log(idade);

testeIdade();

/**4. Arrow function com condicional
Crie uma arrow function chamada maiorDeIdade que recebe um número idade 
e imprime "Maior de idade" se for 18 ou mais, ou "Menor de idade" caso 
contrário. Teste com dois valores diferentes. */
const maiorDeIdade = (idade) => {
    if(idade >= 18){
        return console.log("Maior de idade");
    }else{
        console.log("Menor de idade");
    }
}

maiorDeIdade(22);

maiorDeIdade(15);

/**5. Parâmetro default
Crie uma arrow function saudacaoPersonalizada(nome, saudacao = "Olá") 
que retorna uma string no formato "[saudacao], [nome]!". Chame a função 
uma vez passando só o nome, e outra vez passando os dois parâmetros. */
const saudacaoPersonalizada = (nome, saudacao = "Olá") => {
    return `${saudacao}, ${nome}`;
}

console.log(saudacaoPersonalizada("Edgar", "oi"));

console.log(saudacaoPersonalizada("Edgar"));