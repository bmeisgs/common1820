let values = [11,12,15,16,112,118,123,145];
let target = 11;
let answer = -1;
let mid = 0;
let min = 0;
let high = values.length-1;

while(answer<0 && min<=high) {
    mid = Math.floor((min+high)/2);
    answer = (values[mid]===target) ? mid : -1;
    console.log('min',min,'high',high,'mid',mid,'answer',answer);
    if (values[mid]<target) {
        min = mid+1;
    }
    else {
        high = mid-1;
    }
}

if (answer>-1) {
    console.log('thingie found at ',answer);
} else {
    console.log('thingie not found');
}