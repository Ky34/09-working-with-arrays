'use strict';

// МОЕ РЕШЕНИЕ
// Тестовые данные:
const catsAge1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const catsAge2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

const getAverageHumanAge = function (catAges) {
  const humanAge = catAges
    .map(age => (age <= 2 ? age * 10 : age * 7))
    .filter(age => age > 18);
  const totalAges = humanAge.reduce((acc, age) => acc + age, 0);
  console.log(Math.trunc(totalAges / humanAge.length));
};

getAverageHumanAge(catsAge1);
getAverageHumanAge(catsAge2);

// РЕШЕНИЕ НА КУРСЕ

// ????
