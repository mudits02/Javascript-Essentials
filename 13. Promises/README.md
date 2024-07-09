# Promise

1. A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. <br><br>
2. Can also be called as an Object ***Representing eventual completion or rejection of an asynchronous operation***<br><br>
3. It is represented like this -> {data : undefined} and once the promise is resolved -> {data : function_value}<br><br>
4. *.then()* in the promise.js basically means that when the ***createOrder*** pormise is resolved , then the callback function is called.<br><br>
5. There are **3** states in Promise
   1. Pending -> Neither Fulfilled nor rejected<br>
   2. Fulfilled -> The operation was completed successfully<br>
   3. Rejected -> The operation failed<br><br>
6. Promise Objects are immuatable. So we can use that data provided after fulfilled without being tensed that our promise will be intact and it will not change(bascaillay u cant edit it). <br><br>
7. 