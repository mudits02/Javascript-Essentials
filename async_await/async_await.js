// async function getData()
// {
//     return "madarchod";
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

const p1 = new Promise((resolve , reject) => {
    setInterval(() => {
        resolve("Promise P1");
    } , 5000)
})

const p2 = new Promise((resolve , reject) => {
    setInterval(() => {
        resolve("Promise P2");
    } , 10000)
})
//When P1 has more time than P2 , then we see that the entire print statements(except thr first one)
//wait for 10 sec and then all is printed.

//But when P1 has less time than P2 , then P1 prints in say 5 sec and P2 waits for the time designated for it
async function handlePromise()
{
    console.log("Hello World");
    const data1 = await p1;
    console.log("Madarchod");
    console.log(data1);

    const data2 = await p2;
    console.log("Madarchod");
    console.log(data2);
}



handlePromise();