// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];


// - З масиву users за допомогою циклу витягнути адреси користувачів
// і записати (скопіювати) їх в інший порожній масив.

// let newarr = [];
// for (let i = 0; i < users.length; i++) {
//     newarr[i] = users[i].address;
// }
// console.log(newarr);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement. Всі данні в одному блоці.

// я не докінця зрозумів умову тому зробив окремо обєкт в блок і окремо усі дані в блок,
// шось з цього надіюсь правильно


// for (let i = 0; i < users.length; i++) {
//     let div = document.createElement('div');
//     div.innerHTML = users[i];
//   document.body.appendChild(div);
// }

// for (const element of users) {
//     let div = document.createElement('div');
//     div.style.marginBottom = '20px';
//     div.innerHTML = `${element.name} - ${element.age} - ${element.status} - ${element.address.country} - ${element.address.city}
//     - ${element.address.street} - ${element.address.houseNumber}`;
//     document.body.appendChild(div);
//}


// - За допомоги циклу проітерувати  масив users,
// записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості
// по своїм блокам (div>div*4)


// for (const element of users) {
//     let div = document.createElement('div');
//     div.style.marginBottom = '20px';
//
//     let div_name = document.createElement('div');
//     div_name.innerHTML = element.name;
//     div.appendChild(div_name);
//
//     let div_age = document.createElement('div');
//     div_age.innerHTML = element.age;
//     div.appendChild(div_age);
//
//     let div_status = document.createElement('div');
//     div_status.innerHTML = element.status;
//     div.appendChild(div_status);
//
//     //------------------address-----------------------------------------//
//
//     let div_address = document.createElement('div');
//     div_address.innerHTML = `${element.address.country} - ${element.address.city} - ${element.address.street}
//      - ${element.address.houseNumber}`;
//     div.appendChild(div_address);
//
//     document.body.appendChild(div);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй
// блок за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const element of users) {
//     let div = document.createElement('div');
//     div.style.marginBottom = '20px';
//
//     let div_name = document.createElement('div');
//     div_name.innerHTML = element.name;
//     div.appendChild(div_name);
//
//     let div_age = document.createElement('div');
//     div_age.innerHTML = element.age;
//     div.appendChild(div_age);
//
//     let div_status = document.createElement('div');
//     div_status.innerHTML = element.status;
//     div.appendChild(div_status);
//
//     //------------------address-----------------------------------------//
//
//     let div_address = document.createElement('div');
//     div_address.classList = 'addres';
//     div_address.style.marginBottom = '10px';
//     div_address.style.marginTop = '10px';
//     div.appendChild(div_address);
//
//     let div_address_city = document.createElement('div');
//     div_address_city.innerHTML = element.address.city;
//     div_address.appendChild(div_address_city);
//
//     let div_address_country = document.createElement('div');
//     div_address_country.innerHTML = element.address.country;
//     div_address.appendChild(div_address_country);
//
//     let div_address_street = document.createElement('div');
//     div_address_street.innerHTML = element.address.street;
//     div_address.appendChild(div_address_street);
//
//     let div_address_houseNumber = document.createElement('div');
//     div_address_houseNumber.innerHTML = element.address.houseNumber;
//     div_address.appendChild(div_address_houseNumber);
//
//     document.body.appendChild(div);
// }





// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
//Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content
// з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// Перед запуском коду потрібно розкоментувати код в index.html!!!!!!
// Закоментував щоб не мішало при виконанні інших завдань!!!


// let h2 = document.getElementsByTagName('h2');
// let ul = document.createElement('ul');
// let divIdContent = document.getElementById('content');
// divIdContent.appendChild(ul);
//
// for (const h2Element of h2) {
//     let li = document.createElement('li');
//     li.innerHTML = h2Element.innerText;
//     ul.appendChild(li);
// }



// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// let div = document.createElement('div');
// div.id= 'wrap';
// document.body.appendChild(div);
//
// for (let i = 0; i < rules.length; i++) {
//     const element = rules[i];
//
//     let div_block = document.createElement('div');
//     div_block.classList = `rules rules${i +1}`
//     div.appendChild(div_block);
//
//     let h2 = document.createElement('h2');
//     h2.innerHTML = element.title;
//     div_block.appendChild(h2);
//
//     let p = document.createElement('p');
//     p.innerHTML = element.body;
//     div_block.appendChild(p);
// }

