//Rather than writing the logics again and again like for example the calcilating various
//parameters of a circle , we can pass logic as the parameter into the function

const radius = [3 , 1 , 2 , 4];

const area = function(radius)
{
    return Math.PI * radius * radius;
}

const circumference = function(radius)
{
    return Math.PI * 2 * radius;
}

const diameter = function(radius)
{
    return 2 * radius;
}

const calculate = function(radius , logic)
{
    const output = [];
    for(var i = 0 ; i < radius.length; i++)
    {
        output.push(logic(radius[i]));
    }


    return output;
}

console.log(calculate(radius , area));
console.log(calculate(radius , circumference));
console.log(calculate(radius , diameter));