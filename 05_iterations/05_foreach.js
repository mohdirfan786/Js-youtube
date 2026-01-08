//foreach

const coding = ["js","paython","Ruby", "Java","C#","cpp"]

/* coding.forEach( function (val) {
console.log(val);
}) */

/* coding.forEach(  (val) => {
    console.log(val);
    
}) */
/* 
function printMe(item) {
    console.log(item);
    
}
coding.forEach(printMe) */
/* 
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})

 */

const  myCoding = [ 
     {
    languageName: "javascript",
    languageFile: " JS",
} ,
 {
    languageName: "Paython",
    languageFile: " py",
},
 {
    languageName: ".net",
    languageFile: " C#",
}   
]

myCoding.forEach( (item) => {
console.log(item.languageName);

})
