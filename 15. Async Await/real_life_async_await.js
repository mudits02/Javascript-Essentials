const API_URL = "https://api.github.com/users/mudits02";

async function handleFetch(){
    const data = await fetch(API_URL); //it returns u a response body and it is a readable stream
    const jsonValue = await data.json() // this is again a promise
    console.log(jsonValue);

}

handleFetch();