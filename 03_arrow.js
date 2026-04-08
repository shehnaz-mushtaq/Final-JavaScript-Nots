const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username} , welcome to website`);
        //console.log(this);// ye pora curunt context mean sari value btay ga
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);// because node mn hai kisi {} k under ni hai is liy empty scope day ga

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // function mn direct this keyword use ni hota sirf objects mn he use hota hai
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// ++++++++++++++++++++++++++ Arrow Functions +++++++++++++++++++++++++


let nameOfMyBook = () => {
    console.log('Hello');
    
}
nameOfMyBook()

const chai =  () => {
    let username = "hitesh"
    //console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//Implecet return  jis mn {} ni dany prty or na he return keyword ka use kia jata hai


let myNameOf = (num1, num2) => num1 + num2
console.log(myNameOf(5, 6))


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})
// object ko return or print krny k liy () ka use lazmi hota hai implecite function ni to undefined ay ga


//console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()