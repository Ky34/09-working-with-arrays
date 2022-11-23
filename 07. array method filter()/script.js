'use strict';

// Метод filter()

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// так как методы map() и filter() возвращают значения, мы можем делать цепочки преобразований
const withdeawls = transactions.filter(trans => trans < 0); // добавляем в новый массив элементы которые меньше 0
const deposites = transactions.filter(trans => trans > 0); // добавляем в новый массив элементы которые больше 0

console.log(withdeawls);
console.log(deposites);

const withdeawls1 = [];
for (const trans of transactions) {
  if (trans < 0) {
    withdeawls1.push(trans);
  }
}

console.log(withdeawls1);
