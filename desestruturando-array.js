// Aula 3.3 Desestruturando Array

const alunos = [ 'Carla', 'Maria', 'Julia', 'Bianca' ];

const notas = [ 8, 7, 10, 9 ];

const listaAlunosENotas = [alunos, notas];

function buscaAlunoENota (aluno) {
    if (listaAlunosENotas[0].includes(aluno)) {

        // // Tornando o código mais legível
        // const alunos = listaAlunosENotas[0];
        //     //Foi atribuído o caminho do Array para acessar a Array que contem os nomes;
        // const medias = listaAlunosENotas[1];
        //     //Foi atribuído o caminho do Array para acessar a Array que contem as médias;

        // Outra forma de tornar o código mais legível
        const [alunos, medias] = listaAlunosENotas;
            // Sintaxe de Desestruturação de listas para nome cada elemento da Array "listaAlunosENotas"
            // Essa linha equivale as duas linhas de códigos anteriores 
            // Está sendo criada uma constante com o nome "alunos" para a posição 0 para a lista "listaAlunosENotas"
            // Está sendo criada uma constante com o nome "medias" para a posição 1 para a lista "listaAlunosENotas" 

        const indice = alunos.indexOf(aluno);
            // Usando a variável "alunos" que recebeu o caminho do Array para acessar os nomes
            
        console.log(`${aluno} tem a média ${medias[indice]}.`);
            // Usando a variável "medias" que recebeu o caminho do Array para acessar as médias

    } else {

        console.log("Aluno não encontrado");

    }

}

buscaAlunoENota("Bianca");
buscaAlunoENota("Carla");
buscaAlunoENota("Pedro");