# Callbacks

1. When you pass a function inside a functon , it is called a **callback function**
2. In the example of the setTimeout , we see that the o/p is -> x y timer. This happens becuase we JS is a ***Single Threaded Synchrnous language*** and cannot block its main and only thread in the process.
3. **eventListener()** -> n event listener is a function that is called when an event is triggered on a particular element. You can add multiple event listeners to a single element for the same event type. Event listeners are typically added using methods like addEventListener.
4. **Event handler** -> An event handler is a property of an element (such as onclick, onmouseover, etc.) that you set to a function. This function is executed when the event occurs. Typically, only one event handler can be assigned to a property at a time. If you assign another handler to the same property, it will overwrite the previous one.
5. In **event_listener.js** , we see that we firstly added the entire module inside afunction , this is done to use closure as closure are good for data abstraction. Also we used the ***let*** for the count variable. 