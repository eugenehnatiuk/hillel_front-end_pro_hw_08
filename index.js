/* Створити масив чисел, елементи якого задає користувач. Вивести суму цих чисел.

За основу взяти задачку з урока, де користувач вводить всі елементи одним рядком.

cancel має припиняти виконання програми, а порожній рядок не повинен сприйматися як 0 */

// let inputItems = prompt('Ввести довільну кількість чисел через кому.');
// debugger;
// console.log(inputItems);

// if (inputItems === null) {
//   alert('Відміна.');
// }

// else if (!inputItems?.trim()) {
//   while (!inputItems?.trim()) {
//     if (inputItems === null) {
//       alert('Відміна.');
//       break;
//     }
//     inputItems = prompt(
//       'Ви нічого не ввели чи ввели пусте значення. Введіть довільну кількість чисел через кому.'
//     );
//   }
// } else {
//   let array = inputItems.split(',');
//   let isNotANumberElement = array.some((element) =>
//     isNaN(Number(element.trim()))
//   );
//   let result;

//   if (isNotANumberElement || !inputItems?.trim()) {
//     while (isNotANumberElement || !inputItems?.trim()) {
//       if (inputItems === null) {
//         alert('Відміна.');
//         break;
//       }
//       inputItems = prompt(
//         'Серед введених значень було не число. Введіть довільну кількість чисел через кому'
//       );
//     }
//   } else {
//     array = inputItems.split(',');
//     result = array.reduce((prev, next) => +prev + +next, 0);
//     alert(result);
//   }
// }

// let inputItems = prompt('Ввести довільну кількість чисел через кому.');
// debugger;
// console.log(inputItems);

// if (inputItems === null) {
//   alert('Відміна');
// } else if (!inputItems?.trim()) {
//   alert('Пусте значення');
// } else {
//   let array = inputItems.split(',');
//   let isNotANumberElement = array.some(
//     (element) => isNaN(Number(element.trim())) || !element.trim()
//   );
//   let result;
//   if (isNotANumberElement) {
//     alert('Деякі елменти не є числами');
//   } else {
//     result = array.reduce((prev, next) => Number(prev) + Number(next), 0);
//     alert(result);
//   }
// }

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
  let array = inputItems.split(',');
  let result = parseFloat(array.reduce((prev, next) => Number(prev) + Number(next), 0));
  alert(`Сума введених чисел дорівнює ${result}`);
}
