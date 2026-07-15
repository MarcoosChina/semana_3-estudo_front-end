// Importa a biblioteca para entrada de dados no terminal
const prompt = require('prompt-sync')();

// Declaração das variáveis principais
let nomeProduto = '';            // Armazena o nome do produto
let categoria;                  // Armazena a categoria (E, V, A)
let preco;                      // Armazena o preço digitado

let continuar;                  // Controla o loop (S/N)

// Variáveis de controle (acumuladores e contadores)
let quantidadeProdutos = 0;     // Conta quantos produtos foram cadastrados
let somaTotal = 0;              // Soma total dos preços
let nomeProdutoMaisCaro;        // Guarda o nome do produto mais caro
let precoProdutoMaisCaro = 0;   // Guarda o maior preço encontrado
let quantidadeEletronicos = 0;  // Conta quantos produtos são eletrônicos

// Loop principal (repete até o usuário digitar "N")
do {

  // Entrada de dados do usuário
  nomeProduto = prompt("Digite o nome do produto: ");
  categoria = prompt("Digite a categoria do produto (E/V/A): ");
  preco = prompt("Digite o preço do produto: ");

  // Mostra o nome do produto em letras maiúsculas
  console.log('Nome do produto:', nomeProduto.toUpperCase());

  // Estrutura de decisão para identificar a categoria
  switch(categoria.toUpperCase()) {
    case 'E':
      console.log('Categoria: Eletrônico');
      quantidadeEletronicos += 1; // Soma 1 na contagem de eletrônicos
      break;

    case 'V':
      console.log('Categoria: Vestuário');
      break;

    case 'A':
      console.log('Categoria: Alimento');
      break;

    default:
      console.log('Categoria inválida!');
  }

  // Classificação do preço
  if (preco <= 50) {
    console.log('Barato');
  } else if (preco <= 200) {
    console.log('Preço médio');
  } else {
    console.log('Caro');
  }

  // Atualiza os contadores
  quantidadeProdutos += 1;

  // Converte o preço para número e soma no total
  somaTotal += +preco;

  // Verifica se o produto atual é o mais caro até agora
  if (preco > precoProdutoMaisCaro) {
    precoProdutoMaisCaro = preco;
    nomeProdutoMaisCaro = nomeProduto;
  }

  // Pergunta se o usuário quer continuar
  continuar = prompt('Deseja continuar? (S/N) ');

// Repete enquanto o usuário NÃO digitar "N"
} while (continuar.toUpperCase() != 'N');


// RESULTADOS FINAIS
console.log('Quantidade de produtos cadastrados:', quantidadeProdutos);
console.log('Soma total dos produtos:', somaTotal);

// Calcula e mostra a média dos preços
console.log('Média dos preços:', (somaTotal / quantidadeProdutos).toFixed(2));

// Mostra quantos eletrônicos foram cadastrados
console.log('Quantidade de eletrônicos cadastrados: ', quantidadeEletronicos);
