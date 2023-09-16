/* 
    O que o programa irá fazer?

    1. Adicionar novos produtos na home - OK!
    2. Registrar esses produtos na página de registro (colocar atraves do localStorage) - 
    3. Fazer a somatória dos preços e a contagem dos produtos registrados - 
    4. Ter a possibilidade de editar, criar ou deletar um produto atráves da tela de criação de um novo produto (CRUD) - 
*/

// Variáveis Globais

// Botões e inputs
const buttonAdd = document.getElementById('button-add')
const buttonDel = document.getElementById('button-del')
const inputPhoto = document.getElementById('uploadPhoto')
const inputName = document.getElementById('inputName')
const inputPrice = document.getElementById('inputPrice')
const buttonSave = document.getElementById('finish')

// Div's de resposta
let productShow = document.getElementById('item') // index
let productRegister = document.getElementById('itemRegister') // página de produtos cadastrados

// Arrays e localStorage
values = localStorage.getItem('Itens')
valuesProductsRegistred = localStorage.getItem('Itens Cadastrados')
let products = []
let productsRegistred = []

if(values) {
    products = JSON.parse(values)
}

if(valuesProductsRegistred) {
    productsRegistred = JSON.parse(valuesProductsRegistred)
}

// Função para add um novo produto
function addProduct() {
    // foto escolhida aqui
    let productName = inputName.value
    let productPrice = Number(inputPrice.value)
    products.push({name: productName, price: productPrice})
    localStorage.setItem('Itens', JSON.stringify(products))
    inputName.value = ''
    inputPrice.value = ''
}

// Função de atualizar
function atualizar() {
    productShow.innerHTML = ''
    for(i = 0; i < products.length; i++) {
        productShow.innerHTML += `<div id="newProduct${i}" class="newProduct">
                <div class="description">
                    <img src="" alt="product img">
                </div>
                <div class="description">
                    ${products[i].name}
                </div>
                <div class="description">
                    ${products[i].price}
                </div>
                <div id="add-del">
                    <span class="material-symbols-outlined" id="button-add" onclick="buttonAddToRegister(this)">add</span>
                    <span class="material-symbols-outlined" id="button-del" onclick="delProduct(this)">delete</span>
                </div>
            </div>`
    }
    localStorage.setItem('Itens', JSON.stringify(products))
}

function buttonAddToRegister(batr) { // ao clicar no botao adicionar
    let divButton = batr.parentElement.parentElement.id
    let numDiv = divButton.replace(/[^0-9]/g, '')
    productsRegistred.push({name: products[numDiv].name, price: products[numDiv].price})
    localStorage.setItem('Itens Cadastrados', JSON.stringify(productsRegistred))
}

function atualizarProductsRegistred() {
    productRegister.innerHTML = ''

    for(i = 0; i < productsRegistred.length; i++) {
        productRegister.innerHTML += `<div id="newProduct${i}" class="newProduct">
                <div class="description">
                    <img src="" alt="product img">
                </div>
                <div class="description">
                    <input type="text" name="inputNewName" id="inputNewName" value="${productsRegistred[i].name}" readonly>
                </div>
                <div class="description">
                    <input type="number" name="inputNewPrice" id="inputNewPrice" value="${productsRegistred[i].price}" readonly>
                </div>
                <div id="add-del">
                    <span class="material-symbols-outlined" id="button-edit" onclick="editProduct(this)">edit</span>
                    <span class="material-symbols-outlined" id="button-del" onclick="delProductCadastred(this)">delete</span>
                </div>
            </div>`
    }
    localStorage.setItem('Itens Cadastrados', JSON.stringify(productsRegistred))
}

// Função de deletar para o index
function delProduct(d) {
    let del = d.parentElement.parentElement.id
    let num = del.replace(/[^0-9]/g, '')
    products.splice(num, 1)
    atualizar()
}

// Função de deletar para o pageCadesterProduct
function delProductCadastred(d) {
    let del = d.parentElement.parentElement.id
    let num = del.replace(/[^0-9]/g, '')
    productsRegistred.splice(num, 1)
    atualizarProductsRegistred()
}

// Função de editar nome e preço
function editProduct(ed) {
    newInputName = ed.parentElement.parentElement.querySelector('input#inputNewName')
    newInputPrice = ed.parentElement.parentElement.querySelector('input#inputNewPrice')
    saveBut = ed.parentElement.querySelector('span')
    
    if(newInputName.readOnly == true) {
        newInputName.readOnly = false
        newInputPrice.readOnly = false
        saveBut.textContent = 'done'
        newInputName.focus()
    } else {
        newInputName.readOnly = true
        saveBut.textContent = 'edit'
        let newName = newInputName.value
        let newPrice = newInputPrice.value
        let edit = ed.parentElement.parentElement.id
        let num = edit.replace(/[^0-9]/g, '')
        productsRegistred[num].name = newName
        productsRegistred[num].price = newPrice
        atualizarProductsRegistred()
    }
}