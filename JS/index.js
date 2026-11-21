// function sayHello(name, age, city) {
//   alert(`Привет ${name}. Мне ${age} лет. Я живу в городе ${city}`);
// } // функция + аргумент

// sayHello("Alex", 18, "Тараз"); // вызов функции, передача аргумента

// function sum(a, b) {
//   return a + b;
// } // функция

// let result = sum(40, 70); // переменная со значением функции

// console.log(result);

// function checkAge(age) {
//   if (age >= 18) {
//     return "Доступ разрешен";
//   }

//   return "Доступ запрещен";
// }

// console.log(checkAge(18));

// const sum = (a, b) => {
//   return a * b;
// }; // стрелочные функции

// const sum2 = (a, b) => a * b; // только если сразу возвращаю значение

// console.log(sum2(20, 10));

const upRegister = (text) => text.toUpperCase();

const downRegister = (text) => text.toLowerCase();

console.log(upRegister("hello"));
console.log(downRegister("HELLO"));
