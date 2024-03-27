var a = 100;
console.log(a); // prints 100

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); //prints 10
    console.log(b); // This will print
    console.log(c); // This will print
}

console.log(a); // Prints 10 coz it got shadowed by the block var a.
// console.log(b); // They will throw reference error
// console.log(c); // Even this , reference error.
var a = 20;

console.log(a);

// Closure

function x ()
{
    var mudit = 10;

    function y()
    {
        console.log(mudit);
    }
    a = 100;
    return y;
}

var z = x(); //op -> 100

console.log(z); // op -> [Fucntion : y]

z(); //op -> 100

// setTimeout

function check() // this will print 6 -> everytime because of closure 
                //coz after all the iteration , it remebers and refers to "i" and just print the value referred to
{
    for(var i = 1; i <= 5; i++) // to rectify this , we can use 'let'
    {
        setTimeout(() => {
            console.log(i);
        }, i * 3000);
    }

    console.log("Madarchod JS");
}

check();

//Now if we dont want to use let because it doesnt work outside its block

function check() 

{
    for(var i = 1; i <= 5; i++) 
    {
        function m()
        {
            setTimeout((x) => {
                console.log(x);
            }, i * 3000);
        }
        m(i);// This willl solve the problem because now the clousre is updates by doing each call of js after each iteration
        
    }

    console.log("Madarchod JS");
}

check();