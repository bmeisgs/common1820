//ask what O(log n) and O(n) time complexity means (found in book on pp 213(p 226))
//didnt really get the very last one


//-------sequential search-----------
let n = [2, 9, 5, 6, 7, 8];
let x = 7; //search value
let found = false;
for (let i=0; i<n.length; i++) {
    if (n[i] === x) {
        found = true;
        console.log(n[i] + ' found at position ' + i);
    }
}
if (found === false) {
    console.log(x + ' not found');
}


//-------binary search--------
let values = [11,12,15,16,112,118,123,145];
let target = 15;
let min = 0;
let answer = -1;
let mid = 0;
let high = values.length-1;
let prevmid = -1;

while (answer<0 && min<=high) {
    mid = (Math.floor((min+high)/2));
    if (values[mid] === target) {
        answer = mid;
    } else if (target > values[mid]) {
        min = mid+1;
    } else {
        high = mid-1;
    }
    prevmid = mid;
}
if (answer>-1) {
    console.log(target + ' found at array index ' + answer);
} else {
    console.log(target + ' was not found');
}


//-------bubble sort-------
// in descending order:
let elements = [1,663,8,2,4,1,22,66,20,122];
let acc = 0;

for (let i=0;i<elements.length-1;i++) {
    for(let j=0;j<elements.length-1;j++) {
        if (elements[j]<elements[j+1]) {
            let temp = elements[j];
            elements[j]=elements[j+1];
            elements[j+1]=temp;
        }
    }
}
console.log('sorted elements: ');                 //console.log('sorted elements: ' + elements);
for (let e=0;e<elements.length-1;e++) {
    console.log(elements[e]);
}
// in ascending order:
elements = [1,663,8,2,4,1,22,66,20,122];
for (let i=0;i<elements.length-1;i++) {
    for(let j=0;j<elements.length-1;j++) {
        if (elements[j]>elements[j+1]) {
            let temp = elements[j];
            elements[j]=elements[j+1];
            elements[j+1]=temp;
        }
    }
}
console.log('sorted elements: ');                 //console.log('sorted elements: ' + elements);
for (let e=0;e<elements.length-1;e++) {
    console.log(elements[e]);
}

//--------bubble sort 2.0 (ver. w while loops; sorts in descending order)--------
//this is probs unnecessary but i still did it
elements = [1,663,8,2,4,1,22,66,20,122];
n = 10;
let i=0;
while (i<=n-1) {
    let j=0;
    while(j<=n-i-2) {
        if (elements[j]<elements[j+1]) {
            let temp = elements[j];                             // temporary variable = accumulator
            elements[j]=elements[j+1];
            elements[j+1]=temp;
        }
        j= j+1;
    }
    i = i+1;
}
console.log('sorted elements: ');                 //console.log('sorted elements: ' + elements);
for (let e=0;e<elements.length-1;e++) {
    console.log(elements[e]);
}


//--------------selection sort------------
elements = [1,5,3,86,256,420,9,510,51,24,60];
let temp = 0;
for (let min=0;min<elements.length-1;min++) {
    i = min;
    for(let c=min+1;c<elements.length;c++) {
        if (elements[c]>elements[i]) {       //for descending order; for ascending order: if (elements[c]<elements[i]){...}
            i = c;        
        }
    }
    temp = elements[i];
    elements[i]=elements[min];
    elements[min]=temp;
}
console.log('sorted array: ' + elements);


//------------example of an algorithm for a specific problem/implementation of one or more sorting algorithms------------
//task: calculate the frequency of numbers in an array
let array = [-30,-13,4,-3,-30,-3,-3,-3,-15];
for (let i=0;i<array.length-2;i++) {   //start of bubble sort
    for (let j=0;j<array.length-2;j++){
        if (array[j]>array[j+1]) {
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
} 
//array is sorted
let previous = array[0];
x=1;
for (let i=1;i<array.length;i++) {
    if (array[i] === previous) {
        x++;
        if (i === 8) {
            console.log('number: ' + array[i] + ' frequency: ' + x);
        } else {
            console.log('number: ' + array[i-1] + ' frequency: ' + x);
            previous=array[i];
            x=1;
            if (i === 8) {
                console.log('number: ' + array[i] + ' frequency: ' + x);
            }
        }
    }
}