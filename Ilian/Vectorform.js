function getVectorForm(A,B,C){
    H = (-1*B)/(2*A)
    K = A*H*H+B*H+C 
    let result = A + "((X-" + H + ")^2)+" +K
    console.log(result)
}

getVectorForm(1,2,3)

