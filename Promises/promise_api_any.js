const p1 = new Promise((resolve , reject) => {
    setTimeout(() => reject("P1 is a faliure") , 3000);
})

const p2 = new Promise((resolve , reject) => {
    setTimeout(() => reject("P2 is a faliure") , 5000);
})

const p3 = new Promise((resolve , reject) => {
    setTimeout(() => reject("P3 is a faliure") , 2000);
})

//This is a case when all the promise fail and we have called promise.any.

//Now if we directly log the error , it will just throw aggregated error and not the array
//of errors we expected

//So to get that array of errors , we need to do err.error and then we get it because
//.error calls the error array frpm the err object.

Promise.any([p1, p2 , p3])
    .then(res =>{
    console.log(res);
    
}).catch(err => {
    //console.log(err);
    
    console.log(err.errors);
//op -> Node.js v21.5.0
// ❯ node promise_api.js
// P2 is a success
// ❯ node promise_api.js
// P2 is a faliure
// ❯ node promise_api_any.js
// undefined
// ❯ node promise_api_any.js
// [ 'P1 is a faliure', 'P2 is a faliure', 'P3 is a faliure' ]
});