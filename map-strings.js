// Aula 4.6 Alterando Strings com Map()

// > Desafio: colocar todos os nome em 

const nomes = ["ana Julia", "Caio Vinicius", "BIA silva"];

// const nomePadronizados = nomes.map( nome => {
//     // O "map()" irá reescrever todos os elementos do Array
//     // A constante "nomePadronizados" irá receber esse resultado do "map()"
//     // A função callback leva o "nome" como parâmetro para que seja usada no bloco de comandos

//     return nome.toUpperCase();
//         // Irá retornar para cada posição dos elementos do Array um elemento transformado em maiúsculo

// })


//Outra forma de escrevar a Função Callback sem o termo return
const nomePadronizados = nomes.map( nome => nome.toUpperCase() );
    // Para que seja possível tirar o termo "return" é necessário retirar as chaves e escreva tudo na mesma linha.
    // A estrutura do MAP = " .map( nome => nome.toUpperCase() ) "
    // Arrow Function mais suscinta e sem o termo "return" = " nome => nome.toUpperCase() "
        // "nome" parâmetro
        // "nome.toUpperCase()" o bloco de comando que será retornado

console.log(nomes);
    // output: [ 'ana Julia', 'Caio Vinicius', 'BIA silva' ]

console.log(nomePadronizados);
    // output: [ 'ANA JULIA', 'CAIO VINICIUS', 'BIA SILVA' ]