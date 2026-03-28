let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

//Prifix And Postfix

// Prefix vs Postfix (simple explanation):

// 🔹 Prefix

// 👉 Jab operator value se pehle likha jata hai

// Example:

// let a = 5;
// let b = ++a;

// ✔️ Pehle a increase hoga (6 banega)
// ✔️ Phir b ko assign hoga

// 👉 Result:
// a = 6
// b = 6

// 🔹 Postfix

// 👉 Jab operator value ke baad likha jata hai

// Example:

// let a = 5;
// let b = a++;

// ✔️ Pehle b ko old value milegi (5)
// ✔️ Phir a increase hoga

// 👉 Result:
// a = 6
// b = 5

// 🔥 Main Difference:
// Prefix (++a) → pehle change, phir use
// Postfix (a++) → pehle use, phir change


let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
