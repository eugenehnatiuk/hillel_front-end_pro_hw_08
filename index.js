/* Створити масив чисел, елементи якого задає користувач. Вивести суму цих чисел.

За основу взяти задачку з урока, де користувач вводить всі елементи одним рядком.

cancel має припиняти виконання програми, а порожній рядок не повинен сприйматися як 0 */

// Варіант 1. Лише виведення помилки

// let inputItems = prompt('Ввести довільну кількість чисел через кому.');
// debugger;
// console.log(inputItems);

// let isNotANumberElement = inputItems
//   .split(',')
//   .some((element) => isNaN(Number(element.trim())) || !element.trim());

// if (inputItems === null) {
//   alert('Відміна');
// } else if (!inputItems?.trim() || isNotANumberElement) {
//   if (!inputItems?.trim()) {
//     alert('Пусте значення.');
//   } else if (isNotANumberElement) {
//     alert('Деякі елменти не є числами');
//   }
// } else {
//   let result = parseFloat(
//     inputItems.split(',').reduce((prev, next) => Number(prev) + Number(next), 0)
//   );
//   alert(`Сума введених чисел дорівнює ${result}`);
// }

// Варіант 2. Постійний запит до введення коректних даних.

let inputItems = prompt('Ввести довільну кількість чисел через кому.');
// debugger;
console.log(inputItems);

let isNotANumberElement = inputItems
  ?.split(',')
  .some((element) => isNaN(Number(element.trim())) || !element.trim());

while (inputItems !== null && (!inputItems?.trim() || isNotANumberElement)) {
  if (!inputItems?.trim()) {
    inputItems = prompt(
      'Пусте значення. Введіть довільну кількість чисел через кому.'
    );
  } else {
    inputItems = prompt(
      'Деякі елементи не є числами. Введіть довільну кількість чисел через кому.'
    );
  }
  isNotANumberElement = inputItems
    ?.split(',')
    .some((element) => isNaN(Number(element.trim())) || !element.trim());
}

if (inputItems === null) {
  alert('Відміна');
} else {
  let result = parseFloat(
    inputItems.split(',').reduce((prev, next) => Number(prev) + Number(next), 0)
  );
  alert(`Сума введених чисел дорівнює ${result}`);
}
