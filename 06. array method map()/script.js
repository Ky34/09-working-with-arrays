'use strict';

// Метод map()

const transactions = [300, 250, -500, 5000, -750, -180, 500, 400, -350, -120];

const usdToEuro = 0.86;

// метод map() вызывает колбек функцию которя применяется к каждому элементу массива и возвращает новый массив с измененными элементами. Метод как и цикл forEach передает 3 параметра в функцию, 1ый элемент массива, 2ой его индекс, 3ий весь массив

// const transactionsEuro = transactions.map(function (trans) {
//   return trans * usdToEuro;
// });
const transactionsEuro = transactions.map(trans => trans * usdToEuro);

console.log(transactions);
console.log(transactionsEuro);

const transactionsEuro1 = [];
for (const trans of transactions) {
  transactionsEuro1.push(trans * usdToEuro);
}

console.log(transactionsEuro1);

// 3 одиннаковых кода

// const transactionDescriptions = transactions.map((trans, index, array) => {
//   let description = '';
//   if (trans > 0) {
//     description = `Transaction № ${index + 1}: ${trans} was deposited`;
//   } else {
//     description = `Transaction № ${index + 1}: ${Math.abs(trans)} was withdrew`;
//   }
//   return description;
// });

// const transactionDescriptions = transactions.map((trans, index, array) => {
//   let description = '';
//   let text = trans > 0 ? 'deposited' : 'withdrew';
//   description = `Transaction № ${index + 1}: ${Math.abs(trans)} was ${text}`;
//   return description;
// });

const transactionDescriptions = transactions.map(
  (trans, index) =>
    `Transaction № ${index + 1}: ${Math.abs(trans)} was ${
      trans > 0 ? 'deposited' : 'withdrew'
    }`
);

console.log(transactionDescriptions);
