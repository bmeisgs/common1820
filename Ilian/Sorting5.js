let Elements = [1, 5, 3,86,256,420,9,510,51,24,60];
let min = 0;
let temp = 0; 

for(let min = 0; min<Elements.length-2; min++){
    let i = min;
    for(let current = min+1; current<Elements.length-1; current++){
        if(Elements[current] < Elements[i]){
            i = current;
        }
    }
    let temp = Elements[i];
    Elements[i] = Elements[min];
    Elements[min] = temp;
}

console.log("sorted array");
for(let c = 0; c<Elements.length-1; c++){
    console.log(Elements[c]);
}