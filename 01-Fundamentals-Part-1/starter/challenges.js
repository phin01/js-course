// CODING CHALLENGE 1

/*
    let markWeight = 78
    let markHeight = 1.69

    let johnWeight = 92
    let johnHeight = 1.95

    let markBMI = markWeight / (markHeight ** 2)
    let johnBMI = johnWeight / (johnHeight ** 2)

    let markHigherMBI = markBMI > johnBMI

    console.log(markHigherMBI)




    markWeight = 95
    markHeight = 1.88

    johnWeight = 85
    johnHeight = 1.76

    markBMI = markWeight / (markHeight ** 2)
    johnBMI = johnWeight / (johnHeight ** 2)

    markHigherMBI = markBMI > johnBMI

    console.log(markHigherMBI)
*/

// CODING CHALLENGE 2

/*
let markWeight = 78
let markHeight = 1.69

let johnWeight = 92
let johnHeight = 1.95

let markBMI = markWeight / (markHeight ** 2)
let johnBMI = johnWeight / (johnHeight ** 2)

let markHigherMBI = markBMI > johnBMI

if(markHigherMBI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's ${johnBMI}`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's ${markBMI}`)
}
*/

// CODING CHALLENGE 3
/*

let dolphinsScore
let koalasScore
let winner


// dolphinsScore = (96 + 108 + 89) / 3
// koalasScore = (88 + 91 + 110) / 3

// dolphinsScore = (97 + 112 + 199) / 3
// koalasScore = (109 + 95 + 123) / 3

// dolphinsScore = (97 + 112 + 101) / 3
// koalasScore = (109 + 95 + 106) / 3


console.log(dolphinsScore)
console.log(koalasScore)

let dolphinsWin = dolphinsScore > koalasScore
let koalasWin = koalasScore > dolphinsScore

let validResult = false

if (dolphinsWin && dolphinsScore >= 100) {
    validResult = true
    winner = 'Dolphins'
} else if (koalasWin && koalasScore >= 100) {
    validResult = true
    winner = 'Koalas'
} else if ((dolphinsScore == koalasScore) && dolphinsScore >= 100) {
    validResult = true
    winner = 'Draw'
}

if (winner == 'Draw') {
    console.log('Game was a valid draw!')
} else if (validResult) {
    console.log(`${winner} won the game and it was valid!`)
} else {
    console.log('Game was not valid :(')
}

*/

// CODING CHALLENGE 4

let tempArray = [17, 21, 23]


function printForecast(arr) {
    let tempString = ''
    if (typeof arr !== 'Array') break;
    for (let i = 0; i < arr.length; i++) {
        tempString =+ `Temp ${arr[i]} in day ${i+1}`
    }
    console.log(tempString)
}

printForecast(tempArray)
