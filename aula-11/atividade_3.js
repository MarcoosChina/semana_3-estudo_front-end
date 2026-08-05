// Crie uma função chamada processarPedido. Essa função deverá:
// Receber o valor de uma compra Receber uma função de callback.
// Validar se há desconto para a compra
// Compras acima de R$ 300,00 recebem um desconto fixo de R$ 50,00. Compras de R$ 300,00 ou menos permanecem com o mesmo valor Chamar a função de callback.
// Crie uma callback chamada gerarResumo.
// Ela deverá retornar uma mensagem no formato: "O valor final do pedido é R$ XXX."
// Chame a função processarPedido passando a função gerarResumo e verifique seu comportamento.

function processarPedido(valor, callback){
    //TODO
    if (valor > 300){
        valor = valor - 50;
    }
    return callback(valor);
}
function gerarResumo(valor) {
    //TODO
    return 'O valor final do pedido é R$ ' + valor.toFixed(2);
}
console.log(processarPedido(500, gerarResumo));