//this in global scope
//"use strict";
console.log(this); //globalObject -> window , global , etc(depends on the JS runtime env)

// this inside a function

function x(){
    //this
    console.log(this);
}

x();
window.x();
