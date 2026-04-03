// singleton  (agr constructor sy bny ga to vo singleton object ho ga)
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // yhan pr [] ye is liy use ki agr na krty to ouput string hoti na k symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //ye old method hai
// console.log(JsUser["email"]) // [] ye better method hai hr trha ki keys ko access krny k liy
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com" // value ko overwright kia hai
// Object.freeze(JsUser)  // value ko freez kia hai ab value overwright ni ho gi
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this ko use krty hai hai reference k liy
}

JsUser.gretingThree = function(){
    console.log(`Hello Js User ${this.email}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser.gretingThree());
