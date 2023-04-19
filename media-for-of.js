// Aula 3.6 Média "for of" em uma Array

    // O "for of" irá percorrer do início ao fim do Array executando para cada elemento o bloco de execução
    // Dentro do "for" vai "(let nota of notas)". 
    // "let nota" é o nome da variável que irá representar cada elemento do Arra
    // "of notas" irá fazer um loop para cada item de "notas"

    // O uso do "for of" em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados)
    // ou em caso de Arrays quando for necessário o uso de programação assíncrona 
    // e/ou dar condições de saída do laço (por exemplo, com o uso de break); 

const notas = [10, 6, 4, 8];

let somaDeNotas = 0;

for (let nota of notas) {
    // Fazer o loop para cada "nota" dentro da Array "notas"

    somaDeNotas += nota;
        // Essa sintaxe permite usar a variável "nota" dentro do bloco de execução

}

const media = somaDeNotas / notas.length;

console.log(`A média das notas é ${media}.`);