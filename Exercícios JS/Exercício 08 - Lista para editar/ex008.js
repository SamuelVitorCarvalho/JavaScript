let inputTask = document.getElementById('txt_task')
let res = document.getElementById('res')
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
    //tentativa 1
    // var taskName = document.getElementById('name')
    // var name = taskName.textContent

    // tentativa 2
    // var taskName = ed.parentElement.parentElement.textContent
    // console.log(taskName)
}