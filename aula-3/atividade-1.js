let letra = 'A';
switch (letra.toUpperCase()) {     // 'toUpperCase()' is used to ensure the letter is uppercase for comparison
                                // ' toOverCase()' é usado para garantir que a letra seja maiúscula para comparação
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log("Vogal");
        break;
    default:
        console.log("Consoante");   // console.log(`A letra ${letra} é uma consoante`); Manipulação de string com template literals
}