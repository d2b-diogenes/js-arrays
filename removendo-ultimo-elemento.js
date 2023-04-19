// Aula 1.7 Deletando elemento

const notas = [10, 6, 8, 5.5, 10];

notas.pop();
    // ".pop()" usado para remover a último item do array

console.log(notas);
    //output: [ 10, 6, 8, 5.5 ]

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A médid é ${media}`);