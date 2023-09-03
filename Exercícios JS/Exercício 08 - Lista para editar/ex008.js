let inputTask = document.getElementById('txt_task')
let res = document.getElementById('res')
let oldInput;
var itens = []

function adicionar() {
    var taskName = inputTask.value
    itens.push({task: taskName})
    console.log(itens)
    res.innerHTML += `<div id="newTask"><p id="name">${taskName}</p>
        <div id="deledit">
            <div id="editTask" onclick="editTask(this)">
                <span class="material-symbols-outlined">edit</span>
            </div>
            <div id="deleteTask" onclick="deleteTask(this)">
                <span class="material-symbols-outlined">delete</span>
            </div>
        </div>
    </div>`
    inputTask.value = ''
    inputTask.focus()
}

function deleteTask(del) {
    del.parentElement.parentElement.remove()
}

function editTask(ed) {
    var titleTask = ed.parentElement.parentElement.querySelector('p').textContent
    let elempai = ed.parentElement.parentElement.querySelector('div')
    let newInput = document.createElement('input')
    let editButton = document.getElementById('editTask')
    let removeButton = document.getElementById('deleteTask')
    let saveCancel = document.createElement('div')
    let buttons = document.createElement('span')

    newInput.setAttribute("class", 'editInput')
    saveCancel.setAttribute("class", 'saveCancel')
    buttons.setAttribute("class", 'buttons')

    buttons.innerHTML += `<span class="material-symbols-outlined">done</span> <span class="material-symbols-outlined">close</span>`  
    saveCancel.appendChild(buttons)

    elempai.insertBefore(newInput, elempai.firstChild) // o evento insertBefore serve para inserir o elemento antes de algum outro elemento, por exemplo, uma div
    newInput.value = titleTask
    ed.parentElement.parentElement.querySelector('p').remove()
    editButton.remove()
    removeButton.remove()
    elempai.insertBefore(saveCancel, elempai.secondChild)
}