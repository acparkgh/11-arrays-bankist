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

// let arr = ["a", "b", "c", "d", "e", "f", "g"]

// console.log(arr.slice(2));
// console.log(arr.slice(2, 5));
// console.log(arr.slice(-4));
// console.log(arr.slice(1, -4));
// const arr1 = arr.slice();
// const arr2 = [...arr];
// console.log(arr);
// console.log(arr1);
// console.log(arr2);

// // splice mutate original array:

// let arr10 = ["a", "b", "c", "d", "e", "f", "g"];
// const spliceReturns1 = arr10.splice(3);
// console.log(spliceReturns1);
// console.log(arr10);
// const pop1 = arr10.pop();
// console.log(pop1);
// console.log(arr10);

// console.log(arr10.concat(arr1));
// const allArrays = [...arr10, ...arr1];
// console.log(allArrays.join(" - "));
// console.log(arr10.includes("x"))
// console.log(arr10.includes("b"))

// for (const eachItem of arr1.entries()) {
//   console.log(eachItem);
// }


// for (const movement of movements.entries()) {
// for (const [index, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`)
//   }
// }

// console.log("-------------------------------");

// const moveMoney = (money, index, array) => {
//   if (money > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${money}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(money)}`)
//   }
//   console.log(array);
// }

// movements.forEach(moveMoney);

// movements.forEach((money) => {
//   if (money > 0) {
//     console.log(`You deposited ${money}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(money)}`)
//   }
// });

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  // console.log(map);
})

const currenciesUnique = new Set(["USD", "BGP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach((value, key, set) => {
  console.log(`${key}: ${value}`);
  // console.log(set);
});