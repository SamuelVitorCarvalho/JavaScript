let text = document.getElementById('text')
let button = document.getElementById('button')
let circle = document.getElementById('circle')

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

const colors = {
    color1: "blue",
    color2: "red",
    color3: "orange",
    color4: "white"
}

function changeColor() {
    if (text.value.length == 0) {
        window.alert('Please provide a color name!')
    } else if (Object.values(colors).includes(text)) {
        document.getElementById('circle').style.background = text
    } else {
        window.alert('Color invalid!')
    }
}