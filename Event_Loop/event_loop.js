console.log("start");

document.getElementById("btn")
.addEventListener("click" , function cb(){
    console.log("Callback");
});

console.log("End");


//Output -
/**
 * Start
 * End
 * Callback
 */


// Fecth Web API

console.log("start");

setTimeout(function cbT()
{
    console.log("SettimeOut is called")
}, 5000);

fetch("xyz.com")
.then(function cbF(){
    console.log("CB Netflix API");
})

console.log("End");

//Output -
/**
 * Start
 * end
 * Cb Netflix API
 * Setttimeout is called
 */