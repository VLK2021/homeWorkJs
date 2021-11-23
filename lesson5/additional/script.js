// - Дано натуральное число n. Выведите все числа от 1 до n.

// let arr = n => {
//     for (i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// arr(9);



// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.


// let func = (a,b,callback) => {
//     callback(a,b);
// }
// func(10,1, function(a,b){
//     if (a < b) {
//         for (i = a; i <= b; i++){
//             console.log(i);
//         }
//     } else if (a > b) {
//         for (i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
// });



// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// let foo = (array,n) => {
//     for (i = 0; i < array.length; i++){
//         if (i === n) {
//             let num = array[i];
//             array[i] = array[i + 1];
//             array[i + 1] = num;
//         }
//     }
//     console.log(array);
// }
// foo([9,8,0,4,5], 0);


// let foo = (array, n, callback) => {
//     callback(array,n);
// }
// foo([9,8,0,4], 1, function (array, n){
//     for (i = 0; i < array.length; i++){
//         if (i === n) {
//             let num = array[i];
//             array[i] = array[i + 1];
//             array[i + 1] = num;
//         }
//     }
//     console.log(array);
// })

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень. Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let func = array => {
//     let newArray = [];
//     let newArray1 = [];
//     for (i = 0; i < array.length; i++) {
//          array[i] !== 0 ? newArray.push(array[i]) : newArray1.push(array[i]);
//         }
//     return  newArray.concat(newArray1);
// }
//
// let w = func([1,0,6,0,3]);
// console.log(w);

