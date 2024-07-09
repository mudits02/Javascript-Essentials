const cart = ["shoes" , " pants" , "jeans"];

// // Explaining Promise(This is not a Promise Object)

// const promise = createOrder(cart); //creates a promise {data : undefined}

// promise.then(function (orderId){ 
//     proceedToPayment(orderId); // Callback function called once the promise is fulfilled
// })

const GITHUB_API = "https://api.github.com/users/mudits02";

const user = fetch(GITHUB_API); //fetch returns a promise

// console.log(user);

//When the promise is fulfilled and we need to atttach a callback to it

user.then(function(data){// Called only when the user promise is fulfilled
    console.log(data);
})


// Promise chain , method 1

createOrder(cart)
 .then(function(orderId){
    return proceedPayment(orderId)
 })
 .then(function (paymentInfo){
    return showSummary(paymentInfo)
 })
 .then(function(paymentInfo){
    return updateWallet(paymentInfo);
 })

 //method 2

 createOrder(cart)
 .then(orderId => proceedPayment(orderId))
 .then(paymentInfo => showSummary(paymentInfo))
 .then(paymentInfo => updateWallet(paymentInfo));

