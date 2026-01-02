// Immediately invoke Function Expression (IIFE)

//Q: why use of iife 
//A: IIFE -> globla scope ke polution se problem hoti hai kai baar to us globla scope ke variable hai ya jo v waha declaration hai uske polution ko hatane ke liye humne IIFE ka use kiya

(function chai () {
    //named IIFE
    console.log(`DB Connected`);
})();

(  (name) => {
    // unnamed IIFE 
    console.log(`DB connected Two ${name}`);
    
}) ("irfan");