'use strict';

// FUNCTION DECLARATIONS
function calculateAge(birthYear) {
    return 2020 - birthYear
}
const age1 = calculateAge(1986)


// ANONYMOUS FUNCTION (FUNCTION EXPRESSION)
const age2 = function (birthYear) {
    return 2020 - birthYear
}


// ARROW FUNCTIONS (ONE-LINER)
const age3 = birthYear => 2020 - birthYear


// ARROW FUNCTIONS (MULTIPLE LINES)
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return retirement
}

const personalYearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return `${firstname} retires in ${retirement} years`
}

console.log(age1, age2(1987), age3(1985), yearsUntilRetirement(1995), personalYearsUntilRetirement(1992, 'John'))

// ARRAY STUFF

const friends = ['John', 'Mark', 'Bill']
friends.push('Jim')         // ADDS ELEMENT TO THE END
friends.pop()               // REMOVES LAST ELEMENT

friends.unshift('Jake')     // ADDS ELEMENT TO THE TOP
friends.shift()             // REMOVES ELEMENT FROM THE TOP

friends.indexOf('John')     // RETURNS INDEX OF ELEMENT, RETURNS -1 IF NOT FOUND
friends.includes('Mark')    // BOOLEAN INDICATING WHETHER ELEMENT EXISTS OR NOT


// OBJECTS

const person = {
    firstName: 'Paulo',
    lastName: 'Nascimento',
    age: 34,
    profession: 'Programmer',
    gid: 'z0034w2c',
    friends: ['Jim', 'Jack', 'John'],
    
    favoriteGame: function(genre) {
        switch(genre) {
            case 'RPG':
                return 'Skyrim'
                break;
            case 'FPS':
                return 'Half Life'
                break;
            default:
                return 'Portal'
        }
    },

    ageGroup: function() { return this.firstName }
    // ageGroup: this.age
}

console.log(person.firstName)
console.log(person.age)
console.log(person['profession'])

const requiredField = 'gid'
console.log(person[requiredField])

console.log(`${person.firstName} has ${person.friends.length} friends and the best friend is ${person.friends[0]}`)
console.log(person.favoriteGame('FPS'))
console.log(person.ageGroup())


// FOR LOOPS    
// debugger;

for(let i = 0; i <=9900; i++) {
    if (i % 2 == 0) continue;           // CONTINUE INTERRUPTS THE CURRENT ITERATION AND MOVES ON TO THE NEXT ONE
    console.log(`Iteration #${i}`)
    if(i >= 15) break;                   // BREAK CLOSES/EXITS THE LOOP
}

// WHILE LOOPS

let i = 0
while(i < 999) {
    i++
    if (i % 2 == 0) continue;           // CONTINUE INTERRUPTS THE CURRENT ITERATION AND MOVES ON TO THE NEXT ONE
    console.log(`Iteration #${i}`)
    if(i >= 15) break;                   // BREAK CLOSES/EXITS THE LOOP
}

