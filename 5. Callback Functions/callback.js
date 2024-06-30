setTimeout(function() {
    console.log("Timer");
}, 5000);

function x (y)
{
    console.log("x");
    y();
}

x(function (){
    console.log("y");
})

//Output -> x y timer

