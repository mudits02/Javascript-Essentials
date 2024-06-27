# Closures

1. **Closure** -> It is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).<br>
2. A closure is a function that remembers the variables from the place where it was created, even after that place has gone away. In other words, a closure allows a function to keep using variables from outside its own scope.<br>
3. Example -> Imagine you have a function inside another function. The inner function can access variables from the outer function.<br>
4. Return the Inner Function: When the outer function runs, it can return the inner function to be used later.<br>
5. Remember the Variables: Even if the outer function has finished running and its local variables would normally be gone, the inner function (the closure) still remembers those variables.<br>
---
## setTimeout (Main js file -> setTimeout_closure.js)
1. Time , Tide and Javascript waits for none , so when we do ***setTimeout*** in in setTimeout_closure.js file , first the console.log is printed and then the value inside the **setTimeout.<br><br>
2. In the js file , we see that **setTimeout_var()** function prints 6 , 6 times , this is becuase of closure , because firstly we have declared var , so due to closure , the callback is pointed to the referrence of the variable i and not the value , so it just keeps on printing it due to clousre.<br><br>
3. In. **setTimeout_let()** function prints 0 1 2 3 4 5 after each iteration , this is because ***let*** is a blocked scope and after each iteration takes place , a new ***i (let)*** is generated and the value gets updated and printed or copy of this ***i*** afster each iteration is new.<br><br>
4. If we have to use ***var*** anyhow , then we use clousres , what we do is we make a function named close() and after wrapping it around the setTimeout callback , we just call it after it , basically making a new argument inside it.