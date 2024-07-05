//import estudante from './estudante.json'

const estudante = require('./estudante.json');

console.log(estudante);
console.log(typeof estudante);
console.log(estudante.nome);


const chaves = Object.keys(estudante);
console.log(chaves);