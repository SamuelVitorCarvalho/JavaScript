/* 
    O que o programa irá fazer?

    1. Adicionar novos produtos na home
    2. Registrar esses produtos na página de registro (colocar atraves do localStorage)
    3. Fazer a somatória dos preços e a contagem dos produtos registrados
    4. Ter a possibilidade de editar, criar ou deletar um produto atráves da tela de criação de um novo produto (CRUD)
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
let products = []

// Função para add um novo produto
function addProduct() {
    // foto escolhida aqui
    let productName = inputName.value
    let productPrice = Number(inputPrice.value)

    
}

// Função de atualizar


// Função de deletar 


// Função de editar