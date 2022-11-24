'use strict';

// МОЕ РЕШЕНИЕ
// Тестовые данные:
const catsAge1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const catsAge2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

// const getAverageHumanAge = catAges => {
//   const humanAge = catAges
//     .map(age => (age <= 2 ? age * 10 : age * 7))
//     .filter(age => age > 18)
//     .reduce((acc, age) => acc + age, 0);
//   console.log(Math.trunc(humanAge / catAges.length));
// };

// getAverageHumanAge(catsAge1);
// getAverageHumanAge(catsAge2);

// РЕШЕНИЕ НА КУРСЕ

// решение методом chaining
const getAverageHumanAge = function (catAges) {
  const humanAges = catAges
    .map(age => (age <= 2 ? age * 10 : age * 7))
    .filter(age => age > 18)
    .reduce(
      ({ sum, sumIndex }, catAge) => {
        return {
          sum: sum + catAge,
          sumIndex: sumIndex + 1,
        };
      },
      { sum: 0, sumIndex: 0 }
    );
  console.log(humanAges.sum / humanAges.sumIndex);
};

// const getAverageHumanAge = function (catAges) {
//   const humanAges = catAges
//     .map(age => (age <= 2 ? age * 10 : age * 7))
//     .filter(age => age > 18);
//   const average = humanAges.reduce((acc, age) => acc + age, 0);
//   console.log(average / humanAges.length);
// };

getAverageHumanAge(catsAge1);
getAverageHumanAge(catsAge2);
