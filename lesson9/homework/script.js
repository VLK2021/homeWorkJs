// Все робити за допомоги js.
// - створити блок,

// let block = document.createElement('div');
// document.body.appendChild(block);


//     - додати йому класи wrap, collapse, alpha, beta

// let block = document.createElement('div');
// block.classList = 'wrap, collapse, alpha, beta';
// document.body.appendChild(block);



// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.

// let block = document.createElement('div');
// block.style.width = '200px';
// block.style.height = '200px';
// block.style.background = 'black';
// block.style.borderRadius = '5px';
// block.style.color = 'white';
// block.innerText = 'OKTEN';
// block.style.fontSize = '20px';
// block.style.margin = '10px';
// document.body.appendChild(block);


// - клонувати його повністю, та додати клон в body.


// clon = block.cloneNode(true);
// document.body.appendChild(clon);



// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main','Products','About us','Contacts'];
// for (const element of array) {
//    let li = document.createElement('li');
//    li.innerText = element;
//    let target = document.getElementsByClassName('menu')[0];
//    target.appendChild(li);
// }




// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const element of coursesAndDurationArray) {
//    let div = document.createElement('div');
//    div.innerText = `${element.title}, -----------   ${element.monthDuration}`;
//    document.body.appendChild(div);
// }





// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList = 'item';
//     let h1 = document.createElement('h1');
//     h1.classList = 'heading';
//     h1.innerText = element.title;
//     let p = document.createElement('p');
//     p.classList = 'description';
//     p.innerText = element.monthDuration;
//     div.appendChild(h1);
//     div.appendChild(p);
//     document.body.appendChild(div);
// }






