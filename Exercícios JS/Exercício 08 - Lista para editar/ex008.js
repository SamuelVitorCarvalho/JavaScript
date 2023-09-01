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
                <span class="material-symbols-outlined">close</span>
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

    newInput.setAttribute("class", 'editInput')
    elempai.insertBefore(newInput, elempai.firstChild) // o evento insertBefore serve para inserir o elemento antes de algum outro elemento, por exemplo, uma div
    newInput.value = titleTask
    ed.parentElement.parentElement.querySelector('p').remove()
}