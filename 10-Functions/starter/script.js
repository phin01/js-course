'use strict';

// CODING CHALLENGE 2

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.body.addEventListener('click', function(){
        header.style.color = 'blue';
    })

    })();





/*

// CODING CHALLENGE #1

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),


    registerNewAnswer() {
        const answer = Number(prompt([this.question, ...this.options, 'Write Option Number'].join('\n')));
        if(answer < this.options.length && answer >= 0) {
            this.answers[answer]++;
        } else {
            console.log('Not a valid choice! Try again, dummy')
        }
        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type='array'){
        type === 'array' ? console.log(this.answers) : console.log(`Poll Results are: ${this.answers}`)
    }
    };






    // document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

const testData1 = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: []
}





/*

// CALL, APPLY AND BIND METHOS FOR FUNCTIONS

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNumber, name) {
        console.log(`Seat booked for ${name} in ${this.airline} flight ${this.iataCode}${flightNumber}`)
        this.bookings.push([flightNumber, name])
    }
}

const euroWings = {
    airline: 'Euro Wings',
    iataCode: 'EW',
    bookings: [],
}

lufthansa.book(239, 'Jack')
lufthansa.book(239, 'Mark')
console.log(lufthansa)

const generalBook = lufthansa.book

// CALL FUNCTION REQUIRES OBJECT + FUNCTION PARAMETERS
generalBook.call(euroWings, 555, 'John')
generalBook.call(euroWings, 555, 'Jane')

// APPLY FUNCTION REQUIRES OBJECT + ARRAY WITH FUNCTION PARAMETERS
const bookingInfo = [123, 'Paul']
// generalBook.apply(euroWings, bookingInfo)

// ARRAY CAN BE DECONSTRUCTED FOR USE IN THE CALL METHOD, THAT'S WHY APPLY IS RARELY USED
generalBook.call(euroWings, ...bookingInfo)
console.log(euroWings)


// BIND METHOD RETURNS A NEW FUNCTION BOUND TO A SPECIFIC OBJECT AND WITH POTENTIALLY PRE-DEFINED PARAMETERS

const lufthansaBooking = generalBook.bind(lufthansa)
lufthansaBooking(233, 'Jackie')
console.log(lufthansa)

const ewBookingFlight789 = generalBook.bind(euroWings, 789)
ewBookingFlight789('Paulie')
console.log(euroWings)


// BIND METHOD DOES NOT NEED AN OBJECT, IT CAN BE USED TO PARTIALLY IMPLEMENT A FUNCTION:
const travelRoute = function (travelFrom, travelTo) {
    console.log(`You are travelling from ${travelFrom} to ${travelTo}`)
};
travelRoute('Portugal', 'Spain');

const travelFromItaly = travelRoute.bind(null, 'Italy');
travelFromItaly('Germany');

// BIND METHOD IS USEFUL FOR EVENT HANDLERS THAT NEED A PROPER OBJECT IN THE CALLBACK FUNCTION
lufthansa.airplaneCount = 300;
lufthansa.buyNewPlane = function() {
    console.log(this)
    this.airplaneCount++;
    console.log(this.airplaneCount)
} 
lufthansa.buyNewPlane()
lufthansa.buyNewPlane()


// THIS WILL NOT WORK, BECAUSE THE 'THIS' KEYWORD WILL POINT TO THE BUY BUTTON, NOT THE LUFTHANSA OBJECT
// document.querySelector('.buy').addEventListener('click', lufthansa.buyNewPlane)

document.querySelector('.buy').addEventListener('click', lufthansa.buyNewPlane.bind(lufthansa))



/*

// HIGHER ORDER FUNCTIONS
// ARROW FUNCTIONS

const greet = (greeting) => (name) => console.log(`${greeting}, ${name}!`)

const heya = greet('Heya')
heya('jack')


/*
// HIGHER ORDER FUNCTIONS
// FUNCTIONS THAT RETURN OTHER FUNCTIONS AS OUTPUT

const greet = function (greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`)
    }
}


const greeterHey = greet('Hey')
greeterHey('Jack')
greeterHey('Mark')

greet('Yo')('Dude')



/*


// HIGHER ORDER FUNCTIONS
// FUNCTIONS THAT ACCEPTS OTHER FUNCTIONS AS PARAMETERS

// BASIC FUNCTIONS
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// HIGHER ORDER
const transformer = function(str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`This string was transformed by the ${fn.name} function`)
};

transformer('JavaScript is a wacky language!', upperFirstWord);
transformer('JavaScript is a wacky language!', oneWord);






/*

// BASIC FUNCTION

const bookingList = []

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookingList.push(booking)
}

createBooking('A563')
createBooking('A563', 23)
createBooking('A563', 33, 500)
createBooking('A563', undefined, 1000) // skipping a parameter to use the function's default value

*/