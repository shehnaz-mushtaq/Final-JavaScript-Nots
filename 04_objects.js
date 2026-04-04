//Singleton obkect

let tinderUser = new Object()
//console.log(tinderUser);
//non Singleton Object
let anothertinderUser = {}


// kuch value asign krty hai hai anothertinderUser ko

anothertinderUser.id = "123",
anothertinderUser.name = "Ali",
anothertinderUser.logedIn = false

//console.log(anothertinderUser);

//nested object

let userBiography ={
    email : "hello@gamil.com",

    userName : {
    userFullName:{
        firstName :"Shehnaz",
        lastName:"Mushtaq"
    }
    }
}

//console.log(userBiography.userName.userFullName.firstName);

// Object ko assign krna mean k un apis mn merge ya add krna

let obj1 = {1:"A", 2 :"B", 3:"C"}
let obj2 = {4:"A", 5 :"B", 6:"C"}
let obj3 = {7:"A", 8 :"B", 10:"C"}

// let obj4 = Object.assign({} ,obj1,obj2,obj3) // is mn {} is liy use krty 
// hai ta k is new object mn sara data add ho kr aa ay agr hum ye ni kryn 
// gy to origional object mn add ho jay so origional object ko safe rakhny k liy hum { ko use krty hai}
// console.log(obj4);

// is mn hum spread b use kr sakty hai

let obj4 = {...obj1, ...obj2};

//console.log(obj4);




const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmaill.com"
    },
]

let allUsers = users[2].email
console.log(allUsers);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // to check all keys
// console.log(Object.values(tinderUser)); // to check all values
 console.log(Object.entries(anothertinderUser)); // ye her object ko aik arry mn show krta hai

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));