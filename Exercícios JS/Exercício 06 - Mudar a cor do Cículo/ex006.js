let text = document.getElementById('text')
let button = document.getElementById('button')
let circle = document.getElementById('circle')

function changeColor() {
    if (text.value.length == 0) {
        window.alert('Please provide a color name!')
    } else if (text.value == 'Blue') {
        document.getElementById('circle').style.background = 'blue'
    } else if (text.value == 'Red') {
        document.getElementById('circle').style.background = 'red'
    } else if (text.value == 'Orange') {
        document.getElementById('circle').style.background = 'orange'
    } else if (text.value == 'White') {
        document.getElementById('circle').style.background = 'white'
    }
}