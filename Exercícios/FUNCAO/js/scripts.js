/**1. Função com parâmetro e retorno
Crie uma função chamada calcularArea que recebe largura e 
altura como parâmetros e retorna (não apenas imprime) a área 
do retângulo. Teste chamando console.log(calcularArea(5, 3)). */
function calcularArea(l, a){
    return l * a;
}

console.log(calcularArea(5, 3));

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