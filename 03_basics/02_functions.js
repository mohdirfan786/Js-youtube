//-------------------function for ecommerce programm--------------------
// (...num1 ) Rest operator for function 
// ... spread operation for 

function calculateCartPrice (val1, val2, ...num1 ) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 600, 2000))

const user = {
userName: "irfan",
prices: 199

}
function handleObject (anyObject){
console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)
}
//handleObject(user)
handleObject ( {
    userName: "Sam",
    price: 500
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue (getArray){
    return getArray[1]

}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 800, 1660]))

