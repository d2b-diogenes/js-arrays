// Aula 5.2 Filtrando elementos


// > Desafio: lista dos reprovados

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];

const medias = [7, 4.5, 8, 6.5];

// const reprovados = alunos.filter( (aluno, indice) => {
    const reprovados = alunos.filter( (_, indice) => {
    // O "filter()" irá filtrar os elementos que atenderem a condição retornando como true
    // A constante "reprovados" irá receber esse resultado do "filter()"

    return medias[indice] < 7 ? true : false;
        // Será retornado true ou false para a condição que cada elemento, cada nota, terá que satisfazer.
        // O elemento que satisfizer a condiçõa, será retornado "true" e ele será INSERIDO dentro do novo Array
        // Se a nota for menor que 7, retornará "true", significando que o aluno tirou nota menor que 7 e reprovou

});

console.log(reprovados);


// > Desafio: lista dos aprovados

// const aprovados = alunos.filter( (aluno, indice) => {
    const aprovados = alunos.filter( (_, indice) => {
        // É necessário inserir os 2 parâmentros, pois o primeiro é o elemento que está sendo inteirado e o segundo é o índice do elemento que está sendo inteirado
        // Nesse exemplo o primeiro parâmetro não está sendo usado, mas é obrigatório inserí-lo, pois a ordem dos parâmetros exigem
        // O 1º parâmetro indica o elemento e o 2º parâmetro indica o índice.

        // (_, indice) Há uma convenção de coloca um " _ " no lugar do parâmetro que não será usado

    return medias[indice] >= 7 ? true : false;

})

console.log(aprovados);