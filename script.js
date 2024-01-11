// const age = parseInt(prompt("Welcome to Ironhack cinema. How old are you?"));

// console.log(typeof age);
// if (typeof age === "number") {
//   if (age <= 16) {
//     console.log("You have a teenager discount.");
//   } else if (age >= 65) {
//     console.log("You have a senior citizen discount :)");
//   } else {
//     console.log("Sorry, you don't have any discount :(");
//   }
// } else {
//   console.log("Please enter a number.");
// }

// let languagePick = prompt("What language do you speak?").toLowerCase();

// if (languagePick === "spanish") {
//   console.log("Hola, mundo!");
// } else if (languagePick === "french") {
//   console.log("Bonjour, monde!");
// } else {
//   console.log("Hello World!");
// }

// const name = prompt("Favorite Game of Thrones main character:");

// let house = "";
// if (name === "Khal Drogo") {
//   house = "Dothraki Horselord";
// } else if (name === "Daenerys") {
//   house = "Targaryen";
// } else if (name === "Jon Snow" || name === "Sansa" || name === "Arya") {
//   house = "Stark";
// } else if (name === "Cersei" || name === "Tyrion" || name === "Ser Jaime") {
//   house = "Lannister";
// } else {
//   house = "Other";
// }

// console.log(`Your favorite character is from the house ${house}.`);

// const name = prompt("Favorite Game of Thrones main character:");

// let house = "";
// switch (name) {
//   case "Khal Drogo":
//     // execute some code:
//     house = "Dothraki Horselord";
//     break;
//   case "Daenerys":
//     // execute some code:
//     house = "Targaryen";
//     break;
//   default:
//     house = "Other";
// }

// console.log(`Your favorite character is from the house ${house}.`);

// const name = prompt("Favorite Game of Thrones main character:");
// let house = "";

// switch (name) {
//   case "Khal Drogo":
//     house = "Dothraki Horselord";
//     break;
//   case "Daenerys":
//     house = "Targaryen";
//     break;
//   case "Jon Snow":
//   case "Sansa":
//   case "Arya":
//     house = "Stark";
//     break;
//   default:
//     house = "other";
// }

// console.log(`Your favorite character is from the house ${house}.`);

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// const arr = [1, 2, 3, 4, 5];
// const newArr = [];

// while (arr.length > 0) {
//   console.log("arr: ", arr);
//   console.log("newArr: ", newArr);
//   newArr.push(arr.shift());
// }

// let i = 0;
// do {
//   console.log("running do before condition");
//   i++;
// } while (i < 2);

// let i = 0;
// while (i <= 30) {
//   if (i === 10) {
//     console.log("ten");
//   } else if (i === 20) {
//     console.log("twenty");
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// let result = "";
// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     result += i;
//   }
// }
// console.log(result);

// const greeting = "Hello";
// for (const char of greeting) {
//   console.log(char);
// }

// for (let i = 0; i < greeting.length; i++) {
//     if ( i === 2) {
//         // do something else
//     }
//   console.log(greeting[i]);
// }

// let i = 0;

// while (i < 5) {
//   i++;
//   if (i === 3) {
//     // break;
//     continue;
//   }
//   console.log(`The number is: ${i}.`);
// }

// for (let i = 1; i <= 20; i++) {
//   //   if (i === 0) {
//   //     continue;
//   //   }
//   if (i % 2 !== 0) {
//     console.log(`${i} is odd`);
//   } else {
//     console.log(`${i} is even`);
//   }
// }

// create the function
// function greetJuan() {
//   console.log("Hello Juan!");
// }
// greetJuan();

// function greetJoy() {
//   console.log("Hello Joy!");
// }
// greetJoy();

///////////////////// params
// function greetPerson(username) {
//   console.log(`Hello ${username}!`);
// }

// /////// args arguments
// greetPerson("Juan");
// greetPerson("Joy");
// greetPerson("Vlad");

// function definition/declaration
function sayHello(classmate1, classmate2, classmate3) {
  return `Hello ${classmate1}, ${classmate2} and ${classmate3}!`;
  console.log(2 + 2);
  let username = "Omar";
  username = username.toUpperCase();
  console.log(`Hello ${classmate1}, ${classmate2} and ${classmate3}!`);
}

// function isAllowed(userAge) {
//   console.log(userAge);
//   if (userAge >= 18) {
//     return "you are allowed";
//   } else {
//     return "you are not allowed";
//   }
// }
// isAllowed(17);

// function isAllowed(userAge) {
//   if (userAge >= 18) {
//     return "you are allowed";
//   }
//   return "you are not allowed";
// }
// isAllowed(17);
// console.log(isAllowed(17));

// function call/invocation
// sayHello("Mat", "Jo", "Maria");
// output: Hello Mat, Jo and Maria!

// const root = document.querySelector("#root");
// root.innerHTML = sayHello("Mat", "Jo", "Maria");
// console.log(root);

// function returnObj() {
//   return {
//     name: "Omar",
//     age: 25,
//   };
// }

// console.log(returnObj());

// function returnArr() {
//   return ["Omar", 2, true, function () {}];
// }

// "string".toUpperCase();
// // console.log(returnArr());
// const favArr = returnArr();
// console.log(favArr[1]);
// console.log(favArr[0]);
// console.log(favArr[2]);

// function sumAndAvg(array) {
//   // !array.length is the same as writing array.length === 0
//   if (!array.length) return;
//   let sum = 0;
//   for (i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum / array.length;
// }

// console.log(sumAndAvg([1, 2, 3]));

// function sumArray(array) {
//   if (!array.length) return;
//   let sum = 0;
//   for (i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// function avg(array) {
//   if (!array.length) return;
//   return sumArray(array) / array.length;
// }
// console.log(avg([1, 2, 3]));

// const arr = ["Pedro", 123, true, "Mike", [1, 2, ["a", "b"]]];
// console.log(arr[4][2][1]);

// const arrayNames = ["Pedro", "Jake", "Joan", "Mike"];
// console.log(arrayNames[99]);

// const arrayNames = ["Pedro", "Jake", "Joan"];
// // arrayNames.push("Rachel");
// arrayNames.unshift("Rachel");
// console.log(arrayNames);
// arrayNames.shift();
// console.log(arrayNames);

// const arrayNames = ["Pedro", "Jake", "Joan"];
// arrayNames.splice(0, 1);
// console.log(arrayNames);

const arrayNames = ["Pedro", "Jake", "Joan"];
// for (const name of arrayNames) {
//   console.log(name);
// }

// for (let i = 0; i < arrayNames.length; i++) {
//   console.log(arrayNames[i]);
// }

// arrayNames.forEach(function (element, index, array) {
//   console.log(index, element, array);
// });
// arrayNames.forEach((element, index, array) => {
//   console.log(index, element, array);
// });

// arrayNames.forEach(function (_, index) {
//   console.log(index);
// });

// const greeting = "Hello World";
// const greeting2 = "Hello,World";
// const arrayOfCharacters = greeting.split("");
// const arrayOfWord = greeting.split(" ");
// const arrayOfWords2 = greeting2.split(",");

// console.log(arrayOfWords2);
