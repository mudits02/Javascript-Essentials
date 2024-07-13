const GITHUB_API = "https://users.github.com/users/mudits02";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function(data){
        console.log(data);
});

// Promise Chaining

const cart = ["Shoe" , "laptop" , "keyboard"];

// createOrder(cart)
//     .then(function (orderId){
//         proceedtoPayment(orderId)
//     })
//     .then(function(paymentInfo){
//         showOrderSummary(paymentInfo)
//     });

// the above one is promise chaining

//<========================>
//Custom Promise

const promise = createOrder(cart);

console.log(promise);

promise.then(function(orderId){
    console.log(orderId);
})
    .catch(function (err){
        console.log(err.message);
    });

function createOrder(cart)
{
    const pr = new Promise(function(resolve , reject){
        if(!validateCard(orderId))
    {
        const err = new Error("Rejected Promise");
        reject(err);
    }

    const orderId = "12234";
    if(orderId)
    {
        setTimeout(function (){
            resolve(orderId);
        }, 5000);
    }
    });

    return pr;  
    
}

function validateCard(orderId)
{
    return true;
}