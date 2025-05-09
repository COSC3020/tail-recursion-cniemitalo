function tFib(n, fib, fibOld) {
    //return the final value 
    //ends here because we start at base case 1 
    if (n === 1) return fib; 

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

    //start with base cases 0, 1 and build up from there
    return tFib(n, 1, 0); 
}
