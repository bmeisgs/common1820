let arr = []
const fs = require("fs")
let readOut = fs.readFileSync("C:/users/Embassy of Albania/Desktop/ITstuff.txt", 'UTF8')
console.log(readOut)
let lines = readOut.split("\r\n")
for(let i=0; i<lines.length; i++){
    arr.unshift(lines[i])
}
console.log(arr)
