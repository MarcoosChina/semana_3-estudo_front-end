//criar funcao calcularTotalCompra, e passar valor e frete como parametros
//caso nao passar valor no frete, o padra é 20

function calcularTotalCompra(valor, frete = 20){
    return valor + frete;
}
console.log(calcularTotalCompra(20));