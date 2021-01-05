'use strict';

// GAME VARIABLES
let correctAnswer = 0;
let highScore = 0;
let currentScore = 20;



// AUXILIARY FUNCTIONS
const updateMsg = function (newText) {
    document.querySelector('.message').textContent = newText
}

const winningCSS = function() {
    document.body.classList.add('winningBody')
}

const resetGame = function () {
    document.body.classList.remove('winningBody');
    correctAnswer = Math.floor(Math.random() * 20) + 1;
    currentScore = 20;
    document.querySelector('.score').textContent = currentScore
    updateMsg('Start guessing...')
    document.querySelector('.guess').value = ""
}

const setCurrentScore = function() {
    currentScore > 0 ? currentScore-- : currentScore = 0
    document.querySelector('.score').textContent = currentScore
}

const updateHighScore = function() {
    currentScore > highScore ? highScore = currentScore : highScore = highScore
    document.querySelector('.highscore').textContent = highScore
}




const checkGuess = function() {
    let guess = document.querySelector('.guess').value

    if(!guess) {
        updateMsg('Not a valid guess! :(')
    } else if(guess == correctAnswer) {
        updateMsg('YOU WIN! :)');
        winningCSS();
        updateHighScore();
    } else if(guess > correctAnswer) {
        updateMsg('Too High...')
        setCurrentScore()
    } else if(guess < correctAnswer) {
        updateMsg('Too Low...')
        setCurrentScore()
    }
    else {
        updateMsg('Unhandled Exception :?')
    }
}



resetGame()


// BINDINGS TO DOM
document.querySelector('.check').addEventListener('click', checkGuess)
document.querySelector('.again').addEventListener('click', resetGame)










// document.querySelector('.check').addEventListener('click', generateNewNumber)



