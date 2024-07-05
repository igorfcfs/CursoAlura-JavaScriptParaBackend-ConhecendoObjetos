const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o cep a ser buscado: ', (cep) => {
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  axios.get(url)
  .then(response => {
    const obj = response.data;
    console.log(obj);
  })
  .catch(error => {
    console.error('Erro: ' + error.message);
  }
);
  rl.close();
});
