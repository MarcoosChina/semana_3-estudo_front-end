//formatar em valor monetário ex R$ 12,50

const Valores = [12.5, 30, 99.99, 5] ;

const Formatador = Valores.map((item) => {
    //opcao1
    return 'R$' + item.toFixed(2)
    //opcao2
   //return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item);
});

console.log(Formatador);