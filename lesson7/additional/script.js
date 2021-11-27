// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// function CreateObject(id, name, username, email, sstreet, ssuite,
//                       ccity, zzipcode, llat, llng, pphone, wwebsite, companyname, ccatchPhrase, bbs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {street: sstreet, suite: ssuite, city: ccity, zipcode: zzipcode, geo: {lat: llat, lng: llng}};
//     this.phone = pphone;
//     this.website = wwebsite;
//     this.company = {name: companyname, catchPhrase: ccatchPhrase, bs: bbs};
//
// }
//
// let newCreateObject = new CreateObject(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
//     'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',
//     '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona',
//     'Multi-layered client-server neural-net', 'harness real-time e-markets');
//
// console.log(newCreateObject);



// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// function ObjectOfTag (ttitleOfTag, aaction, ttitleOfAttr1, aactionOfAttr1,
//                       ttitleOfAttr2, aactionOfAttr2, ttitleOfAttr3, aactionOfAttr3) {
//     this.titleOfTag = ttitleOfTag;
//     this.action = aaction;
//     this.attrs = [
//         {titleOfAttr: ttitleOfAttr1, actionOfAttr: aactionOfAttr1},
//         {titleOfAttr: ttitleOfAttr2, actionOfAttr: aactionOfAttr2},
//         {titleOfAttr: ttitleOfAttr3, actionOfAttr: aactionOfAttr3},
//     ];
// }
// let newobjectOfTagA = new ObjectOfTag('a', 'устанавливает ссылку или якорь',
//     'accesskey', 'Активация ссылки с помощью комбинации клавиш.',
//     'coords', 'Устанавливает координаты активной области',
//     'href', 'Задает адрес документа, на который следует перейти.');
// console.log(newobjectOfTagA);
//
// let newobjectOfTagDiv = new ObjectOfTag('div', 'является блочным элементом и предназначен для выделения' +
//     ' фрагмента документа с целью изменения вида содержимого.', 'align',
//     'Задает выравнивание содержимого тега', 'title',
//     'Добавляет всплывающую подсказку к содержимому.', 'class',
//     'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
// console.log(newobjectOfTagDiv);
//
// let newobjectOfTagH1 = new ObjectOfTag('h1', 'Определяет выравнивание заголовка.',
//     'align', 'Определяет выравнивание заголовка',
//     'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
//     'hidden', 'Скрывает содержимое элемента от просмотра');
// console.log(newobjectOfTagH1);
//
// let newobjectOfTagSpan = new ObjectOfTag('span',
//     'предназначен для определения строчных элементов документа.', 'class',
//     'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
//     'hidden', 'Скрывает содержимое элемента от просмотра');
// console.log(newobjectOfTagSpan);
//
// let newobjectOfTagInput = new ObjectOfTag('input', 'предназначен для создания текстовых полей',
//     'align', 'Определяет выравнивание изображения.', 'alt',
//     'Альтернативный текст для кнопки с изображением', 'form',
//     'Связывает поле с формой по её идентификатору.');
// console.log(newobjectOfTagInput);
//
// let newobjectOfTagForm = new ObjectOfTag('form', 'Связывает поле с формой по её идентификатору.',
// 'id', 'Идентификатор формы', 'id', 'Идентификатор формы',
//     'id', 'Идентификатор формы', );
// console.log(newobjectOfTagForm);
//
// let newobjectOfTagOption = new ObjectOfTag('option',
//     'определяет отдельные пункты списка, создаваемого с помощью контейнера select',
//     'value',
//     'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.',
//     'disabled', 'Заблокировать для доступа элемент списка',
//     'label', 'Указание метки пункта списка');
// console.log(newobjectOfTagOption);
//
// let newobjectOfTagSelect = new ObjectOfTag('select',
//     'позволяет создать элемент интерфейса в виде раскрывающегося списка',
//     'name', 'Имя элемента для отправки на сервер или обращения через скрипты.',
//     'size', 'Количество отображаемых строк списка',
//     'required', 'Список обязателен для выбора перед отправкой формы.');
// console.log(newobjectOfTagSelect);
//
