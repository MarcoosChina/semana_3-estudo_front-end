//criar funcao chamada quadrado, a funcao recebera um numero e retornara o quadrado do mesmo
//analisar se a funcao é numerica

function quadrado(x){
//    if(isNaN(x)){
//        return "Parâmetro incorreto";
//    }else{
//        return x * x
//    }
    if(typeof(x) !== 'number'){
        return "Parâmetro incorreto";
    }
    return x * x; 
}
console.log(quadrado(8));
console.log(quadrado('8'));
console.log(quadrado('oito'));