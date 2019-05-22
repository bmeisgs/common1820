let equasion = "15 7 1 1 + - *"
/* expected output:
    15 7 2 - *
    15 5 *
    75
*/
let numberInput = []
equasion = equasion.split(' ');
for(i = 0; i<equasion.length; i++){
    var newEquasion = parseInt(equasion[i]);
    if(equasion[i] == '+' || equasion[i] == '-' || equasion[i] == '*'){
        numberInput.push(equasion[i]);
    } else {
        numberInput.push(newEquasion);
    }
}
console.log(numberInput);
let finalOutput = [];
let lastTwo = 0;
for(i = 0; i<numberInput.length; i++){
    console.log('this is equasion at the start of every loop: '+ numberInput);
    if(numberInput[i] == '+'){
        lastTwo = numberInput[i-1] + numberInput[i-2];
        numberInput.splice(i-2, 2)
        numberInput[i-2] = lastTwo
        i = 0
        console.log(numberInput.length)
        console.log(i)
        console.log('this is the value of the last two when its a +: ' + lastTwo);
        console.log('this is equasion after getting rid of one value and replacing another: ' + numberInput);
    } else if(numberInput[i] == '-'){
        lastTwo = numberInput[i-2] - numberInput[i-1];
        numberInput.splice(i-2, 2)
        numberInput[i-2] = lastTwo
        i = 0
        console.log('this is the value of the last two when its a -: ' + lastTwo);
        console.log('this is equasion after getting rid of one value and replacing another: ' + numberInput);
    } else if(numberInput[i] == '*'){
        lastTwo = numberInput[i-1] * numberInput[i-2];
        numberInput.splice(i-2, 2)
        numberInput[i-2] = lastTwo
        console.log('this is the value of the last two when its a *: ' + lastTwo);
        console.log('this is equasion after getting rid of one value and replacing another: ' + numberInput);
        i = 0
    } 
}
finalOutput.push(numberInput[0]);
console.log(finalOutput);