// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let rec = (shur, vus) => console.log(shur * vus) ;
// rec(508,150);


// - створити функцію яка обчислює та повертає площу кола

// const p = 3.14;
// let circle = r => console.log(p * (Math.pow(r, 2)));
// circle(3);


// - створити функцію яка обчислює та повертає площу циліндру
// s = 2pr * (h + r)  r-радіус   h-- висота

// const p = 3.14;
// let cylinder = (r, h) => console.log(2 * p * r * (h + r));
// cylinder(5, 56);


// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = array => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// arr([5, 2, 6, 9,45,'gfggh', true]);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let par = text => document.write(`<p> ${text} </p>`);
// par('Hello OKTEN!!!');



// - створити функцію яка  створює ul з трьома елементами li.

// let ulli = num => {
//     document.write('<ul>');
//     for (i = 0; i < num; i++) {
//         document.write('<li> text </li>');
//     }
//     document.write('</ul>');
// }
// ulli(3);



// Текст li задати через аргумент всім однаковий

// let ulli = text => {
//     document.write('<ul>');
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//     document.write('</ul>');
// }
// ulli('OKTEN');



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.

// let ulli = text => {
//     document.write('<ul>');
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//     document.write('</ul>');
// }
// ulli('OKTEN');



// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ulli = (num, text) => {
//     document.write('<ul>');
//     for (i = 0; i < num; i++) {
//         document.write(`<li> ${text} </li>`);
//     }
//     document.write('</ul>');
// }
// ulli(10, 'OKTEN');


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let arr = array => {
//     document.write('<ul>');
//     for (i = 0; i < array.length; i++) {
//         document.write(`<li> ${array[i]} </li>`);
//     }
//     document.write('</ul>');
// }
// arr([2, 56,'fff', true, -58, 'fgfghf',false]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.


// let arr = array => {
//     for (i = 0; i < array.length; i++) {
//         document.write(`<div> ${array[i].id} - ${array[i].name} - ${array[i].age} </div>`)
//     }
// }
//
// arr([
//     {id:1, name: 'nick', age: 15},
//     {id:2, name: 'vova', age: 50},
//     {id:3, name: 'victor', age: 30},
//     {id:4, name: 'sasha', age: 22}
// ]);


