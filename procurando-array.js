// Aula 3.2 Procurando no Array

const alunos = [ 'Carla', 'Maria', 'Julia', 'Bianca' ];

const notas = [ 8, 7, 10, 9 ];

const listaAlunosENotas = [alunos, notas];

//Função que irá buscar pelo aluno dentro da lista para trazer a média dele
function buscaAlunoENota (aluno) {
    // Função que precisa receber o nome do aluno para poder buscar no Array

    if (listaAlunosENotas[0].includes(aluno)) {
            // Será feito um IF para veriricar se o nome do aluno está dentro da Array que contem os nomes dos alunos 
            // O método "includes() procura no Array o elemento passado dentro do seu parâmentro e se encontroar, ele retorna "true" ou "false". 
            // No caso, o método "includes() irá procurar pelo nome do aluno.
        
        // console.log("Aluno encontrado");
        //     // Se for encontrado na lita, será executado esse bloco de código.

        const indice = listaAlunosENotas[0].indexOf(aluno);
            // Foi usado o método "indexOf()" para buscar dentro da lista de nome a posição do nome procurado
            // O índice será usado em outra parte do código
            
        console.log(`${listaAlunosENotas[0][indice]} tem a média ${listaAlunosENotas[1][indice]}.`);
            // Foi o índice para automatizar a busca do elemento dento das listas de nome e da média

    } else {

        console.log("Aluno não encontrado");
            // Se não for encontrado na lita, será executado esse bloco de código.

    }

}

buscaAlunoENota("Bianca");
buscaAlunoENota("Carla");
buscaAlunoENota("Pedro");