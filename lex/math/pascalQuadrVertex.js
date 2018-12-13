function factorial(N) {
     if (N === 0 || N === 1) {
         console.log(1);
     } else if (N === 2) { 
         console.log(2);
     } else if (N < 0) {
         console.log("input error");
     } else if (N >= 2) { 
         let NUMBERTAKENAWAYFROMN = N-1;
         while (NUMBERTAKENAWAYFROMN !== 0) { 
             N = N * NUMBERTAKENAWAYFROMN;
             NUMBERTAKENAWAYFROMN = NUMBERTAKENAWAYFROMN - 1;
         }
        console.log(N);
     }
}

function GetCoefficient(N,K) { 
  if (K === 0) {
     return 1;
  } else if (K === 1) { 
     return N;
  } else if (K === N) {
     return 1;
  } else if (K === N-1) { 
     return N;
  } else { 
    factorial(N,K);      
    COEF = N / (K * (N-K));
  }
console.log(COEF);
}

GetCoefficient(6,3);


function getVectorForm(A,B,C){
    H = (-1*B)/(2*A);
    K = A*H*H + B*H + C; 
    let result = A + "((X-" + H + ")^2)+" + K;
    console.log(result);
}

getVectorForm(3,2,1);


function discriminant (A, B, C) {
    let D = Math.pow(B,2) - 4*A*C;   
}

function findRoots(A,B,C) {
    discriminant (A,B,C);
	if (D < 0) {
	    console.log("there are no real roots");
    } else if (D === 0) {
	    let X = (Math.pow(B,2) - Math.sqrt(D)) / 2*A;
		console.log(X);
    } else if (D > 0) {
	    let X1 = ( Math.pow(B,2) - Math.sqrt(D) ) / 2*A;
        let X2 = ( Math.pow(B,2) + Math.sqrt(D) ) / 2*A;
        let X = [X1,X2];
		console.log(X);
    }
}

findRoots(1,2,3);