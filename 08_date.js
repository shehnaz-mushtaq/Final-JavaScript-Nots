// Date is a Object in its nature



// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // is mn miliseconds mn time ay ga 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //1000 sy divide krny sy second mn time ay ga

let newDate = new Date()
console.log(newDate);
 console.log(newDate.getMonth() + 1 );
 //because month or days 0 sy start hoty hai is liy +1 dia hai ta k pora or sai sy answer ay 
 console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
// yhan pr lon ka mtlb hai k day ka pora name btay short ya narrow mn ni
    
// })


