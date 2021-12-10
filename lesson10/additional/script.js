// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// document.onclick = function (e) {
//     console.log('Тег елементу :' + e.target.tagName + ',',
//         'список класів:' + ' ' + e.target.classList + ',', 'id:' + ' ' + e.target.id + '.',
//         'Висота * Ширина:' + ' ' +  e.target.clientHeight + ' ' + '*' + ' ' + e.target.clientWidth);
// }


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// document.onclick = function (e) {
//     let div = document.createElement('div');
//     div.style.padding = '5px';
//     div.style.background = 'lime';
//     div.style.position = "fixed";
//     div.style.left = '200px';
//     div.style.top = '100px';
//     div.style.color = 'blue';
//     div.innerHTML =`Тег елементу :  ${e.target.tagName}<br /> Список класів: ${e.target.classList}<br /> id: ${e.target.id}
//        <br /> Висота * Ширина:  ${e.target.clientHeight} * ${e.target.clientWidth}`;
//     document.body.appendChild(div);
// }


// -- взять массив пользователей
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];

// let wrap = document.createElement('div');
//
//
// let label1 = document.createElement('label');
// label1.innerText = 'Статус';
// wrap.appendChild(label1);
// let input1 = document.createElement('input');
// input1.type = 'checkbox';
// input1.name = 'inp1';
// input1.classList = 'ch1';
// wrap.appendChild(input1);
//
// let label2 = document.createElement('label');
// label2.innerText = 'Вік';
// wrap.appendChild(label2);
// let input2 = document.createElement('input');
// input2.type = 'checkbox';
// input2.name = 'inp2';
// wrap.appendChild(input2);
//
// let label3 = document.createElement('label');
// label3.innerText = 'Місто';
// wrap.appendChild(label3);
// let input3 = document.createElement('input');
// input3.type = 'checkbox';
// input3.name = 'inp3';
// wrap.appendChild(input3);
//
// let button = document.createElement('button');
// button.innerHTML = 'resalt';
// wrap.appendChild(button);
//
// let gener_div = document.createElement('div');
//
// function func(array) {
//     let glob = document.createElement('div');
//     array.forEach(value => {
//         let user_div = document.createElement('div');
//         user_div.innerHTML = `${value.id} - ${value.name}- ${value.age}- ${value.status}- ${value.address.city}`;
//         glob.appendChild(user_div);
//     })
//     return glob;
// }
//
//
// gener_div.appendChild(func(usersWithAddress))
//
// wrap.appendChild(gener_div);
// document.body.appendChild(wrap);
//
//
// button.onclick = function (ev) {
//     let newar = usersWithAddress
//     if (input1.checked) newar = newar.filter(value => value.status === false);
//     if (input2.checked) newar = newar.filter(value => value.age > 29);
//     if (input3.checked) newar = newar.filter(value => value.address.city === 'Kyiv');
//     gener_div.innerHTML = '';
//     gener_div.appendChild(func(newar));
// }


//------Докидую завдання---------------------------------------------------------------------------------


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает
// какой-либо элемент DOM-структуры
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу,
//     при еще одном нажатии на "вперед",
//     вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед"
// позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего
// элемента и переходим к следующему, лежащему с ним на одном уровне


// let elementDom = document.getElementsByClassName('wrap');
// let order = 0;
// let res = [];
//
// function func(elementDom) {
//
//     function f(treeDom) {
//         if (treeDom.children.length) {
//             for (element of treeDom.children) {
//                 if (element.children.length) {
//                     f(element)
//                 } else {
//                     res.push(element);
//                 }
//
//             }
//         }
//     }
//
//     let btn1 = document.createElement('button');
//     btn1.innerHTML = 'Вперед';
//     document.body.appendChild(btn1);
//
//     let btn2 = document.createElement('button');
//     btn2.innerHTML = 'Назад';
//     document.body.appendChild(btn2);
//
//
//     btn1.onclick =  () => {
//         f(elementDom[0])
//         console.log(res[order]);
//         ++order;
//     }
//
//     btn2.onclick = () => {
//         f(elementDom[0])
//         console.log(res[order -1]);
//         --order;
//     }
// }
// func(elementDom);


// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає
// жирний/курсивний/або якось іншим способом змінює свій стан


let element = document.getElementsByClassName('textP');


