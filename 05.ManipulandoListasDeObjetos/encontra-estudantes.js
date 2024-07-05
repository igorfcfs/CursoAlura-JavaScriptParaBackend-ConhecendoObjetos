const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor){
    //return lista.find(estudante => estudante[chave] === valor);
    return lista.find(estudante => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Olva')
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '5896279799'); // o telefone esta dntro de uma array, para nao dar undefined usamos a funcao includes()
console.log(telefoneEstudante);