let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

[a, b, c, d]

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // se o num ou n estiver em alguma posição da lista retorna a posição dele, caso contrário, ele retorna -1 fazendo com que a condição != seja false
        return true
    } else {
        return false
    }

    /*
    for (i in valores) {
        valor = valores[i]

        if (valor == n)
            return true
    }

    return false
    */
 }

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou valor já encontrado na lista!')
    }
    num.value = '' // limpa o input
    num.focus() // é como se eu clicasse lá no input de novo
}

function finalizar() {
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maoir valor é o ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é o ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores informados resulta em ${soma}.</p>`
        res.innerHTML += `<p>A media de todos os valores informados resulta em ${media}.</p>`
    }
}