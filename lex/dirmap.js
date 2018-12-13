const fs = require('fs');

console.log(dirreader("D:/dokumenter/IB/IT"));

function dirreader(path) {
    let output = [];
    let dirlist = fs.readdirSync(path);
    for(let i=0;i<dirlist.length;i++) {
        let statinfo = fs.statSync(path+"/"+dirlist[i]);
        if (statinfo.isDirectory()) {
            output.push(path+"/"+dirlist[i]+":");
            let subdir = dirreader(path+"/"+dirlist[i]);
            for(let j=0;j<subdir.length;j++) {
                output.push(subdir[j]);
            }
        } else {
            output.push(path+"/"+dirlist[i]);
        }
    }
    return output;
}