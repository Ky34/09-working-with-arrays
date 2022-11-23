'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['CNY', 'Chinese yuan'],
]);

const transactions = [300, 250, -500, 5000, -750, -180, 500, 400, -350, -120];

// forEach()

// c помощью цикла  for of
// for (const transaction of transactions) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited`);
//   } else {
//     console.log(`${Math.abs(transaction)} was withdrew`); // Math.abs() выводит число без знака
//   }
// }

// чтобы получить доступ к индексу, возвращаем пары ключ-значение для массива и помещаем их в переменные
for (const [i, transaction] of transactions.entries()) {
  if (transaction > 0) {
    console.log(i);
    console.log(`${transaction} was deposited`);
  } else {
    console.log(i);
    console.log(`${Math.abs(transaction)} was withdrew`);
  }
}

console.log('=============================================');

// метод forEach передает в функцию в качесте параметра каждый элемент массива по очереди
// в методе forEach нельзя использовать ключевые слова break и continue
// forEach возвращает в функцию 3 параметра: элемент массива, его индекс и сам массив
transactions.forEach(function (transaction, index /*array*/) {
  if (transaction > 0) {
    console.log(`Transaction № ${index + 1}: ${transaction} was deposited`);
  } else {
    console.log(
      `Transaction № ${index + 1}: ${Math.abs(transaction)} was withdrew`
    );
  }
});
