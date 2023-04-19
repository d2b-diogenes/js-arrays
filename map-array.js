// Aula 4.6 Método Map

    // ".map()" - Reescreve os elementos de um Array
    // Esse método não alterar o Array original, então é necessário guardar o resultado em uma nova variável
    // O método "map()" pode retornar um array se a função callback retornar algum valor.

// > Desafio: Adicionar 1 ponto em cada nota, mas não pode passar de 10

const notas = [ 10, 9.5, 7, 6 ];

const notasAtualizadas = notas.map( nota => {
    // A constante "notasAtualizadas" irá receber o retorno das alterações feitas na Array por meio do método "map()" 
    // O método "map()" recebe como parâmetro uma Função Callback
    // "nota" é o parâmetro que a funçaõ função callback recebe e que será usado dentro do bloco de executação
    // "nota" representa o valor do elemento inteirado

    return nota + 1 >= 10 ? 10 : nota + 1;
        // "return" - O método "map()" precisa que uma valor seja retornado
        // Será executado o código em cada elemento do Array, o valor desse elemento pode mudar e o "return" retorna com esse novo valor
        
        // O desafio exige que seja feita uma condição para que o valor seja alterado, pois isso será
        // necessário utilizar uma operação ternária para que a alteração seja feita medianta a condição atendida
        // "nota + 1 >= 10 ? 10 : nota + 1" - Operação ternária, onde ao final será retornado um valor depentendo do resultado a condição
        // "nota + 1 >= 10" - Primeira parte da operação ternária: a condição que tem que ser satisfeita
        // " ? " - Divide a condição dos possíveis retornos em caso de true ou false
        // " 10 " - Segunda parte da operação ternária: o retorno em caso da condição retornar como "true"
        // " : " - Divide os possíveis retornos da operação ternária
        // "nota + 1" - Terceira parte da operação ternária: o retorno em caso da condição retornar como "false" 

})

console.log(notas);
    // output: [ 10, 9.5, 7, 6 ]

console.log(notasAtualizadas);
    // output: [ 10, 10, 8, 7 ] // Notas atualizadas respeitando o limite de 10 pontos