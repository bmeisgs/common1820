var array = [-30,-13,4,-3,-30,-3,-3,-3,-15];
var size = 9;

let i = 0;
while(i<size-2){
  let j = 0;
  while(j<size-2){
    if(array[j]>array[j+1]){
      var temp = array[j];
      array[j] = array[j+1];
      array [j+1] = temp;
    }

  }
}

var previous = array[0];
var x = 1;

var b = 0;
while(b<size-1){
  if( array[i] == previous){
    x = x +1;
  }
  else if( i == 8){
    console.log("Number :",array[i],"frequency: ",x);
  }
  else{
  console.log("Number :",array[i-1],"frequency;",x)
  }
}



