// ЗАДАЧА 1. Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer
// была ссылка на функцию makePizza.


// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;


// =====================================================================================================================================

// ЗАДАЧА 2. Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и
// возвращала ее вызов.Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой
// доставляемой пиццы.
// Вот ссылка думаю будет полезно почитать https://learn.javascript.ru/function-basics#vozvrat-znacheniya. Все что
// находиться после return не будет выполняться.Функция makeMessage должна возвращать callback c названием пиццы.


// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// makeMessage("Ultracheese", deliverPizza);



// ================================================================================================================================

// ЗАДАЧА 3. Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк - функцию
// eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".


// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName)
// {
//   console.log("Eating pizza ${pizzaName}");
// });


// ======================================================================================================================================

// ЗАДАЧА 4. Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым
// и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка
// onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка
// onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.


// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   }
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);



// =================================================================================================================================

// ЗАДАЧА 5. Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает
// общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

// orderedItems.forEach(function (orderedItems) {
//   totalPrice += orderedItems;})

  
//   // Change code above this line
//   return totalPrice;
// }



// ====================================================================================================================================

// ЗАДАЧА 6. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ. Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый
// массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//    numbers.forEach(function (numbers) {
//     if (numbers > value) {
//       filteredNumbers.push(numbers);
//     }
//   })
//   // Change code above this line
//   return filteredNumbers;
// }


// ================================================================================================================================

// ЗАДАЧА 7. ОБЩИЕ ЭЛЕМЕНТЫ. Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины
// в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
  
// firstArray.forEach(function (firstArray) {
//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray);
//     }
//   })

//   return commonElements;
//   // Change code above this line
// }


// ====================================================================================================================================

// ЗАДАЧА 8. Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.


// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }


// ====================================================================================================================================

// ЗАДАЧА 9. Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
//    quantity * pricePerItem;
// // Change code above this line


// ====================================================================================================================================

// ЗАДАЧА 10. Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.
// Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.


// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => totalPrice += item)
//   return totalPrice;
// }
// Change code above this line


// ====================================================================================================================================

// ЗАДАЧА 11. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0. Замени объявление функции filterArray() и коллбек для метода forEach() на
// стрелочные функции.


// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }

// ====================================================================================================================================

// ЗАДАЧА 12. ОБЩИЕ ЭЛЕМЕНТЫ 2.0. Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные 
// функции.

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }


// ====================================================================================================================================

// ЗАДАЧА 13. Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого 
// это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и 
// возвращала новый массив с обновлёнными значениями.


// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//    const newArray = [];
//   numbers.forEach(el => {
//     if (el % 2 === 0) {
//       newArray.push(el + value)
//     } else newArray.push(el)
//   });
//   return newArray
// }
//   // Change code above this line
// }



// ====================================================================================================================================

// ЗАДАЧА 14. Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй 
// метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => (planet.length));


// ====================================================================================================================================

// ЗАДАЧА 15. Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из 
// всех объектов массива books.


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);

// ====================================================================================================================================

// ЗАДАЧА 16. Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) 
// из массива книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);


// ====================================================================================================================================

// ЗАДАЧА 17. Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из 
// массива объектов в параметре users.

// Change code below this line
// const getUserNames = users => users.map(user => user.name); 

// Change code above this line


// ====================================================================================================================================

// ЗАДАЧА 18. Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство 
// email) из массива объектов в параметре users.

// // Change code below this line
// const getUserEmails = users => users.map(user => user.email);

// // Change code above this line


// ====================================================================================================================================

// ЗАДАЧА 19. Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной 
// oddNumbers массив нечётных.Обязательно используй метод filter().


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter (number => number % 2 === 0);
// const oddNumbers = numbers.filter (number => number % 2 !== 0);


// ====================================================================================================================================

// ЗАДАЧА 20. Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в 
// переменной uniqueGenres массив уникальных жанров - без повторений.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(genre => genre.indexOf(genres) === index);


// ====================================================================================================================================

// ЗАДАЧА 21.











// ====================================================================================================================================

// ЗАДАЧА 22.












// ====================================================================================================================================

// ЗАДАЧА 23.











// ====================================================================================================================================

// ЗАДАЧА 24.












// ====================================================================================================================================

// ЗАДАЧА 25.













// ====================================================================================================================================

// ЗАДАЧА 26.








// ====================================================================================================================================

// ЗАДАЧА 27.









// ====================================================================================================================================

// ЗАДАЧА 28.












// ====================================================================================================================================

// ЗАДАЧА 29.







// ====================================================================================================================================

// ЗАДАЧА 30.










// ====================================================================================================================================

// ЗАДАЧА 31.












// ====================================================================================================================================

// ЗАДАЧА 32.











// ====================================================================================================================================

// ЗАДАЧА 33.











// ====================================================================================================================================

// ЗАДАЧА 34.











// ====================================================================================================================================

// ЗАДАЧА 35.










// ====================================================================================================================================

// ЗАДАЧА 36.













// ====================================================================================================================================

// ЗАДАЧА 37.










// ====================================================================================================================================

// ЗАДАЧА 38.














// ====================================================================================================================================

// ЗАДАЧА 39.










// ====================================================================================================================================

// ЗАДАЧА 40.











// ====================================================================================================================================

// ЗАДАЧА 41.










// ====================================================================================================================================

// ЗАДАЧА 42.










// ====================================================================================================================================

// ЗАДАЧА 43.










// ====================================================================================================================================

// ЗАДАЧА 44.











// ====================================================================================================================================

// ЗАДАЧА 45.










// ====================================================================================================================================

// ЗАДАЧА 46.










// ====================================================================================================================================

// ЗАДАЧА 47.










// ====================================================================================================================================

// ЗАДАЧА 48.








