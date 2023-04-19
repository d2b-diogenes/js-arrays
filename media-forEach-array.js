// Aula 4.2 Média usando o forEach em uma Array

    // O "forEach()" é uma método do objeto Array que cria uma estrutura de repetição para cada elemento da lista um Array
    // O método "forEach" exite um parâmetro obrigatório, que é uma função que será executada para cada elemento do array
    // Essa função que vai dentro do parâmentro tem o nome de callback e vai ser executada para cada elemento do array, 
    // A função callback de vai dentro do parâmentro pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente.

    // O forEach() também não pode ser utilizado com qualquer iterável, apenas com arrays
    // O forEach() não pode ser utilizado de forma assíncrona 

const notas = [10, 7, 8, 5];

let somaDasNotas = 0;

notas.forEach( nota => {
    // Dentro dos parâmetros do "forEach()" é passada uma outra função
    // A função criada dentro do parênteses foi uma função anônima, uma Arrow Function
    // Essa função dentro do parâmetro é a que será executada a cada loop, para cada elemento do Array
    // Essa função chamada/passada dentro do parâmetro é chamada de callback
    // "nota" é o elemento que será capturada a cada loop de cada elemento do Array 

    somaDasNotas += nota;

});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

// O método "forEach" é melhor do que o "for of", pois ele aceita mais parâmetros que irão possibilitar trabalhar com códigos mais complexos.