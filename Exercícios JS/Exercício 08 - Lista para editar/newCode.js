// Declaração dos Objetos Gerais

let inputTask = document.getElementById('txt_task')
let res = document.getElementById('res')
var itens = []

// Função para adicionar uma nova tarefa

function adicionar() {
    let newTask = inputTask.value
    itens.push({task: newTask})
    res.innerHTML += `<div id="newTask">
        <input type="text" name="tarefa" id="taskName" value="${newTask}" readonly>
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

// Função pra editar a tarefa

function editTask(ed) {
    let newInput = ed.parentElement.parentElement.querySelector('input')
    let saveBut = ed.querySelector('span')

    if(newInput.readOnly == true) { //faz com que o input se torne editável
        newInput.readOnly = false
        saveBut.textContent = 'done'
        newInput.focus()
    } else {
        newInput.readOnly = true
        saveBut.textContent = 'edit'
        let newName = newInput.value
        console.log(newName) // atualizar o itens[]
    }
}

// Função para deletar a tarefa

function deleteTask(del) {
    del.parentElement.parentElement.remove()
}

// Preciso atualizar o novo valor da tarefa no "itens[]", preciso mudar o CSS do input de edição (deixar ele transparente e sem o cursor),