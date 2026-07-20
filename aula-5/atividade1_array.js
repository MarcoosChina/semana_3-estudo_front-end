//solicitar ao usuario uma inclusao de uma fruta no carrinho de compras
//adicionar a fruta na primeira posição da lista
//caso passar de 5 frutas no carrinho remover a fruta mais antiga 
//caso o usuario digitar "sair" parar a solicitação de frutas e exibir no console
//a atual listagem das frutas

const prompt = require('prompt-sync')();

let carrinho = [];
let continua;

do {
    const fruta = prompt("Digite uma fruta: "); //recebe a fruta digitada pelo usuario
    carrinho.unshift(fruta); //insere na primeira posição
    if (carrinho.length >= 5)
        carrinho.pop();
    console.log(carrinho);
    continua = prompt("Deseja continuar? ");
}while (continua.toUpperCase() != 'SAIR');

console.log(carrinho);