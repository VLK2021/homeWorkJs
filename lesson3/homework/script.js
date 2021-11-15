// --створити масив з:
//     - з 5 числових значень

// let array = [1,56,45,-56,0];
// console.log(array);


// - з 5 стічкових значень

// let array = ['qqq', 'www', 'eee', 'rrr', 'ttt'];
// console.log(array);


// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let array = [254, true, 'qweds', -12, false];
// console.log(array);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

// let array = [];
//
// array[0] = 12;
// array[1] = false;
// array[2] = 'fhgf';
// array[3] = 0;
// array[4] = 'hjhu';
// array[5] = -56;
//
// console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 11; i++) {
//     document.write(`<div>block</div>`);
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 11; i++) {
//     document.write(`<div>block - ${i}</div>`)
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write('<h1>OWU</h1>');
//
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>OWU - ${i}</h1>`);
//
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [1, 2, 52, 32, -52, 0, -45, 73, 129, -852];
// for (let i = 0; i < array.length; i++) {
//     let arrayElement = array[i];
//     console.log(arrayElement);
// }


// for (const arrayElement of array) {
//     console.log(arrayElement);
// }



// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array = ['qqq', 'www', 'eee', 'rrr', 'ttt', 'yyy', 'uuu', 'iii', 'ooo', 'ppp'];
// for (let i = 0; i < array.length; i++) {
//     let arrayElement = array[i];
//     console.log(arrayElement);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array = [1, true, 0, 'dsfd', -56, false, 'erre', 89, 15987, true];
// for (const arrayElement of array) {
//     console.log(arrayElement);
// }



// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи

// let array = [1, true, 0, 'dsfd', -56, false, 'erre', 89, 15987, true];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "boolean") {
//         console.log(array[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

// let array = [12, -9547, 'hghg', true, 0, 'oiuerio', -95, false, 56, 'rrrr'];
// for (const arrayElement of array) {
//     if (typeof arrayElement === "number") {
//         console.log(arrayElement);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

// let array = [12, -9547, 'hghg', true, 0, 'oiuerio', -95, false, 56, 'rrrr'];
// for (const arrayElement of array) {
//     if (typeof arrayElement === "string") {
//         console.log(arrayElement);
//     }
//  }



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];
//
// array[0] = 98;
// array[1] = true;
// array[2] = 98;
// array[3] = 'hjghj';
// array[4] = -9851;
// array[5] = false;
// array[6] = 'gty';
// array[7] = -654;
// array[8] = 'ytytrt';
// array[9] = true;
//
// for (i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 10; i = i + 1) {
//     console.log(i);
//     document.write(`${i} <br/>`);
// }


// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 100; i = i + 1) {
//     console.log(i);
//     document.write(`${i} <br/>`);
// }


// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 100; i+= 2) {
//     console.log(i);
//     document.write(`${i} <br/>`);
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (i = 0; i < 100; i++) {
//     if (i%2 === 0) {
//         console.log(i);
//         document.write(`${i} <br/>`);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (i = 0; i < 100; i++) {
//     if (i%2 === 1) {
//         console.log(i);
//         document.write(`${i} <br/>`);
//     }
// }