//criar array de string para receber nomes
//retornar um array de objetos onde cada objeto do array
//devera conter 'id', 'nome'
//sendo o valor do id um identificador numerico unico começando em 1
//e o valor do 'nome' o item passado no array

var criarPessoas = function (listaPessoas) {
  const arrayRetorno = []; //Criação do array de retorno da função
  for(let indice = 0; indice < listaPessoas.length; indice++) { //Iteração no array de parametro
    let obj = { //criação de um objeto
      id: indice + 1, //atribuição de valor do indice + 1
      nome: listaPessoas[indice] //acesso ao nome do array listaPessoas na posição do indice
    }
    arrayRetorno.push(obj); //inclusão do objeto no array
  }
  return arrayRetorno; //retorno do array
}

const nomes = ['João', 'José', 'Maria', 'Eduardo'];

console.log(criarPessoas(nomes));