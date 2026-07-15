let recebeFrase = "O rato roeu a roupa do rei de Roma"; // Frase a ser verificada
let recebePalavra = "rei";                              // Palavra a ser procurada na frase
if (recebeFrase.includes(recebePalavra)) {              // Verifica se a palavra está contida na frase
    console.log("Palavra encontrada!");                 // Caso a palavra esteja contida na frase
} else {
    console.log("Palavra não encontrada.");             // Caso a palavra não esteja contida na frase
}