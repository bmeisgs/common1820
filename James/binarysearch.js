let values = [11,12,15,16,112,118,123,145] //sorted array elements
let target = 15 //search value
let min = 0
let high = 7 // Number of array elements - l
let found = false
let answer = 0
let mid = 0

while (found === true && min <= values.length-1){
    mid=((min+high)/2)
    if (values[mid] === target) {
        found = true;
        answer = mid
    }else if (target > values[mid]) {
        min = mid+1
    }
    else {
        high = mid-1
    }
}

if(found=true){
    console.log(target, "was located at", answer)
}
else{
    console.log("failed to locate", target)
}