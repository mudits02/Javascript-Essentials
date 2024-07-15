# Async Await

---
1. ***Async*** -> It is a keyword that is used to make a function async and this always returns a promise and if it doesnt return a promise and returns a value , then it internally wraps that value isndie a function and returns it as a Promise.<br><br>
2. ***Await*** -> This keyword can only be used inside an ***Async*** function and it is used to resolve the promise(instead of us traditionally using ***.then()***). <br><br>
3. Now a valid thinking is that why are we using async await when we have ***.then()*** to resolve the promise which we are thrown at , when we use directly ***.then()*** , even when we are handling the promise before the printing of the **Normal Function** sentence , still since JS waits for none , we just get **console.log()** printed and then it waits for 10 sec and then the resolved promise is printed i.e. **Normal Function** <br><br>
4. While if we do this using ***async & await*** , we see that we first wait for 10 sec , then the statement ***Async function*** is printed and then the console.log()'s statement is printed , basically in this case , JS waits for that 10 sec which wasnt done in normal handling of promise using ***.then()***. <br><br>

---

### Advanced Asyn Await (refer async_await_prac.js)

1. Case 1 -> When the Promise 1 has 10 sec and Promise 2 is 5 sec , then the entire output i.e.
```
Log 1
Promise 1
Log 2
Promise 2
```
waits for 10 sec , nothing is printed and then suddenly the entire output is printed after 10 sec , which means that Promise 2 , even when had 5 sec , had to wait to be printed for 10 sec and got printed instantly when the Promise 1 got resolved<br><br>

2. Case 2 -> When Promise 1 has 5sec and Promise 2 has 10 sec , then we see that in 5 sec , The content of Promise 1 is printed and after 10 sec the content of Promise 2 is printed.<br><br>
3. **Explanation of Case 2** ->So first we enter the function ***handlePromise()*** and then we print **Hello World** , then we go to **await p1** and it goes in the callstack and js engine sees that it takes 5 sec , so it does not block the callstack and suspends the ***handlePromise()*** function only. After 5 sec , the function gets executed and then it goes to await p2 and then sees that 5 sec have passed and 5 more seconds are remaining so it again suspends and then total after 10 sec , it calls the function again , takes the **await p2** and executes it , that is why such result is printed. <br><br>
4. **Explaination of Case 1** -> Prints **Hello World** and then goes to **await p1** and sees that there is a timer for 10 sec and then after excuting it , suspends the ***handlePromise()*** for 10 sec. After 10 sec , it comes back and executes the **await p1** , goes to the next line and sees that the **await p2** is already done with the time of 5 sec and just takes it in the callstack and executes it.<br><br>
5. This all is done so that the main thread or callstack is not blocked.<br><br>
6. And the function execution is suspended , program ***is not*** suspended.<br.<br>

---

### Real Life Async Await

1. Fetch Actually returns a promise and has to be handled by using ***await***. <br><br>
2. In fetch() , we use try and catch to do error handling<br><br>
3. We can also do error handling using the ***.catch()*** method in fetch. <br><br>