//Parte 1: Criar uma função adicionaQuadrados(num_a, num_b) e outra funcao chamada quadrado()

function adicionaQuadrados(num_a, num_b){
    function quadrado(num){
        return num * num;
    }
    return quadrado(num_a) + quadrado(num_b);
}
console.log(adicionaQuadrados(3, 3)); // Saída: 13 (2^2 + 3^2 = 4 + 9 = 13)