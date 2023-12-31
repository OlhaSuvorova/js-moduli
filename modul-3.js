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


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const { today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" },
// tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
// } = forecast ;



// ==============================================================================================================================================


// ЗАДАЧА 26. Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня
// следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }

// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств
// объекта forecast.


// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {today: {low: todayLow, high: todayHigh},
//     tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// ====================================================================================================================================

// ЗАДАЧА 27. В переменной scores хранится массив результатов тестирования. Используя распыление и методы
// Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.


// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores));


// ===========================================================================================================================================

// ЗАДАЧА 28. В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования
// отдельных групп.Используя распыление дополни код так, чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = (Math.max(...allScores));
// const worstScore = (Math.min(...allScores));


// ===================================================================================================================================

// ЗАДАЧА 29. В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся
// в переменной defaultSettings.Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной
// overrideSettings.
// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить
// переопределённые настройки.Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {... defaultSettings,...overrideSettings};


// ================================================================================================================================

// ЗАДАЧА 30. КАРТОЧКИ ЗАДАЧ. Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими
// свойствами.
// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.В новом объекте должно быть
// свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать.
// Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых
// локальных переменных.


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return {...{completed, category, priority }, ...data}
// };
// // Change code above this line
 

// ===============================================================================================================================

// ЗАДАЧА 31. Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов,
// считала и возвращала их сумму.

// Change code below this line
// function add(...args) {
//   let result = 0;
//   for (const arg of args) {
//     result += arg;
//   }
//   return result ;
//   // Change code above this line
// }


// ====================================================================================================================================

// ЗАДАЧА 32. Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она
// считала сумму только тех аргументов, которые больше чем заданное число.Это число должно быть первым параметром функции.


// // Change code below this line
// function addOverNum(one, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > one)
//     total += arg;
//   }

//   return total;
//   // Change code above this line
// }


// ====================================================================================================================================

// ЗАДАЧА 33. МАССИВ СОВПАДЕНИЙ. Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда
// будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго,
// которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2], потому что только они есть в массиве первого
// аргумента.


// // Change code below this line
// function findMatches(mass, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (mass.includes(arg)) {
//       matches.push(arg);
//     }
//   }
  
//   // Change code above this line
//   return matches;
// }


// ====================================================================================================================================

// ЗАДАЧА 34. Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с
// getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени.Возвращает строку "Deleting book <имя книги>", где < имя книги >
//   это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое.Возвращает строку
// "Updating book <старое имя> to <новое имя>", где < старое имя > и < новое имя > это значения параметров oldName и newName
// соотвественно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };


// ====================================================================================================================================

// ЗАДАЧА 35. Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве
// books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);

//     // Change code above this line
//   },
// };
 

// ====================================================================================================================================

// ЗАДАЧА 36. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ». К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для
// ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением
// которого сделай пустой массив.

// const atTheOldToad = {
//   // Change code below this line
// potions: []
//   // Change code above this line
// };



// ====================================================================================================================================

// ЗАДАЧА 37. ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ. Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства
// potions.


// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   }
//   // Change code above this line
// };


// ====================================================================================================================================

// ЗАДАЧА 38. ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ. Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива
// зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//    this.potions.push(potionName);

//     // Change code above this line
//   },
// };


// ====================================================================================================================================

// ЗАДАЧА 39. УДАЛЯЕМ ЗЕЛЬЕ. Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий
// в свойстве potions.


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//   const potionIndex = this.potions.indexOf(potionName);
//   this.potions.splice(potionIndex, 1);

//     // Change code above this line
//   },
// };


// ====================================================================================================================================

// ЗАДАЧА 40. ОБНОВЛЯЕМ ЗЕЛЬЕ. Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName
// на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// const potionIndex = this.potions.indexOf(oldName);
// this.potions.splice(potionIndex, 1, newName);
//     // Change code above this line
//   },
// };


// ====================================================================================================================================

// ЗАДАЧА 41. РАСШИРЯЕМ ИНВЕНТАРЬ. Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в 
// будущем может быть и другими характеристиками.Поэтому теперь в свойстве potions будет храниться массив объектов со 
// следующими свойствами.
// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//  addPotion(newPotion) {
//       for (const item of this.potions) {
//             if (item.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         const newProduct = {
//             ...newPotion,
//         };

//     this.potions.push(newPotion);
//   },
  
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },

// updatePotionName(oldName, newName) {
//     let resalt = `Potion ${oldName} is not in inventory`;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];

//       if (oldName === potion.name) {
//         potion.name = newName;
//         resalt = `Found ${oldName} change to ${newName} `;
//       }
//     }
//     return console.log(resalt);
//   },


//   // Change code above this line
// };






// ====================================================================================================================================











