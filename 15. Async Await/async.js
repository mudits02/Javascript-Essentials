// async function getData()
// {
//     return "Async function promise";
// }

// console.log(getData());

//old way of handling promise
// const dataPromise = getData();
// dataPromise.then(res => console.log(res));

const p = new Promise((resolve , reject) => {
    setTimeout(() => {
        console.log("Promise Resolved")
    }, 10000);
});

async function resolvePromise (){
    console.log("Hello World");
    const data = await p; // handles the promise p
    console.log("Async Function");
    console.log(data);
}

resolvePromise();//prints ->Hello World Prints instantly then Promise Successful.(waits for 10 sec) and then instantly prints Async Function

// function getData(){
//     p.then((res) => console.log(res));
//     console.log("Normal Function");

// }

// getData();//o/p -> Normal function(instant print) and then Promise Resolved(after 10sec)