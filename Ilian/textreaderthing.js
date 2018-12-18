let arr = []
const fs = require("fs")
let readOut = fs.readFileSync("C:/users/Embassy of Albania/Desktop/ITstuff.txt", 'UTF8')
//pretend i made all the lines in the text seperate strings and pushed them into the array
arr.push(readOut) // pretend these are seperate indexes
console.log(arr)
let reversearr = arr.reverse
console.log(reversearr)
//now pretend i remade those seperate strings into one string and logged it as a string