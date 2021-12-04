// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".

// let div = document.createElement('div')
// div.id = 'target';
// div.style.width = '200px';
// div.style.height = '200px';
// div.style.background = 'cornflowerblue';
// div.style.marginBottom = '10px';
// document.body.appendChild(div);
//
// let button = document.createElement('button');
// button.innerHTML = 'Click';
// button.style.width = '100px';
// button.style.height = '30px';
// document.body.appendChild(button);
//
// button.onclick = function () {
//     div.style.display = 'none';
// }




// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// button.innerHTML = 'Click';
// button.style.color = 'blue';
// button.style.width = '200px';
// button.style.height = '50px';
// button.style.fontWeight = 'bold';
// button.style.fontSize = 'large';
// document.body.appendChild(button);
//
// button.onclick = function () {
//     button.style.display = 'none';
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача


// let input = document.createElement('input');
// input.type = 'number';
// input.name = 'age';
// document.body.appendChild(input);
//
// let button = document.createElement('button');
// button.innerHTML = 'Enter';
// document.body.appendChild(button);
//
// button.onclick = function () {
//    if(input.value < 18) {
//        alert('Ваш вік меньший ніж 18!!!!');
//    } else {
//        alert('Ви дорослі!!!!')
//    }
// }



// - Создайте меню, которое раскрывается/сворачивается при клике

// let button = document.createElement('button');
// button.innerHTML = 'Menu';
// button.style.fontSize = '20px';
// button.style.width = '120px';
// button.style.height = '40px';
// button.style.color = 'blue';
// document.body.appendChild(button);
//
// let div_menu = document.createElement('div');
// document.body.appendChild(div_menu);
//
// let ul = document.createElement('ul');
// ul.style.position = 'absolute';
// ul.style.margin = 0;
// ul.style.marginLeft = '5px';
// ul.style.padding = 0;
// div_menu.appendChild(ul);
//
// for (i = 0; i < 10; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = `item${i + 1}`;
//     li.style.listStyle = 'none';
//     li.style.fontSize = '20px';
//     li.style.width = '110px'
//     li.style.textAlign = 'center';
//     li.style.border = '1px solid black';
//     li.style.background = 'grey';
//     li.style.color = 'blue';
//     li.style.marginBottom = '5px';
//
//     ul.appendChild(li);
// }
//
// button.onclick = function () {
//     if (ul.style.display === 'block') {
//         ul.style.display = 'none'
//     } else {
//         ul.style.display = 'block'
//     }
// }




// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

// let array = [
//     {title : 'lorem', body:'lorem ipsum dolo sit 15 ameti'},
//     {title : 'Merol', body:'ipsum lorem dolo 25 sit ameti'},
//     {title : 'Oreml', body:'dolo 36 ipsum lorem sit ameti'},
//     {title : 'Rolem', body:'ipsum dolo sit 84 lorem ameti'},
//     {title : 'Lerom', body:'ameti  65 lorem ipsum dolo sit'}
// ]
//
//
// array.forEach(value => {
//     let div_element = document.createElement('div');
//     document.body.appendChild(div_element);
//     let button = document.createElement('button');
//     button.style.marginLeft = '10px';
//     button.innerHTML = 'click';
//     div_element.appendChild(button);
//
//     for (const valueElementKey in value) {
//         let div_www = document.createElement('div');
//         document.body.appendChild(div_www);
//         div_element.appendChild(div_www);
//         div_www.innerHTML = `${valueElementKey}: ${value[valueElementKey]}`;
//
//         button.onclick = function () {
//             if (div_www.innerHTML === `${valueElementKey}: ${value[valueElementKey]}`) {
//                 div_www.innerHTML = `${valueElementKey}`;
//             } else {
//                 div_www.innerHTML = `${valueElementKey}: ${value[valueElementKey]}`
//             }
//         }
//     }
// })




