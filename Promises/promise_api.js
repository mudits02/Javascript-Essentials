const p1 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("P1 is a success") , 3000);
})

const p2 = new Promise((resolve , reject) => {
    setTimeout(() => reject("P2 is a faliure") , 1000);
})

const p3 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("P3 is a success") , 2000);
})

Promise.all([p1, p2 , p3])
    .then(res =>{
    console.log(res);
    //op if p2 is rejected , promiserejection
    //op -> [ 'P1 is a success', 'P2 is a success', 'P3 is a success' ] when all are resolved
})
    .catch(err => {
    console.log(err); //prints the message of the rejected promise
});

//U can try this for all the other promise APIs.

// in promise.allSettled returns status: and value: if resolved and status: and reason: if rejected


