// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => {
//     let array =[];
//     while (str.length) {
//         array.push(str.substr(0, n));
//         str = str.slice(n);
//     }
//     return array;
// }
// let w = cutString('неизбежность', 2);
// console.log(w);




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




// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе
// :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// let func = str => {
//     let strMaket = str.toLowerCase();
//     if (strMaket.includes('@')) {
//         console.log('@ - присутній!');
//     }  if (strMaket.indexOf('@') >= 4) {
//         console.log('данні до знака равлика(@) присутні');
//     } if (strMaket.includes('.')) {
//         console.log('крапка присутня!')
//     } if (strMaket.indexOf('.') > (strMaket.indexOf('@') + 2)) {
//         console.log('Крапка знаходиться на допустимій відстані від равлика!')
//         document.writeln(`${str} - даний вираз відповідає допустимим  умовам використання електонної адреси!!!)))`)
//     } else {
//         console.log('Wrong!');
//         document.writeln(`${str} - даний вираз Є хибним!!!)))`);
//     }
// }
// func("someemail@gmail.com");
// func("someeMAIL@gmail.com");
// func("someeMAIL@i.ua");
// func("some.email@gmail.com");





// - є масив


// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let sort = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
// console.log(sort);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let count = (str, stringsearch) => {
//     let resalt = 0;
//     let w = str.split('');
//     w.map(value => {
//         if (value === 'о') {
//             resalt++;
//         }
//     })
//     console.log(resalt);
// }
// count('Астрономия это наука о небесных объектах', 'о');


// let count = (str, stringsearch) => {
//     let resalt = 0;
//      str.split('').map(value => {
//         value === 'о' ? resalt++ : 'wrong!';
//     });
//     return resalt;
// }
// let resalt = count('Астрономия это наука о небесных объектах', 'о');
// console.log(resalt);


//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'



// let cutString = str => str.replaceAll('тела', '').replaceAll('масс', '');
// let w = cutString("Сила тяжести приложена к центру масс тела");
// console.log(w);


// let cutString = (str, n) => {
//     let resalt = '';
//     let array = str.split(' ');
//     for (i = 0; i < array.length - n; i++) {
//         resalt = resalt + ' ' + array[i];
//     }
//     console.log(resalt);
// }
//
// cutString("Сила тяжести приложена к центру масс тела", 2);


// let cutString = (str, n) => str.split(' ').slice(0, n).join(' ');
// let w = cutString("Сила тяжести приложена к центру масс тела", 5);
// console.log(w);