// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //     totalPrice += orderedItems[i];
//     // }
//  orderedItems.forEach(totalPrice => {
//      totalPrice += orderedItems;
//  });
    
//     // Change code above this line
//     return totalPrice;
   
// }
// console.log(calculateTotalPrice);

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//     return quantity * pricePerItem;
   
// }

// console.log(quantity);

// const a = 5;
// const b = 10;
// totalPrice = a * b;
// console.log(totalPrice);

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Change code above this line

// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArr = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//         }
//         newArr.push(number + value);
//         return newArr;
 
//         // Change code above this line
//     }
// }

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(numbers % 2 === 0);
// const oddNumbers = numbers.filter(numbers % 2 === 1);

// console.log(numbers);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0)
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(numbers)
// console.log(evenNumbers);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const getUsersWithEyeColor = (users, color) => {
// users.filter(user => user.eyeColor === color);
// }
// console.log(getUsersWithEyeColor(users, 'blue'));

// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];


// const getUsersWithEyeColor = (users, color) =>
//     users.filter(user => user.eyeColor === color);
// //   map(user => ({ eyeColor: user.eyeColor }));

// console.log(getUsersWithEyeColor(users, 'blue'));

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ];
// // console.log(users)
// const getUsersWithEyeColor = (users, color) =>
//     users.filter(user => user.eyeColor === color);
// console.log(getUsersWithEyeColor(users, 'blue'));
// console.log(getUsersWithEyeColor(users, 'brown'));


// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];
// const getUsersWithAge = (users, minAge, maxAge) =>
//     users.filter(user => user.age >= minAge && user.age <= maxAge);
  
// console.log(getUsersWithAge(users, 20, 22))
    

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// const getUsersWithFriend = (users, friendName) =>
//     users.filter(user => user.name === friendName);
// console.log(getUsersWithFriend(users, "Sheree Anthony"));

// const user =
//     [
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             eyeColor: "blue",
//             friends: ["Sharron Pace"],
//             isActive: false,
//             balance: 2811,
//             gender: "male",
//             age: 37
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             gender: "female",
//             age: 34
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             gender: "male",
//             age: 24
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             gender: "female",
//             age: 21
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             isActive: true,
//             balance: 3951,
//             gender: "male",
//             age: 27
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             isActive: false,
//             balance: 1498,
//             gender: "male",
//             age: 38
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             gender: "female",
//             age: 39
//         }
//     ];
//     const getFriends = (users) => {
//    const allFriends = users.flatMap(user => user.friends);
//   const uniqFrieds = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
// };

// const users =
//     [
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             eyeColor: "blue",
//             friends: ["Sharron Pace"],
//             isActive: false,
//             balance: 2811,
//             gender: "male",
//             age: 37
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             gender: "female",
//             age: 34
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             gender: "male",
//             age: 24
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             gender: "female",
//             age: 21
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             isActive: true,
//             balance: 3951,
//             gender: "male",
//             age: 27
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             isActive: false,
//             balance: 1498,
//             gender: "male",
//             age: 38
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             gender: "female",
//             age: 39
//         }
//     ];
//     const getInactiveUsers = (users) => {
//         users.filter((user) => user.isActive);
        
// };
// console.log(getInactiveUsers);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getUserWithEmail = users.find((email) => email.name === email); 
// console.log(users)

class Storage {
  constructor (items) {
    this.items = items
  }
 getItems() {
   return this.items;
 } 
 addItem(newItem) {
   this.items.push(newItem);
 } 
  removeItem(itemToRemove) {
    const i =
    this.items.indexOf(itemToRemove);
    this.items.splice (i, 1);
  }
}


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]