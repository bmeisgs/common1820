const fs = require('fs'); // lets you use all the features of the module (lik an unlock code)
let readOut = fs.readFileSync("./ls.txt", "UTF8"); /* 1: make it a variable so that you have smth you can log;
2: fs.readFileSync is one of the functions in the module
and for it to work it needs the path of the txt file and this utf8 thing which idk what is */
console.log(readOut); // then you use log the variable

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