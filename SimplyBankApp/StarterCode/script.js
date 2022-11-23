'use strict';

// Simply Bank App

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

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

// ДЕЛАЕМ СПИСОК ТРАНЗАКЦИЙ
const displayTransactions = function (transactions) {
  containerTransactions.innerHTML = ''; // с помощью этого свойства очищается контейнер

  transactions.forEach(function (trans, index) {
    // Обьявляем переменную тип транзакции депозит или вывод средств
    const transType = trans > 0 ? 'deposit' : 'withdrawal';

    const transactionRow = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${transType}">
        ${index + 1} ${transType}
      </div>
      <div class="transactions__value">${trans} $</div>
    </div>`;
    // вставляем наш transactionRow после начала родительского элемента containerTransactions
    containerTransactions.insertAdjacentHTML('afterbegin', transactionRow); // указываем 2 параметра, 1 как мы хотим вставить элемент, 2-ой какой элемент вставлять
  });
};

displayTransactions(account1.transactions);

// console.log(containerTransactions.innerHTML);

// ГЕНЕРИРУЕМ НИКНЕЙМЫ
const userName = 'Oliver Avila'; // nickname = 'oa'
const nickname = userName
  .toLowerCase() //делаем все буквы маленькими
  .split(' ') // разделяем по пробелу на 2 элемента
  .map(word => word[0]) // берем каждый эелемент и возвращаем 1ую букву
  .join(''); // соеденяем в одну строку, получаем 'oa'

console.log(nickname);

// BAD PRACTICE
// используем метод forEach так как хотим модифицировать исходный массив, а не создавать новый. C помощью этой функции добавляем в каждый объект новое свойство nikname со значением первая буква имени и фамилии в нижнем регистре
const createNicknames = function (accs) {
  accs.forEach(function (acc) {
    acc.nickname = acc.userName
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createNicknames(accounts);
console.log(accounts);

//////////////////////////////////////////////////////////////////////////
// Если нам не нужно изменять исходный массив, используем map()
// передаем в функцию массив из аккаунтов
// const createNicknames = function (accs) {
//   // применяем метод map() к каждому аккаунту
//   return accs.map(account => {
//     // возвращаем из метода map() новый объект
//     return {
//       ...account, // распаковываем в новый объект все свойства и значения из входящего элемента массива(элементы массива - объекты)
//       nickname: account.userName // создаем новое свойство и присваиваем ему значение
//         .toLowerCase()
//         .split(' ')
//         .map(word => word[0])
//         .join(''),
//     };
//   });
// };
// const newAccounts = createNicknames(accounts);
// console.log(newAccounts);
/////////////////////////////////////////////////////////////////////////

// ОТОБРАЖЕНИЕ БАЛАНСА
const displayBalance = function (trasactions) {
  const balance = trasactions.reduce((acc, trans) => acc + trans, 0);
  labelBalance.textContent = `${balance}$`;
};
displayBalance(account1.transactions);
