let ARRAY = [-30,-13, 4, -3, -30, -3,-3,-3,-15];
let size = 9;
let counts = new Array();

for(let i = 0; i<size-2; i++){
    for(let j = 0; j<size-2; j++){
        if(ARRAY[j] > ARRAY[j+1]){
            temp = ARRAY[j];
            ARRAY[j] = ARRAY[j+1];
            ARRAY[j+1] = temp;
        }
    }
}

let previous = ARRAY[0];
let x = 1;
for(let i = 1; i<8;i++){
    if(ARRAY[i]===previous){
        x = x+1;
        if(i===8){
            console.log("number: " + ARRAY[i] + " frequency: " + x);
        }
    }
    else{
        console.log("number: " + ARRAY[i-1] + " frequency: " + x);
        previous = ARRAY[i];
        x = 1;
        if(i === 8){
            console.log("number: " + ARRAY[i] + " frequency: " + x);
        }
    }
}