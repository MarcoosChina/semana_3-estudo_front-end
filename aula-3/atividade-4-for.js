let numero = 5;
let resultado = 1;
for ( let x = 1; x <= numero; x++ ) { // acrescendo de 1 ao valor da variável x a cada iteração do loop x++
                                      // decrescendo de 1 ao valor da variável x a cada iteração do loop seria x--
    resultado *= x;
   
    console.log(`O fatorial de ${numero} é: ${resultado}`);  //${numero} é uma manipulação de string com template literals, que permite a inserção de variáveis dentro de strings de forma mais legível e prática.
};
