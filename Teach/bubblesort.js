let elements = [1,663,8,2,4,1,22,66,20,122];
let acc = 0;

for(let i=0;i<elements.length-1;i++) {
    for(let j=0;j<elements.length-1;j++) {
        if (elements[j]>elements[j+1]) {
            acc = elements[j];
            elements[j] = elements[j+1];
            elements[j+1] = acc;
        }
    }
    console.log(elements);
}

