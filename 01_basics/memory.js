// stack (Primitive), Heap (Non primitive)

// picture example: https://prnt.sc/SG4VbxTO4-me


let myYoutube = "IrfanYoutube"

let anotherName = myYoutube
anotherName = "chaiAurSutta"

console.log(myYoutube);
console.log(anotherName);

let userOne = {
 email: "user@google.com",
 upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "irfan@google.com"

console.log(userOne.email);
console.log(userTwo.email)

