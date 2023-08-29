const res = document.getElementById('res')
let but = document.getElementById('remove')
var t = 0
var i = 0
var itens = []

var vetor = [
    'Clean House',
    'Clean PC',
    'Washe dishes',
]

function adicionar() {
    var texto = `${vetor[t]}`
    res.innerHTML += `<p id="p_task${itens.length}">${texto} <button id="remove" onclick="remove(${itens.length})">ok</button></p>`
    t++
    if(t == 3){
        t = 0
    }
    itens.push(i)
    i++
}

function remove(d) {
    var del = document.getElementById(`p_task${d}`)
    del.remove()
    i--
}