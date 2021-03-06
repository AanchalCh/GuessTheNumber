'use strict';

let secretNumber = Math.trunc(Math.random()*20) +1
let updateScore = 20
let updateHighScore = 0

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = (Number)(document.querySelector('.guess').value)

    if(!guess){
        displayMessage("You forgot to enter a number")
    }
    else if(guess==secretNumber){
        displayMessage("Correct Number!")
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = "#60b347"

        document.querySelector('.number').style.width = "30rem"

        updateHighScore = Math.max(updateHighScore, updateScore)
        document.querySelector('.highscore').textContent = updateHighScore
    }

    else if(guess!=secretNumber){
        if(updateScore>1)
        {
            displayMessage(guess < secretNumber ? "Too Low" : "Too High")
            updateScore--
            document.querySelector('.score').textContent = updateScore
        }
        else{
            displayMessage("You lost the game!")
            document.querySelector('.score').textContent = 0
        }
    }
})
//     else if(guess>secretNumber){
//         if(updateScore>1)
//         {
//             document.querySelector('.message').textContent = "Too High"
//             updateScore--
//             document.querySelector('.score').textContent = updateScore
//         }
//         else{
//             document.querySelector('.message').textContent = "You lost the game!"
//             document.querySelector('.score').textContent = 0
//         }
//     }
//     else if (guess<secretNumber){
//         if(updateScore>1)
//         {
//             document.querySelector('.message').textContent = "Too Low"
//             updateScore--
//             document.querySelector('.score').textContent = updateScore
//         }
//         else{
//             document.querySelector('.message').textContent = "You lost the game!"
//             document.querySelector('.score').textContent = 0
//         }
//     }
// })

document.querySelector('.again').addEventListener('click', function () {
    updateScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = updateScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
