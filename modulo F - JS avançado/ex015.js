let num = [5, 8, 2, 9, 3]
num[2] = 4
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é o ${num[0]}`)

//Para mostrar todos os valores do vetor

for(var pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//Um "for" feito para array:

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Mostra a posição de um valor que vc quer 

var ind = num.indexOf(5)
console.log(`O valor está na posição ${ind}`)