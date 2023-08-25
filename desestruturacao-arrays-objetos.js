// Desestruturação de arrays
const colors = ['red', 'green', 'blue'];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // 'red'
console.log(secondColor); // 'green'
console.log(thirdColor); // 'blue'

// Ignorando elementos do array
const numbers = [1, 2, 3, 4, 5];

const [firstNum, , thirdNum, ...restNumbers] = numbers;

console.log(firstNum); // 1
console.log(thirdNum); // 3
console.log(restNumbers); // [4, 5]

// Atribuindo valores padrão
const fruits = ['apple', 'orange'];

const [firstFruit, secondFruit, thirdFruit = 'banana'] = fruits;

console.log(firstFruit); // 'apple'
console.log(secondFruit); // 'orange'
console.log(thirdFruit); // 'banana'

// Desestruturação de objetos
const person = { name: 'Alice', age: 30, city: 'New York' };

const { name, age, city } = person;

console.log(name); // 'Alice'
console.log(age); // 30
console.log(city); // 'New York'

// Ignorando propriedades de objetos
const book = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 };

const { title, ...rest } = book;

console.log(title); // 'The Great Gatsby'
console.log(rest); // { author: 'F. Scott Fitzgerald', year: 1925 }

// Atribuindo valores padrão a propriedades de objetos
const car = { make: 'Toyota', model: 'Camry' };

const { make, model, year = 2023 } = car;

console.log(make); // 'Toyota'
console.log(model); // 'Camry'
console.log(year); // 2023
