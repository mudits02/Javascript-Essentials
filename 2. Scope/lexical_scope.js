const m = 10;
{
    const m = 20;
    {
        const m = 30;
        console.log(m); //30
    }

    console.log(m); //20
}


console.log(m); //10