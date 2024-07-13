const p1 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("p1 resolved") , 3000)
});

const p2 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve("p2 resolved") , 1000)
    setTimeout(() => reject("p2 rejected") , 1000)
});

const p3 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("p3 resolved") , 2000)
});

Promise.all([p1 , p2 , p3])
.then((res) => console.log(res))
.catch((err) => console.log(err)); // Rejects and prints p2 failed in 1 sec and doesnt wait for p1 and p3.

Promise.allSettled([p1 , p2 , p3])
.then((res) => console.log(res)) //Prints the status of all the promises
// .catch((err) => console.log(err));//doesnt matter to put or not to put

Promise.race([p1 , p2 , p3])
.then((res) => console.log(res))// returns p2 rejected as the first promise to be settled here is p2 and that is in the rejected state
// .catch((err) => console.log(err));//again doesnt matter

/* output of all the 3 Promise APIs in a row , 1st Promise.all , then Promise.race and then Promise.allSettled
p2 rejected
p2 rejected
[
  { status: 'fulfilled', value: 'p1 resolved' },
  { status: 'rejected', reason: 'p2 rejected' },
  { status: 'fulfilled', value: 'p3 resolved' }
]
*/