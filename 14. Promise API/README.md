# Promise APIs
---
## 1. Promise.all([p1 , p2 , p3])
1. ***Promise.all()*** -> If promises are done in a way like Promise.all([p1 , p2 , p3]), where *p1* , *p2* and *p3* are promises , then if all are succesful , the only ***Promise.all()*** is succesfull and gets resolved.<br><br>
2. For example , p1 is resolved in 3sec , p2 -> 1 sec and p3 -> 2 sec , then ***Promise.all()*** will wait for 3 sec till p1 i.e. the last promise is not resolved.<br><br>
3. Now if p1 gets rejected , then ***Promise.all()*** gets rejected even if say p2 and p3 get resolved(p2 and p3's promises wont get canceled in between as it is not aloowed in JS), but overall ***Promise.all()*** gets rejected<br><br>
4. In case of rejection of p2 , it will not wait for other promises to be resolved , it directly throws an error.<br><br><br>

## 2. Promise.allSetteled([p1 , p2 , p3])

1. In this API , it returns the array woth same number of outputs as there were inputs.<br><br>
2. It waits for all Promises to get settled and wait till the last promise is'nt settled.<br><br>
3. For example , p1 -> 3 sec , p2 -> fails , p3 -> 2 sec , then the output would be *[val1 , err2 , val3]* and the result will come after 3 sec i.e. it waits till the last promise *p1* is not settled(settled means its result is out , whether be resolve or rejected).<br><br><br>
4. Basically even if all 3 promises fail , it will return *[err1 , err2 , err3]* as the output and not just give out the error , same number of outputs as there were inputs.<br><br><br>

## 3. Promise.race([p1 , p2 , p3])

1. It gives the result of the ***First Settled Promise***.<br><br>
2. It returns a single value i.e. the result of the promise which gave a result(be it rejected or resolved). <br><br>
3. For example , if p1 -> 4 sec , p2 -> 6 sec , p3 -> 2 sec , then it will return *val3* if it gets resolved and *err3* if it gets rejected , but the result will be thrown is single and of the first ***settled*** Promise.<br><br><br>

## 4. Promise.any([p1 , p2 , p3])

1. It gives the result of the ***First Resolved Promise***<br><br>
2. If all the promises get rejected then it will give an aggregated error array.<br><br>
3. When any first promise gets resolved , it ust returns the value of it(single output)<br><br>
4. For example , if p2 gets resolved first , we get val2 as an output but if all promises get rejected , then we get [err1 , err2 , err3] , basically list of all the array<br><br>

---

## Common Nomenclature in Promises



