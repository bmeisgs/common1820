function factorial(N){
    if(N === 0 || N === 1){
        console.log(1)
        return
    }
    else if(N === 2){
        console.log(2)
        return
    }
    else if(N < 0){
        console.log("Error, does not compute.")
        return
    }
    else if(N>2){
        let Z = N-1
        while(Z != 0){
            N = N*Z
            Z = Z-1 
        }
    console.log(N)
    return
    }
}

factorial(5)