


function name() {
    console.log("N");
    console.log("A");
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("N");
    
}
name () // is mn name reference hai or () execute hai



// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

//addTwoNumbers(2,4); // is case mn cosol mn to 6 aa jay ga but return undefined he rhy ga


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 // return k bad koi b value print ni hoti
}

const result = addTwoNumbers(3, 5) // ab jo hai return mn 8 jay ga

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ 
// rest operator ...key asl mn ye multiple value ko aktha k kr k aik arry mn show krta hai
    return num1 
}

 //console.log(calculateCartPrice(200, 400, 500, 2000))

 // object sy value ko access krna function ka use krty hoy

let userData ={
    name :"Nasreen",
    email : "nasreen@gmail.com"
}

 function  userAllData(data) {
    return data.name
}

//console.log(userAllData(userData));
//second method

console.log(userAllData({
    name:"Nasreen",
    email:"nasreen@gmail.com"
}));





const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));