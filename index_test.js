// Альтернатива з функцією

// function getValidNumbersInput() {
//   let inputItems = prompt('Ввести довільну кількість чисел через кому.');
//   console.log(inputItems);

//   while (inputItems !== null) {
//     const trimmedInput = inputItems.trim();

//     if (trimmedInput === '') {
//       inputItems = prompt(
//         'Пусте значення. Введіть довільну кількість чисел через кому.'
//       );
//     } else {
//       const elements = trimmedInput.split(',');

//       if (elements.every((element) => !isNaN(Number(element.trim())))) {
//         return elements;
//       } else {
//         inputItems = prompt(
//           'Деякі елементи не є числами. Введіть довільну кількість чисел через кому.'
//         );
//       }
//     }
//   }

//   return null;
// }

// const numbers = getValidNumbersInput();

// if (numbers !== null) {
//   const result = numbers.reduce((prev, next) => prev + Number(next), 0);
//   alert(`Сума введених чисел дорівнює ${result}`);
// } else {
//   alert('Відміна');
// }
