'use strict';

// Сортировака Массивов

// Strings
const names = ['Jhon', 'Sara', 'Evan', 'Steve', 'Cecil'];

console.log(names.sort()); // сортирует строки в алфовитном порядке
console.log(names); // изменяет исходный массив

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
// метод sort() принемает 2 параметра x - текущий элемент, y - следующий
// return < 0 -> x, y
// return > 0 -> y, x

// Ascending order (по возрастанию)
// transactions.sort((x, y) => {
//   if (x > y) {
//     return 1;
//   }
//   if (x < y) {
//     return -1;
//   }
// });

transactions.sort((x, y) => x - y);

console.log(transactions);

// Descending order (по убыванию)
// transactions.sort((x, y) => {
//   if (x > y) {
//     return -1;
//   }
//   if (x < y) {
//     return 1;
//   }
// });

transactions.sort((x, y) => y - x);

console.log(transactions);
