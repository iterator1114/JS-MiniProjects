/*
    Learning:  Basics Of DOM and DOM Manipulation

    Implementation Steps
    1. when there is no o/p then it shows No Number...
    2. whether guess input is low, high or correct.
    4. Style change in case of Correct o/p.
    3. Implementation of current score (decrease from 20)
    4. When Current Score is less than 0️
    5. Again feature
    6. Implementation of highScore.
    7. Code Optimization
*/

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    if (!guess) {
        displayMessage('No Number...')
    }
    else if (guess === secretNumber) {
        displayMessage('Correct Number...')
        document.querySelector(".number").textContent = guess;
        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = '30rem';
        document.querySelector(".score").textContent = score;
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }

    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess < secretNumber ? 'Too low...' : 'Too high...')
            score -= 1;
            document.querySelector(".score").textContent = score;
        }
        else {
            displayMessage('You lost the Game...');
            document.querySelector(".score").textContent = 0;
        }
    }
})

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

