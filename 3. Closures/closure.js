function x()
{
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();
console.log(z); //[Function: y] , 

// z() -> on writing this , we get printed the value because now z has the function y in it basically.
z(); //7 , when a is declared after , it gives the next value