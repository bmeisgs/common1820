let n = [2, 9, 5, 6, 7, 8];
let x = 7;
let found = false;

for(let i = 0; i<n.length-1; i++){
    if(n[i] === x){
        found = true;
        console.log(n[i] + " found at position: " + i);
    }
}

if(found === false){
    console.log(x + " not found");
}