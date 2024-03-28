// a(); // prints -> a called
// b(); // Typeerror

//function statement    

function a()
{
    console.log("a called");
}

//function expression

var b = function ()
{
    console.log("Function Expression");
}

// Function declaration -> same thing as function statement

// Anonymus function

// function ()
// {

// }

//Function Expression

var mudit = function xyz()
{
    console.log("xyz inside mudit is called");
}

a();
mudit();// This will the print statement
xyz(); // this will give error , this will give reference error

// First class function

var abc = function (param1)
{
    return function xyz()
    {
        console.log("First class function");
    }
}

