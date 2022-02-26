'use strict';

const secretNumber = Math.trunc(Math.random()*20) +1
let updateScore = 20

document.querySelector('.check').addEventListener('click', function(){
    const guess = (Number)(document.querySelector('.guess').value)

    if(!guess){
        document.querySelector('.message').textContent = "You forgot to enter a number"
    }
    else if(guess==secretNumber){
        document.querySelector('.message').textContent = "Correct Number!"
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = "#60b347"

        document.querySelector('.number').style.width = "30rem"
    }
    else if(guess>secretNumber){
        if(updateScore>1)
        {
            document.querySelector('.message').textContent = "Too High"
            updateScore--
            document.querySelector('.score').textContent = updateScore
        }
        else{
            document.querySelector('.message').textContent = "You lost the game!"
            document.querySelector('.score').textContent = 0
        }
    }
    else if (guess<secretNumber){
        if(updateScore>1)
        {
            document.querySelector('.message').textContent = "Too Low"
            updateScore--
            document.querySelector('.score').textContent = updateScore
        }
        else{
            document.querySelector('.message').textContent = "You lost the game!"
            document.querySelector('.score').textContent = 0
        }
    }
}
)
