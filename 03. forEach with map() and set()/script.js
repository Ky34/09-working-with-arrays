'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['CNY', 'Chinese yuan'],
]);

const transactions = [300, 250, -500, 5000, -750, -180, 500, 400, -350, -120];

// forEach c map() и set()

// map()
// При использовании forEach() с map() в функцию так же передается 3 параметра: 1ый значение, из пары ключ-значение, 2-ой ключ, 3-ий сама структура map()
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set()
const uniqueCurrencies = new Set(['USD', 'EUR', 'CNY', 'CNY']);
console.log(uniqueCurrencies);

// в Set() ключ равен значению
// _ -  нижним подчеркиванием указывается ненужная переменная
uniqueCurrencies.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
  console.log(set);
});
