//ATIVIDADE - II
// Crie uma função chamada criarMultiplicador(fator).
// Essa função deverá retornar uma função que:
// Receba outro número como parâmetro; Multiplique esse novo número pelo fator; Retorne o resultado da multiplicação
// Inicialize a função criarMultiplicador(fator) atribuindo ela a uma variável chamada dobro.
// Executar a função através da variável dobro passando diferentes valores.

function criarMultiplicador(fator){
    return function (num){
        return num * fator;
    }
}
let dobro = criarMultiplicador(2);

console.log(dobro(1));
console.log(dobro(3));
console.log(dobro(100));
console.log(dobro(10));
