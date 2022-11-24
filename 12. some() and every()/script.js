'use strict';

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// Методы some() и every()

// console.log(transactions.includes(50)); // содержит элемент 50 возвращает true

console.log(transactions.some(trans => trans === 50));

// метод some() возвращает true/false
const hasWithdrawals = transactions.some(trans => trans < 0); // проверяет имеет ли массив отрицательные значения(выводы средств) возвращает true
console.log(hasWithdrawals);

const hasWithdrawalsOver5000 = transactions.some(trans => trans < -5000); // проверяет содержит ли массив выводы средств больше 5000, вернет false
console.log(hasWithdrawalsOver5000);

// метод every() проверяет каждый элемен на какой либо условие и если все удовлетворяют условию, возвращает true
console.log(transactions.every(trans => trans < 0)); // вернет false так как не все транзакции меньше 0
console.log(transactions.every(trans => Math.abs(trans) > 20)); // проверяем, являются ли абсолютные значения всего массива больше 20
