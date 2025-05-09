const fs = require('fs'); 
const assert = require('assert'); 

eval(fs.readFileSync('code.js') + ''); 

assert(JSON.stringify(fib(0)) == JSON.stringify(0)); 
assert(JSON.stringify(fib(1)) == JSON.stringify(1)); 
assert(JSON.stringify(fib(2)) == JSON.stringify(1)); 
assert(JSON.stringify(fib(3)) == JSON.stringify(2)); 
assert(JSON.stringify(fib(5)) == JSON.stringify(5)); 
assert(JSON.stringify(fib(8)) == JSON.stringify(21)); 
assert(JSON.stringify(fib(10)) == JSON.stringify(55));
assert(JSON.stringify(fib(15)) == JSON.stringify(610));  
assert(JSON.stringify(fib(20)) == JSON.stringify(6765))
assert(JSON.stringify(fib(42)) == JSON.stringify(267914296)); 
