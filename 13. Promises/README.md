# Promise

1. A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. <br><br>
2. Can also be called as an Object ***Representing eventual completion or rejection of an asynchronous operation***<br><br>
3. It is represented like this -> {data : undefined} and once the promise is resolved -> {data : function_value}<br><br>
4. *.then()* in the promise.js basically means that when the ***createOrder*** pormise is resolved , then the callback function is called.<br><br>
5. *.catch()* is to catch the errors from the reject function , if our promise gets rejected , see ***promise_object.js*** , basically helps in handling erros<br><br>
6. There are **3** states in Promise
   1. Pending -> Neither Fulfilled nor rejected<br>
   2. Fulfilled -> The operation was completed successfully<br>
   3. Rejected -> The operation failed<br><br>
7. Promise Objects are immuatable. So we can use that data provided after fulfilled without being tensed that our promise will be intact and it will not change(bascaillay u cant edit it). <br><br>
8. ***Resolve*** and ***Reject*** are functions used in the context of Promises to indicate the outcome of an asynchronous operation<br><br>
9. ***Resolve*** means success and ***Reject*** means failed.
10. In **promise_object.js** , we will see that orderID declared inside resolve gets printed in callback of the .then() of the promise. This is because it is passed to the callback when we put it in the resolved.<br><br>
11. To avoid falling into a Promise Hell , we basically return the Promise of the previous promise that is to be resolved further<br><br>
12. In *error handling* of promises , if we put ***.catch()*** just after a ***.then()***, it means that we are handling that particular function only.