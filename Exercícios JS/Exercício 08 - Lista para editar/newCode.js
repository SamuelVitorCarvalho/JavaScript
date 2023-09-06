// Declaração dos Objetos Gerais

let inputTask = document.getElementById('txt_task')
let res = document.getElementById('res')
var itens = []

// Função para adicionar uma nova tarefa

function adicionar() {
    let newTask = inputTask.value
    itens.push({task: newTask})

    //colocar o valor dentro do storage do navegador
   

    //chama a função 
    atualizar()

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

//session storege e local storage