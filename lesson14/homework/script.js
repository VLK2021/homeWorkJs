// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с
// Пообідати - 1с // // І так далі

// function getAp(getAp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (getAp) {
//                 resolve('Я просинаюсь!');
//             } else {
//                 reject('I want sleep!');
//             }
//         }, 900);
//     })
// }
//
// function goBath(bath) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bath) {
//                 resolve('іду у ванну!');
//             } else {
//                 reject('I dont go to bathrom');
//             }
//         }, 500);
//     })
// }
//
// function goEat(eat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (eat) {
//                 resolve(`Іду їсти ${eat}`);
//             } else {
//                 reject('I do not go to kitchen(((!');
//             }
//         }, 700);
//     })
// }
//
// function goWork(gowork) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (gowork) {
//                 resolve('Я іду на роботу go go go');
//             } else {
//                 reject('I stay at home');
//             }
//         }, 100);
//     })
// }
//
// function workOnTheWork(work) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (work) {
//                 resolve('Я працюю на роботі!');
//             } else {
//                 reject;
//             }
//         }, 600);
//     })
// }
//
// function goHome(gohome) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (gohome) {
//                 resolve('Я іду додому!!!!');
//             } else {
//                 reject('I stay at work(((');
//             }
//         }, 200);
//     })
// }
//
// function watchTv(watchtv) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (watchtv) {
//                 resolve('Я дивлюсь телевізор!')
//             } else {
//                 reject('wrong!')
//             }
//         }, 400);
//     })
// }
//
// function goSleep(gosleep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (gosleep) {
//                 resolve('Я іду спати!');
//             } else {
//                 reject('wrong!');
//             }
//         }, 300);
//     })
// }
//
//
// getAp(true)
//     .then(getap => {
//         console.log(getap);
//         return goBath(true);
//     })
//
//     .then(bath => {
//         console.log(bath);
//         return goEat('сніданок.');
//     })
//
//     .then(breackfast => {
//         console.log(breackfast);
//         return goWork(true);
//     })
//
//     .then(gowork => {
//         console.log(gowork);
//         return workOnTheWork(true);
//     })
//
//     .then(work => {
//         console.log(work);
//         return goEat('обід.');
//     })
//
//     .then(lanch => {
//         console.log(lanch);
//         return workOnTheWork(true);
//     })
//
//     .then(work => {
//         console.log(work);
//         return goHome(true);
//     })
//
//     .then(gohome => {
//         console.log(gohome);
//         return goBath(true);
//     })
//
//     .then(bath => {
//         console.log(bath);
//         return goEat('вечерю.');
//     })
//
//     .then(diner => {
//         console.log(diner);
//         return watchTv(true);
//     })
//
//     .then(tv => {
//         console.log(tv);
//         return goSleep(true);
//     })
//     .then(gobed => {
//         console.log(gobed);
//     })
//     .catch(e => {
//         console.error('error', e);
//     })
//
//
