let a = [5, 1, 4, 7, 9, -12];
function dist () {
    for (i = 0; i < a.length--; i ++) {
        let distance = a[i] - a[i++];
        dists = [];
        dists.push(distance);
    }
    for (i=0; i < dists.length-1; i++) {
        if (dists[i]>dists[i++]) {
            i++
        }
        else {
            console.log(dists[i]);
        }
    } 
}
dist();