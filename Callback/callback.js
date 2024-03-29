setTimeout(function(){
    console.log("timer");
}, 5000);


function x(y)
{
    console.log("x function");
}

x(function y()
{
    console.log("y is called from callback");
});