// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14,
// 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let a = 'hello';
let s = 'owu';
let d = 'com';
let f = 'ua';
let g = 1;
let h = 10;
let j = -999;
let k = 123;
let l = 3.14;
let z = 2.7;
let x = 16;
let c = true;
let v = false;

console.log(a);
alert(a);
document.write(`a = ${a}`);

document.write("<br/>");

console.log(s);
alert(s);
document.write(`s = ${s}`);

document.write("<br/>");

console.log(d);
alert(d);
document.write(`d = ${d}`);

document.write("<br/>");

console.log(f);
alert(f);
document.write(`f = ${f}`);

document.write("<br/>");

console.log(g);
alert(g);
document.write(`g = ${g}`);

document.write("<br/>");

console.log(h);
alert(h);
document.write(`h = ${h}`);

document.write("<br/>");

console.log(j);
alert(j);
document.write(`j = ${j}`);

document.write("<br/>");

console.log(k);
alert(k);
document.write(`k = ${k}`);

document.write("<br/>");

console.log(l);
alert(l);
document.write(`l = ${l}`);

document.write("<br/>");

console.log(z);
alert(z);
document.write(`z = ${z}`);

document.write("<br/>");

console.log(x);
alert(x);
document.write(`x = ${x}`);

document.write("<br/>");

console.log(c);
alert(c);
document.write(`c = ${c}`);

document.write("<br/>");

console.log(v);
alert(v);
document.write(`v = ${v}`);

document.write("<br/>");
document.write("<hr/>");


// - Переприсвоїти кожній змінній з завдання значення на довільне.

a = 'goodby';
s = 'uwo';
d = 'mok';
f = 'au';
g = -1;
h = -10;
j = 999;
k = 321;
l = 1.34;
z = 7.2;
x = 61;
c = false;
v = true;


//     Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(a);
alert(a);
document.write(`a = ${a}`);

document.write("<br/>");

console.log(s);
alert(s);
document.write(`s = ${s}`);

document.write("<br/>");

console.log(d);
alert(d);
document.write(`d = ${d}`);

document.write("<br/>");

console.log(f);
alert(f);
document.write(`f = ${f}`);

document.write("<br/>");

console.log(g);
alert(g);
document.write(`g = ${g}`);

document.write("<br/>");

console.log(h);
alert(h);
document.write(`h = ${h}`);

document.write("<br/>");

console.log(j);
alert(j);
document.write(`j = ${j}`);

document.write("<br/>");

console.log(k);
alert(k);
document.write(`k = ${k}`);

document.write("<br/>");

console.log(l);
alert(l);
document.write(`l = ${l}`);

document.write("<br/>");

console.log(z);
alert(z);
document.write(`z = ${z}`);

document.write("<br/>");

console.log(x);
alert(x);
document.write(`x = ${x}`);

document.write("<br/>");

console.log(c);
alert(c);
document.write(`c = ${c}`);

document.write("<br/>");

console.log(v);
alert(v);
document.write(`v = ${v}`);

document.write("<br/>");


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Kostiuk';
let middleName = 'Volodymyr';
let lastName = 'Mikolajovich';
let person = `${firstName} ${middleName} ${lastName}`
console.log(person);
person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt('name');
let pobatkovi = prompt('pobatkovi');
let age = prompt('your age');
console.log(`"Вітаю ${name} ${pobatkovi}. Тобі ${age} років"`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let aa = 100;
let bb = '100';
let cc = true;

console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!


// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 >= 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 < 10 -> false
// 10 > 10 -> false
// 10 != 10 -> false
// 123 < '123' -> false
// 123 == '123' -> true


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");             205
// document.write(str - a + "<br/>");              15
// document.write(str * "2" + "<br/>");             40
// document.write(str / 2 + "<br/>");                10