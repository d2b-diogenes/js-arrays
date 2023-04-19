// Aula 2.4 Atualizando com splice()

// O método splice() irá excluir da Array o(s) elemento(s) indicados no parâmetro do método
// Esse método altera o Array original, então não é necessário guardar o resultado dele

const alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// alunos.splice(1, 2);
//     // output: [ 'João', 'Lara', 'Marjorie', 'Leo' ] 
//     // Excluiu Ana e Caio e retornou a lista modificada sem eles.
//     // O splice precisa receber 2 parâmetros
//     // O primeiro, a posição que indica onde inicia o fatiamente, e
//     // o segundo, é o tamanho desse fatiamento. No caso, a contagem inicia do primeiro elemento indicado.
//     // Começa no elemento da posição "1" e no total irá excluir 2 elementos, incluindo o elemento indicado no primeiro parâmetro.

// alunos.push("Rodrigo");
    // .push() Insere ao final da lista o elemento "Rodrigo"

// alunos.splice(1);
//     // output: [ 'João' ] 


// > Melhorando o código

alunos.splice(1, 2, 'Rodrigo');
    // O método slice() recebe 3 parâmetros.
    // O Terceiro é o elemento que se quer inserir.


console.log(alunos);