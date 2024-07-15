const p1 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Promise 1");
    }, 10000);
})

const p2 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Promise 2")
    }, 5000);
})

async function handlePromise(){
    console.log("Hello World");

    const val1 = await p1;
    console.log("Log 1");
    console.log(val1);

    const val2 = await p2;
    console.log("Log 2");
    console.log(val2);
}

handlePromise();