// Aula 1.9 Arrays Vazias

// const arrayVazia = [];

// console.log(arrayVazia);
//     // output: []

// console.log(arrayVazia.length);
//     // output: 0

// console.log(arrayVazia[0]);
//     // output: undefined

const arrayVazia = [,,,];

console.log(arrayVazia.length);
    // output: 3

console.log(arrayVazia[0]);
    // output: undefined

console.log(arrayVazia[1]);
    // output: undefined

console.log(arrayVazia[2]);
    // output: undefined

// Foi criado um array com 3 posições, porém em nenhuma dessas posições existe um valor.
//De certa forma, podemos pensar que este array foi criado como um gaveteiro com três gavetas e todas elas estão “vazias”, sem nenhum valor de dado guardado.

arrayVazia.push(50);
    // Usado o método .push() visto anteriormente para adicionar um valor - lembrando que este método sempre vai adicionar o valor no final do array

console.log(arrayVazia);
    // output: [<3 empty items>,50];
        // O JavaScript manteve as posições vazias e adicionou o 50 ao final do array.
        // Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50).
        // Esse tipo de estrutura é chamado de array esparso e é importante lembrar deste comportamento dos arrays em JavaScript enquanto trabalhamos.
