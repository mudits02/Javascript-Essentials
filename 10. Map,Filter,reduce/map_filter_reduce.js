//Map function

const nums = [2 , 4 , 5 , 6, 11];

const double = function(x){
    return x * 2;
}

const binary = function(x){
    return x.toString(2);
}

const output = nums.map(double);
console.log(output);
const output2 = nums.map(binary);
console.log(output2);

// filter function

const demo = function (x){
    return x > 4;
}

const output3 = nums.filter(demo);
console.log(output3);

//Reduce
const sum = nums.reduce(function(acc , curr){
    acc = acc + curr;
    return acc;
}, 0);

console.log(sum);

//Find the max value using reduce

const maxi = nums.reduce(function (acc , curr){
    if(curr > acc)
        {
            acc = curr;
        }

    return acc;
}, 0)

console.log(maxi);