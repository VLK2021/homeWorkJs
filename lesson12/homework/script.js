// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(resalt => {
//
//         let divWrap = document.createElement('div')
//         divWrap.className = 'wrap';
//         document.body.appendChild(divWrap);
//
//         resalt.forEach(value => {
//
//             let blockDiv = document.createElement('div');
//             blockDiv.className = 'post';
//             divWrap.appendChild(blockDiv);
//
//             for (const valueKey in value) {
//
//                 let blockKeyDiv = document.createElement('div');
//                 blockKeyDiv.className = 'keyDiv';
//                 blockKeyDiv.innerHTML = `${valueKey.toUpperCase()} - ${value[valueKey]} `;
//                 blockDiv.appendChild(blockKeyDiv);
//             }
//         })
//     })


//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments



// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(responce => responce.json())
// .then(result => {
//
//     let wraperDiv = document.createElement('div');
//     wraperDiv.className = 'wraper';
//     document.body.appendChild(wraperDiv);
//
//     result.forEach(value => {

//         let blockDiv = document.createElement('div');
//         blockDiv.className = 'comment';
//         wraperDiv.appendChild(blockDiv);

//         for (const valueKey in value) {

//             let comentKeyDiv = document.createElement('div');
//             comentKeyDiv.className = 'comentKeyDiv';
//             blockDiv.appendChild(comentKeyDiv);

//             comentKeyDiv.innerHTML = `${valueKey.toUpperCase()} - ${value[valueKey]}`;
//         }
//     })
// })