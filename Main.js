let randomNumber = Math.floor(Math.random() *100)
let tries = 0
//console.log(randomNumber)


function checkGuess(){

    let guess = document.getElementById("guess").value
    let message = document.getElementById('message')
    tries++

    if  (guess ==  randomNumber){

       message.innerHTML = 'Voce acertou o numero, com ' + tries + 'Tentativas'  

    }
    else if (guess < randomNumber){

        message.innerHTML = 'Valor acima do escolhido'  

    }
    else {

        message.innerHTML = 'Valor abaixo  do escolhido'  

    }

}

