// =============== objects Literals ==========================

// singleton // next session study please check 04_objects.js page
// object.create // constructor please check 04_objects.js page
//----------------------------------------------------------


const mySymb = Symbol("key1")

const jsUser = {
 name:"Irfan",
"full name":"irfan Khan",
 [mySymb]: "myKey1",
 age: 18,
 location :"Jaipur",
 email: "irfan@gmil.com",
 isLoggedIn: false,
 lastLoginDays: ["Monday", "Saturday"]

}

/* console.log(jsUser["age"]);
console.log(jsUser["full name"]);
console.log(jsUser["email"]); 
console.log(jsUser[mySymb]); */

jsUser.email = "irfan@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "irfan@microsoft.com"
//console.log(jsUser)

jsUser.greeting = function () {
 console.log("Hello JS user");
}

jsUser.greetingTwo = function () {
 console.log(`Hello JS user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());







