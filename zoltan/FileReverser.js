const fs = require('fs');
let file = fs.readFileSync("/Users/zoltan/Desktop/Storage/Othello.rtf","UTF8");
console.log(file);
reg = /\r?\n/
let lines = file.split(reg);
console.log(lines);

//output.reverse(); would be the simple way but you asked for the alternate way to reverse it

let output = [];
for(let i = 0; i < lines.length; i++) {
    output.unshift(lines[i]);
}
console.log(output);