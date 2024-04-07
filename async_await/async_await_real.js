const API_URL = "https://api.github.com/users/mudits02";


async function handleAPI()
{
    const data = await fetch(API_URL);
    const jsonValue = await data.json();

    console.log(jsonValue);
}

handleAPI();