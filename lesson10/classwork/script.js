// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let formOne = document.createElement('form');
// formOne.action = '';
// formOne.id = 'form1';
// formOne.name = 'f1';
// document.body.appendChild(formOne);
//
// let inputOneOne = document.createElement('input');
// inputOneOne.type = 'text';
// inputOneOne.name = 'inpOneOne';
// inputOneOne.style.marginRight = '10px';
// formOne.appendChild(inputOneOne);
//
// let inputOneTwo = document.createElement('input');
// inputOneTwo.type = 'text';
// inputOneTwo.name = 'inpOneTwo';
// formOne.appendChild(inputOneTwo);
//
//
// let formTwo = document.createElement('form');
// formTwo.action = '';
// formTwo.id = 'form2';
// formTwo.name = 'f2';
// formTwo.style.marginTop = '25px';
// document.body.appendChild(formTwo);
//
// let inputTwoOne = document.createElement('input');
// inputTwoOne.type = 'number';
// inputTwoOne.name = 'inpTwoOne';
// inputTwoOne.style.marginRight = '10px';
// formTwo.appendChild(inputTwoOne);
//
// let inputTwoTwo = document.createElement('input');
// inputTwoTwo.style = 'text';
// inputTwoTwo.name = 'inpTwoTwo';
// formTwo.appendChild(inputTwoTwo);
//
//
// let button = document.createElement('button');
// button.innerHTML = 'click';
// button.style.marginTop = '20px';
// document.body.appendChild(button);
//
//
// let forma1 = document.forms.form1;
// let forma2 = document.forms.form2;
//
// button.addEventListener('click', function () {
//     console.log(forma1.inpOneOne.value +' ' + forma1.inpOneTwo.value);
//     console.log(forma2.inpTwoOne.value +' ' + forma2.inpTwoTwo.value);
// })





// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// let inputOne = document.createElement('input');
// inputOne.style = 'number';
// inputOne.name = 'inpOne';
// inputOne.style.marginRight ='10px';
// document.body.appendChild(inputOne);
//
// let inputTwo = document.createElement('input');
// inputTwo.style = 'number';
// inputTwo.name = 'inpOne';
// inputTwo.style.marginRight ='10px';
// document.body.appendChild(inputTwo);
//
// let inputThree = document.createElement('input');
// inputThree.style = 'number';
// inputThree.name = 'inpOne';
// inputThree.style.marginRight ='10px';
// document.body.appendChild(inputThree);
//
// let button = document.createElement('button');
// button.innerHTML = 'click';
// document.body.appendChild(button);
//
//
// button.addEventListener('click', function () {
//
//     let divTable = document.createElement('div');
//     divTable.style.marginTop = '25px';
//     document.body.appendChild(divTable);
//
//     let table = document.createElement('table');
//     table.style.border = '1px solid black';
//     divTable.appendChild(table);
//
//     for (i = 0; i < inputOne.value; i++) {
//         let trr = document.createElement('tr');
//         table.appendChild(trr);
//
//         for (j = 0; j < inputTwo.value; j++) {
//             let tdd = document.createElement('td');
//             tdd.innerHTML = inputThree.value;
//             tdd.style.border = '1px solid blue';
//             tdd.style.background = 'Ivory';
//             trr.appendChild(tdd);
//         }
//     }
// })


// -Сворити масив не цензцрних слів.
//  Сворити інпут текстового типу.
//  Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


// let arrey = ['негідник', 'розбійник', 'хуліган', 'піздюк', 'обманщик', 'фак'];
// let input = document.createElement('input');
// document.body.appendChild(input);
// input.type = 'text';
// input.name = 'word';
//
// let button = document.createElement("button");
// button.innerHTML = 'click';
// document.body.appendChild(button);
//
// button.onclick = function () {
//     if (arrey.includes(input.value)) {
//         alert('Не матюкайся!!!!');
//     } else {
//         alert('You are good man!');
//     }
// }



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// let arrey = ['негідник', 'розбійник', 'хуліган', 'піздюк', 'обманщик', 'fuk'];
// let input = document.createElement('input');
// document.body.appendChild(input);
// input.type = 'text';
// input.name = 'words';
//
// let button = document.createElement("button");
// button.innerHTML = 'click';
// document.body.appendChild(button);
//
// button.addEventListener('click', function () {
//     let text = input.value;
//     arrey.forEach(value => {
//         if (text.includes(value)) {
//             alert('Дана стрічка містить нецензурне слово!!');
//             text = '';
//             return;
//         }
//     })
//     if (text){
//         alert('good boy!!');
//     }
// })





