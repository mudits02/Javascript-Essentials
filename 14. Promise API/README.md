# Promise APIs
---
## 1. Promise.all([p1 , p2 , p3])
1. ***Promise.all()*** -> If promises are done in a way like Promise.all([p1 , p2 , p3]), where *p1* , *p2* and *p3* are promises , then if all are succesful , the only ***Promise.all()*** is succesfull and gets resolved.<br><br>
2. For example , p1 is resolved in 3sec , p2 -> 1 sec and p3 -> 2 sec , then ***Promise.all()*** will wait for 3 sec till p1 i.e. the last promise is not resolved.<br><br>
3. Now if p1 gets rejected , then ***Promise.all()*** gets rejected even if say p2 and p3 get resolved(p2 and p3's promises wont get canceled in between as it is not aloowed in JS), but overall ***Promise.all()*** gets rejected<br><br>
4. In case of rejection of p2 , it will not wait for other promises to be resolved , it directly throws an error.<br><br><br>

## 2. Promise.allSetteled([p1 , p2 , p3])

1.

