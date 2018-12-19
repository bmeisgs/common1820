const fs = require('fs'); 
let readOut = fs.readFileSync("./ls.txt", "UTF8"); 
console.log(readOut); 

let lines = readOut.split("\n");
lines.reverse();
console.log(lines);



let x = [];
for (let i = 0; i < lines.length; i++) {
  x.unshift(lines[i]);
}
console.log(x);


/*
fs.open('/open/some/ls.txt', 'r', (err, fd) => {
    if (err) throw err;
    fs.fstat(fd, (err, stat) => {
      if (err) throw err;
      fs.readFile('/etc/passwd', (err, data) => {
        if (err) throw err;
        console.log(data);
        let splitString = require('fs').readFileSync('ls.txt').toString().split('\n').forEach(function (line) { line; });
        let ReverseArray = splitString.reverse();
        console.log(ReverseArray);
      });
      fs.close(fd, (err) => {
        if (err) throw err;
      });
    });
  });
  */