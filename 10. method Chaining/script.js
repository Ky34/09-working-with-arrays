'use strict';

// Method Chaining (Цепь вызовов методов)

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// Рассчитываем общую сумму выводов средств в EUR
// const totalWithdrawalsEuro = transactions
//   .filter(trans => trans < 0) // фильтруем, оставляем только отрицательные значения
//   // .map((trans, index, arr) => {
//   //   console.log(arr); // для проверки можно на каждом шаге выводить массив, полученый после предыдущего метода
//   //   return trans * 0.86;
//   // })
//   .map(trans => trans * 0.86) // конвертируем в евро (умножаем на 0.86)
//   .reduce((acc, trans) => acc + trans, 0); // суммируем все отрицательные значения уже в евро

const totalWithdrawalsEuro = transactions.reduce(
  (acc, trans) => (trans < 0 ? acc + trans * 0.86 : acc),
  0
);

console.log(totalWithdrawalsEuro);
