const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['5511999999999', '5511976342957'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
};

console.log(estudante.endereco);
console.log(estudante.endereco[0]);

estudante.endereco.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: ''
});


console.log(estudante.endereco);
console.log(estudante.endereco[0]);


const listaDeEstudantesComEndereco = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaDeEstudantesComEndereco);