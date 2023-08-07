function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // pega o ano atual
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) { // pq o length?
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img') //Aqui cria uma tag img
        img.setAttribute('id', 'foto') // Pra que serve e como usa?
        if (fsex[0].checked) { // se o seletor 0 (masculino) estiver marcado, então faça
            gênero = 'Homem'
            if (idade > 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/bebe-h.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'imagens/jovem-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-h.png')
            }   
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade > 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'imagens/adulta-m.png')
            } else {
                //idosa
                img.setAttribute('src', 'imagens/idosa-m.png')
            }  
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //adiciona um elemento abaixo (filho)
    }
}