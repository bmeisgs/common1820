let elements = [1,633,8,2,4,1,22,66,20,122];
for(i=0; i<elements.length-1; i++){
    for(j=0; j<elements.length-1; j++){        
        if(elements[j] > elements[j+1]){
            let temp = elements[j];
            elements[j] = elements[j+1];
            elements[j+1] = temp;
        }
    }
}

console.log("sorted elements");
for(let e = 0; e<elements.length-1; e++){
    console.log(elements[e]);
}