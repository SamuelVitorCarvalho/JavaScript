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
            let item = document.createElement('option') // cria um option (como ele sabe q é pra criar dentro do selection, e se eu tivesse mais de um?)
            item.text = `${n} x ${c} = ${n*c}` // aqui cria uma linha no selection
            item.value = `tab${c}` // vai ser útil em outras linguagens (mostra qual linha do selection está selecionada)
            tab.appendChild(item) // mostra o item
            c++
        }
    }   
}