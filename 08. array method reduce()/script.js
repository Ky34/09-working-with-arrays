'use strict';

// метод reduce()

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// метод reduce() имеет 2 параметра: 1ый вызывает callback функцию с 4 входящими параметрами (1ый аккамулятор(acc), переменная в которой содержится результат перебора элементов или(и) преобразований; 2-ой элемент(item) массива; 3-ий индекс(index) элемента; 4ый сам массив(arr)) и 2ой начальное значение параметра аккамулятора (acc). Метод возвращает значение

const balance = transactions.reduce((acc, item, index, arr) => acc + item, 0); // для каждого элемента массива прибавляем к аккамулятору текущий элемент
console.log(balance);

let sum = 0;
for (const trans of transactions) {
  sum += trans;
}
console.log(sum);

// Get minimum value of transactions

const min = transactions.reduce(
  (acc, trans) => (acc < trans ? acc : trans), // если значение в аккамуляторе меньше текущего значения, то оставляем то, которое в аккамуляторе, иначе возвращаем текущее
  transactions[0] // стартовым значением аккамулятора указываем первое значение в массиве
);

console.log(min);
