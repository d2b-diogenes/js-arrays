// Aula 1.2 Dividindo uma Array com slice()

    // Slice() significa fatiar
    // O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original
    // Esse método não alterar o Array original, então é necessário guardar o resultado em uma nova variável 

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// const sala1 = alunos.slice(0, 10);   
    // O slice precisa receber 2 parâmetros
    // O primeiro, a posição que indica onde inicia o fatiamente, e
    // o segundo, a posição que indica até onde vai o fatiamento. Atenção, o elemento da posição inserida no segundo parâmentro não é incluí na lista, no novo Array.

// const sala2 = alunos.slice(10);
    // Ao indicar 1 parâmentro, o método entende que será fatiado daquela posição para frente.


// > Melhorando o código

const sala1 = alunos.slice(0, alunos.length / 2);
    // Faz o mesmo procedimento de "slice(0, 10)", mas agora de forma automatizada.
    // Se a lista tivesse uma quantidade muito grande de elementos, nesse formato a divisão é automatizada.

const sala2 = alunos.slice(alunos.length / 2);
    // Faz o mesmo procedimento de "slice(10)", mas agora de forma automatizada.

console.log(sala1);
console.log(sala2);
