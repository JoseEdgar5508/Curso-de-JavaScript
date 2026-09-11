# Exercícios — Arrays e Objetos em JavaScript

Baseados no conteúdo de `5_ARRAYS_E_OBJS/JS/scripts.js`. Cada exercício traz uma dica apontando para o bloco do arquivo que ensina o conceito necessário.

---

## 🟢 Nível Fácil

### 1. Frutas favoritas
Crie um array chamado `frutas` com pelo menos 5 nomes de frutas. Depois imprima no console:
- o primeiro item do array;
- o último item do array;
- o tamanho (length) do array.

**Dica:** veja o bloco `//2 - mais sobre arrays` (acesso por índice) e `//3 - Propriedades` (uso de `.length`).

---

### 2. Ficha de aluno
Crie um objeto `aluno` com as propriedades `nome`, `idade` e `curso`. Imprima o objeto inteiro e depois imprima só o `nome` seguido do tamanho (quantidade de caracteres) desse nome.

**Dica:** veja o bloco `//5 - objetos`, que mostra `person.name` e `person.name.length`.

---

### 3. Atualizando a ficha
Usando o objeto `aluno` do exercício anterior, adicione uma nova propriedade `matricula` e depois remova a propriedade `idade`. Imprima o objeto antes e depois de cada mudança.

**Dica:** veja o bloco `//6 - Criando e deletando propriedades` (uso de `objeto.novaProp = valor` e `delete objeto.prop`).

---

### 4. Empilhando itens
Crie um array `carrinho` com 3 produtos. Depois:
- adicione um novo produto no final com `push`;
- remova o último produto com `pop`.

Imprima o array após cada operação.

**Dica:** veja o bloco `//11 - Push e pop`.

---

### 5. Fila de atendimento
Crie um array `fila` com 4 nomes de pessoas. Remova a primeira pessoa da fila (quem está sendo atendido) e depois adicione uma nova pessoa no início da fila.

**Dica:** veja o bloco `//12 - Shift e unshift` (métodos `shift()` e `unshift()`).

---

## 🟡 Nível Intermediário

### 6. Lista de tarefas
Crie um array `tarefas` com pelo menos 5 strings (nomes de tarefas). Use um `for` para percorrer o array e imprimir cada tarefa no formato:
`Tarefa 1: <nome da tarefa>`

**Dica:** veja o bloco `//10 - Loop em arrays`, que usa `for(let i = 0; i < array.length; i++)` com template string.

---

### 7. Catálogo de filmes com forEach
Crie um array de objetos `filmes`, onde cada filme tem `titulo` e `genero`. Use `forEach` para imprimir uma frase para cada filme, no estilo:
`Exibindo o filme: <titulo>, do gênero: <genero>`

**Dica:** veja o bloco `//15 - foreach`, especialmente o exemplo com o array `posts`.

---

### 8. Verificando estoque
Crie um array `estoque` com nomes de produtos. Use `includes` para verificar se um produto específico está no estoque e imprima uma mensagem diferente para cada caso (encontrado / não encontrado).

**Dica:** veja o bloco `//16 - includes`, que mostra o uso de `includes` dentro de um `if`.

---

### 9. Cortando uma lista de convidados
Crie um array `convidados` com 6 nomes. Use `slice` para criar um novo array só com os convidados da posição 2 até a 4 (sem incluir a 5ª). Depois use `slice` novamente para pegar todos os convidados a partir da posição 3 em diante.

**Dica:** veja o bloco `//14 - slice`, que mostra `slice(inicio, fim)` e `slice(inicio)`.

---

### 10. Perfil de usuário com desestruturação
Crie um objeto `perfil` com as propriedades `usuario`, `email` e `cidade`. Use desestruturação para extrair `usuario` e `email` em variáveis separadas, renomeando `usuario` para `nomeDeUsuario`. Imprima as duas variáveis.

**Dica:** veja o bloco `//25 - destructuring objetos`, principalmente a parte "renomeando variáveis" (`const { firstName: primeiroNome } = userDetails;`).

---

💡 **Bônus para praticar mais:** tente combinar o exercício 7 (array de objetos) com `Object.keys` e `Object.entries` (bloco `//8`) para listar as propriedades de cada filme dinamicamente.
