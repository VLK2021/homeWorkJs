// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.length);

// let str = 'lorem ipsum';
// console.log(str.length);

// let str = 'javascript is cool';
// console.log(str.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// let strUperCase = str.toUpperCase();
// console.log(strUperCase);

// let str = 'lorem ipsum';
// console.log(str.toUpperCase(str));

// let str = 'javascript is cool';
// console.log(str.toUpperCase(str));


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD';
// console.log(str.toLowerCase(str));

// let stg = 'LOREM IPSUM';
// console.log(stg.toLowerCase(stg));

// let stg = 'JAVASCRIPT IS COOL';
// console.log(stg.toLowerCase(stg));


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim(str));


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// let arr = str => {
//     console.log(str.split(' '));
// }
// arr('Каждый охотник желает знать');


// let arr = str => console.log(str.split(' '));
// arr('Каждый охотник желает знать');


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// function delete_characters(str, length) {
//     document.writeln(str.substr( 0, length));
// }
//
// delete_characters('Каждый охотник желает знать', 7);


// let delete_characters = (str, length) => str.substr( 0, length);
// let w = delete_characters('Каждый охотник желает знать', 7);
// document.writeln(w);


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// let insert_dash = str => str.replaceAll(' ', '-').toUpperCase();
// let w = insert_dash("HTML JavaScript PHP");
// document.writeln(w);


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
// з нижнього регістру у верхній.


// let func = str => str[0].toUpperCase() + str.substr(1);
// document.writeln(func("html javascript php"));



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// function capitalize(str) {
//     let arrayCapitalize = str.split(' ');
//     let resalt = '';
//     for (i = 0; i < arrayCapitalize.length; i++) {
//         arrayCapitalize[i] = arrayCapitalize[i][0].toUpperCase() + arrayCapitalize[i].substr(1);
//          resalt = resalt + ' ' + arrayCapitalize[i];
//     }
//     return resalt;
// }
// let newStr = capitalize('каждый охотник желает знать');
// document.writeln(newStr);







