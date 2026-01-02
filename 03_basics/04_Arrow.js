// ---------------Arrow function --------------
const user = {
    username: "irfan",
    price: 199,

    welcomeMessage: function () 
    {
        console.log(`${this.username}, Welcome to out website`)
        console.log(this)
    }

}

/* user.welcomeMessage()
user.username = "sam"
user.welcomeMessage() */
//console.log(this)


/* function  chai (){
    let username = "irfan"
    console.log(this.username)
}

chai() */
/* 
const chai = function(){
     let username = "irfan"
    console.log(this.username)
}

console.log(chai()) */

const chai =  () => {
     let username = "irfan"
    console.log(this)
}

//chai()

/* const addThree = (num1, num2, num3) => {
    return  num1 + num2 + num3 // return keyword use karte hai to wo explicit return hota  hai 
}
console.log(addThree(2,3,4)); */

//const subsTwo = (num1, num2, ) =>   num1 + num2 

//const subsTwo = (num1, num2) => (num1 + num2) // implicit return

const subsTwo = (num1, num2) =>  ({username: "irfan"})


console.log(subsTwo(2,3,));

const myArray = [2,3,4,5,6]
myArray.forEach(() => ({}))
