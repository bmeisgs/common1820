let values = [11,12,15,16,112,118,123,145] //sorted array elements
let target = 145 //search value
let min = 0
let high = 7 // Number of array elements - l
let answer = 0
let mid = 0

while (answer<0 && min <= high){
    mid=(Math.floor((min+high)/2))
    answer = (values[mid]===target) ? mid : -1;
    if (values[mid]<target) {
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