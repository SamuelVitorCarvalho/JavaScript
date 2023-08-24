let text = document.getElementById('text')
let button = document.getElementById('button')
let circle = document.getElementById('circle')
let lowercase = text.value.toLowerCase(text)

function changeColor() {
    if (text.value.length == 0) {
        window.alert('Please provide a color name!')
    } else if (text.value == 'Blue' || text.value == 'blue') {
        document.getElementById('circle').style.background = 'blue'
    } else if (text.value == 'Red' || text.value == 'red') {
        document.getElementById('circle').style.background = 'red'
    } else if (text.value == 'Orange' || text.value == 'orange') {
        document.getElementById('circle').style.background = 'orange'
    } else if (text.value == 'White' || text.value == 'white') {
        document.getElementById('circle').style.background = 'white'
    }
    text.value = ''
    text.focus()
}