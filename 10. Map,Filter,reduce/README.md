# Map Filter Reduce

1. ***Map*** are higher order functions used to transform an array(like we did in the example of making our own map function using Array.prototype).<br><br>
2. ***filter()*** is used to filter or make conditional transformations in an array, it works for the condition inside the callback function should be true.<br><br>
3. ***Reduce*** is used when we want to make a single result or single output from an array , like if we need to find the sum of an array, we are basically making that array into one integer tha is its sum.<br><br>
4. The two parameters in the reduce are called accumalator and current , accumalator is the vaiable that gets the value accumalated and current points to the position at the current node of the array or its like **nums[i]** <br><br>
5. Reduce takes 2 parameter , first the functon , second is the initial vale of the accumalator.