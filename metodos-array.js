//Aula 1.8 Métodos do Array

/* Métodos do Array

Método é uma função que serve como uma propriedade de uma array ou de um objeto.
Ele pode realizar tarefas pré-definidas usando os dados do array e dos parâmetros que passamos para elas, como adicionar, remover ou até encontrar elementos.

Existem muitos métodos. A lista dos principais métodos:

concat() - junta dois Arrays, colocando o array passado como argumento, logo depois do primeiro. 
    // Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.

filter() - retorna uma lista com todos os elementos que passaram em um teste, ou seja, uma função que irá validadar, se for verdadeiro, entra na lista. 
    // Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

find() - funciona de forma parecida com o filter, porém retorna apenas o primeiro ELEMMENTO/VALOR que satisfizer o teste, podendo ser uma string ou um número.

findIndex() - funciona igual ao find(), mas retorna o ÍNDICE em vez do elemento, possibilitando usá-lo em outras partes do código.

lastIndexOf() - É igual ao findIndex(), porém começa do último elemento, não do primeiro.

forEach() - Executa uma função em cada elemento do Array de forma individual. Não altera o array original e nem retorna um valor.

pop() - Retira o último elemento do array. Altera o array original removendo o elemento.
    // Altera o array original removendo o elemento.

push() - Adiciona o elemento passado como parâmetro do array, porém na última posição.
    // Altera o array original com o novo valor.

shift() - Retira o primeiro elemento do array.
    // Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.

unshift() - Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
    // Altera o array original com o novo valor e troca o índice de todos os elementos.

reduce() - O método reduce() reduz um array de valores a um único valor. Para obter o valor de resultado, ele executa uma função de redução em cada elemento do array.

reduceRight() - Funciona igual o reduce() porém começa do final do array e segue até o início.

reverse() - Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

slice() - Copia uma parte do array para outra array.

sort() - Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras.
    // Não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.

splice() - Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.

*/