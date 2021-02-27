// Selecionando os elementos input e input botoes
const inputDisplay = document.querySelector('input')
const botoes = document.querySelectorAll('.button-calc input')
let somaTotal = [0, 0]
let operador = ''

// Funcao verifica se o valor do input nao e um numero(e um NaN mas esta negando)
function colocaInput(valor) {
    if(!isNaN(valor.target.value)) {
        inputDisplay.value += valor.target.value
    }
    else if(valor.target.value === '+' || '-' || 'X' || '/' || 'C' || '=') {
        verificaTecla(valor)
    }
}

// Funcao verifica qual tecla apertei e coloca o primeiro numero no array
// de duas posicoes
function verificaTecla(tecla) {
    if(tecla.target.value === '+') {
        somaTotal[0] = parseFloat(inputDisplay.value)
        operador = tecla.target.value
        limpaInput()
        tecla.target.classList.add('ativo')
    }
    else if(tecla.target.value === '-') {
        somaTotal[0] = parseFloat(inputDisplay.value)
        operador = tecla.target.value
        limpaInput()
        tecla.target.classList.add('ativo')
    }
    else if(tecla.target.value === 'X') {
        somaTotal[0] = parseFloat(inputDisplay.value)
        operador = tecla.target.value
        limpaInput()
        tecla.target.classList.add('ativo')
    }
    else if(tecla.target.value === '/') {
        somaTotal[0] = parseFloat(inputDisplay.value)
        operador = tecla.target.value
        limpaInput()
        tecla.target.classList.add('ativo')
    }
    else if(tecla.target.value === 'C') {
        limpaInput()
        somaTotal = [null, null]
    }
    else {
        if(parseInt(inputDisplay.value)) {
            somaTotal[1] = parseFloat(inputDisplay.value)
            limpaInput()
            calcula()
            botoes.forEach((botao) => {
                botao.classList.remove('ativo')
            })
        }
        else {
            alert('Digite um numero valido!')
        }

    }
}

// Funcao limpa input
function limpaInput() {
    inputDisplay.value = null
}

// Funcao verifica operador e calcula
function calcula() {
    if(operador === '+') {
        inputDisplay.value = somaDoisNum(somaTotal[0], somaTotal[1])
    }
    else if(operador === '-') {
        inputDisplay.value = subtraiDoisNum(somaTotal[0], somaTotal[1])
    }
    else if(operador === 'X') {
        inputDisplay.value = multiplicaDoisNum(somaTotal[0], somaTotal[1])
    }
    else {
        inputDisplay.value = divideDoisNum(somaTotal[0], somaTotal[1])
    }
}

// Funcoes de calculo
function somaDoisNum(soma1, soma2) {
    return soma1 + soma2
}

function subtraiDoisNum(subtrai1, subtrai2) {
    return subtrai1 - subtrai2
}

function multiplicaDoisNum(multiplica1, multiplica2) {
    return multiplica1 * multiplica2
}

function divideDoisNum(divide1, divide2) {
    return divide1 / divide2   
}

// Adiciona o evento click a todos os botoes
botoes.forEach((inputBotoes) => {
    inputBotoes.addEventListener('click', colocaInput)
})