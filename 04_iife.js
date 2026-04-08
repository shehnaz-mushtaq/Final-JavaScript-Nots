//Immediately Invoked Function Expressions IIFE
// jo function imidiatly execute ho jay  OR
// IIFE ko hum is liy use krty hai ta k goloble scope ka polution ko remove kr sakyn 

// syntax () ()

// NOTE : iife mn after one function ; laga complasory hota hai ni to error aa jata hai
//named iife jis mn function ka name declear kia gia ho
(
    function name(){
        console.log("Hello");
        
    }
)();

// simple iife jis mn function ka name declear na kia gia ho
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')