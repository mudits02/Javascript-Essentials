# setTimeout Explained

![setTimeout Explained](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/photo1719775355.jpeg)<br><br>

1. In the js file *setTimeout_working.js* , we see that first a GEC is created and then Start is printed <br><br>
2. Then directly setTimeout is called and the timer starts.<br><br>
3. End is printed<br><br>
4. Now the next snippet takes 10 sec to executes but the timer will expire in 5 sec , so till then setTimeout cannot be called because the main thread or the main Call stack is blocked by the Date API code and after that is executed after 10 sec , then directly the ***Callback*** is printed.<br><br>

---

# 0 time setTimeout

```
console.log("Start");

setTimeout(() => {
    console.log("Callback");
} , 0)

console.log("End);
```
<br><br>

Now even when the time is set to 0 milisecond , still the output is 
```
Start
End
Callback
```
This is because even tbough we have set the time to 0 , the execution context of the setTimeout will take a very very small error time to execute and thus it still goes in the prev way itself<br>

We can use when we have declared a big function but of less priority and want to defer that code , then we can use 0 setTimeout time because it will execute it after the main functions are executed.