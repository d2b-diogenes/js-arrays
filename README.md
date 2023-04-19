# js-arrays

Aluno: Diógenes Bahia Bezerra
Curso: JavaScript: Arrays
Carga horária: 8h
Instituição: Alura
Link do curso: https://cursos.alura.com.br/course/javascript-arrays
Certificado do curso: https://cursos.alura.com.br/certificate/54c6c562-2d09-4477-a2db-9b6d6bc803b3

Descrição da Aula:
    Compreenda o que são arrays e porque são importantes
    Altere arrays com os métodos do JS
    Entenda o que são laços de repetição e como usá-los
    Modifique arrays utilizando métodos do JS moderno (ES6 em diante)
    Conheça o spread operator e como o JS entende referências de arrays
    Pratique com os conceitos básicos e adquira conhecimentos sólidos

Aula 1:
    As características principais de arrays:
        Um array é uma lista ordenada de dados. Você aprendeu a sintaxe de como criar um array e acessar seus valores.
    Os conceitos de elemento e índice:
        Elementos são os valores que um array guarda, e índice é o identificador único e numérico de cada elemento do array.
    Como utilizar a propriedade .length:
        Todos os arrays do JavaScript possuem essa propriedade, que indica a quantidade de elementos do array.
    Como utilizar os métodos .push() e .pop():
        Vimos como realizar as primeiras alterações em um array, como adicionar um novo item ao final ou remover o último item.
Aula 2:
    Separar um array em partes com slice() (utilizamos para obter dois novos arrays a partir de um).
    Remover e incluir novos elementos em um array com splice(); sendo que esse método permite remover elementos de qualquer posição do array. Além disso, podemos incluir um novo elemento no local dos removidos.
    Concatenar elementos em um único array com concat(); sendo que essa é uma forma facilitada de juntar dois arrays.
    Trabalhar com arrays de duas dimensões. Vimos que uma lista também pode guardar outras listas! Para acessar elementos das listas mais internas, devemos informar primeiro os índices das mais externas e depois os das mais internas, como por exemplo com funcionarios[0][2].

Aula 3:
    Utilizar os métodos includes() e indexOf():
        O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. O indexOf() retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.
    Desestruturar um array:
        Você aprendeu a sintaxe de desestruturação, disponível desde o ES6 (EcmaScript 6), que nos permite criar várias novas variáveis ao mesmo tempo a partir dos elementos de um array.
    Utilizar a estrutura for e entender seu funcionamento:
        O for é constituído de três expressões: criação da variável de controle; condição de execução; modificação da variável de controle. Essas três expressões juntas definem quantas vezes o bloco do for será executado.
    Utilizar a estrutura for of e entender a diferença em relação ao for:
        O for of sempre é utilizado para percorrer todos os elementos de um array, do início ao fim. Para esses casos, o for of é mais conciso que o for.

Aula 4:
    Como utilizar o forEach:
        Aprendemos mais uma forma de iterar sobre arrays, dessa vez com um método próprio deles. O forEach recebe uma função callback que será executada para cada item do array.
    Diferentes formas de utilizar funções callback:
        Podemos utilizar funções anônimas (como arrow functions) diretamente como funções callback, ou então criar funções de forma externa e utilizá-las no parâmetro.
    Como utilizar o map:
        O map também aceita funções callback, assim como o forEach, e é adequado para quando queremos "reescrever" os valores de um array, sem modificar o array original. Um novo array é criado com os valores reescritos.


Aula 5:
    Como utilizar o filter e o reduce:
        Aprendemos mais métodos modernos do JavaScript que nos ajudam em situações mais específicas. Utilizamos o filter para criar um array filtrado a partir de um existente e o reduce para acumular valores de um array em um só.
    Como clonar arrays com o spread operator ...:
        Entendemos o problema de referência do JavaScript ao tentar atribuir um array a um novo. Para resolver esse problema, utilizamos o spread operator para espalhar todos os valores de um array em um novo, realizando a clonagem com sucesso.
    Como utilizar a estrutura Set:
        Vimos como criar um Set a partir de um array existente, a fim de remover todas as suas duplicatas. Em seguida, utilizamos o spread operator para converter o Set de volta em uma lista.
