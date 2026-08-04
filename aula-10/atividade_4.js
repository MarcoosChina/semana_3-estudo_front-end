function listarParticipantes(...nomes){
    nomes.forEach(nome => console.log(nome));
    return nomes.length;
}
let totalParticipantes = listarParticipantes('ana', 'adão','breno','adelaide');
console.log('Quantidade:', totalParticipantes); //sempre ver o último return na função

// function listarParticipantes(...nomes) {
//   nomes.forEach((nome) => {
//     console.log(nome);
//   });

//   return ("Quantidade de participantes: " + nomes.length);
// }

// console.log("Nomes:",listarParticipantes("Ana", "Pedro", "João", "Maria"));