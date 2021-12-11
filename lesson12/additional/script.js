// 1.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий
//     блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий
//     блок виводяться всі коментарі поточного поста


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(resalt => {
//
//         let wrapDiv = document.createElement('div');
//         wrapDiv.className = 'wrapDiv';
//         document.body.append(wrapDiv);
//
//         function func(arr) {
//
//             for (const arrElement of arr) {
//                 let userDiv = document.createElement('div');
//                 userDiv.className = 'userDiv';
//                 wrapDiv.append(userDiv);
//                 userDiv.style.marginBottom = '5px';
//
//                 if (typeof arrElement === "object") {
//
//                     for (const arrElementKey in arrElement) {
//
//                     }
//                 }else {
//                     userDiv.innerHTML = `${}`
//                 }
//             }
//         }
//         func(resalt)
//     })

// for (const obj of resalt) {
//     console.log(obj);
//     for (const objKey in obj) {
//         let userDiv = document.createElement('div');
//         if (typeof obj[objKey] === "object"){
//
//             for (const objKeyKey in obj[objKey]) {
//
//                 if (typeof obj[objKey][objKeyKey] === "object"){
//
//
//
//                 }else {
//                     let userDiv = document.createElement('div');
//                     userDiv.className = 'userDiv';
//                     wrapDiv.append(userDiv);
//                     userDiv.style.marginBottom = '5px';
//                     userDiv.innerHTML = `${objKeyKey} - ${obj[objKey][objKeyKey]}`;
//
//                     // let btn = document.createElement('button');
//                     // btn.innerText = 'click';
//                     // userDiv.append(btn);
//                 }
//             }
//         }else {
//
//             userDiv.className = 'userDiv';
//             wrapDiv.append(userDiv);
//             userDiv.style.marginBottom = '5px';
//             userDiv.innerHTML = `${objKey} - ${obj[objKey]}`;
//         }
//
//
//     }
//
//
// }










