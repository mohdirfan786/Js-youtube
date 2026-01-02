/* // ---- ------ ------ Scope -----------------------------------------

//var c = 300
let a = 300

if (true) {
   let a = 10 
const  b = 20 
//var c = 30 
console.log("INNER", a);



}

console.log(a);
//console.log(b);
//console.log(c); */

//const { use } = require("react")

//---------------------------------------------------------------

function one () {
const username = " Irfan"

function two (){
   const website = "youtube"
   console.log(username)
}
//console.log(website)
//two()

}
//one()

/* 
if (true) {
   const username = "irfan"

   if (username === "irfan")
   {
      const website = " youtube hindi Js"
      console.log(username + website)

   }

 //  console.log(website);
   

}

//console.log(username) */

//++++++++++++++++++++++++++interesting=++++++++++++++++++++++++

console.log(addOne (5))
function addOne (num) {
   return num + 1

}

console.log(addTwo(6));
const addTwo = function (num2)
{
  return num2 +2 
}

