// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let min = (a, b, c) => {
//     let w = a < b && a < c ? a : b < a && b < c ? b : c < a && c < b ? c : 'w';
//     console.log(w);
// }
// min(2,-1,32);



// let min = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     } else {
//         console.log('wrong!!!');
//     }
// }
// min(2,45,32);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// let max = (a, b, c) => {
//     let num = a > b && a > c ? a : b > a && b > c ? b : c > a && c > b ? c : 'w';
//     console.log(num);
// }
// max(32,5,85);



// let max = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     } else {
//         console.log('wrong!!!');
//     }
// }
// max(32,5,85);


// - створити функцію яка повертає найбільше число з масиву

// let max = array => {
//     let number = 0;
//     for(i = 0; i <array.length; i++) {
//         (array[i] > number)? number = array[i] : 'w';
//     }
//     return number;
// }
// let w = max([20, 300, 56, 89, 75, -5]);
// console.log(w);


// - створити функцію яка повертає найменьше число з масиву

// let min = array => {
// let number = 0;
// for(i = 0; i <array.length; i++) {
//     (array[i] < number)? number = array[i] : 'w';
// }
// return number;
// }
// let w = min([20, 3, 56, 1, -75]);
// console.log(w);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13


// let suma = array => {
//     let resalt = 0;
//     for (const element of array) {
//         resalt = resalt + element;
//     }
//     return resalt;
// }
// let w = suma([1,2,10]);
// console.log(w);



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let func = array => {
//     let suma = 0;
//     for (const element of array) {
//         suma = suma + element;
//     }
//     let serAr = suma/array.length;
//     return serAr;
// }
// let w = func([1, 2, 3, 4, 5]);
// console.log(w);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

//arguments  в стрілочних функціях фіксована кількість

// function func() {
//     let max = 0;
//     let min = arguments[0];
//     for (const element of arguments) {
//         element < min ? min = element : element > max ? max = element : 'w';
//     }
//     console.log(max);
//     return min;
// }
// let num = func(2,3,-56,956,1,63,);
// console.log(num);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 -
// Math.round(Math.random()*100)) та виводить його.


// let arr = array => {
//     for (i = 0; i < 15; i++) {
//         array[i] = Math.round(Math.random() * 100);
//     }
//     console.log(array);
// }
// arr([]);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.





// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
