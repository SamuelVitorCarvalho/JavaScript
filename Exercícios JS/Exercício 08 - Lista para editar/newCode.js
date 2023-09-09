// Declaração dos variáveis Globais

let inputTask = document.getElementById('txt_task')
let res = document.getElementById('res')
var values = localStorage.getItem('Tarefas') // o localStorage trata todos os valores como string
var itens = []

// Colocar os valores que já estão no localStorage dentro do vetor itens[]
if (values != '') {
    itens = JSON.parse(values) // converte para vetor de objetos
}

// Chamo a função atualizar() para q as tarefas sejam exibidas na tela
atualizar()

// Função para adicionar uma nova tarefa a partir do botão "Enter"

inputTask.addEventListener("keypress", enter);

function enter(event) { // Serve para chamar a função adicionar() quando eu apertar a tecla "Enter"
    if (event.keyCode === 13) { // O "13" se refere ao código da tecla "Enter"
        adicionar()
}}

function adicionar() {
    let newTask = inputTask.value
    if (newTask.length == 0) {
        window.alert('Insira uma tarefa!')
    } else {
        itens.push({task: newTask})

        //chama a função 
        atualizar()
    }

    inputTask.value = ''
    inputTask.focus()
}

function atualizar () { // Serve para criar os "res" a aprtir do itens[]

    // Esvaziar todo o conteudo da section#res
    res.innerHTML = ''

    // Criar um input para cada objeto que está em itens (por meio de um for)
    for (i in itens) {
        res.innerHTML += `<div id="newTask${i}" class="newTask">
            <input type="text" name="tarefa" id="taskName" value="${itens[i].task}" readonly>
            <div id="deledit">
                <div id="editTask" onclick="editTask(this)">
                    <span class="material-symbols-outlined">edit</span>
                </div>
                <div id="deleteTask" onclick="deleteTask(this)">
                    <span class="material-symbols-outlined">delete</span>
                </div>
            </div>
        </div>`
    }

    // Colocar os novos valores de itens[] dentro do localStorage
    localStorage.setItem('Tarefas', JSON.stringify(itens)) // converte o itens[] em uma string para q a função setItem reconheça
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
        let index = ed.parentElement.parentElement.id //pega o "id" do elemento inteiro
        let num = index.replace(/[^0-9]/g, '')
        itens[num].task = newName
        atualizar()
    }
}

// Função para deletar a tarefa

function deleteTask(del) {
    let index = del.parentElement.parentElement.id //pega o "id" do elemento inteiro
    let num = index.replace(/[^0-9]/g, '') // aqui pega so o numero do id, ou seja,a posição q ele ocupa no itens[]
    itens.splice(num, 1) // aqui exclui o elemento do objeto
    atualizar()
}

/*
var vetor = [
    {
    vet: [0,1,2,3,4]
},
{
    task: '1',
    n: [{
        nu: 'r'
    }]
}

]

console.log(vetor[1].n[0].nu)
*/

//session storage e local storage
// call back e função recursiva
// filter e map e find e .recuse no vetor