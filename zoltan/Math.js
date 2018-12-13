function findVectorForm(a,b,c) {
	let H = (-1*b)/(2*a);
	let K = a*H*H+b*H+c;
	let RESULT = a + "(x-" + H + ")^2+" + K;
	console.log(RESULT);
	return RESULT;
}

function fibonacci(largestNum) {

	let NUM = 1;
	let NUMPREV = 0;
	let FIBONACCI = [0];
	let I = 0;
	while(NUM<=largestNum) {
		FIBONACCI.push(NUM);
		NUM = NUMPREV + NUM;
		NUMPREV = FIBONACCI[I+1];
		I += 1;
	}
	console.log(FIBONACCI);
	return FIBONACCI;
}

function findPrimes(NUMBERS) {
	let PRIMES = [];
	
	for(let I=0;I<=NUMBERS.length-1;I++) {
		let RESULTS = [];
		let ROUNDED = [];
		let INCORRECT = 0;
		if(NUMBERS[I] >= 2) {
			for(let J=2;J<=(Math.sqrt(NUMBERS[I]));J++) {
				if(NUMBERS[I] % J == 0) {
					J = NUMBERS[I];
					INCORRECT = 1;
				}	
			}
			if(INCORRECT == 0) {
				PRIMES.push(NUMBERS[I]);
			}
		}
	}
	if(PRIMES.length == 1) {
		console.log("The only prime in the list |" + NUMBERS + "| is " + PRIMES);
	}
	else if(PRIMES.length == 0) {
			console.log("There are no primes in the list |" + NUMBERS + "|");
	}
	else {
		console.log("The primes in the list |" + NUMBERS + "| are |" + PRIMES + "|");
	}
	return PRIMES;
}

function factorial(NUM) {
	let NOTNUM = NUM
	for(let I=1;I<NOTNUM;I++) {
		NUM = NUM*I;
	}
	console.log("The factorial of " + NOTNUM + " is " + NUM);
	return NUM;
};

function power(X,N) {
	let NEWX = 0;
	if(N === 0) {
		NEWX=1;
	}
	else if(N === 1) {
		NEWX=X;
	}
	else {
		NEWX=X;
		for(I=0;I<N-1;I++) {
			NEWX = NEWX*X;
		}
	}
	console.log(X + " to the power of " + N + " is " + NEWX);
	return NEWX;
};

function findCoefficient(N,K) {
	if(K === 0 || K === N) {
		COEF = 1;
	}
	else {
		COEF = (factorial(N))/(factorial(N-K)*factorial(K))
	}
	console.log("The coefficient of " + N + " choose " + K + " is " + COEF);
	return COEF;
};


function expand(A,B,N) {
	let ANSWER = 0;
	let RESULT = "";
	for(let J=0;J<=N;J++) {
		ANSWER = ANSWER + (power(A,N-J))*(power(B,J))*(findCoefficient(N,J));
		RESULT = RESULT + " " + (findCoefficient(N,J)).toString() + "|" + (power(A,N-J)).toString() + "|" + (power(B,J)).toString() + " ";
	}
	console.log("The final answer is  " + RESULT);
	return ANSWER;
};

//Write which functions you want to use below