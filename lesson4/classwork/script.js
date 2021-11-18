// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function num(a, b, c) {
//
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
// num(15,45,32);



// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// function num(a, b, c) {
//
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
// num(15,84,23);



// - створити функцію яка повертає найбільше число з масиву

// function number(array) {
//     let max = array[0];
//     for (i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//     return max;
// }
//
//  let w = number([2, 65, 95, -456, 56, 623, 48, 910, 5, 1026]);
// console.log(w);



// - створити функцію яка повертає найменьше число з масиву

// function number(array) {
//     let min = array[0];
//     for (i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i]
//         }
//     }
//     return min;
// }
//
//  let w = number([2, 65, 95, -456, 56, 623, 0, 910, 5, 1026, -1026, 26]);
// console.log(w);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

// function suma(array) {
//     let sum = 0;
//     for (i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     return sum;
// }
// let xxx = suma([1,2,10]);
// console.log(xxx);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function suma(array) {
//     let sum = 0;
//     for (i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     let ser = sum/array.length;
//
//     return ser;
// }
// let xxx = suma([101, 10, 10, 50, 100]);
// console.log(xxx);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// function func() {
//     let max = 0;
//     let min = arguments[0];
//     for (const element of arguments) {
//         if (element < min) {
//             min = element;
//         } else if (element > max){
//             max = element;
//         }
//     }
//     console.log(max);
//     return min;
// }
// let num = func(2,3,-56,956,1,63,);
// console.log(num);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 -
// Math.round(Math.random()*100)) та виводить його.


// function func() {
//     let array = [];
//     for (i = 0; i < 20; i++) {
//         array[i] = Math.round(Math.random()*100);
//     }
//     console.log(array);
// }
// func();



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

// function func(limit) {
//     let array = [];
//     for (i = 0; i < 25; i++) {
//         array[i] = Math.round(Math.random()*limit);
//     }
//     console.log(array);
// }
// func(500);



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку.
// [1,2,3] -> [3, 2, 1].


// function func(array) {
//     let arr = [];
//     for (i = 0; i < array.length; i++) {
//         arr[array.length - (i+1)] = array[i];
//     }
//     return arr;
// }
// let arrr = func([1,2,3]);
// console.log(arrr);














