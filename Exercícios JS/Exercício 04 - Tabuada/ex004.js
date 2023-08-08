function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // isso limpa a tabuada antes de fazer outra
        while (c <= 10) {
            let item = document.createElement('option') // cria um option
            item.text = `${n} x ${c} = ${n*c}` // aqui cria uma linha no selection
            item.value = `tab${c}` // vai ser útil em outras linguagens (mostra qual linha do selection está selecionada)
            item.addEventListener('click', function() { //aqui eu crio uma função com o parâmetro click
                console.log(this.value)
            })
            tab.appendChild(item) // adiciona um option dentro do selection
            c++
        }
    }   
}
// tabuada() --> Assim eu chamo a função dentro do JS 