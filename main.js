const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber= Math.round(Math.random()*10)
let xAttemps = 1
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

//Eventos 
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyDownEvent)

//Funções callback
function handleTryClick(event){
    event.preventDefault() //necessário para que a página não seja recarregada! Isso ocorre por que o padrão do "form" no html é enviar o formulário!
    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || (!Number(inputNumber.value) && Number(inputNumber.value)!=0)) {
        alert("Por favor insira um número de 0 a 10!")        
    } 

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttemps} tentativas`
    }

    

    inputNumber.value = "" //torna a caixa de preenchimento vazia para a próxima tentativa
    xAttemps++    
}

function handleResetClick(){
    toggleScreen()
    xAttemps = 1
    let randomNumber= Math.round(Math.random()*10)
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function keyDownEvent(e){
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}

