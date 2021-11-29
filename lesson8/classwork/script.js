// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

//я толком не зрозумів що тут робити і міняти тому зробив кілька варіантів!!!!!


// let element = document.getElementById('main_header');
// element.style.color = 'green';
// element.innerText = 'mon-year';
// element.id = 'mon-year';


// b) робить шириниу елементу ul 400px

// let elementUl = document.getElementsByTagName('ul');
// for (let element of elementUl) {
//     element.style.width = '400px';
// }


// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementClassLinkList = document.getElementsByClassName('linkList');
// for (const element of elementClassLinkList) {
//    element.style.width = '50%';
// }


// d) отримує текст який зберігається в елементі з класом listElement2

// let elementClasslistElement2 = document.getElementsByClassName('listElement2');
// for (const element of elementClasslistElement2) {
//     console.log(element.textContent);
// }


// e) отримує всі елементи li та змінює ім колір фону на сірий

// let elementsLi = document.getElementsByTagName('li');
// for (const element of elementsLi) {
//     element.style.background = 'grey';
// }



// f) отримує всі елементи 'a' та додає їм клас anchor

// let elementsA = document.getElementsByTagName('a');
// for (const element of elementsA) {
//     element.classList = 'anchor';
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів


// let elemetsALink3 = document.getElementsByTagName('a');
// for (const elemet of elemetsALink3) {
//     if (elemet.innerText === 'link3') {
//         elemet.style.fontSize = '40px';
//     }
// }



// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a


// let elementA = document.getElementsByTagName('a');
// for (const element of elementA) {
//     element.classList = `element_${element.innerText}`;
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()


// let elementsSub = document.getElementsByClassName('sub-header');
// for (const element of elementsSub) {
//     element.style.background = prompt('color');
// }



// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()


// let elementsSub = document.getElementsByClassName('sub-header');
// for (const element of elementsSub) {
//     if (element.textContent === 'content 2 segment') {
//         element.style.background = prompt('color');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()


// let elementCont = document.getElementsByClassName('content_1');
// for (const element of elementCont) {
//     element.textContent = prompt('some text');
// }


// l) отримати елементи p та змінити їм padding на 20px


// let elementsP = document.getElementsByTagName('p');
// for (const element of elementsP) {
//     element.style.padding = '20px';
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)


// let elementT = document.getElementsByClassName('text2');
// for (const element of elementT) {
//     element.textContent = 'sep-2021';
// }
