// Aula 1.3 introdução Arrays
    // Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento ou item, e cada elemento se localiza numa posição na lista chamada de índice.
    // Array é uma estrutura de dados
    // Um Array guarda uma lista que pode armazenar diversos valores

// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

// const media = (nota1 + nota2 + nota3 + nota4) / 4;

// console.log(media);


// > Usando uma Array para criar uma estrtutura de dados que vai armanzenar de forma mais fácil e que possibilita utilizar outras funcões

//Posições;    0   1   2   3 
const notas = [10, 6.5, 8, 7.5];
    // As 4 notas guardadas em um Array

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
    // O primeiro elemento de uma Array está na posição 0

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
    // "notas.length" é a propriedade que irá trazer a largura, a quantidade de elementos, dentro do Array
    // Usar o Array possibilidae usar outras funcionalidades que melhoram o código

console.log(media);


// const notas = [10, 6.5, 8, 7.5];

// let resultado = 0;

// notas.forEach(nota => {
    
//     resultado = resultado + nota

// }) 

// console.log(resultado/notas.length);