//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let func =(str, znak) => {
//     let resalt = [];
//     let array = str.replaceAll(znak, ' ').split(' ');
//      for (i = 0; i < array.length; i++) {
//          if (array[i].length > 2) {
//              resalt.push(array[i]);
//          }
//      }
//     console.log(resalt.join(' '));
// }
// func('Hermione__Granger', '_');



// let func = (str, znak) => {
//     let resalt = [];
//     let array = str.replaceAll(znak, ' ').split(' ');
//     array.map(value => value.length > 2 ? resalt.push(value) : 'wrong!');
//     return resalt.join(' ');
// }
// let w = func('Harry..Potter', '.');
// console.log(w);


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// let func = array => {
//    for (i = 0; i < 10; i++) {
//        array.push(Math.round(Math.random() * 100));
//    }
//     console.log(array);
// }
// func([]);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort


// let func = array => {
//    for (i = 0; i < 10; i++) {
//        array.push(Math.round(Math.random() * 100));
//    }
//     return array.sort((a, b) => a - b);
// }
// let w = func([]);
// console.log(w);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let func = array => {
//     for (i = 0; i < 10; i++) {
//         array.push(Math.round(Math.random() * 100));
//     }
//     return array.filter(element => element%2 === 0);
// }
// let w = func([]);
// console.log(w);



// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції)
// . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


// let func = array => {
//     for (i = 0; i < 10; i++) {
//         array.push(Math.round(Math.random() * 100));
//     }
//     return array.map((value) => String(value));
// }
// let w = func([]);
// console.log(w);



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]



// let sortNums = (array, direction) => {
//      direction === '>' ? array.sort((a, b) => a - b) :
//      direction === '<' ? array.sort((a, b) => b - a) : 'wrong!'
//     return array;
// }
// let w = sortNums([11,21,3], '>');
// console.log(w);



// - є масив


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];



// -- відсортувати його за спаданням за monthDuration



// let w = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(w);



// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


// let newCoursesAndDurationArray = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(newCoursesAndDurationArray);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// let cutString = (str, n) => {
//     let array = [];
//     for (i = 0; i < str.length + n; i++) {
//         array.push(str.substr(0, n));
//         str = str.slice(n);
//     }
//     return array
// }
// let w = cutString('наслаждение', 3);
// document.writeln(w);





