let values = [11,12,15,16,112,118,123,145];
let target = 15
let found = false
let min = 0
let mid = 0
let answer = 0

while(found === true && min <= values.length-1){
    mid = (min+values.length-1)/2
    if(values[mid] === target){
        found = true
        answer = mid  
    }
    else if(target>values[mid]){
        min = mid++
    }
}

if(found = true){
    console.log(target + " found at array index: " + answer)
}
else{
    console.log(target + " was not found, big oof")
}