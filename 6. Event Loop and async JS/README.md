# Event Loop and Asynchronous Javascript

1. This is how the browser looks from inside:<br><br>
![Browser](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/photo1719756627.jpeg)<br><br><br>
2. The following image shows the entire working of the callback inside a setTimeout and we will see how it works
![Callback](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/msg-392637688-26422.jpg)
    1.So at the start of the code , first the ***GCE*** executes and prints **Start**.<br><br>
    2.Then we see setTimeout , it is called and then the callback function inside it is called it   
      gets registered in the ***Web API envirnoment*** and the timer is called inside the browser 
      and it keeps waiting for the itmer 
      to go off<br><br>
    3.Then it goes to the End console while the timer is ticking and prints End.<br><br>
    4.When the time exceeds 5 seconds , the timer closes and the registered callback goes to the    
      Callback Queue and the ***Event Loop*** keeps a check on whether something is there or not in  
      the Cb and as soon as it finds that it has the callback , it just takes it into the GEC and 
      just executes it and the GEC also gets terminated.<br><br>

---

3. Following image is the second example of the event loop example , this time with **Event Listeners**

![Event_Listener](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/photo1719775355.jpeg)

 1. Again , the first line is pushed inside the GEC and executed , printing ***start***<br><br>
 2. when the document.getElementbyId is called , it calls the DOM APIs in the ***Web APi env*** and 
    we then the eventListener is called from inside it and the callback func **cb** is called and 
    registered in the ***Web API env*** and now this callback waits there till that button is
    pressed and that is why it takes up that memeory indefinetly.<br><br>
 3. Then the last line is executed and we get End as printed on the screen.<br><br>
 4. If ever button is pressed , then again from the env it goes to the ***callback queue*** and
    then the event loop checks and puts in into the GEC and its executed.<br><br>

---

# Micro Task Queue

The following example gives the insight about how promises are handled by the JS engine and what is Micro task queue

![MTQ](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/photo1719777664.jpeg)

1. Start is executed in the GEC<br><br>
2. Now setTimeout is called and it registeres in the ***env*** and then gets to the timer<br><br>
3. Now fetch is called and then we see a promise called from it. Now this promise is stored in the ***Micro Task Queue***.<br><br>
4. Micro task queue has a higher priority than the callback queue and say for example there are 100 promises in the MTQ , then also the CQ has to wait until all the tasks are completed and then the priority is given to the CQ to be executed.<br><br>
5. Now for example after the fecth there are 1 million lijnes of code to be executed, then both the fetch and setTimeout will wait in their respective queues and afer those are exexcuted , MTQ having higher prioroty executes fectch first and then we see settimeout si executed.<br><br>
6. ***Starvation*** -> when the functions inside the MTQ starts to multiply (recursivey) , then the CQ will never be executed as the MTQ has entered kind of an inifte loop , this is called ***STARVATION***.<br><br>
7. MTQ can contain promises and mutational observer(search more on net , has to do with some DOM manipulation shit).<br><br>
   
---
## Why do we need a callback queue and use of event loop

1. we need the callback queue and cannot directly execute it from the WebAPI env because by having a CQ , we basically queue them in an order and also know the order of execution of the tasks.<br><br>
2. Use of event loop is to constantly monitor the Call Stack , CQ and MTQ and keep on seeing whether all the task have been completed or not or whetther the call stack is empty or not so as to assign it more task(basically a toxic manager lmao).<br><br>

