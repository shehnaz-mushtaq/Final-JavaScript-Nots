// array


// ✔ Shallow Copy:

//Shallow copy me sirf outer object copy hota hai, lekin nested objects ka reference same rehta hai,
//  is liye changes original me bhi reflect ho jate hain.

//✔ Deep Copy:

//Deep copy me object ki poori independent copy banti hai (including nested objects), 
// is liye changes original ko affect nahi karte.



const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7) //add krny k liy
// myArr.pop() // last value delete ho jati hai

// myArr.unshift(9) //arry k start mn add krta hai value mn
// myArr.shift()// ye phly vala value delete krta hai

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // ye value ko string mn convert kr day ga

//console.log(myArr);
// console.log( newArr);


// slice, splice // they return a peice of arry

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // ye origional arry ko manipulate ni krta or na he last range value ko include krta hai

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // ye origional value ko manipulate b krta hai or last range ko include b krta hai
console.log("C ", myArr);
console.log(myn2);