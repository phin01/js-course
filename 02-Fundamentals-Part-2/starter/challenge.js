'use strict'

// CODING CHALLENGE 1
/*
const avgScore = (score1, score2, score3) => (score1 + score2 + score3) / 3

const avgDolphins = avgScore(85, 54, 41)
const avgKoalas = avgScore(23, 37, 27)

function checkWinner(avgDolphins, avgKoalas) {
    const winner, winnerScore, loserScore = avgDolphins > avgKoalas ? "Dolphins" : "Koalas"
    const validWin = avgDolphins > avgKoalas * 2 || avgKoalas > avgDolphins * 2

    if (validWin) {
        let winnerScore;
        let loserScore;

        switch (winner) {
            case 'Dolphins':
                winnerScore = avgDolphins;
                loserScore = avgKoalas;
                break;
            default:
                winnerScore = avgKoalas;
                loserScore = avgDolphins;
                break;
        }
        console.log(`${winner} wins! (${winnerScore} - ${loserScore})`)
    } else {
        console.log(`Victory did not meet requirements :( (Koalas: ${avgKoalas} - Dolphins: ${avgDolphins})`)
    }
}

checkWinner(avgDolphins, avgKoalas)
*/

// CODING CHALLENGE 2

/*
const calcTip = (billValue) => billValue >= 50 && billValue <= 300 ? 0.15 : 0.2

let tips = []
let totalPaid = []

let bills = [125, 555, 44]

bills.forEach(function(oxe) {
    let tipValue = calcTip(oxe) * oxe
    tips.push(tipValue)
    totalPaid.push(oxe + tipValue)
})

console.log(bills)
console.log(tips)
console.log(totalPaid)

*/

let tempArray = [17, 21, 23, -5, 0, 12]


function printForecast(arr) {
    let tempString = ''
    console.log(typeof arr)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        tempString += `Temp ${arr[i]} in day ${i+1}`
    }
    console.log(tempString)
}

printForecast(tempArray)

