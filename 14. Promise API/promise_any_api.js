const p1 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("p1 resolved") , 3000)
});

const p2 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("p2 resolved") , 1000)
    // setTimeout(() => reject("p2 rejected") , 1000)
});

const p3 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve("p3 resolved") , 2000)
    setTimeout(() => reject("p3 rejected"), 2000);
});

Promise.any([p1 , p2 , p3])
.then((res) => console.log(res))//prints p2 resolved because it got p2 is resolved
.catch((err) => console.log(err));





const p4 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("p1 resolved") , 3000)
});

const p5 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve("p2 resolved") , 1000)
    setTimeout(() => reject("p2 rejected") , 1000)
});

const p6 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("p3 resolved") , 2000)
    // setTimeout(() => reject("p3 rejected"), 2000);
});

Promise.any([p4 , p5 , p6])
.then((res) => console.log(res))//prints p3 resolved because it got p2 is rejected but the first resolved is p3
.catch((err) => console.log(err));





const p7 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve("p1 resolved") , 3000)
    setTimeout(() => reject("p1 rejected") , 3000)
});

const p8 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve("p2 resolved") , 1000)
    setTimeout(() => reject("p2 rejected") , 1000)
});

const p9 = new Promise((resolve , reject) => {
    // setTimeout(() => resolve("p3 resolved") , 2000)
    setTimeout(() => reject("p3 rejected"), 2000);
});

Promise.any([p7, p8 , p9])
.then((res) => console.log(res))//prints p3 resolved because it got p2 is rejected but the first resolved is p3
.catch((err) => {console.log(err)
        console.log(err.errors)});//Here the catch function is useful to handle the erro
/*
[AggregateError: All promises were rejected] {
    [errors]: [ 'p1 rejected', 'p2 rejected', 'p3 rejected' ]
  }
*/

