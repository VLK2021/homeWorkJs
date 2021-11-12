// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let number1 = +prompt('Введіть перше число!');
// let number2 = +prompt('Введіть друге число!');
//
// if (number1 > number2) {
//     console.log(number1);
// } else if (number2 > number1) {
//     console.log(number2);
// } else if (number1 === number2) {
//     console.log('Числа рівні');
// }



// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.


// let flat = prompt('Введіть номер квартири!(1-90)');
//
// if (flat >=1 && flat <= 20) {
//     console.log('Квартира знаходиться у першому підїзді!');
// } else if (flat >= 21 && flat <= 48) {
//     console.log('Квартира знаходиться у другому підїзді!');
// } else if(flat >= 49 && flat <= 90) {
//     console.log('Квартира знаходиться у третьому підїзді!');
// } else {
//     console.log('Квартири з таким номером не має у цьому будинку!')
// }



// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10
// вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО



// let number = +prompt('Введіть числове значення!');
//
// if(number === 10) {
//     console.log('ВІРНО')
// } else {
//     console.log('НЕВІРНО')
// }

// let number = +prompt('Введіть числове значення!');
// let resalt = number === 10? 'ВІРНО' : 'НЕВІРНО'
// console.log(resalt);



// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else



// let x = {name: 'nick', age: 15};
// let x = ['false', 25];
// let x = true;
// let x = 5;
// let x = 'hjghjdghgh';

// if (typeof x === "number") {
//     console.log(1);
// } else if(typeof x === "string") {
//     console.log(2);
// } else if(typeof x === "boolean") {
//     console.log(3);
// } else if(typeof x === "object") {
//     console.log(4);
// } else {
//     console.log('somesing');
// }




// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести
//     повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН


// let temperatura = prompt('write temp');
//
// if(temperatura >= 10 && temperatura <= 22){
//     console.log('ВЧИТИСЯ')
// } else {
//     console.log('сидимо вдома і вчимося ОНЛАЙН')
// }


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді
//     вивести Повідомлення - що число не вірне ... .

// let number = prompt('write number please!(1-5)');
//
// switch (number) {
//     case '1':
//         console.log('Your prize is car');
//         break;
//     case '2':
//         console.log('Your prize is moto');
//         break;
//     case '3':
//         console.log('Your prize is tv');
//         break;
//     case '4':
//         console.log('Your prize is telefon');
//         break;
//     case '5':
//         console.log('Your prize is flat');
//         break;
//     default:
//         console.log('число не вірне');
//
// }