const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999999', '5511976342957'],
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

function exibirTelefones(tel1, tel2){
    console.log(`ligar para ${tel1}`);
    console.log(`ligar para ${tel2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

//spread operator: montar um objeto a partir de outro
const dadosEnvio = {
    destinatario: estudante.nome,
    //endereco: estudante.enderecos[0],
    //rua: estudante.enderecos[0].rua,
    //numero: estudante.enderecos[0].numero
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);