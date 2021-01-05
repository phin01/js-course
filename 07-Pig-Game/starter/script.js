'use strict';

// HTML ELEMENTS
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
const diceImg = document.querySelector('.dice')

let activeBox = document.querySelector('.player--0')
let inactiveBox = document.querySelector('.player--1')

let activeScore = document.querySelector('#score--0')
let activeCurrent = document.querySelector('#current--0')



// GAME VARIABLES
let activePlayer = 0
let inactivePlayer = 1



const switchPlayer = function() {
    activePlayer == 0  ? [activePlayer, inactivePlayer] = [1, 0] : [activePlayer, inactivePlayer] = [0, 1]
   
    activeBox = document.querySelector('.player--' + activePlayer.toString())
    inactiveBox = document.querySelector('.player--' + inactivePlayer.toString())

    activeScore = document.querySelector('#score--' + activePlayer.toString())
    activeCurrent = document.querySelector('#current--' + activePlayer.toString())

    activeBox.classList.add('player--active')
    inactiveBox.classList.remove('player--active')
}


const resetGame = function () {
    document.querySelector('#score--0').textContent = 0
    document.querySelector('#score--1').textContent = 0
    document.querySelector('#current--0').textContent = 0
    document.querySelector('#current--1').textContent = 0
    activePlayer = 1
    switchPlayer()
}

const rollDice = function () {
    let roll = Math.floor(Math.random() * 6) + 1;
    diceImg.src = 'dice-' + roll.toString() + '.png'
    if(roll == 1) {
        activeCurrent.textContent = 0
        switchPlayer()
    } else {
        activeCurrent.textContent = Number(activeCurrent.textContent) + roll
    }
}

const holdPosition = function() {
    let totalScore = Number(activeScore.textContent) + Number(activeCurrent.textContent)
    if(totalScore >=30) {
        resetGame()
        alert('Game over! You win!')
    } else {
        activeScore.textContent = totalScore
    }

    activeCurrent.textContent = 0
    switchPlayer()
}




btnHold.addEventListener('click', holdPosition)
btnNew.addEventListener('click', resetGame)
btnRoll.addEventListener('click', rollDice)

resetGame()
