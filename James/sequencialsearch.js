let N = [2, 9, 5, 6, 7, 8]
let X = 7

found = false

for (i=1; i<N.length-1; i++){
    if (N[i] === X){
        found = true;
        console.log(X, " has been found")
    }
    else {
        console.log(X, " has not been located")
    }
}
