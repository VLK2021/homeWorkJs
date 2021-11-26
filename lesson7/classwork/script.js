// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, vurobnuk, year, maxspeed, dvugyn) {
//     this.model = model;
//     this.vurobnuk = vurobnuk;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.dvugyn = dvugyn;
//
//     this.drive = () => console.log(`їдемо зі швидкістю ${newCar.maxspeed} на годину`);
//
//     this.info = function () {
//         console.log(`model - ${newCar.model}`);
//         console.log(`vurobnuk - ${newCar.vurobnuk}`);
//         console.log(`year - ${newCar.year}`);
//         console.log(`maxspeed - ${newCar.maxspeed}`);
//         console.log(`dvugyn - ${newCar.dvugyn}`);
//     };
//
//
//     this.increaseMaxSpeed =  newSpeed => {
//         let resalt = this.maxspeed + newSpeed;
//         console.log(resalt);
//     };
//
//
//     this.changeYear = function (newValue) {
//         console.log(`${this.year}` * newValue);
//     } ;
//
//
//     this.addDriver = function (driver) {
//         newCar.driver = driver;
//     };
//
// }
//
// let newCar = new Car('Civic', 'Honda', 2006, 350, 1.8);
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(50);
// newCar.changeYear(2);
// newCar.addDriver({name: 'Vasj', age: 30});
// console.log(newCar.driver);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car {
//     constructor(model, vurobnuk, year, maxspeed, dvugyn) {
//         this.model = model;
//         this.vurobnuk = vurobnuk;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.dvugyn = dvugyn;
//     }
//     drive = () => console.log(`їдемо зі швидкістю ${newCar.maxspeed} на годину`);
//
//     info = function () {
//         console.log(`model - ${newCar.model}`);
//         console.log(`vurobnuk - ${newCar.vurobnuk}`);
//         console.log(`year - ${newCar.year}`);
//         console.log(`maxspeed - ${newCar.maxspeed}`);
//         console.log(`dvugyn - ${newCar.dvugyn}`);
//     };
//
//     increaseMaxSpeed =  newSpeed => {
//         let resalt = this.maxspeed + newSpeed;
//         console.log(resalt);
//     };
//
//     changeYear = function (newValue) {
//         console.log(`${this.year}` * newValue);
//     } ;
//
//     addDriver = function (driver) {
//         newCar.driver = driver;
//     };
//
// }
//
// let newCar = new Car('Civic', 'Honda', 2006, 350, 1.8);
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(20);
// newCar.changeYear(3);
// newCar.addDriver({name: 'Max', age: 25, city: 'Lviv'});
// console.log(newCar.driver);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// let array = [];
// class Popelyshka {
//     constructor(name, age, numLeg) {
//         this.name = name;
//         this.age = age;
//         this.numLeg = numLeg;
//     }
// }
// array[0] = new Popelyshka('Valya', 25, 34);
// array[1] = new Popelyshka('Vita', 28, 35);
// array[2] = new Popelyshka('Vira', 20, 36);
// array[3] = new Popelyshka('Ylya', 21, 37);
// array[4] = new Popelyshka('Maja', 35, 39);
// array[5] = new Popelyshka('Oksana', 75, 38);
// array[6] = new Popelyshka('Ira', 55, 40);
// array[7] = new Popelyshka('Natalya', 65, 41);
// array[8] = new Popelyshka('Galya', 31, 33);
// array[9] = new Popelyshka('Olya', 18, 42);
// console.log(array);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.


// class Princ {
//     constructor(name, age, tyflj) {
//         this.name = name;
//         this.age = age;
//         this.tyflj = tyflj;
//     }
// }
// let newPrinc = new Princ('Vasya', 30, 34);
// console.log(newPrinc);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// for (let arrayElement of array) {
//         arrayElement.numLeg === newPrinc.tyflj ? console.log(arrayElement) : 'Wrong!';
// }


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let pop = array.find(value => value.numLeg === newPrinc.tyflj);
// console.log(pop);



