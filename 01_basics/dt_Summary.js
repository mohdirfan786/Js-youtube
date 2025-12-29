// Primitive 

// 7 Types : String, boolean, number, symbol , null, undefined,BigInt


// Number
const score = 100
console.log(typeof score )

const scoreValue = 100.3
console.log(typeof scoreValue )

// boolen
const isLoggedIn = false
console.log(typeof isLoggedIn  )

// object (null)
const outsideTemp = null
console.log(typeof outsideTemp)

// undefined
let userEmail;
console.log(typeof userEmail )

 // symbol declaration
 const id =  Symbol('123')
 const anotherID = Symbol('123')

 console.log(id == anotherID);

 // BigInt
 const bigNumber = 2737823782378n
 console.log(typeof bigNumber )


// Refernce Type( Non premitive )

// Arrays, Object, function 

const heros = ["Shaktiman", "Junior G", "Hatim"]
console.log(heros);

let myObj = {
name: "Irfan",
age: 27,
phone: 983292389

}
console.log(myObj)

const myFunction = function () {
    console.log("Hello world");
  
}
  console.log(typeof myFunction)




