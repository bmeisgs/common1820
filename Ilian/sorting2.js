let values = [11,12,15,16,112,118,123,145];
let target = 15
let found = false;
let min = 0;
let mid = 0;
let answer = 0;
let high = values.length-1

while(found === false && min <= high){
    mid = Math.floor((min+high)/2);
    if(values[mid] === target){
        found = true;
        answer = mid; 
    }
    else if(target>values[mid]){
        min = mid++;
    }
    else{
        high = mid--;
    }
}

if(found = true){
    console.log(target + " found at array index: " + answer);
}
else{
    console.log(target + " was not found, big oof");
}