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
let products = []

if(values) {
    products = JSON.parse(values)
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
    for(i = 0; i < products.length; i++) {
        productShow.innerHTML += `<div class="newProduct">
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
                    <span class="material-symbols-outlined" id="button-add" onclick="buttonAddToRegister()">add</span>
                    <span class="material-symbols-outlined" id="button-del" onclick="buttonDel()">delete</span>
                </div>
            </div>`
    }
}

function atualizarProductsRegistred() {
    // ao clicar no botao adicionar
}
// Função de deletar 


// Função de editar