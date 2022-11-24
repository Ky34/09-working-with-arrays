'use strict';

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// Методы flat() и flatMap()

const someArray = [[1, 3, 5], [2, 4, 6], 7, 8, 9];
const someArray1 = [[[1, 2, 3], 3, 5], [2, 4, 6], 7, 8, 9];

console.log(someArray.flat()); // распаковывает внутренние массивы во внешний.
console.log(someArray1.flat(2)); // в качестве параметра передается значение, сколько уровней вложенности хотим распаковать

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

// получаем массив, состоящий из массивов всех транзакций пользователей
const allTransactionArrays = accounts.map(account => account.transactions);
const allTransactions = allTransactionArrays.flat(); // получаем массив из всех транзакций в банке
console.log(allTransactionArrays);
console.log(allTransactions);
// считаем общий баланс банка
const bankBalance = allTransactions.reduce((acc, trans) => acc + trans, 0);
console.log(bankBalance);

// делаем то же по цепочке методов
const bankBalance1 = accounts
  .map(account => account.transactions)
  .flat()
  .reduce((acc, trans) => acc + trans);
console.log(bankBalance1);

// метод flatMap работает только на 1 уровень вложенности массивов
const bankBalance2 = accounts
  .flatMap(account => account.transactions) // работает так же как .map().flat()
  .reduce((acc, trans) => acc + trans);
console.log(bankBalance1);
