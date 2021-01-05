'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// --------------------------------------------------------------------------------------------------------------
// SET VARIABLES
// --------------------------------------------------------------------------------------------------------------
let loggedAccount;
let sorted = false;


// --------------------------------------------------------------------------------------------------------------
// UI EVENTS
// --------------------------------------------------------------------------------------------------------------
const refreshUI = function() {
  displayMovements(loggedAccount, sorted) 
  displayBalance(loggedAccount) 
  displayInOutflowsInterests(loggedAccount) 
}


const logoutUser = function () {
  containerApp.classList.remove('logged--in')
  containerApp.classList.add('logged--out')
  labelWelcome.textContent = `Log in to get started`
}




// --------------------------------------------------------------------------------------------------------------
// DISPLAY MOVEMENTS
// --------------------------------------------------------------------------------------------------------------
const displayMovements = function(acc, sorted = false) {
  containerMovements.innerHTML = '' // CLEAR CURRENT CONTAINER

  const sortedMovements = sorted ? acc.movements.slice().sort((a, b) => a - b) : acc.movements.slice()

  sortedMovements.forEach(function(mov, i){ // POPULATE WITH MOVEMENTS ARRAY
    const movType = mov > 0 ? 'deposit' : 'withdrawal';

    const movHTML = `
      <div class="movements__row">
        <div class="movements__type movements__type--${movType}">${i + 1} ${movType}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', movHTML)
  });
};


// --------------------------------------------------------------------------------------------------------------
// DISPLAY INFLOWS, OUTFLOWS AND INTERESTS
// --------------------------------------------------------------------------------------------------------------

const displayInOutflowsInterests = function(acc) {

  // const interestRate = 1.2 / 100 // ARBITRARY
  
  const inflows = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);

  const outflows = Math.abs(acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov));

  const interestPaid = acc.movements
    .filter(mov => mov > 0)
    .map(mov => mov * (acc.interestRate / 100))
    .filter(interest => interest > 1) // BANK WON'T PAY INTERESTS LOWER THAN 1 EUR
    .reduce((acc, interest) => acc + interest);

  labelSumIn.textContent = inflows
  labelSumOut.textContent = outflows
  labelSumInterest.textContent = interestPaid

};


// --------------------------------------------------------------------------------------------------------------
// DISPLAY BALANCE
// --------------------------------------------------------------------------------------------------------------

const displayBalance = function(acc) {
  acc.balance = acc.movements.reduce((balance, mov) => balance + mov)
  labelBalance.textContent = acc.balance
};



// --------------------------------------------------------------------------------------------------------------
// DETERMINE USERNAMES (INITIALS IN LOWERCASE) FOR ALL ACCOUNTS
// --------------------------------------------------------------------------------------------------------------

// FUNCTION THAT TRANSFORMES NAME IN USERNAME
const createUserNames = function(user) {
return user
  .toLowerCase()
  .split(' ')
  .map(word => word[0])
  .join('');
}

// LOOP OVER ALL ACCOUNTS AND ADD USERNAME TO IT
accounts.forEach(function(account){
  account.username = createUserNames(account.owner)
})


// --------------------------------------------------------------------------------------------------------------
// IMPLEMENTING LOGIN LOGIC
// --------------------------------------------------------------------------------------------------------------

const loginRoutine = function(e) {
  e.preventDefault(); // PREVENTS FROM REFRESHING THE PAGE WHEN SUBMIT BUTTON FROM FORM IS CLICKED

  loggedAccount = checkLogin(inputLoginUsername.value, inputLoginPin.value)
  
  if(loggedAccount){
    // DISPLAY UI
    containerApp.classList.remove('logged--out') // DISPLAY UI
    containerApp.classList.add('logged--in')
    
    // DISPLAY WELCOME MESSAGE
    labelWelcome.textContent = `Welcome, ${loggedAccount.owner}!` 

    // DISPLAY MOVEMENTS, BALANCE AND SUMMARY
    refreshUI()
    console.log('Valid Login');
  } else {
    // HIDE UI
    logoutUser()
    console.log('Invalid Login');
  }

  resetInputFields()

}

const checkLogin = function(username, pin) {

  const relatedAccount = accounts.find(acc => acc.username === username)
  if(relatedAccount){
    if(Number(pin) === relatedAccount.pin) {
      console.log('Login OK');
      return relatedAccount
    } else {
      console.log('Invalid PIN');
      return false
    }
  } else {
    console.log('Cound not find username');
    return false
  }
}

const resetInputFields = function() {
  inputLoginPin.value = ''
  inputLoginUsername.value = ''
  inputLoginPin.blur()
  inputLoginUsername.blur()
}



btnLogin.addEventListener('click', loginRoutine)


// --------------------------------------------------------------------------------------------------------------
// IMPLEMENTING TRANSFER LOGIC
// --------------------------------------------------------------------------------------------------------------

const transferRoutine = function(e) {
  e.preventDefault();

  const toAccount = accounts.find(acc => acc.username === inputTransferTo.value)
  const toAmount = Number(inputTransferAmount.value)

  if(toAccount) {
    if(toAmount > 0 && toAmount <= loggedAccount.balance) {
      loggedAccount.movements.push(toAmount * -1);
      toAccount.movements.push(toAmount);
      refreshUI()


    } else {
      console.log('Not a valid transfer amout (either negative or higher than current balance');
    }


  } else {
    console.log(`Could not find account ${inputTransferTo.value} to transfer to!`);
  }

}

btnTransfer.addEventListener('click', transferRoutine)


// --------------------------------------------------------------------------------------------------------------
// DELETE ACCOUNT LOGIC
// --------------------------------------------------------------------------------------------------------------

const deleteAccount = function(e) {
  e.preventDefault();

  console.log(inputCloseUsername.value === loggedAccount.username);
  console.log(inputClosePin.value === loggedAccount.pin);

  if(inputCloseUsername.value === loggedAccount.username && Number(inputClosePin.value) === Number(loggedAccount.pin)) {
    const indexCloseAccount = accounts.findIndex(acc => acc.username === inputCloseUsername.value)
    accounts.splice(indexCloseAccount, 1)
    console.log(accounts);
    logoutUser()
    console.log('Account Sucessfully deleted');
  } else {
    console.log('Could not close account');
  }
}

btnClose.addEventListener('click', deleteAccount)



// --------------------------------------------------------------------------------------------------------------
// LOAN LOGIC
// --------------------------------------------------------------------------------------------------------------

// LOAN IS APPROVED ONLY IF THE ACCOUNT HISTORY HAS AT LEAST ONE DEPOSIT LARGER THAN 10% OF THE REQUESTED AMOUNT
// IE, IF A 1000 LOAN IS REQUESTED, IT'LL ONLY BE APPROVED IF THERE'S AT LEAST ONE 100 DEPOSIT IN THE ACCOUNT'S HISTORY

const requestLoan = function(e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);
  const validLoan = loggedAccount.movements.some(mov => mov >= (loanAmount * 0.1)) && loanAmount > 0

  if(validLoan){
    loggedAccount.movements.push(loanAmount);
    refreshUI();
    console.log('Loan request approved!');

  } else {
    console.log('Invalid Loan Request - Too high!');
  }



}

btnLoan.addEventListener('click', requestLoan)



// --------------------------------------------------------------------------------------------------------------
// SORTING LOGIC
// --------------------------------------------------------------------------------------------------------------

const sortMovements = function(e) {
  e.preventDefault();
  displayMovements(loggedAccount, !sorted)
  sorted = !sorted
}

btnSort.addEventListener('click', sortMovements)



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ARRAY METHODS!



// MAP (RETURNS A NEW ARRAY APPLYING A CALLBACK FUNCTION TO EACH ELEMENT)
const eurUsdRatio = 1.1

const movementsUSD = movements.map(function(mov) {
  return mov * eurUsdRatio
});

const movementsUSDArrow = movements.map((mov) => mov * eurUsdRatio);

console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDArrow);


// FILTER (RETURNS A NEW ARRAY AFTER A FILTER CALLBACK FUNCTION IS APPLIED)

const deposits = movements.filter(function(mov) {
  return mov > 0
})

const depositsArrow = movements.filter((mov) => mov > 0)

console.log(deposits);
console.log(depositsArrow);


// REDUCE (RETURNS AN ARRAY IN WHICH ALL ELEMENTS ARE COMBINED INTO A SINGLE ONE, BY USING A CALLBACK FUNCTION WITH AN ACCUMULATOR)
// (ALMOST SORT OF ISH RECURSIVE....)

// const allMovements = movements.reduce(function(acc, mov) {
//   return acc + mov
// })

const allMovements = movements.reduce((acc, mov) => acc + mov)
console.log(allMovements);

// REDUCE CAN ALSO BE USED TO ITERATE OVER ARRAY

const maxValue = function(movements) {

    const max = movements.reduce(function(acc, mov) {
    acc = mov > acc ? mov : acc
    return acc
  })
  return max
}

console.log(maxValue(movements));


// FIND METHOD (RETURNS THE FIRST ELEMENT THAT MATCHES A CONDITION)

// const firstWithdrawal = movements.find(function(mov){
//   return mov < 0;
// })
const firstWithdrawal = movements.find(mov => mov < 0)

console.log(firstWithdrawal);


// 'SOME' METHOD (RETURNS TRUE IF ANY ELEMENT IN THE ARRAY MEETS THE CRITERIA)

const anyDeposits = movements.some(mov => mov > 0)
console.log(anyDeposits);


// 'EVERY' METHOD (RETURNS TRUE IF ALL ELEMENTS IN THE ARRAY MEET THE CRITERIA)
const allEvens = movements.every(mov => mov % 2 === 0)
console.log(allEvens);


// FLAT METHOD (REMOVE ELEMENTS FROM NESTED ARRAYS AND TURNS THEM ALL INTO REGULAR ELEMENTS OF THE 'PARENT' ARRAY). 
// IT WORKS ONE NESTED LEVEL AT A TIME, OR WITH LEVELS AS PARAMETERS

const nestedArray = [[1, 2, 3], 4, 5, [6, 7], 8]
const flatNested = nestedArray.flat()
console.log(flatNested);

const superNestedArray = [[1, 2, 3], 4, 5, [6, 7, [8, 9, 10, [11, 12]]]]
console.log(superNestedArray.flat());
console.log(superNestedArray.flat(2));
console.log(superNestedArray.flat(3));



// SORTING METHODS

/* 
  Sorting methos will sort elements as if they were strings, even if they are numbers
  In order to properly sort numbers, a callback function is required

  The callback function accepts two parameters, which are the n-th two consecutive elements of the array
  If the callback function returns a NEGATIVE value, their order is KEPT
  If the callback function returns a POSITIVE value, their order is SWITCHED

*/

console.log(...movements.sort());

// THIS WILL RETURN AN ARRAY SORTED IN ASCENDING ORDER
console.log(...movements.sort(function(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}));

// THIS WILL RETURN AN ARRAY SORTED IN DESCENDING ORDER
console.log(...movements.sort(function(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
}));

// CAN BE GREATER SIMPLIFIED BY SIMPLE ARROW FUNCTIONS
// ASCENDING
console.log(...movements.sort((a, b) => a - b));
// DESCENDING
console.log(...movements.sort((a, b) => b - a));


// CREATING ARRAYS PROGRAMATICALLY

// MANUALLY
const arr1 = [1, 2, 3, 4, 5]
const arr2 = new Array(1, 2, 3, 4, 5)

// CREATING A BLANK ARRAY, THEN FILLING IT
const arr3 = new Array(5)
arr3.fill(1)
console.log(arr3);

// USING THE 'FROM' METHOD TO SPECIFY A MAP CALLBACK FUNCTION
const arr4 = Array.from({length: 5}, () => 1)
console.log(arr4);

const arr5 = Array.from({length: 5}, (_, i) => i + 1)
console.log(arr5);

// USING THE 'FROM' METHOD AND AN ITERABLE OF SOME SORT
const movementsUI = function(e) {
  e.preventDefault()
  const movs = Array.from(document.querySelectorAll('.movements__value'));
  
  console.log(movs.map(element => Number(element.innerHTML)).reduce((acc, mov) => acc + mov))
}

labelBalance.addEventListener('click', movementsUI)


