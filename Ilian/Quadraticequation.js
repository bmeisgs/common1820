function quadraticEquation(A,B,C){
    let D = (B*B - (4*A*C));
        if(D<0){
            console.log("No real roots.");
            return
        }
        else if(D===0){
            console.log("Only one solution and it is:" + (-1*B + Math.sqrt(D))-2*A);
            return
        }
        else{
            console.log("Root1 =" + (-1*B + Math.sqrt(D))-2*A)
            console.log("Root2 =" + (-1*B + Math.sqrt(D))-2*A)
        }
}

quadraticEquation(1,2,3)