let Numbers = [5, 1, 4, 7, 9, -12]
let output = []
for(let i=0; i<Numbers.length-1; i++){
    output.push(Numbers[i] - Numbers[i+1])
}
console.log(output)
let distance = Math.min(output)
console.log("the distance is "+ distance +" between the elements and")
