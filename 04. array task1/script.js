'use strict';

// Тестовые данные:
//     1. Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
//     2. Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

// catsTotal.forEach(function (age, index) {
//   let text = age < 2 ? 'ещё котёнок' : `взрослая, ей ${age} лет`;
//   console.log(`Кошка №${index + 1} ${text}`);
// });

// МОЁ РЕШЕНИЕ

// const verifyCats = function (catsJane, catsJulia) {
//   const catsJaneFix = catsJane.slice(1, -1);
//   const catsTotal = catsJaneFix.concat(catsJulia);
//   catsTotal.forEach((age, index) => {
//     let text = age < 2 ? 'ещё котёнок' : `взрослая, ей ${age} лет`;
//     console.log(`Кошка №${index + 1} ${text}`);
//   });
//   console.log(`==================================`);
// };

// verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9], [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]);

const verifyCats = function (catsJane, catsJulia) {
  const catsJaneFix = catsJane.slice(1, -1);
  const catsTotal = catsJaneFix.concat(catsJulia);
  catsTotal.forEach((age, index) => {
    if (age < 2) {
      console.log(`Кошка №${index + 1} ещё котёнок`);
    } else if (age < 5) {
      console.log(`Кошка №${index + 1} взрослая, ей ${age} года`);
    } else {
      console.log(`Кошка №${index + 1} взрослая, ей ${age} лет`);
    }
  });
  console.log(`==================================`);
};

verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9], [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]);

// РЕШЕНИЕ НА КУРСЕ

// const catsJaneData1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
// const catsJuliaData1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
// const catsJaneData2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
// const catsJuliaData2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

// const verifyCats = function (catsJane, catsJulia) {
//   const catsJaneCorrect = catsJane.slice();
//   catsJaneCorrect.splice(0, 1);
//   catsJaneCorrect.splice(-1);
//   // console.log(catsJaneCorrect);

//   const cats = catsJaneCorrect.concat(catsJulia);
//   // console.log(cats);

//   cats.forEach((catAge, index) => {
//     if (catAge >= 2) {
//       console.log(`Кошка №${index + 1} взрослая, ей ${catAge} лет`);
//     } else {
//       console.log(`Кошка №${index + 1} ещё котёнок`);
//     }
//   });
// };

// verifyCats(catsJaneData1, catsJuliaData1);
// verifyCats(catsJaneData2, catsJuliaData2);
