const fs = require('fs');
let readOut = fs.readFileSync("D:/dokumenter/IB/IT/repos/common1820/lex/ls.txt", "UTF8");
console.log(readOut);

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