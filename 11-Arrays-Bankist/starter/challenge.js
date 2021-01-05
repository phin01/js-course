'use strict';



console.log('-------------- CHALLENGE ----------------');
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ];


// CALCULATE RECOMMENDED PORTION
dogs.forEach(doggo => doggo.recommended = doggo.weight ** 0.75 * 28 )

// Find Sarah's dog and log to the console whether it's eating too much or too little
dogs.forEach(doggo => {
    if(doggo.owners.includes('Sarah')) {
        if(doggo.curFood > doggo.recommended * 1.1) console.log(`Doggo eating too much`)
        else if(doggo.curFood < doggo.recommended < 0.9) console.log(`Doggo not eating enough`)
        else console.log(`Doggo eating well`)
    }
})

// Create an array containing all owners of dogs who eat too much
// let ownersEatTooMuch = []
// let ownersEatTooLittle = []
// let ownersEatWell = []

// dogs.forEach(doggo => {
//     if(doggo.curFood > doggo.recommended * 1.1) ownersEatTooMuch.push(doggo.owners)
//     else if(doggo.curFood < doggo.recommended < 0.9) ownersEatTooLittle.push(doggo.owners)
//     else ownersEatWell.push(doggo.owners)
// })

// Log a string to the console for each array created in 3.,
// if (ownersEatTooMuch.length > 0) console.log(ownersEatTooMuch.flat().reduce((acc, owner) => `${acc} and ${owner}`) + ' have dogs eating too much')
// if (ownersEatTooLittle.length > 0) console.log(ownersEatTooLittle.flat().reduce((acc, owner) => `${acc} and ${owner}`) + ' have dogs eating too little')
// if(ownersEatWell.length > 0) console.log(ownersEatWell.flat().reduce((acc, owner) => `${acc} and ${owner}`) + ' have dogs eating well')




// Create an array containing all owners of dogs who eat too much or too little
const ownersEatTooMuch = dogs.filter(doggo => doggo.curFood > doggo.recommended)
const ownersEatTooLittle = dogs.filter(doggo => doggo.curFood < doggo.recommended)

// Log a string to the console for each array created in 3.,
console.log(ownersEatTooMuch.flatMap(doggo => doggo.owners).join(' and ') + ' have dogs eating too much')
console.log(ownersEatTooLittle.flatMap(doggo => doggo.owners).join(' and ') + ' have dogs eating too little')





// Log to the console whether there is any dog eating exactly the amount of food
console.log(dogs.some(doggo => doggo.curFood === doggo.recommended))


// Log to the console whether there is any dog eating an okay amount of food
console.log(dogs.some(doggo => doggo.curFood > 0.9 * doggo.recommended && doggo.curFood < 1.1 * doggo.recommended))


// Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order
const sortedDogs = dogs.slice().sort((doggoA, doggoB) => doggoA.recommended - doggoB.recommended)
console.log(dogs);
console.log(sortedDogs);





/*

// Test data:
const data_1 = [5, 2, 4, 1, 15, 8, 3]
const data_2 = [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function(ages) {
    console.log(ages);
    const humanAges = ages.map((age) => age <= 2 ? age * 2 : age * 4 + 16)

    const validAges = humanAges.filter(age => age >= 18)

    const averageAge = validAges.reduce((acc, age) => acc + age)

    return averageAge / validAges.length
}

console.log(calcAverageHumanAge(data_2));


*/
