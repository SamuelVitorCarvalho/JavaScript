const res = document.getElementById('res')
let but = document.getElementById('remove')
var t = 0
var i = 0
var itens = []

var vetor = [
    'Clean House',
    'Clean PC',
    'Washe dishes',
    'Buy coffe',
]

function adicionar() {
    var texto = `${vetor[t]}`
    res.innerHTML += `<p id="p_task${itens.length}">${texto} <button id="remove" onclick="remove(this)">ok</button></p>` // o "this" serve para pegar o elemento HTML como parâmetro
    t++
    if(t == vetor.length){
        t = 0
    }
    itens.push(i)
    i++
}

function remove(d) {
    console.log(d)
    d.parentElement.remove() //Parent é o pai do elemento, no caso o pai do botão é o parágrefo
    i--
}


// CRUD -> Estudar