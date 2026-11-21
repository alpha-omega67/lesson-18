function sayHello(name, age, city) {
  alert(`Привет ${name}. Мне ${age} лет. Я живу в городе ${city}`);
} // функция + аргумент

sayHello("Alex", 18, "Тараз"); // вызов функции, передача аргумента

function sum(a, b) {
  return a + b;
} // функция

let result = sum(40, 70); // переменная со значением функции

console.log(result);

function checkAge(age) {
  if (age >= 18) {
    return "Доступ разрешен";
  }

  return "Доступ запрещен";
}

console.log(checkAge(18));


