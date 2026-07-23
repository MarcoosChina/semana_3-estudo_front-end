//cria um array chamado alunos com 5 objetos. cada com um com as seguintes propriedades
//nome, turma, nota
//percorrer o array e validar se a nota do aluno é maior que 6
//se positivo incluir no objeto uma propriedade chamada aprovado com o valor true caso contrario false.

const alunos = [
    {nome: 'joão', turma: 'A', nota: 5},
    {nome: 'pedro', turma: 'B', nota: 1},
    {nome: 'ana', turma: 'C', nota: 10},
    {nome: 'rick', turma: 'D', nota: 6},
    {nome: 'mario', turma: 'E', nota: 8},
]
alunos.forEach(alunos => {
    if (alunos.nota > 6){
        alunos.aprovado = true;
    }else{
        alunos.aprovado = false;
    }
});

console.log(alunos);

//let celular = new Object();
//celular.modelo = '';
//celular['fabricante'] = '';