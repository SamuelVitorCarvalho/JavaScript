// Declaração das variáveis gerais

let text = document.getElementById('text')
let button = document.getElementById('button')
let circle = document.getElementById('circle')

// Código sem usar Objetos 

/*
function changeColor() {
    let color = text.value.toLowerCase()
    if (text.value.length == 0) {
        window.alert('Please provide a color name!')
    } else if (color == 'blue') {
        document.getElementById('circle').style.background = 'blue'
    } else if (color == 'red') {
        document.getElementById('circle').style.background = 'red'
    } else if (color == 'orange') {
        document.getElementById('circle').style.background = 'orange'
    } else if (color == 'white') {
        document.getElementById('circle').style.background = 'white'
    }
    text.value = ''
    text.focus()
}
*/

// Código usando o Objetos

const colors = {
    color1: "blue",
    color2: "red",
    color3: "orange",
    color4: "white"
}

function setColor(c) {
    for(i in colors) {
        var color = colors[i]

        if(color == c) {
            return true
        }
    }
    return false
}

function changeColor() {
    let colorValue = text.value.toLowerCase()
    if (text.value.length == 0) {
        window.alert('Please provide a color name!')
    } else if (setColor(colorValue)) {
        document.getElementById('circle').style.background = colorValue
    } else {
        window.alert('Please enter a valid color')
    }
    text.value = ''
    text.focus()
    console.log(colorValue)
}