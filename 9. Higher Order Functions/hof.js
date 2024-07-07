const nums = [3 , 4, 8 , 11];

const area = function (radius)
{
    return (Math.PI * radius * radius);
}

const circumference = function(radius)
{
    return (Math.PI * radius * 2);
}

const diameter = function(radius)
{
    return (radius * 2);
}

const calculate = function(nums , logic)
{
    const output = [];
    for(let i = 0 ; i < nums.length; i++)
        {
            output.push(logic(nums[i]));
        }

    return output;
}

console.log(calculate(nums , area));
console.log(calculate(nums , diameter));
console.log(calculate(nums , circumference));


