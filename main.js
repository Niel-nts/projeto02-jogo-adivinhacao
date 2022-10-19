const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber= Math.round(Math.random()*10)
let xAttemps = 1
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")

//Eventos 
btnTry.addEventListener('click', checkInput)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyDownEvent)

//Funções callback
function checkInput(event){
    event.preventDefault() //necessário para que a página não seja recarregada! Isso ocorre por que o padrão do "form" no html é enviar o formulário!
    if ((inputNumber.value=="" && not(screen1.classList.contains('hide'))) || Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || (!Number(inputNumber.value) && Number(inputNumber.value)!=0)){
        alert("Por favor, insira um número válido de 0 a 10")
        inputNumber.focus()
        inputNumber.value = ""

    } else if (screen2.classList.contains('hide')){
        handleTryClick() 
    }  
}

function handleTryClick(){
    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttemps} tentativas`
    } else {
        xAttemps++    
    }
    inputNumber.value = "" //torna a caixa de preenchimento vazia para a próxima tentativa
    inputNumber.focus()
}

function handleResetClick(){
    toggleScreen()
    xAttemps = 1
    randomNumber= Math.round(Math.random()*10)
    inputNumber.focus()
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

