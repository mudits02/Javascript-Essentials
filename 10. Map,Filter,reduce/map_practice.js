function double(x){
    return x * 2;
}

const nums = [2 , 5 , 9 , 1 , 16];

const output = nums.map(double);

console.log(output);

const output2 = nums.map((x) => x * 2);
console.log(output2);

const output3 = nums.filter((x) => x % 3 == 0);
console.log(output3);

const sum = nums.reduce(function(acc , curr){
    acc += curr;
    return acc;
} , 0);

console.log(sum);

const maxi = nums.reduce((acc , curr) => {
    acc = Math.max(acc , curr);
    return acc;
}, Number.MIN_VALUE);

console.log(maxi);

