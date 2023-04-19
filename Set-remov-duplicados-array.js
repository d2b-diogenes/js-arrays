// Aula 5.8 Removendo elementos duplicados do Array

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes);
//     // "new Set()" cria um novo conjunto excluíndo os elementos repetidos
//     // Esse conjunto é atribuído à variável "nomesAtualizados"

// console.log(nomesAtualizados);
//     //output: Set(4) { 'Ana', 'Clara', 'Maria', 'João' }
//     // Retorna a lista sem os itens duplicados no formato de Set

// const arrayNomesAtualizados = [... nomesAtualizados];
//     // Atribui para a constante "arrayNomesAtualizados" o Set da constante "nomesAtualizados"

// Reduzindo 2 linhas de código para 1 linha
const arrayNomesAtualizados = [... new Set(nomes)];
    // 1º) "new Set(nomes)" um novo conjunto excluíndo os elementos repetidos a partir da constante "nomes"
    // 2º) É usado o Spred Operator para inserir o conteúdo do conjunto criado pelo SET em uma Array
    // 3º) A constante "arrayNomesAtualizados" recebe essa Array 

console.log(arrayNomesAtualizados);
    //output: [ 'Ana', 'Clara', 'Maria', 'João' ]
    // Retorna a lista em formato de Array