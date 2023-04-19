// Aula 2.6 Juntando com concat()

// O método concat() irá juntar Arrays. excluir da Array o(s) elemento(s) indicados no parâmetro do método
// Esse método não alterar o Array original, então é necessário guardar o resultado em uma nova variável

const alunosJava = [ 'João', 'Ana', 'Caio', 'Lara' ];

const alunosPython = [ 'Marjorie', 'Leo', 'Rodrigo', 'Carlos' ];

const salaUnificada = alunosJava.concat(alunosPython);
    // O método concat() fez a concatenação da lista "alunosJava" com "alunosPython"
    // O médoto concat() precisa ser guardado em uma nova variável, pois ele não modifica a array original
    // A ordem da nova lista fica, primeiro a lista de "alunoJava" e depois "alunosPython". Se fosse inserido um novo ".concat()" depois de ".concat(alunosPython)", seria concatenado uma nova lista e assim por diante.

console.log(salaUnificada);
    // output: [ 'João',     'Ana', 'Caio',     'Lara', 'Marjorie', 'Leo', 'Rodrigo',  'Carlos' ];
