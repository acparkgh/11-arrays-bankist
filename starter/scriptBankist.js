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

let currentAccount;

const displayMovements = function (movements, sorted = false) {

  containerMovements.innerHTML = "";

  console.log(sorted);
  // const movementsDisplay = sorted ? movements.slice().sort((a, b) => a - b) : movements
  const movementsDisplay = sorted ? [...movements].sort((a, b) => a - b) : movements
  console.log(movementsDisplay);

  movementsDisplay.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal"

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
     
    containerMovements.insertAdjacentHTML("afterbegin", html);

  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, curVal) => {
    return acc + curVal;
  }, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (account) {
  
  const income = account.movements.filter((move) => {
    return move >= 0;
  }).reduce((acc, curVal) => {
    return acc + curVal;
  }, 0);
  
  const expense = account.movements.filter((move) => {
    return move < 0;
  }).reduce((acc, curVal) => {
    return acc + curVal
  }, 0);
  
  // const interest = 1.2 / 100;
  const interestEarned = account.movements.filter((move) => {
    return move >= 0;
  }).map((deposit) => {
    return deposit * (account.interestRate / 100);
  }).filter((int) => {
    return int >= 1;
  }).reduce((acc, int) => {
    return acc + int
  }, 0);
  
  
  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(expense)}€`;
  labelSumInterest.textContent = `${interestEarned}€`
  
}

const createUsernames = function (acctsArray) {
  acctsArray.forEach((acct) => {
    acct.username = acct.owner.toLowerCase()
    .split(" ")
    .map(name => name[0])
    .join("");
  });
};
createUsernames(accounts);

console.log(accounts);

const updateUI = function (account) {
  displayMovements(account.movements);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
}

btnLogin.addEventListener( "click", function (event) {
  event.preventDefault();
  currentAccount = accounts.find( (acct) => {
    return acct.username === inputLoginUsername.value
  } );
    
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    updateUI(currentAccount);
  };
} );

btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();
  
  // btnTransfer = document.querySelector('.form__btn--transfer');
  // inputTransferTo = document.querySelector('.form__input--to');
  // inputTransferAmount = document.querySelector('.form__input--amount');

  const transferAmount = Number(inputTransferAmount.value);
  const receiverAcct = accounts.find((acct) => {
    return acct.username === inputTransferTo.value;
  });

  inputTransferAmount.value = inputTransferTo.value = "";

  if ( transferAmount > 0
       && currentAccount.balance >= transferAmount
       && receiverAcct
       && currentAccount.username !== receiverAcct.username
  ) {
    currentAccount.movements.push(-transferAmount);
    receiverAcct.movements.push(transferAmount);
    updateUI(currentAccount);
  }
  
})

btnClose.addEventListener("click", function (event) {
  event.preventDefault();
  if (currentAccount.username === inputCloseUsername.value
    && currentAccount.pin === Number(inputClosePin.value)
  ) {
      // const index = accounts.indexOf(currentAccount)
      const index = accounts.findIndex((account) => {
        return account === currentAccount;
      })
      accounts.splice(index, 1);
      containerApp.style.opacity = 0;
  };
  inputCloseUsername.value = inputClosePin.value = "";
  
})

btnLoan.addEventListener("click", function (event) {
  event.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (loanAmount > 0 && currentAccount.movements.some((mov) => {
    return loanAmount * 0.1 <= mov;
  })) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  };
  inputLoanAmount.value = "";
});

let sortedByAmount = false;
btnSort.addEventListener("click", function () {
  
  displayMovements(currentAccount.movements, !sortedByAmount);
  sortedByAmount = !sortedByAmount;
  
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movements1 = [200, 450, 3000, 70, 1300];

console.log(movements);
console.log(movements.includes(-130))
console.log(movements.some((mov) => { return mov < -600 }));

console.log(movements.every(mov => mov > 0));
console.log(movements1.every(mov => mov > 0));

const arr = [[1, 2, 3, ["a", [11, 12], "b"]], [4, 5, 6], 7, 8];
const arr1 = [[1, 2, 3, "a", "b"], [4, 5, 6], 7, 8];
console.log(arr.flat());
console.log(arr1.flat());
console.log(arr.flat(3));

console.log(accounts);
const accountMovements = accounts.map((account) => {
  return account.movements;
})

console.log(accountMovements);
const allMovements = accountMovements.flat();


console.log(allMovements);
const totalBalance = allMovements.reduce((acc, mov) => { return acc + mov }, 0);
console.log(totalBalance);

const flatMapAccts = accounts.flatMap((account) => {
  return account.movements;
}).reduce((acc, deposit) => acc + deposit, 0);

console.log(flatMapAccts);


const owners = ["Jonas", 5, "Zach", "Adam", "mary", 9, "Martha", "andrew", "#", "&", "🤗"];
console.log(owners.sort());
console.log(owners);

console.log(allMovements);

// [ a, b ]
// return < 0, Keep order (a, b)
// return > 0, Switch order (b, a)

// Ascending Order: 1, 2, 3, 4, 5.....
// allMovements.sort((a, b) => {   
//   if (a > b) return 1 ( return > 0); Switch order
//   if (a < b) return -1 ( return < 0); Keep order
// });

// decending Order: .....5, 4, 3, 2, 1
// allMovements.sort((a, b) => {   
//   if (a > b) return -1;
//   if (a < b) return +1;
// });

// Ascending... (1, 2, 3, 4, 5, ...)
allMovements.sort((a, b) => {
  return a - b   // [ 5, 3 ] 2 > 0 (switch order).  [ 3, 5 ] -2 < 0 (keep order) 
});
console.log(allMovements);

// Decending... (..., 5, 4, 3, 2, 1)
allMovements.sort((a, b) => {
  return b - a   // [ 5, 3 ] -2 < 0 (keep order).  [ 3, 5 ] 2 > 0 (switch order) 
});

console.log(allMovements);

const arrSort = [1300, 1350, 1250];
arrSort.sort((a, b) => {
  
  console.log(`a: ${a}`);        // 1300, 1350, 1250
  console.log(`b: ${b}`);        // 1300, 1250, 1350
  console.log(a - b);            // 1300, 1250, 1350
  return a - b;                  // 1250, 1300, 1350
});

console.log(arrSort);


/////////////////////////////////////////////////