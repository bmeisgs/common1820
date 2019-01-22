let elements = [1,663,8,2,4,1,22,66,20,122];
for(let i=0; i<elements.length-2; i++){
    for(let j=0; j<elements.length-i; j++){
        if(elements[j] > elements[j+1]){
            let temp = elements[j]
            elements[j] = elements[j+1]
            elements[j+1] = temp
        }
    }
}
console.log("elements are now sorted")
for(let e=0; e<elements.length-1; e++){
    console.log(elements[e])
}
