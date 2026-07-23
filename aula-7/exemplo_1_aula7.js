let filme = {
  titulo: '',
  dataLancamento: '',
  estudio: '',
  diretor: '',
  atores: [
    'ator1',
    'ator2'
  ],
};

filme.genero = '';

console.log('Obj Filme: ', filme);
console.log('Typo Obj Filme: ', typeof(filme));

let pessoa = {
  nome: '',
  dataNascimento: '',
  //...
  endereco: {
    rua: '',
    numero: 0,
    cep: ''
  }
}

console.log('Obj Pessoa: ', pessoa);

delete pessoa.endereco;

console.log('Obj Pessoa: ', pessoa);

let celular = new Object();

celular.modelo = '';
celular['fabricante'] = '';

console.log('Obj Celular: ', celular);

//delete celular.fabricante;
delete celular['fabricante'];

console.log('Obj Celular: ', celular);