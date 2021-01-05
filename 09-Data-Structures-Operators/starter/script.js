'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],


  // FUNCTION RETURNING AN ARRAY TO BE DECONSTRUCTURED
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  // FUNCTION THAT RECEIVES AN OBJECT AS PARAMETER
  orderDelivery({ time, starterIndex, mainIndex, address}) {
    console.log(`Order will be delivered at ${time} to ${address} containing ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`)
  },


  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


// STRING STUFF

const airline = 'TAP Air Portugal'
const plane = 'A320'

console.log(airline.indexOf('r'))
console.log(airline.lastIndexOf('r'))

console.log(airline.slice(4))
console.log(airline.slice(4, 7))  // INITIAL CHAR IS INCLUSIVE, FINAL CHAR IS NON INCLUSIVE

console.log(airline.slice(-2))    // LAST 2 CHARS

console.log(airline.toLowerCase())
console.log(airline.toUpperCase())


// CHECK EMAILS
const email = 'jonas@jonas.io'
const inputEmail = '   JoNAS@jonAs.IO  \n'

const correctedEmail = inputEmail.toLowerCase().trim()
console.log(email === correctedEmail)


// REPLACING
const announcement = 'All passengers come to boarding door 23. Boarding door 23!'

console.log(announcement.replace('door', 'gate')) // ONLY REPLACES FIRST OCCURENCE (UNTIL REPLACEALL METHOD IS ADDED TO JAVASCRIPT EVENTUALLY)

// USE REGEX
console.log(announcement.replace(/door/g, 'gate')) // ONLY REPLACES FIRST OCCURENCE (UNTIL REPLACEALL METHOD IS ADDED TO JAVASCRIPT EVENTUALLY)

// INCLUDES, STARTS, ENDS
console.log(airline.includes('Portugal'))
console.log(airline.includes('France'))
console.log(airline.startsWith('TAP'))
console.log(airline.endsWith('Germany'))


// SPLIT AND JOIN STRINGS
const passenger = 'John Smith'
const fullName = ['Mr. ', ...passenger.split(' ')].join(' ')
console.log(fullName)

const capitalizeName = function(name) {
  const splitName = name.toLowerCase().split(' ') // RETURNS AN ARRAY
  const capitalizedName = []
  for (const n of splitName) {
    // capitalizedName.push(n[0].toUpperCase() + n.slice(1))
    capitalizedName.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(capitalizedName.join(' ')) // TURNS AN ARRAY INTO A STRING, WITH A SPECIFIC SEPARATOR
}

capitalizeName('mary ANN smITH JaCOBs')


// PADDING STRINGS
console.log(airline.padStart(50,'_'))
console.log(airline.padEnd(50, '_'))

// MASKING A CREDIT CARD NUMBER
const ccNumber = 5683123409878976
const ccNumberMasked = String(ccNumber).slice(-4).padStart(19, 'XXXX ')
console.log(ccNumberMasked)







/*

// MAPS

// MAPS ARE DATA STRUCTURES WITH KEY/VALUE RELATIONSHIPS
// THE MAIN DIFFERENCE FROM OBJECTS IS THAT KEYS DON'T NECESSARILY NEED TO BE STRINGS, THEY MAY BE ANY DATA TYPE

const restMap = new Map();
restMap.set('name', 'Gigio\'s Trattoria')
restMap.set(1, 'Firenze, Italy')
restMap.set('openingHours', {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
})
restMap.set(true, 'We are open!')
console.log(restMap)

// CHECK ELEMENTS FROM MAP
console.log(restMap.has('name'))

// DELETE ELEMENTS FROM MAP
restMap.delete('openingHours')
console.log(restMap)

// OBJECT AS KEY
restMap.set(restaurant, 'Test from Object')
console.log(restMap.get(restaurant))


// AN OBJECT CAN BE CONVERTED TO A MAP USING THE ENTRIES() METHOD
const newRestMap = new Map(Object.entries(restaurant))
console.log(newRestMap)

// ITERATE OVER MAP KEY/VALUES
for(const [key, value] of newRestMap) {
  console.log(key)
}


// PROGRAMMING LANGUAGE QUIZ APP

const quiz = new Map([
  ['question', 'What\'s the best programming Language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Python'],
  [4, 'JavaScript'],
  ['correctAnswer', 4],
  [true, 'Atta boy! Correct Answer'],
  [false, 'Nope.. Try again'],
]);

console.log(quiz.get('question'))
for(const [key, question] of quiz) {
typeof(key) === 'number' ? console.log(`Alternative ${key}: ${question}`) : false
}
const answer = Number(prompt('What is your answer, friend?'))

console.log(quiz.get(answer == quiz.get('correctAnswer')))


/*

// SETS
// SETS CAN ONLY CONTAIN UNIQUE VALUES, SO IT'S USEFUL IN ORDER TO REMOVE DUPLICATES FROM AN ARRAY

const orderSet = new Set(['Pizza', 'Risotto', 'Pasta', 'Pizza', 'Pasta', 'Pizza']);
console.log(orderSet)
console.log(orderSet.has('Pizza'))
console.log(orderSet.has('Bread'))

orderSet.add('Bread')
orderSet.add('Bread')
console.log(orderSet)

orderSet.delete('Pizza')
console.log(orderSet)

// LOOP THROUGH ITEMS IN A SET
for(const item of orderSet) console.log(item)

// CONVERT SET TO ARRAY
const orderArray = [...orderSet]
console.log(orderArray)


orderSet.clear()
console.log(orderSet)





/*

// LOOPING OVER OBJECTS

// PROPERTY NAMES
const properties = Object.keys(restaurant)
console.log(properties)

// PROPERTY VALUES
const values = Object.values(restaurant)
console.log(values)

// ENTRIES WITH NAMES AND VALUES (THERE ARE NO INDEXES IN OBJECTS)
for (const [names, values] of Object.entries(restaurant)) {
  console.log(names, values)
}



/*


// OPTIONAL CHAINING IN OBJECTS
// IN CASE YOU'RE NOT SURE IF AN ELEMENT OR METHOD EXISTS, YOU CAN CHECK IT'S EXISTENCE BEFORE GETTING A PROPERTY OR CALLING IT

// THIS WOULD THROW AN ERROR BECAUSE 'MON' DOES NOT EXIST IN 'OPENINGHOURS'
// console.log(restaurant.openingHours.mon.open)

// THIS RETURNS 'UNDEFINED'
console.log(restaurant.openingHours?.mon?.open)

// CHECK FOR MULTIPLE RETURNS
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for (const day of days) {
  const openingHour = restaurant.openingHours[day]?.open ?? 'closed'
  switch(typeof openingHour) {
    case 'number':
      console.log(`On ${day} we open at ${openingHour}`)
      break;
    default:
      console.log(`On ${day} we are closed :(`)
  }
}

console.log(restaurant.order?.(0, 2) ?? 'Method does not exist')
console.log(restaurant.orderWhatever?.(0, 2) ?? 'Method does not exist')

// ALSO WORKS FOR REGULAR ARRAYS

const users = [{name: 'Jonas', email:'jonas@jonas.io'}]
console.log(users[0]?.name ?? 'User not found')
console.log(users[1]?.name ?? 'User not found')



/*

// FOR-OF LOOP TO LOOP OVER ARRAY ELEMENTS
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const menuItem of menu) console.log(menuItem)

// IF YOU NEED THE INDEX OF THE ELEMENT, YOU SHOULD LOOP OVER METHOD ARRAY.ENTRIES(), 
// WHICH RETURNS AN ARRAY FOR EACH ELEMENT, WITH INDEX + VALUE
for (const menuItem of menu.entries()) {
  console.log(`${menuItem[1]} is in the index ${menuItem[0]}`)
}

// AND THE ARRAY.ENTRIES() ARRAY CAN ALSO BE DECONSTRUCTED FOR EASIER HANDLING INSIDE THE LOOP
for (const [i, menuItem] of menu.entries()){
  console.log(`${menuItem} is in the index ${i}`)
}




/*



// DECONSTRUCTING ARRAYS

const arr = [2, 3, [3, 4]];
const [x=1, y=1, [a=1, b=1, c=1], w=1] = arr;     // USE DEFAULT VALUES IN CASE ARRAY SIZE IS UNCERTAIN
console.log(x, y, a, b, c, w);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// REVERSING IT WOULD BE A PAIN, INCLUDING A TEMP VARIABLE
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary)

// console.log([secondary, main])

[secondary, main] = [main, secondary];
console.log(main, secondary);

const [starterOrder, mainOrder] = restaurant.order(1, 2);
console.log(starterOrder, mainOrder);



// DECONSTRUCTING OBJECTS (USEFUL FOR API CALLS, JSON OBJECTS, ETC)

const {name: restaurantName, openingHours: schedule, categories: tags, address: randomAddress = "Address not found"} = restaurant;

const {openingHours: {fri: {open: fridayOpen, close: fridayClose}}} = restaurant;
console.log(fridayOpen, fridayClose);

console.log(restaurantName, schedule, tags, randomAddress);

// CREATING OBJECT AND PASSING IT AS PARAMETER
const jacksOrder = {
  address: 'Vina del Sol, 21',
  mainIndex: 2,
  starterIndex: 1,
  time: '20:30'
}

restaurant.orderDelivery(jacksOrder)


// SPREAD OPERATOR
const spreadArray = [1, 5, 6, 8];
const spreadArray_2 = [9, 33, 21]
const newSpreadArray = [2, ...spreadArray, 3, ...spreadArray_2];
console.log(newSpreadArray)


// SPREAD OPERATORS CAN BE USED FOR ALL ITERABLE TYPES (ARRAYS, STRINGS, MAPS, SETS)
const spreadName = 'John Smith';
console.log(...spreadName)


// SPREAD OPERATORS CAN ALSO BE USED TO COPY OBJECTS
const newRestaurant = {...restaurant, founder: 'Giovanni' }
newRestaurant.name = 'Gigio\'s Trattoria'
console.log(newRestaurant)
console.log(restaurant)


// REST ELEMENT CAPTURES THE REMAINING ITEMS IN AN ITERABLE AND TURNS THEM INTO A NEW ARRAY
const [elementA, elementB, ...restOfElements] = [...newSpreadArray]
console.log(elementA, elementB, restOfElements)


// REST PARAMETERS ARE USEFUL TO CREATE FUNCTIONS WITH A VARIABLE AMOUNT OF INPUTS
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(`The sum of all numbers is ${sum}`)
}

add(2, 3)
add(2, 3, 6, 1, 2, 3, 1, 2, 3)



// SHORT-CIRCUITING WITH 'OR' OPERATOR
// WILL RETURN THE FIRST TRUTHY VALUE, OR LAST VALUE PROVIDED
console.log('----- SHORT CIRCUITING OR -----')
console.log(3 || 'Jack')  
console.log('' || 'Jack')
console.log(false || 0 || null)

// USEFUL FOR DEFINING DEFAULT VALUES FOR VARIABLES
// const numGuests = restaurant.numGuests ? restaurant.numGuests : 10
const numGuests = restaurant.numGuests || 10
console.log(numGuests)

// BUT IN CASE 0 OR '' IS A PROPER VALUE, NULLISH COALESCING OPERATOR (??) IS MORE SUITABLE
// BECAUSE ?? ONLY SHORT-CIRCUITS TO NULL, FALSE AND UNDEFINED, NOT FALSY VALUES LIKE 0 AND ''
restaurant.numGuests = 0
const incorrectGuests = restaurant.numGuests || 10
const correctGuests = restaurant.numGuests ?? 10
console.log(incorrectGuests, correctGuests)


// SHORT-CIRCUITING WITH 'AND' OPERATOR
// WILL RETURN THE FIRST FALSY VALUE, OR LAST VALUE PROVIDED
console.log('----- SHORT CIRCUITING AND -----')
console.log(0 && 'Jonas')
console.log('Jack' && 23 && null && true)


// USEFUL FOR CHECKING IF A FUNCTION EXISTS BEFORE CALLING IT
if(restaurant.order) {
  console.log(restaurant.order(1, 2))
}

if (restaurant.orderPizza) {
  console.log(restaurant.orderPizza('Pepperoni'))
}

restaurant.order && restaurant.order(1, 2)
restaurant.orderPizza && restaurant.orderPizza('Pepperoni')


*/
