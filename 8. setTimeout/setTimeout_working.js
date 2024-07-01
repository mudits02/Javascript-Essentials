console.log("Start");

setTimeout(() => {
    console.log("Callback")
}, 5000);

console.log("end");

// imaginary 1 million lije execution

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate <= startDate + 10000)
    {
        endDate = new Date().getTime();
    }

console.log("While loop finished"); 

/**
    * Start
    * End
    * While Loop Finished
    * Callback 
    * */ 