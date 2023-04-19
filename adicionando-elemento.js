// Aula 1.6 Adicionando elementos

    // É usado o ".push()" para adicionar um novo item ao Array
    
const notas = [10, 6, 8];

// const media = (notas[0] + notas[1] + notas[2]) / notas.length;


notas.push(7);
    //".push()" método que adiciona o elemento "7" ao Array 
    // Alterando uma Array de notas sendo uma contante. Isso é possíve devido ter sido alterado por meio do método ".push"
    // O que é impedido de ser feito é fazer uma NOVA atribuição a essa nova constante
        // nota = []

console.log(notas);
    // output: [10, 6, 8, 7]
    // A constante com o novo intem inserido

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

