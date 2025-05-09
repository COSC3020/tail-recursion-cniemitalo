function tFib(n, fib, fibOld) {
    //return the final value 
    //ends here because we've already checked first two cases
    if (n === 2) return fib; 

    //calculate the previous two numbers 
    //similar to iterative 
    let tmp = fib; 
    fib = fib + fibOld; 
    fibOld = tmp; 

    //keep track of n iterations
    //pass new values 
    return tFib(n - 1, fib, fibOld); 
}

function fib(n) {
    //base cases
    if (n === 0) return 0; 
    if (n === 1) return 1; 

    //start with base cases 0, 1 and build up from there
    return tFib(n, 1, 0); 
}
