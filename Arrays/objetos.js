var obj = { // Como cria um objeto
    nome: "Matheus", // Sempre separa por vígula, e para fazer uma propriedade usa-se ":"
    idade: 29,
    profissao: "Programador",
    estaTrabalhando: true,
}

console.log(obj)
console.log(typeof obj)

console.log(obj.nome)
console.log(obj.idade)
console.log(obj.profissao)

console.log("O meu nome é " + obj.nome) // Com concatenação
console.log(`O meu nome é ${obj.nome}`) // Com ``

obj.nome = "Pedro" // atribuição de um valor novo
console.log('O meu nome é ' + obj.nome)
console.log(obj)

obj.estado = "MG" // adicionar uma propriedade nova ao objeto
console.log(obj)


