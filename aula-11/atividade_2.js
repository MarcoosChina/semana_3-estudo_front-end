// Crie uma função chamada calcularMedia.
// A função deverá:
// -Receber uma quantidade variável de notas.
// -Calcular a soma de todas as notas recebidas.
// -Calcular a média das notas.
// -Retornar o valor da média.
// Executar a função passando diferentes valores e observe seu comportamento.


//explicação sobre oq é parametros rest

// Parâmetro rest junta vários argumentos em um único array usando ....
// No function calcularMedia(...notas) a variável notas vira um array com todas as notas passadas (ex.: calcularMedia(2,3,4) → notas === [2,3,4]), facilitando fazer notas.reduce(...) e dividir por notas.length.
// Regras rápidas: só pode haver um rest por função e ele deve ser o último parâmetro.


function calcularMedia(...notas){
    let somaNotas = 0;
    
    notas.forEach((nota) =>{
        somaNotas += nota;
    });

    return somaNotas / notas.length;
}
let media = calcularMedia(2, 2, 2, 2, 2);
console.log('o valor da média é: ' + media);