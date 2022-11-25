'use strict';

const cats = [
  { catWeight: 3, foodWeight: 25, owners: ['Наташа'] },
  { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
  { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
  { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
];

// 1.

cats.forEach(cat => (cat.recomendedFood = cat.catWeight * 0.75 * 12));
console.log(cats);

// 2.

const alexCat = cats.find(cat => cat.owners.includes('Алекс')); // ищем объект в котором в значении свойства есть Алекс
console.log(alexCat);
console.log(
  `Кошка Алекса ест слишком ${
    alexCat.foodWeight > alexCat.recomendedFood ? 'много' : 'мало'
  }`
);

// 3.

// const catEatTooMuchOwners = cats
//   .filter(cat => cat.foodWeight > cat.recomendedFood)
//   .flatMap(cat => cat.owners);
// console.log(catEatTooMuchOwners);
// console.log(
//   `${catEatTooMuchOwners.join(
//     ', '
//   )} - хозяева кошек, которые едят слишком много!`
// );

// const catEatTooLittleOwners = cats
//   .filter(cat => cat.foodWeight < cat.recomendedFood)
//   .flatMap(cat => cat.owners);
// console.log(catEatTooLittleOwners);
// console.log(
//   `${catEatTooLittleOwners.join(
//     ', '
//   )} - хозяева кошек, которые едят слишком мало!`
// );

const catsEatTooMuchOwners = cats
  .filter(cat => cat.foodWeight > cat.recomendedFood)
  .flatMap(cat => cat.owners);
console.log(catsEatTooMuchOwners);
console.log(
  `${catsEatTooMuchOwners.join(
    ', '
  )} - хозяева кошек, которые едят слишком много!`
);

const catsEatTooLittleOwners = cats
  .filter(cat => cat.foodWeight < cat.recomendedFood)
  .flatMap(cat => cat.owners);
console.log(catsEatTooLittleOwners);
console.log(
  `${catsEatTooLittleOwners.join(
    ', '
  )} - хозяева кошек, которые едят слишком мало!`
);

// 5

console.log(cats.some(cat => cat.recomendedFood === cat.foodWeight));

// 6

const isFoodWeightNormal = cat =>
  cat.foodWeight > cat.recomendedFood * 0.9 &&
  cat.foodWeight < cat.recomendedFood * 1.1;

console.log(cats.some(cat => isFoodWeightNormal(cat)));

// 7
const catsNormalFood = cats.filter(cat => isFoodWeightNormal(cat));

console.log(catsNormalFood);

// 8

// по возрастанию
const catsSortUp = cats
  .slice()
  .sort((x, y) => x.recomendedFood - y.recomendedFood);
console.log(catsSortUp);

// по убыванию
const catsSortDown = cats
  .slice()
  .sort((x, y) => y.recomendedFood - x.recomendedFood);
console.log(catsSortDown);
