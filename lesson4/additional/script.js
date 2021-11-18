// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.

// function func() {
//     let sum = 0;
//     for (i = 0; i < arguments.length; i++) {
//         if (arguments.length === 1) {
//             console.log(arguments[i]);
//             sum= '';
//         } else if (arguments.length > 1 && typeof arguments[i] === "number") {
//             sum = sum + arguments[i];
//         }else if (arguments.length > 1 && typeof arguments[i] === "string") {
//             sum = `${sum}${arguments[i]}`;
//         }
//     }
//     console.log(sum);
// }
// func(100,56,'32','hgfgfyug',56);
// func(5);


//
// - створити функцію  яка приймає два масиви та скаладає значення
// елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function func(array1, array2) {
//     let newArr = [];
//     for (i = 0; i < array1.length; i++) {
//
//         for (j = 0; j < array2.length; j++) {
//             if (j === i) {
//                 newArr[i] = array2[j] + array1[i];
//             }
//         }
//     }
//     return newArr;
// }
//
// let array = func([1,2,3,4], [2,3,4,5]);
// console.log(array);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function func(array) {
//     let arreyKey = [];
//     for (i = 0; i < array.length; i++) {
//         let element = array[i];
//         for (let key in element) {
//             arreyKey.push(key);
//         }
//     }
//     return arreyKey;
// }
// let masuv = func([{name: 'Dima', age: 13}, {model: 'Camry'}]);
// console.log(masuv);


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// function func(array) {
//     let arreyKey = [];
//     for (i = 0; i < array.length; i++) {
//         let element = array[i];
//         let znachenj = Object.values(element);
//         for (let value of znachenj) {
//             arreyKey.push(value);
//         }
//     }
//     return arreyKey;
// }
// let masuv = func([{name: 'Dima', age: 13}, {model: 'Camry'}]);
// console.log(masuv);









