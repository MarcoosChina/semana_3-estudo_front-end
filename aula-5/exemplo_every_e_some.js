//exemplo every
arrayExemplo = [1, 2, 3, 4, 5];
teste = [2, 4, 6, 8, 10];

console.log(teste.every((item) => item % 2 == 0));

//exemplo some

console.log(teste.some((item) => item % 2 == 0));

//utilização do find

let fruits = ['banana', 'maçã', 'laranja', 'abacaxi', 'uva'];

fruits.find((item) => item == 'pera') ? console.log('tem pera') : console.log('não tem pera');
fruits.find((item) => item == 'abacaxi') ? console.log('tem abacaxi') : console.log('não tem abacaxi');

//exemplo 2

arrayExemplo2 = [1, 2, 4, 5];
console.log(arrayExemplo2.find((item) => item == 3)); //retorna o primeiro item que atende a condição
if(arrayExemplo2.find((item) => item == 3)){
    console.log('tem 3');
}else{
    console.log('não tem 3');
}

