class CarrinhoDeCompras {
  #itens = [];

  adicionarItem(nome, preco) {
    this.#itens.push({ nome: nome, preco: preco });
  }

  listarItens() {
    return this.#itens;
  }

  calcularTotal() {
    let soma = 0;
    for (let item of this.#itens) {
      soma += item.preco;
    }
    return soma;
  }
}
class CarrinhoPremium extends CarrinhoDeCompras {

  calcularTotal() {
    const totalOriginal = super.calcularTotal();
    return totalOriginal * 0.65;
  }
}
let carrinhoPremium = new CarrinhoPremium();

carrinhoPremium.adicionarItem('Monitor', 1000);
carrinhoPremium.adicionarItem('Cadeira Gamer', 500);


console.log('Lista de produtos:', carrinhoPremium.listarItens());
console.log('Valor total da compra (com 35% de desconto): R$', carrinhoPremium.calcularTotal());