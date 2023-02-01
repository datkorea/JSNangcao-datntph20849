const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200,450,-400,3000,-650,-130,70,1300],
    ineterestRate: 1.2, //%
    pin: 1111,
};
const account2 = {
    owner: 'Nguyen Thanh Dat',
    movements: [5000,3400,-150,3000,-650,-130,70,-30],
    ineterestRate: 1.5, //%
    pin: 2222,
};
const account3 = {
    owner: 'Tran Van Nam',
    movements: [200,-200,-150,3000,-650,-20,70,-30],
    ineterestRate: 0.7, //%
    pin: 3333,
};
const account4 = {
    owner: 'Le Hoang Anh',
    movements: [440,-2000,-1000,3000,-650,-20,9000,-40],
    ineterestRate: 1, //%
    pin: 4444,
};
const accounts = [account1,account2,account3,account4];

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.sumary__value--in');
const labelSumOut = document.querySelector('.sumary__value--Out');
const labelSumInterest = document.querySelector('.sumary__value--interest');
const labelTimer = document.querySelector('.Timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.inputLoginUsername');
const inputLoginPin = document.querySelector('.inputLoginPin');
const inputTransferTo = document.querySelector('.inputTransferTo');
const inputTransferAmount = document.querySelector('.inputTransferAmount');
const inputTransferLoanAmount = document.querySelector('.inputTransferLoanAmount');
const InputCloseUsername = document.querySelector('.InputCloseUsername');
const InputClosePin = document.querySelector('.InputClosePin');