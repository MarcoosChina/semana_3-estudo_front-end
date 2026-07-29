// ATIVIDADE - I Encapsulamento
// TODO 1 () Agora, modifique a classe Carrinho DeCompras para deixar a propriedade itens como privada.
// TODO 2 () Para a classe Carrinho Vip, deixe a propriedade desconto como privada, e adicione o método setDesconto (valor): este método será responsável por alterar o desconto atual.
// Com base nos itens incluídos na atividade 2, troque o percentual do desconto e verifique como o valor total dos itens se comportam.

class carrinhoDeCompras {
    #itens = [];
    adicionarItem(nome, preco) {
        this.#itens.push({nome: nome, preco: preco});
    }
    listarItens(){
        return this.#itens;
    }
    calcularTotal(){
        let total = 0;
        for (let item of this.#itens){
            total += item.preco;
        }
        return total;
    }
}

class carrinhoVip extends carrinhoDeCompras {
  #desconto;

  constructor(desconto) {
    super();
    this.#desconto = desconto;
  }

  setDesconto(valor) {
    this.#desconto = valor;
  }
    calcularTotalComDesconto() {
        let total = this.calcularTotal();
        let totalComDesconto = total - (total * (this.#desconto / 100));
        return totalComDesconto;
    }
}
let carrinho = new carrinhoVip(10);
carrinho.adicionarItem('Arroz', 10.00);
carrinho.adicionarItem('Feijão', 8.00);
carrinho.setDesconto(15);
console.log(carrinho.listarItens());
console.log('Total: R$', carrinho.calcularTotal());
console.log('Total com desconto: R$', carrinho.calcularTotalComDesconto());
