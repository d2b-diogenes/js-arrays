// Aula 2.7 Array com duas dimensões

const alunos = [ 'Carla', 'Maria', 'Julia', 'Bianca'];

const notas = [8, 7, 10, 9];

const listaNotasEAlunos = [alunos, notas];
    // Foi criada a Array "listaNotasEAlunos" que recebe outros 2 Arrays, alunos e notas.

// > Acessando a lista de Arrays

console.log(`A aluna ${listaNotasEAlunos[0][2]} obteve a nota ${listaNotasEAlunos[1][2]}.`);
    // Dentro do tamplete String foi usado o ${} para acessar a variável.
    // "${listaNotasEAlunos[0][2]}" Acessou o Array "listaNotasEAlunos" e buscou o primeiro elemento "[0]", que era a array contendo os nomes dos alunos.
    // Depois que estava dentro do primeiro array "listaNotasEAlunos[0]", buscou o elemento [2], que era o elemento "Julia", o nome da aluna.

    // "${listaNotasEAlunos[1][2]}" Acessou o Array "listaNotasEAlunos" e buscou o segundo "[1]", que era a array contendo as notas dos alunos.
    // Depois que estava dentro do segundo array "listaNotasEAlunos[1]", buscou o elemento [2], que era o elemento "10", a nota da aluna Julia

