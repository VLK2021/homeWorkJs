// - створити функцію яка обчислює та повертає площу прямокутника висотою

// function rectangle(shur, vus) {
//     let s = shur * vus;
//     return s;
// }
// let s = rectangle(508, 15);
// console.log(s);



// - створити функцію яка обчислює та повертає площу кола

// const p = 3.14;
// function circle(r) {
//     let s = p * (Math.pow(r, 2));
//     return s;
// }
// let s = circle(3);
// console.log(s);


// - створити функцію яка обчислює та повертає площу циліндру
// s = 2pr * (h + r)  r-радіус   h-- висота

// const p = 3.14;
// function cylinder(r, h) {
//     let s = 2 * p * r * (h + r);
//     return s;
// }
// let s = cylinder(5, 2)
// console.log(s);


// - створити функцію яка приймає масив та виводить кожен його елемент

// function arr(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// arr([5, 2, 6, 9,45,'gfggh', true]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraf(text) {
//     document.write(`<p> ${text} </p>`);
// }
// paragraf('jgfyfnjhu4646543');


// - створити функцію яка створює ul з трьома елементами li.

// function uel() {
//     document.write('<ul>');
//     document.write('<li> text </li>');
//     document.write('<li> text </li>');
//     document.write('<li> text </li>');
//     document.write('</ul>');
// }
// uel();


// Текст li задати через аргумент всім однаковий

// function uel(text) {
//     document.write('<ul>');
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//     document.write('</ul>');
// }
// uel('bfjfng');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createUl(text, li) {
//     document.write('<ul>');
//     for (i = 0; i< li; i++) {
//         document.write(`<li> ${text} </li>`);
//     }
//     document.write('</ul>');
// }
// createUl('rrrrrrrrr', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arr(array) {
//
//     document.write('<ul>');
//     for (i = 0; i < array.length; i++) {
//         let elem = array[i];
//         document.write(`<li> ${elem} </li>`);
//     }
//     document.write('</ul>');
// }
//
// arr([2, 56,'fff', true, -58, 'fgfghf',false]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.


// function masuv(array) {
//     for (i =0; i < array.length; i++) {
//         document.write(`<div> ${array[i].id} - ${array[i].name} - ${array[i].age} </div>`)
//     }
// }
// masuv([
//     {id:1, name: 'nick', age: 15},
//     {id:2, name: 'vova', age: 50},
//     {id:3, name: 'victor', age: 30},
//     {id:4, name: 'sasha', age: 22}
// ]);