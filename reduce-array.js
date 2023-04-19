// Aula Comando com Reduce

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// > 3 Formas de escrever o reduce usando a Função

/* 1ª Forma: Escrevendo a função Callback fora do reduce()

function calculaMedia (acumulador, nota) {
    return acumulador + nota;
}

const mediaSalaJS = salaJS.reduce(calculaMedia, 0) / salaJS.length;

console.log(mediaSalaJS);
*/


/* 2ª Forma: Forma mais extensa para separar melhor as partes do código 

function calculaMedia (sala) {
    //Cria uma função para ser reaproveitada para fazer o cálculo da média

    const somaNotas = sala.reduce( ( acumulador, nota ) => {
        // A constante "somaNotas" irá receber o retorno do somatório por meio do método "reduce()" 
        // O método "reduce()" recebe dois parâmentros obrigatórios, primeiro é a Função Callback e segundo é o número que determinará o valor inicial do parâmentro "acumulador"
        // A função Callback também recebe dois parâmetros obrigatórios, primeiro é o "acumulador" e o segundo é o "elemento" da interação
        
        return acumulador + nota;
            // A função precisa retornar com o resultado da acumulação

    }, 0)
        // O Zero é o número que determinará o valor inicial do parâmentro "acumulador"

    const media = somaNotas / sala.length;
        // Dentro da função é feito o cálculo da média

    return media;
        // A função retorna o valor da média

}
*/


// 3ª Forma: Deixando o código do Reduce mais suscinto

function calculaMedia (sala) {

    const somaNotas = sala.reduce( ( acumulador, nota ) => acumulador + nota, 0);
        // Para que seja possível tirar o termo "return" é necessário retirar as chaves e escrever tudo na mesma linha. 

    const media = somaNotas / sala.length;

    return media;

}

console.log(calculaMedia(salaJS));
    // Chama a função para calcular a média e insiro a sala que quero que retorne a média

console.log(calculaMedia(salaJava));
    // Chama novamente a mesma função para calcular a média, mas insiro outra sala que quero que retorne a média