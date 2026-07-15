const prompt = require('prompt-sync')(); // requere 

let numero_1;
let numero_2;
let operacao;
let continuar;

do {
  numero_1 = prompt("Digite o primeiro número: ");
  numero_2 = prompt("Digite o segundo número: ");
  operacao = prompt("Digite a operação a ser realizada: ");

  switch (operacao) {
    case '+':
      console.log('Soma dos números', +numero_1 + +numero_2);
      break;
    case '-':
      console.log('Subtração dos números ' + (+numero_1 - +numero_2).toString());
      break;
    case '*':
      console.log(`Multiplicação dos números ${+numero_1 * +numero_2}`);
      break;
    case '/':
      console.log('Divisão dos números', +numero_1 / +numero_2);
      break;
    default:
      console.log('Operação inválida!');
  }

  continuar = prompt("Deseja continuar? (S/Sim) ");
} while(continuar.toLowerCase() === 's' || continuar.toLowerCase() === 'sim');

console.log("Fim da execução.");