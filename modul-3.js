// Задача 1. Присвой переменной apartment объект описывающий квартиру с характеристиками:
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
// price: 2153,
// tags: ["premium", "promoted", "top"],
// };

// ========================================================================================================================

// Задача 2. Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце.
// Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// =======================================================================================================================================

// ЗАДАЧА 3 Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// ================================================================================================================================

// ЗАДАЧА 4. Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags - 1];

// ========================================================================================================================

// ЗАДАЧА 5. Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment
// используя синтаксис «квадратных скобок».


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// =======================================================================================================================================

// ЗАДАЧА 6. Дополни код, обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// =======================================================================================================================================

// ЗАДАЧА 7. Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston"};

// =======================================================================================================================================

// ЗАДАЧА 8. Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из
// переменных с аналогичными именами.


// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

// =======================================================================================================================================

// ЗАДАЧА 9. Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password,
// имена которых хранятся в переменных emailInputName и passwordInputName.Значением свойства email должна быть строка
// "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".


// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
// };

// =======================================================================================================================================

// ЗАДАЧА 10. Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values
// все значения его свойств.


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
 
// for (const key in apartment) {
//   keys.push(key)
//   values.push(apartment[key])
// }

// =======================================================================================================================================

// ЗАДАЧА 11. Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.


// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//  if (apartment.hasOwnProperty(key)) {
//    keys.push(key);
//    values.push(apartment[key]);
//    }
// }

// =======================================================================================================================================

// ЗАДАЧА 12. Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта
// в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
  
// for (const key in object) {
//   if (object.hasOwnProperty(key)){
//     propCount += 1;
//   }
// }
//   return propCount;
// }

// =======================================================================================================================================
// ЗАДАЧА 13. Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys
// массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = Object.values(apartment);
// for (const value of values) {
//   console.log(values);
//   console.log(apartment[values]);
// }
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   console.log(key);
//   console.log(apartment[key]);
// }

// =======================================================================================================================================

// ЗАДАЧА 14. Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив
// ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//  values.push(apartment[key]);
// }

// =======================================================================================================================================

// ЗАДАЧА 15. Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно,
// цикл for...of.


// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   return Object.keys(object).length;
// }

// =======================================================================================================================================

// ЗАДАЧА 16. Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства - это имя сотрудника,
// а значение свойства - это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй
// переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// for (const salary of Object.values(salaries)) {
//   totalSalary += salary;
// }
//   // Change code above this line
//   return totalSalary;
// }


// =======================================================================================================================================

// ЗАДАЧА 17. Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex,
// а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   const {hex, rgb} = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// =======================================================================================================================================


// ЗАДАЧА 18. ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА. Напиши функцию getProductPrice(productName) которая принимает один параметр
// productName - название продукта.Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает
// его цену(свойство price).Если продукт с таким названием не найден, функция должна возвращать null.


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const product of products)
// if (product.name === productName)
//   return product.price;
//   return null;
// }


// =============================================================================================================================================

//  ЗАДАЧА 19. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА. Напиши функцию getAllPropValues(propName) которая принимает один параметр
// propName - имя(ключ) свойства.Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в
// массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let arrValue = [];
//   for (const product of products) {
//     for (const obj in product) {
//       if (obj == propName) {
//         arrValue.push(product[obj])
//       }
//     }
//   }
//   return arrValue
//   // Change code above this line
// }

// =====================================================================================================================================

// ЗАДАЧА 20. ОБЩАЯ СТОИМОСТЬ ТОВАРА. Напиши функцию calculateTotalPrice(productName) которая принимает один параметр
// productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива
// products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let total = 0;

//     for (const product of products) {
//         let name = product.name;

//         if (productName === name) {
//             total += product.price * product.quantity;
//         }
//     }
//     return total;
//   // Пиши код выше этой строки
// }


// =====================================================================================================================================

// ЗАДАЧА 21. ришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature).
// Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// =======================================================================================================================================

// ЗАДАЧА 22. В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды.
// Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта
// highTemperatures.Задай значение по умолчанию для icon - строку
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".


const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


// =======================================================================================================================================

// ЗАДАЧА 23. Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации
// свойств объекта highTemperatures.Задай значение по умолчанию для highIcon - строку
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;



// =========================================================================================================================================


// ЗАДАЧА 24. Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта.
 
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// ============================================================================================================================================


// ЗАДАЧА 25. Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными
// иконками.Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast.
// Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".








// ==============================================================================================================================================




























































