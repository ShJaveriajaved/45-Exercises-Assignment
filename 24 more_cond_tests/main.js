//Define Variables
var cherry = "cherry";
var upperCaseCherry = "APPLE";
var fifty = 50;
var hundred = 100;
var veggies = ["potato", "tomato", "chillies"];
// Test for equality and inequality with strings
console.log("Is cherry is equal to cherry?");
console.log(cherry == "cherry");
console.log("Is cherry is not equal to cherry?");
console.log(cherry != "cherry");
// Tests for lowercase functions
console.log("Is CHERRY is equal to cherry after converting into lowercase?");
console.log(upperCaseCherry.toLowerCase() == "cherry");
console.log("Is CHERRY is not equal to cherry after converting into lowercase?");
console.log(upperCaseCherry.toLowerCase() != "cherry");
//Numerical tests
console.log("Is fifty is equal to hundred?");
console.log(fifty == hundred);
console.log("Is fifty is not equal to hundred?");
console.log(fifty != hundred);
//Greater than
console.log("Is fifty is greater than zero?");
console.log(fifty > 0);
//Less than
console.log("Is fifty is less than than 100?");
console.log(fifty < 100);
// Greater than or equal to
console.log("Is fifty is greater than or equal to 100?");
console.log(fifty >= 100);
//Less than or equal to
console.log("Is fifty is less than or equal to 100?");
console.log(fifty <= 20);
// Test for and & or
//using (and)
console.log("hundred is not equal to 50 and hundred is greater than 50");
console.log(hundred != 50 && hundred > 50);
console.log("hundred is not equal to 50 and hundred is greater than 105");
console.log(hundred != 50 && hundred > 105);
//using (or)
console.log("100 is greater than 105 OR 100 is equalto 100");
console.log(100 > 105 || 100 == 100);
console.log("100 is less than 50 OR 100 is equal to 50");
console.log(100 < 50 || 100 != 100);
//Test wether an item is included in array
console.log("Is potato is included in my veggies array?");
console.log(veggies.includes("potato"));
console.log("Is potato is not included in my veggies array?");
console.log(!veggies.includes("potato"));
