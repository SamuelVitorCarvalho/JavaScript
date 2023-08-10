// Função com retorno
// Programa q verifica se um número é par ou ímpar

function parimp(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimp(10)

console.log(res)

// Ou sem usar variavel: console.log(parimp(10))