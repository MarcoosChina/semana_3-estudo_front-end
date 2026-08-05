// ATIVIDADE - V
// Crie uma função chamada contagem Regressiva:
// A função deverá:
// -Receber um número inteiro positivo.
// -Exibir esse número no console.
// -Chamar a si mesma, diminuindo o valor em 1. Encerrar a execução quando o número chegar a 0.

function contagemRegressiva(n) {
//caso base
    console.log(n); //exibir o número no console
    if (n == 0) {
        console.log("Contagem finalizada.");
        return; //<- ponto de parada
    }
    contagemRegressiva(n - 1); //função que chama ela própria e alterando o valor da sua entrada
    return n; //retorna o valor atual da contagem
}
contagemRegressiva(10); //chamada da função com o valor inicial da contagem
