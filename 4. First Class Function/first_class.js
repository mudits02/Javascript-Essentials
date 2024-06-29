//Function Statement aka Function Declaration

function a()
{
    console.log("a called");
}

//Function Expression

var b = function() {
    console.log("Function inside variable b is called");
}
a();
b();

//Anonymous Function -> used where functions are passed on as values.

// function () {
//     console.log("Anonymous function called");
// }
//============================

//named Function Expression

var c = function xyz(){
    console.log("Function xyz called from inside the varibale c");
    xyz(); //This works fine
}

// xyz(); // This will throw an error