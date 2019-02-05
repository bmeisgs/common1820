function sequentialSearch(array,searchFor) {
    let found = "Item not found";
    for(let i=0;i<array.length;i++) {
        if(array[i] === searchFor) {
            found = "The item " + searchFor + " was found at position " + i + " in the array";
            i = array.length;
        }
    }
    console.log(found);
    return found
}

function binarySearch(array,searchFor) {
    let found = "Item not found";
    mid = Math.round(array.length/2);
    if(mid==searchFor) {
        found = "The item " + searchFor + " was found at position " + mid + " in the array";
    }
    else if(mid<searchFor) {
        for(let i=mid;i<array.length;i++) {
            if(array[i] === searchFor) {
                found = "The item " + searchFor + " was found at position " + i + " in the array";
                i = array.length;
            }
            console.log(i);
        }
    }
    else {
        for(let i=mid;i>=0;i--) {
            if(array[i] === searchFor) {
                found = "The item " + searchFor + " was found at position " + i + " in the array";
                i = -1;
            }
        }
    }
    console.log(found);
    return(found);
}

function bubbleSort(array) {
    for(let i=0;i<array.length-1;i++) {
        for(let j=0;j<array.length;j++) {
            if(array[j]>array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    console.log(array);
    return array;
}

function selectionSort(array) {
    for (let min=0;min<array.length-1;min++) {
        i = min;
        for(let c=min+1;c<array.length;c++) {
            if (array[c]>array[i]) {
                i = c;        
            }
        }
        let temp = array[i];
        array[i]=array[min];
        array[min]=temp;
    }
    console.log(array);
    return array;
}

testArray = [6,1,3,5,7,4,2,1,4,6,6,9,7,4,2,4];
selectionSort(testArray);