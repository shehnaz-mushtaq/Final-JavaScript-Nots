//{} is ko  bolty hai scope agr ye function ya if else stAtement mn ho to but agr
//  ye object mn hai to is ko object delerastion he bloty hai

//neasted scop

function one(){
    const username = "Nasreen"

    function two(){
        const email="nasreen@gmail.com"
        console.log(username);
        
    }
    //two()

    //console.log(email); 

    // simply parent sy child value ko 
    // access kr sakta hai but parent child sy element access ni kr sakta
    
}
one()


if (true){
    const username ="Nasreen"
    if(username === "Nasreen"){
         let website = " Youtube"
         console.log( username + website);
         
    }
    //console.log(website);
    
}
//console.log(username);



//+++++++++++++++++++++++ Hoisting ++++++++++++++++++++++++


console.log(addOne(5)); 
// is simple function mn agr befor initialization run kry gy to function execute ho jay ga 
function addOne(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
// but agr variable mn holde kia ho  function ko to agr befor initialization run kry gy to function execute ni ho ga 


