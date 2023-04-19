//Aula 4.4 Revisando Funções Callbacks

    // Função anônima usado como callback
    // Função callback é uma função passada como parâmentro de outra função

const nomes = [ "Evaldo", "Mari", "Camis"];

// > 5 formas de escrever a função callbacks

// // 1ª Declarando a função

// nomes.forEach(function (nome){
//     // É declarado dento do forEach a Declaração da Função padrão
//     // "nome" vai dentro dos parênteses como parâmetro da função. Esse "parâmetro" representa o elemento da lista que está sendo inteirado naquele momento
//     // Esse parâmetro pode ser usado dentro do bloco de execução 

//      console.log(nome);
//          // Pega o valor do elemento do momento que acontece a iteração e imprimi

// });


// // 2ª Arrow function sem os parênteses

// nomes.forEach( nome => {
//     // É declarado dento do forEach a Arrow Function, uma sintaxe mais sucinta
//     // É retirado o termo "function" e é adicionado o símbolo " => "
//     // Não é dado nome a função e nem o termo "function" é informado
//     // "nome" vai FORA dos parênteses como parâmetro da função, mas sem o termo "funtion" antecedendo. Esse "parâmetro" representa o elemento da lista que está sendo inteirado naquele momento 
//     // Esse parâmetro pode ser usado dentro do bloco de execução

//     console.log(nome);
//         // Pega o valor do elemento do momento que acontece a iteração e imprimi

// });


// 3ª Arrow function com os parênteses

// nomes.forEach( (nome) => {
//     // É declarado dento do forEach a Arrow Function, uma sintaxe mais sucinta
//     // É retirado o termo "function" e é adicionado o símbolo " => "
//     // Não é dado nome a função e nem o termo "function" é informado
//     // "nome" vai DENTRO dos parênteses como parâmetro da função, mas sem o termo "funtion" antecedendo. Esse "parâmetro" representa o elemento da lista que está sendo inteirado naquele momento 
//     // Esse parâmetro pode ser usado dentro do bloco de execução
//     // Outros parâmetros podem ser inseridos, mas será necessário inserí-los dentro dos parênteses
//     // Mais de um parâmetro é necessário usar os parênteses

//     console.log(nome);
//         // Pega o valor do elemento do momento que acontece a iteração e imprimi

// });


// 4ª callback chamando uma função externa

function imprimeNome (nome) {
    // Criada a função Callback de forma Externa e que irá receber o parâmentro da função que a está chamando.

    console.log(nome);
        // Pega o valor do elemento do momento que acontece a iteração e imprimi
}

nomes.forEach(imprimeNome);
    // É declarado dento do parâmetro forEach a Função Externa
    // Para que a função seja executada apenas quando for chamada os parênteses não podem ser colocados.
    // A Função Externa já deve prever a necessidade de receber o parâmentro da função que a está chamando.
