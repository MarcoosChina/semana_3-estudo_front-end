// ATIVIDADE-I
// Crie uma classe CarrinhoDeCompras contendo:
// Propriedade:
//      itens: array
// Métodos:
//      adicionarltem(nome, preco): Adiciona um objeto (nome, preco} à propriedade itens;
//      listarltens(): Retorna o array itens
//      calcularTotal(): Retorna a soma de todos os itens da lista
// Adicione ao menos dois itens e chame os métodos de listagem e de cálculo para verificar o funcionamento da implementação.

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

    }
}


let carrinho = new carrinhoDeCompras();


carrinho.adicionarItem('Arroz', 10.00);
carrinho.adicionarItem('Feijão', 8.00);

console.log(carrinho.listarItens());
console.log('Total: R$', carrinho.calcularTotal());