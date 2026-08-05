function paraMaiusculas(texto) {
  return texto.toUpperCase();
}

function paraMinusculas(texto) {
  return texto.toLowerCase();
}

function processarMensagem(mensagem, callback){
  // ----------- //
  return callback(mensagem);
}

console.log(processarMensagem('TeXto TeStE', paraMaiusculas));
console.log(processarMensagem('TeXto TeStE', paraMinusculas));