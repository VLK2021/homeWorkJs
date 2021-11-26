// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let array = [];
// function User (id, username, surname, email, phone) {
//     this.id = id;
//     this.username = username;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user1 = new User(1, 'Volodimir', 'Kostiuk', 'vkos@gmail.com', 80981778562);
// console.log(user1);



// function func(array, num) {
//     function User (id, username, surname, email, phone) {
//         this.id = id;
//         this.username = username;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
//     for (i = 1; i < num; i++) {
//         let user1 = new User(i, `Volodimir-${i}`, `Kostiuk-${i}`, `vkos@gmail.com-${i}`, `80981778562-${i}`);
//         array.push(user1);
//     }
//     return array;
// }
// let array = func([],11);
// console.log(array);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


// let filterArray = array.filter(value => value.id%2 === 0);
// console.log(filterArray);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


// let newArray = array.sort((a, b) => a.id - b.id);
// console.log(newArray);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

//   class client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//   }
// let newClient = new client(1, 'Victor', 'Pupkin', 'dsf@gmail.com', 380675243165, ['phone', 'tv', 'ipad', 'pizza']);
// console.log(newClient);
//
// let array = [];
//
// array[0] = new client(1, 'Vi', 'Pupkin', 'ldsf@gmail.com', 380675243174, ['phone', 'tv', 'ipad', 'salo', 'yut', 'poi']);
// array[1] = new client(2, 'tor', 'Pupkin', 'idsf@gmail.com', 380674143165, ['phone', 'pashtet', 'pizza']);
// array[2] = new client(3, 'Vior', 'Puin', 'ydsf@gmail.com', 380675243165, ['phone', 'tv', 'ipad', 'pizza']);
// array[3] = new client(4, 'Vctor', 'Pupkin', 'fdsf@gmail.com', 380671442165, ['phone', 'tv', 'pen', 'pizza']);
// array[4] = new client(5, 'Victo', 'Puin', 'sdsf@gmail.com', 380675245165, ['phone', 'pensil', 'ipad', 'pizza']);
// array[5] = new client(6, 'Victjj', 'Puin', 'sdgfsf@gmail.com', 380672145165, ['phone', 'pensil', 'ipad', 'pizza']);
// array[6] = new client(7, 'Victo', 'Puinr', 'sdsf@gmail.com', 380675245165, ['phone', 'pensil', 'ipad', 'hghj', 'pizza']);
// array[7] = new client(8, 'Victdf', 'Puinf', 'sdfsf@gmail.com', 380675105165, ['phone', 'pensil', 'ipad', 'pizza']);
// array[8] = new client(9, 'Victcz', 'Puinx', 'sdesf@gmail.com', 380675025165, ['ipad', 'pizza']);
// array[9] = new client(10, 'Vict', 'Puinas', 'sdssdf@gmail.com', 380630245165, ['phone', 'pensil', 'ipad', 'pizza']);
// console.log(array);




// function func(array, num) {
//     class client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//   }
//     for (i = 1; i < num; i++){
//         let newclient = new client(i, `Victor-${i}`, `Pupkin-${i}`, `dsf@gmail.com-${i}`, 380675243165, ['phone', 'tv', 'ipad', 'pizza']);
//         array.push(newclient);
//     }
//     return array;
// }
// let array = func([], 11);
// console.log(array);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//В даному прикладі використав масив той що вище через один там де різна кількість товарів,
// той що по індексах вручну наповнював



// let sortArray = array.sort((a, b) => a.order.length - b.order.length);
// console.log(sortArray);