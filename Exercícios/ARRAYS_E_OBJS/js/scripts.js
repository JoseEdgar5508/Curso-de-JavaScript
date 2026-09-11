/**### 1. Frutas favoritas
Crie um array chamado `frutas` com pelo menos 5 nomes de frutas. Depois imprima no console:
- o primeiro item do array;
- o último item do array;
- o tamanho (length) do array.

**Dica:** veja o bloco `//2 - mais sobre arrays` (acesso por índice) e `//3 - Propriedades` (uso de `.length`). */
const frutas = ["Maça", "Laranja", "Melancia", "Banana", "Uva"];

console.log(frutas[0]);

console.log(frutas[4]);

console.log(frutas.length);

console.log("-----------------------------------------------");

/**### 2. Ficha de aluno
Crie um objeto `aluno` com as propriedades `nome`, `idade` e `curso`. Imprima o objeto inteiro 
e depois imprima só o `nome` seguido do tamanho (quantidade de caracteres) desse nome.

**Dica:** veja o bloco `//5 - objetos`, que mostra `person.name` e `person.name.length`. */

const aluno = {
    nome: "Edgar",
    idade: 20,
    curso: "Ciências da computação"
};

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.nome.length);

console.log("---------------------------------------------");

/**### 3. Atualizando a ficha
Usando o objeto `aluno` do exercício anterior, adicione uma nova propriedade `matricula` e depois remova a propriedade `idade`. 
Imprima o objeto antes e depois de cada mudança.

**Dica:** veja o bloco `//6 - Criando e deletando propriedades` (uso de `objeto.novaProp = valor` e `delete objeto.prop`). */
console.log(aluno);

aluno.matricula = 123;

console.log(aluno);

delete aluno.idade;

console.log(aluno);

console.log("-------------------------------------------");

/**### 4. Empilhando itens
Crie um array `carrinho` com 3 produtos. Depois:
- adicione um novo produto no final com `push`;
- remova o último produto com `pop`.

Imprima o array após cada operação.

**Dica:** veja o bloco `//11 - Push e pop`. */
const carrinho = ["Roupa", "Carro", "Sapato"];

console.log(carrinho);

carrinho.push("Maça");

console.log(carrinho);

carrinho.pop();

console.log(carrinho);

console.log("--------------------------------------------");

/**### 5. Fila de atendimento
Crie um array `fila` com 4 nomes de pessoas. Remova a primeira pessoa da fila (quem está sendo atendido) e 
depois adicione uma nova pessoa no início da fila.

**Dica:** veja o bloco `//12 - Shift e unshift` (métodos `shift()` e `unshift()`). */
const fila = ["Edgar", "João", "Mateus", "José"];

console.log(fila);

fila.shift();

console.log(fila);

fila.unshift("Maria");

console.log(fila);