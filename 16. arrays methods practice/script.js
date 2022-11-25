'use strict';

// Practice

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

// Задание 1: узнать сумму всех депозитов в банке
// const bankDepositTotal = accounts
//   .flatMap(account => account.transactions) // обращаемся к свойству транзакций из каждого объекта и распаковываем в 1 массив
//   .filter(trans => trans > 0) // фильтруем только депозиты
//   .reduce((acc, dep) => acc + dep, 0); // считаем сумму всех депозитов

const bankDepositTotal = accounts
  .flatMap(account => account.transactions)
  .reduce((acc, dep) => (dep > 0 ? acc + dep : acc), 0); // считаем сумму всех депозитов
console.log(bankDepositTotal);

// Задание 2: посчитать сколько было выводов средств в банке, минимальный вывод средств должен быть -300(меньше 300 не учитывать)
// 1 способ
// const withdrawalOver500Number = accounts
//   .flatMap(account => account.transactions) // обращаемся к свойству транзакций из каждого объекта и распаковываем в 1 массив
//   .filter(trans => trans <= -300).length; // фильтруем только депозиты больше 300 и возвращаем длинну массива

// 2 способ
const withdrawalOver500Number = accounts
  .flatMap(account => account.transactions)
  .reduce((counter, trans) => (trans <= -300 ? counter + 1 : counter), 0); // в аккамуляторе считаем сколько транзакций было меньше -300, если транзакция меньше -300 прибавляем 1 к счетчику, если нет возвращаем значение счетчика
console.log(withdrawalOver500Number);

// Задание 3: при помощи reduce() посчитать сумму депозитов и сумму выводов средств
const { depositsTotal, withdrawalsTotal } = accounts // сразу помещаем в переменную объект
  .flatMap(account => account.transactions)
  .reduce(
    (acc, trans) => {
      // trans > 0 // на каждом шаге проверяем транзакцию
      //   ? (acc.deposinstsTotal += trans) // если она больше 0 прибавляем ее к депозитам
      //   : (acc.withdrawalsTotal += trans); // если она меньше 0 прибавляем ее к выводам
      acc[trans > 0 ? 'depositsTotal' : 'withdrawalsTotal'] += trans; // можно обращатся к свойству объекта в квадратных скобках используя в них тернарный оператор
      return acc; // возвращаем объект аккамулятор
    },
    { depositsTotal: 0, withdrawalsTotal: 0 } // задаем стартовыми параметрами аккамулятора объект в котором будем хранись суммы депозитов и выводов
  );
console.log(depositsTotal, withdrawalsTotal);

////////////////////////////////////////////////////////////////////////////////////
