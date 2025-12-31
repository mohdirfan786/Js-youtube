// -------------------- Function --------------------------------


function sayMyName () {
console.log("I");
console.log("R");
console.log("F");
console.log("A");
console.log("N");
}

//sayMyName()

function addTwoNumber ( Number1, number2) {
// let result = Number1 +number2
// return result

   return Number1 + number2;
}
  const result = addTwoNumber(3, true);
  //console.log("Result:", result)

  function loginUserMessage (username = "sam") {
    if (username === undefined) {
        console.log("please enter username");
        return
    }
    return `${username}, Hey what's up`
  }
  console.log(loginUserMessage())
  






