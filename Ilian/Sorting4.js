let elements = [1,633,8,2,4,1,22,66,20,122];
let n = 10;
let i = 0;
while(i<=n-1){
    let j = 0;
    while(j <= n-i-2){
        if(elements[j]<elements[j+1]){
            let temp = elements[j];
            elements[j] = elements[j+1];
            elements[j+1] = temp;
        }
        j = j+1;
    }
    i = i+1;
}

console.log("Sorted elements")
for(let e = 0; e<elements.length-1; e++){
    console.log(elements[e]);
}
