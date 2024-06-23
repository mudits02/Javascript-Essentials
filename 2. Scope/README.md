# Block and Scopes

1. **Block** -> Basically when we want to write compound statements , that it when we have to write multiple statement for a loop or say if statement  , we cll that scope as block scope.

2. ***let*** and ***const*** are not accessible in outside the scope they are declared while var can be accessed outside the scope as well. <br>
3. When we open debugger and see  , ***let*** and ***const*** are declared in the block scope while ***var*** is declared in the Global Scope <br>
4. That is why ***let*** and ***const*** are called they are in the blocked scope.<br>
5. in **scope.js** , we see that ***a*** first prints 10 both the time when printed inside and after the scope , this is because of the concept called **Shadowing**. This happens because **a** is declared in the global scope and the block value shadows or overwrites it and it shadows it in its global scope. this is done because both are pointing to the same memory location.<br>
6. in ***let*** and ***const*** , shadowing works a but differently. In these 2 , shadowing works if they are modified in the same scope , once the scope changes , then we see shadowing to fail , because in **scope.js** , the ***b*** and ***c*** , they are declared in different scopes , the inside scope is in Scoped and the outside scope is in Script , and thus dont point to the same memory scope.<br>
7. **Illegal Shadowing** -> In scope example example , if we try to declare a ***let a*** in global and then do ***var a*** in bllocked scope , it will give an error. This is illegal shadowing.<br>
8. Vice versa of above will be perfectly fine , Also we can shadow **let** and **let** <br>
9. In **lexical_scope.js** , we see that the const ***m*** accesses the ***m*** of its lexical scope. <br>
10. Also, in debugger , u will observe that the **const** and **let** declared inside a scope will come under block and when they are declared like in the global scope , they will be under scrpit.