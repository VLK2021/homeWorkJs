// є масив -
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку
// потрібно вивест в документ всіх обраних на попередньому етапі.

// users.forEach(value => {
//     let div = document.createElement('div');
//     div.innerHTML = JSON.stringify(value);
//     div.style.marginBottom = '2px';
//     document.body.appendChild(div);
//     let btn = document.createElement('button');
//     btn.innerHTML = 'click';
//     document.body.appendChild(btn);
//
//     btn.onclick = e => {
//         let favorites = JSON.parse(localStorage.getItem('keyObj')) || [];
//         favorites.push(div.innerText);
//         localStorage.setItem('keyObj', JSON.stringify( favorites));
//     }
// })
// let a = document.createElement('a');
// a.href = 'favorites.html';
// a.innerText = 'go favorites';
// document.body.appendChild(a);