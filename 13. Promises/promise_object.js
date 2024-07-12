const cart = ["shoes" , "kurta" , "jeans"];

const promise = createOrder(cart); //createOrder returns a promise
// console.log(promise);
 /*can also be written as
 promise.then(function (orderID){
 console.log(orderID);
 }); */
promise
.then((orderID) => orderID)
.catch((err) => console.log(err.message)) // means it specifically handles the error of the above then
.then((orderID) => proceedPayment(orderID))
.then((paymentInfo) => console.log(paymentInfo))
.catch((err) => console.log(err.message));
;

//Dummy API call where createOrder returns a promise

function createOrder(cart)
{
    const pr = new Promise(function(resolve , reject){
        
        if(!validateCart(cart))
            {
                const err = Error("Cart is not resolved")
                reject(err);
            }

        //logic for createOrder
        else
        {
            const orderID = "12345";
                if(orderID)
            {
                setTimeout(function()
                {
                    resolve(orderID);
                }, 5000);
            }
        }
    });

    return pr;
}

function proceedPayment(orderID)
{
    return new Promise(function (resolve , reject){
        resolve("Payment Successful")
    })
}

function validateCart(cart) {
    return false;
}
