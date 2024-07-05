const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

delete objPersonagem.aliado
delete objPersonagem["status"]
 
console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined


const objPersonagem2 = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
}

   
const delProp = delete objPersonagem2.aliado
const delPropInexistente = delete objPersonagem2["endereco"]
 
console.log(delProp) //true
console.log(delPropInexistente) //true

