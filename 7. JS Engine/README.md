# JS Runtime Environment

1. **JS Runtime Env** ->  An environment which enables to run Js on any machine Browser is able to execute js code because it has Js Runtime environment. NodeJs is also server side Js environment.<br><br>
![JS_env](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/photo1719856197.jpeg)<br><br>

# JS Engine

1. JavaScript is a scripting language and is not directly understood by computer but the browsers have inbuilt JavaScript engine which help them to understand and interpret JavaScript codes. These engines help to convert our JavaScript program into computer-understandable language.<br><br>
2. Inside JS Engine , the JS has 4 stages of execution<br><br>
    ***Code*** -> ***Parsing*** -> ***Compilation*** -> ***Execution***<br><br><br> 
3. **Code -> Parsing**
   1. ![Paring](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/photo1719857928.jpeg)<br><br>
      1. When the Code goes into the parsing stage , the JS engine converts it into ***Tokens***    
         like ``` const a = "Mudit" ``` -> each character , const , a , = , "Mudit" is converted
         into a token.<br><br>
      2. And then a ***Syntax Parser*** converts them into an **AST** or ***Abstract Syntax Tree***<br><br>
      3. Check about [Abstract Syntax Tree](astexplorer.net).<br><br>
4. **Parsing -> Compilation -> Execution**
   1. ![Round2](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/photo1719860532.jpeg)
      1. Javascript compilation is called ***JIT (Just in-Time Compilation)*** means its a optimized
         amalgation of both interpretation and compilation
      2. So the JS code is first interpreted line by line and then it is compiled into the machine
         code and the compiler is optimizing the code while the code is also being interpreted
         and that it why the compilation is called JIT.
      3. After the compilation stage , it sent to the execution stage where 2 main things are present that are **Memory Heap** and **Call Stack (discussed in Event loop)**. Memeory heap stores the memory of the componenets used in the code and also is being checked by the **Garbage Collector**
      4. ***Garbage Collector*** use something called ***Mark and Sweep Algorithm (Study it)*** and deallocate a memeory and event handlers which are not in use or which are declared to deallocated.

---

## Google's V8 JS Engine

![V8_Engine](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/photo1719860590.jpeg)

1. 