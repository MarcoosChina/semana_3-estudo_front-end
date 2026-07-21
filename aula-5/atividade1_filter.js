const filmes = [
  {
    titulo: "Interestelar",
    genero: "Ficção",
    nota: 9.5,
    disponivel: true
  },
  {
    titulo: "Toy Story",
    genero: "Animação",
    nota: 8.7,
    disponivel: true
  },
  {
    titulo: "Velozes e Furiosos",
    genero: "Ação",
    nota: 7.2,
    disponivel: false
  },
  {
    titulo: "O Poderoso Chefão",
    genero: "Drama",
    nota: 9.8,
    disponivel: true
  },
  {
    titulo: "Divertida Mente",
    genero: "Animação",
    nota: 8.9,
    disponivel: false
  }];

//criar um script com .filter() para:
//TODO1-exibir no console apenas os filmes disponíveis

const filmesD = filmes.filter(filme => filme.disponivel === true);
console.log('Filmes disponíveis: ', filmesD);

//TODO2-exibir no console com a nota maior que 9 

const filmeBons = filmes.filter(filme => filme.nota >= 9);
console.log('Filmes bem avaliados: ', filmeBons);

//TODO3-criar um novo array contendo apenas filmes de ação

const filmesAcao = filmes.filter(filme => filme.genero === 'Ação');
console.log('Filmes de ação: ',filmesAcao);