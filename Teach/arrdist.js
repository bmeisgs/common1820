const arr = [5,1,4,7,9,-12];
let dist = -1;
let find = -1;

if (arr.length<2) {
    throw new Exception('WTF, man');
}
for(let i=0;i<(arr.length-1);++i) {
    /*
    let locd;
    if (arr[i]<arr[i+1]) {
        locd = arr[i+1]-arr[i];
    } else {
        locd = arr[i]-arr[i+1];
    }
    */
    let locd = (arr[i]<arr[i+1]) ? arr[i+1]-arr[i] : arr[i]-arr[i+1];
    if (dist===-1 || locd<dist) {
        dist = locd;
        find = i;
    } 
}

console.log(dist,find,find+1);
