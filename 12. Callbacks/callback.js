cart = ["Shirt", "Pant" , "Jeans"];

api.createOrder(cart , function(){ // Callback Hell

    api.proceedToPayments(function (){

        api.showSummary(function(){

            api.updateWallet();

        });

    });

});