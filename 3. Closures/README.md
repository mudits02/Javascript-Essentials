# Closures

1. **Closure** -> It is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).<br>
2. A closure is a function that remembers the variables from the place where it was created, even after that place has gone away. In other words, a closure allows a function to keep using variables from outside its own scope.<br>
3. Example -> Imagine you have a function inside another function. The inner function can access variables from the outer function.<br>
4. Return the Inner Function: When the outer function runs, it can return the inner function to be used later.<br>
5. Remember the Variables: Even if the outer function has finished running and its local variables would normally be gone, the inner function (the closure) still remembers those variables.<br>
6. 