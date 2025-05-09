# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

The non-tail recursive fibonacci function has a worst case asymptotic complexity of $\Theta(2^n)$, because every iteration adds two recursive calls, each running at most n times before it reaches the base case. The number of recursive calls would therefore double at every call, $2^n$. 

I believe the tail-recursive iteration would be different, because it only has one recursive call per iteration, which would run in linear time n before it reaches the base case and ends. Therefore the worst-case asymptotic complexity of the tail-recursive fibonacci sequence would be $\Theta(n)$. 

### Sources and Plagiarism 

- https://www.baeldung.com/cs/fibonacci-computational-complexity, for analyzing time complexity of non-tail recursive fibonacci 

- looked at iterative version from lecture slides viewed in class

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
