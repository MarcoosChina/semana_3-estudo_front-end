// ATIVIDADE - II
// Crie uma classe chamada CarrinhoVip que herde da classe CarrinhoDeCompras. Ela deverá possuir:
// Propriedade:
// desconto: number (representa o percentual de desconto)
// Método:
// calcular TotalComDesconto()
// Calcula o valor total dos itens utilizando o método calcular Total() da classe;
// Aplica o percentual de desconto;
// Retorna o valor final da compra;
// Instancie um objeto a partir da classe CarrinhoVip. Adicione ao menos dois itens e exiba:
// •
// A lista de produtos;
// O valor total da compra;
// O valor final com desconto;

class carrinhoDeCompras {
    itens = [];
    adicionarItem(nome, preco) {
        this.itens.push({nome: nome, preco: preco});
    }
    listarItens(){
        return this.itens;
    }
    calcularTotal(){
        let total = 0;
        for (let item of this.itens){
            total += item.preco;
        }
        return total;
    }
}

class carrinhoVip extends carrinhoDeCompras {
  desconto;

  constructor(desconto) {
    super();
    this.desconto = desconto;
  }
    calcularTotalComDesconto() {
        let total = this.calcularTotal();
        let totalComDesconto = total - (total * (this.desconto / 100));
        return totalComDesconto;
    }
}
let carrinho = new carrinhoVip(10);
carrinho.adicionarItem('Arroz', 10.00);
carrinho.adicionarItem('Feijão', 8.00);
console.log(carrinho.listarItens());
console.log('Total: R$', carrinho.calcularTotal());
console.log('Total com desconto: R$', carrinho.calcularTotalComDesconto());

