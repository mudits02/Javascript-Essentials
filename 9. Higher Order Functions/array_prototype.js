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

Array.prototype.calculate = function(logic)
{
    const output = [];
    for(let i = 0 ; i < this.length; i++) //this points to the array passing from the calculate func
        {
            output.push(logic(this[i]));
        }

    return output;
}

console.log(nums.calculate(area));
console.log(nums.calculate(diameter));
console.log(nums.calculate(circumference));


