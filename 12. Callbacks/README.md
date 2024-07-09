# Callbacks

1. A callback is a function passed as an argument to another function.<br><br>
2. Callbacks are used when we want to perform async operations , because JS is a single threaded programming language<br><br>
3. In the ***callback.js*** , the **proceedToPayment()** is in the callback because we want that proceedToPayment should be done only after **createOrder()** is completed.<br><br>
4. basically it means is that create the order and then ***call the function back***.<br><br>
5. Now to show the summary, we will just pass the function of show Summary to the **proceedToPayment()**. <br><br>
6. ***Callback Hell*** -> When we are callback inside a callback and so on. It makes the code grow horizontally and not vertically and very difficult to maintain.
