const prompt = required('prompt-sync')();
let senha;
do {
     senha = prompt('Digite uma senha: ');
     console.log(" Senha inválida")
    } while (senha!='1234');

    console.log("Senha válida!");