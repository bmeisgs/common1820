function findClosest(array) {
    let smallestPair
    let prevDistance
    for(let i = 0; i < array.length - 1; i++) {
        let pair = [i,i+1];
        if(array[i] > array[i+1]) {
            distance = array[i] - array[i+1];
        }
        else {
            distance = array[i+1] - array[i];
        }
        if(i==0){
            prevDistance = distance;
        }
        if(distance < prevDistance) {
            smallestPair = pair;
            prevDistance = distance;
            smallestDistance = distance;
        }
    }
    console.log("The indexes of the smalles pair is " + smallestPair + " and their distance is " + smallestDistance);
}
someArray = [5,1,4,7,9,-12]
findClosest(someArray);