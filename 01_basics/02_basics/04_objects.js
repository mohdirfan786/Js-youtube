// -------------------Object single ton  (constructor) ----------------------

const tinderUser = new Object () // singleton object 
 // const tinderUser = {}; // non singleton object 
tinderUser.id = "123abc",
tinderUser.name ="sam",
tinderUser.isLoggedIn =false

//console.log(tinderUser);

const regularUser = {
 email: "Sam@yopmail.com",
 fullname: {
    userfullName: {
        firstName: "irfan",
        lastName: "khan"
    }
 }
}

// console.log(regularUser.fullname.userfullName.firstName)

const obj1 = {1: "a", 2: "b",}
const obj2 = {3: "a", 4: "b",}
const obj3 = {5: "c", 6: "D"}

//const obj3 = {obj1, obj2}

//const obj4 = Object.assign(obj1,obj2)
//const obj4 = Object.assign ({},obj1,obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4)

const users = [
    {
        id: 1,
        email: "irfan@yopmail.com"
    },

    {
        id: 2,
        email: "irfan@gmail.com"
    },
    {
        id: 3,
        email: "irfan@hotmail.com"
    },
]

users[1].email  
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedOut'))