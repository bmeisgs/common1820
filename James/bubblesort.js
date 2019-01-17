let elements = [1,663,8,2,4,1,22,66,20,122];

for(let i=1; i<elements.length-2; i++){
    (j=0; j<elements.length-i; j++);{
        if(element[j] > element[i+1]){
            let temp = element[j]
            element[j] = elements[j+1]
            element[j+1] = temp
        }
    }
}

console.log("elements are now sorted")

for(let e=0; e<elements.length-1; e++){
    console.log(elements[e])
}
