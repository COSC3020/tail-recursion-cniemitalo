function tFib(n, fib, fibOld) {
    //return the final value 
    //starts here, since fibNew is by default 1 
    if (n === 1) return fibNew; 

    //calculate previous + current 
    //similar to iterative 
    let fibNew = fib; 
    fib = fib + fibOld; 
    fibOld = fibNew; 

    //keep track of n iterations
    //pass new values 
    return tFib(n - 1, fib, fibOld); 
}

function fib(n) {
    //base case 
    if (n === 0) return 0; 

    //start with first two of sequence (0, 1)
    return tFib(n, 1, 0); 
}
