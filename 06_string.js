const name = "Nasreen"
const email = "Nasreen@gmail.com"
console.log(`This is my name ${name} and this is my email address ${email}`); // 2 sreing ko jorny k liy use hota hai

// String Methods or Functions

// To get rototypes of string

console.log(name.__proto__);


console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf("n"));
console.log(name.substring(0, 4)); // is mn last letter include ni hota 3 tak print ho ga

let anothername = "ABCDEFGHIJ"
console.log(anothername.slice(-4, 8)); // ye last sy start krta hai

let anOtherName = "    Nasreen   "
console.log(anOtherName.trim()); //ye left or right dono side sy extra space ko remove krny k use hota hai

let url = "http/nasreen@gmail50%.com"
console.log(url.replace("50%", " _ ")); // words ko replace krny kliy
console.log(url.includes("gmail")); // words ko check  krny kliy k word hai ya ni

let splitMthod = "Nasreen_Mushtaq"
console.log(splitMthod.split("_" , 3));

 





