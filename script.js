// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolph = calcAverage(85, 54, 41);
// const avgKoal = calcAverage(23, 34, 27);
// const checkWinner = (avgDl, avgKoa) => {
//   avgDl > avgKoa
//     ? console.log(`Dolphins win (${avgDl} vs ${avgKoa})`)
//     : console.log(`Koalas win (${avgDl} vs ${avgKoa})`);
// };

// checkWinner(avgDolph, avgKoal);

// const tips = [];
// const calcTips = function (sum) {
//   tips.push(sum / 0.15);
// };

// calcTips(150);
// calcTips(63);
// calcTips(42);
// console.log(tips);

// const calcBMI = function () {
//   this.BMI = this.mass / this.height ** 2;
//   return this.BMI;
// };

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;

//     return this.BMI;
//   },
// };
// console.log(mark);

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// mark.calcBMI();
// john.calcBMI();

// console.log(john);

// console.log(mark.BMI > john.BMI);

// if (mark.BMI > john.BMI) {
//   console.log(mark.BMI);
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI}!)`
//   );
// } else {
//   console.log(mark.BMI);
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI}!)`
//   );
// }

// let dice = Math.trunc(Math.random() * 6 + 1);

// while (dice !== 6) {
//   console.log(`You rolled ${dice}`);
//   dice = Math.trunc(Math.random() * 6 + 1);
// }

// const r = [4, 16, 32, 8];

// const calcAverage = function (arr) {
//   let num = 0;

//   for (i = 0; i < arr.length; i++) {
//     num += arr[i];
//   }
//   return num / arr.length;
// };

// calcAverage(r);
// console.log(calcAverage(r));
// const calcMilk = function (money) {
//   let milkCount = Math.trunc(money / 2.45);
//   let change = money - milkCount * 2.45;
//   console.log(
//     `You can buy ${milkCount} bottles of milk and your change is ${change.toFixed(
//       2
//     )}`
//   );
// };

// calcMilk(16);
// calcMilk(23);
// calcMilk(4);
// calcMilk(7);
// calcMilk(2.45);
// calcMilk(12.5);

// const multy = (num1, num2) => num1 * num2;
// const plus = (num1, num2) => num1 + num2;

// const calculator = (num1, num2, operation) => operation(num1, num2);
// console.log(calculator(2, 3, multy));

// function Character(name, health, weapon) {
//   this.name = name;
//   this.health = health;
//   this.weapon = weapon;
// }

// const mage = new Character("Roou01", 45, "staff");
// console.log(mage);

// function anotherEvent(eventType, callback) {
//   const happenedEvent = {
//     typeof: "keypress",
//     key: "p",
//     time: 2,
//   };
//   if (eventType === happenedEvent.typeof) {
//     callback(happenedEvent);
//   }
// }

// $(document).keypress(function (e) {
//   $("h1").text(e.key);
//   console.log(e.key);
// });

// $("h1").on("mouseover", function () {
//   $("h1").text("hi");
// });
// $("h1").on("mouseleave", function () {
//   $("h1").text("Main header");
// });

// const fs = require("node:fs/promises");

// // import { copyFile, constants } from "node:fs";
// fs.copyFile("style.css", "style2.css");

const chararcters = [
  "Монах",
  "Рыцарь",
  "Древень",
  "Ниндзя",
  "Варвар",
  "Лунная Эльфийка",
  "Пиромант",
  "Теневой вор",
];
const charSelect = function () {
  const random = Math.trunc(Math.random() * 8 + 1);
  console.log(chararcters[random - 1]);
  console.log(random);
};
charSelect();
