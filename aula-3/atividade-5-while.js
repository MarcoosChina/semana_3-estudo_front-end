const prompt = require('prompt-sync')( );
let numleatorio = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
let tentativas = 0;
let acertou = false;
console.log("Bem-vindo ao jogo de adivinhação!");
console.log("Tente adivinhar o número entre 1 e 100.");
while (!acertou) {
    let palpite = parseInt(prompt("Digite seu palpite: ")); // Solicita ao usuário que digite um palpite e converte para número inteiro
    tentativas++;                                           // Incrementa o número de tentativas a cada palpite
    if (palpite === numleatorio) {                      // Verifica se o palpite do usuário é igual ao número aleatório gerado
        acertou = true;
        console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`); // Informa ao usuário que ele acertou e quantas tentativas foram necessárias
    } else if (palpite < numAleatorio) {                                          // Verifica se o palpite do usuário é menor que o número aleatório gerado
        console.log("O número é maior. Tente novamente.");                           // Informa ao usuário que o número é maior e solicita um novo palpite
    } else {
        console.log("O número é menor. Tente novamente.");                            // Informa ao usuário que o número é menor e solicita um novo palpite
    }
}