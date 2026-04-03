let heros = ["Hi", "Hello" , "GoodBy"]
let anotherHeros = ["Hy", "HelloEverybody" , "GoodByAll"]

//heros.push(anotherHeros); // but ye arry k ander aik or arry bna day ga
//console.log(heros);

//let allHeros = heros.concat(anotherHeros)
//console.log(allHeros); // ye aik he arry bnata hai


// Spread methods  ye basically is mn limitation ni hoti bs , lagao or aik value day do

let allnewHeros = [...heros, ...anotherHeros]
//console.log(allnewHeros);


//flat method   is mn ye hota hai k agr arry k under aik or arry ho or us k under aik or arry 
// or us k uder aik and so on to ye method us ko aik he arry mn convert kr data hai

let another_array = [11, 2,3,4,[73,34,56,565,  [833333 ,345,35,6,6]] , [667,343]]
//let finalArry = another_array.flat(Infinity) //infinty ka mtlb last tak depth mn jay gi
let finalArry = another_array.flat(1) // IS MN 2 LAYER TOTY GI

//console.log(finalArry);


console.log(Array.isArray("Hitesh")) // CHECK KRNY K LIY K KIA YE ARRY HAI
console.log(Array.from("Hitesh")) // Arry.from is ko arry bnany k liy use hota hai
console.log(Array.from({name: "hitesh"})) // object dany sy ye direct arry ni bnay blky
//  AIk empty arry return kry ga q k is ko btana pry ga k object ki key use krni hai ya value

let score1 = 100
let score2 = 200
let score3 = 300

let allscores = Array.of(score1, score2, score3) // Arry.of b kisi b object ya value ko arry mn convert krny k use hota hai
console.log(allscores);


