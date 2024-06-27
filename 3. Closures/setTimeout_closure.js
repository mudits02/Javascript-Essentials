function xy()
{
    var i = 1;
    setTimeout(() => {
        console.log(i);
    } , 7000);

    console.log("After setTimeout");
}

xy();

function setTimeout_var()
{
    for(var i = 0 ; i <= 5; i++)
        {
            setTimeout(() => {
                console.log(i); //prints 6 , 6 times
            }, i * 1000);
        }
}
setTimeout_var();

function setTimeout_let()
{
    for(let i = 0 ; i <= 5; i++)
        {
            setTimeout(() => {
                console.log(i); //prints 0 1 2 3 4 5
            }, i * 1000);
        }
}

//setTimeout_let();

function setTimeout_var_correct(){

    for(var mud = 0 ; mud <= 5 ; mud++)
        {
            function close(num)
    {
        setTimeout(() => 
            {
            console.log(num)
        } , num * 1000)
    }
    close(mud);
        }
    

    
}
setTimeout_var_correct();
