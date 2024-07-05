const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['5511999999999', '5511976342957'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: ''
    }]
};


const chaves = Object.keys(estudante);
console.log(chaves);

const valores = Object.values(estudante);
console.log(valores);

const dados = Object.entries(estudante);
console.log(dados);


if (!chaves.includes('enderecos')){
    console.error("E necessario ter um endereco cadastrado");
}
