// Aula 5.6 Clonando com spread operador

// Desafio: copiar Array e adicionar o valor 10 ao final do Array 

const notas = [7, 5, 6, 9];

/* Não pode ser feita essa atrubuição tentando copiar a Array "notas"
const novasNotas = notas;
    // Fazer dessa forma, Atribuir diretamente um array para outro com o sinal = , faz com o que o JavaScript entenda que é como se eles fossem o mesmo array. 
    // "novasNotas" e "notas" serão iguais, pois ambas passaram a ter a mesma referência do espaço da memória.
    // Se alguma delas for alterada, ambas irão ser alteradas.

novasNotas.push(10);
    // Quando for feito o push() do número 10, será inseiro dentro dos dois Arrays, pois ambas apontam para o mesmo espaço da memória.
*/


// > Para fazer uma cópia do Array é necessário utilizar o Spread Operador

// const novasNotas = [...notas];
//     // O Spread Operador, o operador espalhador, irá COPIAR o conteúdo de notas e espalhar dentro da nova variável criando uma nova Array
// novasNotas.push(10);
//     // Irá adicionar o número 10 ao final da array

// Outra forma de realizar o desafio, utilizando o spread operador e adicionando o valor ao final do array
const novasNotas = [...notas, 10];

console.log(notas);
console.log(novasNotas);
