# ***this*** Keyword
---

1. ***this*** is keyword used extensively in Javascript and acts differently in different scopes i.e. global scope , functional scope , etc.<br><br>
2. When we print this keyword in global scope , it returns the ***Global object*** of that particular Javascript Runtine Environment(window in case of browsers). <br><br>
3. This can be different for example running in *NodeJS* or any other appliance where JS is working(JS requires a JS runtime environment).<br><br>
4. Now , ***this*** keyword works differently in **strict** mode and **non-strict** mode , in **strict** mode , it returns undefined when printed inside a function and normal when defined in the global scope. In **non-strict** mode , it retuns window object. <br><br>
5. ***this substitution (happens only in unstrict mode)*** -> If the value of the ***this*** keyword is **null** or **undefined** , then JS replaces it with the **globalObject** only in **non-strict** mode<br><br>
6. The value of ***this*** keyword is determined by how a function is called during the **Runtime** of the code (**Runtime Binding**). like in *this_1.ja* , ***x()*** gives undefined and window.x() gives **window** output in **strict** mode. <br><br>
7. In JS , a function delcared inside an object is called ***method***. ***x*** is a method since declared inside an object.
```
    const Obj = {
        a : 10,
        x : function (){
            console.log(this);
        }
    }

    Obj.x();
    this.a;
```
8. When we print the value of ***this*** from such *method* , it prints the value of the object itself
![Output](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/Screenshot%202024-07-20%20at%203.20.31%E2%80%AFPM.png)

9. If we do 
```
    const Obj = {
        a : 10,
        x : function (){
            console.log(this.a);
        }
    }

    Obj.x();
```
The above one prints **10** because in that scope , ***this*** keyword becomes the object itself.

10. In ***Arrow*** functions , this doesnt have there own binding , instead it retains the value of the **enclosing lexical scope** i.e. it retains the scope of the place or scope in which the object is delcared , like in the example , the object *obj* is declared in the global scope , so the ***this*** will print the global scope object<br><br>
11. In the second object obj2 , we can see that it prints the Obj2 because now that this is inside the an arrowfunction which is delcared inside the function which is inside that object obj2 , so it follows the scope of the ***x*** where it is declared , basically it points to the scope one above it<br><br>
12. 

---

## call, apply, bind methods

1. Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.<br><br>
2. In **this_2.js** ,  we want to invoke the **printName** function for the student2 function and to do that , we use call function and we can see that the syntax is 
```
    parentObject.function_to_be_invoked.call(childObject);
```
here childObject is the object where we have to invoke the function.
<br>

3. It can also be called as ***function borrowing***.<br><br>
4. So inside it , the first arguement , we pass the object which we have to point to get the function invoked from, the other arguements are the parameneters which we will be passing through it in case the function has some parameters , example in the this_2.js file<br><br>
5. In ***Apply*** method , we pass the arguements in an array rather than passing them spearately as done in ***Call*** method.<br><br>
6. ***bind*** method is same like call but the difference is that we can save it for later to be invoked rather than directly having to use it in ***call*** method. <br><br>

 