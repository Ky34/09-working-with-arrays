'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['CNY', 'Chinese yuan'],
]);

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

/////////////////////////////////////////////////////////////////////////////

let letters = ['a', 'b', 'c', 'd', 'e', 'f'];

// slice()

console.log(letters.slice(1)); // выреазет кусок массива возвращает вырезанный кусок, исходный массив не изменяется
console.log(letters.slice(1, 4)); // первое значение, с какого элемента хотим начать вырезать, второй параметр следующий элемент после того, до какого мы хотим вырезать (если хотим вырезать 3 элемента нужно указать(1,4))
console.log(letters.slice(-1)); //  можно указать отрицательный параметр, тогда получим последний элемент массива
console.log(letters.slice(-3)); // получим последний 3 элемента
console.log(letters.slice(-3, -1)); // получим 2 элемента с конца без самого последнего
console.log(letters.slice(2, -1));
console.log(letters.slice()); // получаем копию исходного массива, использовать если нужно объеденить в цепочку несколько методов
console.log([...letters]); // получаем копию исходного массива

// splice() - работает так же как и slice(), но изменяет исходный массив, 1-ый парамент с какого элемента ходить удалить, 2ой парамент колличество удаляемых элементов

console.log(letters.splice(1)); // вырезает из исходного массива все элементы начиная с 1, и удаляет их из исходного массива
letters.splice(-1); // удаляет последний элемент из массива
letters.splice(1, 3); // удаляет 3 элемента начиная с элемента с индексом 1

// reverse()

console.log(letters.reverse()); // изменяет исходный массив в обратном порядке

// concat()

let letters1 = ['g', 'h', 'i'];

const letters2 = letters.concat(letters1); // соеденяет 2 массива, не изменяет исходный массив
console.log(letters2);
console.log([...letters, ...letters1]); // соеденяет 2 массива, не изменяет исходный массив

//  join()

console.log(letters2.join(', ')); // объеденяет элементы массива в строку разделяя их ', '
