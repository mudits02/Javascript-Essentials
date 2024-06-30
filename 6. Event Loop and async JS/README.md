# Event Loop and Asynchronous Javascript

1. This is how the browser looks from inside:<br><br>
![Browser](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/photo1719756627.jpeg)<br><br><br>
2. The following image shows the entire working of the callback inside a setTimeout and we will see how it works
![Callback](https://github.com/mudits02/Javascript-Essentials/blob/master/Images/msg-392637688-26422.jpg)
    1.So at the start of the code , first the ***GCE*** executes and prints **Start**.<br><br>
    2.Then we see setTimeout , it is called and then the callback function inside it is called it   
      gets registered and the timer is called inside the browser and it keeps waiting for the itmer 
      to go off<br><br>
    3.Then it goes to the End console while the timer is ticking and prints End.<br><br>
    4.When the time exceeds 5 seconds , the timer closes and the registered callback goes to the    
      Callback Queue and the ***Event Loop*** keeps a check on whether something is there or not in  
      the Cb and as soon as it finds that it has the callback , it just takes it into the GEC and 
      just executes it and the GEC also gets terminated.

