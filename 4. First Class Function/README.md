# First Class Functions

1.**Function Statement** -> THe general way of how we declare a function is function statement<br><br>
2.**Function Expression** -> When we declare a function inside a varibale is called a function expression (refer in the **first_class.js** file) <br><br>
3.Difference between them is the hoisting. When we do ***a()*** , it will print the statement while ***b()*** will throw an error (Uncaught : TypeError) when we declare ***a()*** and ***b()*** before the function defination (hoisting).<br><br>
4. This happens because before executing the program during the memory allocation phase , the function is delcared in the mem space and treated as a nornal function while the b is initially treatewd a normal varibale by the js engine and after that phase is gone , then we see it becoming a function expression and thats why this error<br><br>
5. Function statement is also called ***Function Declaration*** <br><br>
6. **Anonymous Function** -> Function without any name. If we declare them directly it throws an error (Syntax Error). They are used as values. <br><br>
7. Like in ***var b*** , the function assigned is an anonymous function <br><br>
8. **Named Function Expression** -> When the function inside the **function expression is named (has a name and is not anonymous)<br><br>
9. In **Function Expression** , we cannot use the name of the function declared inside the variable and call it outside the variable scope. But it wont give an error when inside the function ofthe varibale it is declared (refer the js file).<br><br>
---
1. Parameter and Arguements are different terms <br><br>
2. When we pass the values inside the function are called arguements and the labels and identifiers that gets those values are called parameters.
3. Easy terms , when we define a function , the identifiers inside them are parameters, example ->
``` 
function abc(param1 , param2){
        return param1 + param2;
   } // here param1 and param2 are parameters

   abc(2 , 4) // 2 and 4 are arguements
```
   
4.
