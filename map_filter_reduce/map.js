const arr = [5 , 1 , 4 , 6 , 9];

const double = function (x)
{
    return 2 * x;
}

const answer1 = arr.map(double);

const answer2 = arr.map(x => x.toString(2)); //converts to binary using arrow functions

console.log(answer1);
console.log(answer2);

//Filter

const answer3 = arr.filter(x => x > 4);
console.log(answer3); // In map if we do this , it returns all the values in false or true
                      //while in filter , it returns only those value which satisfy constion.

//Reduce

const answer4 = arr.reduce(function (max , curr)// max is accumaltor and curr is current value
{
    if(max < curr)
    {
        max = curr;
    }

    return max;
} , 0);

console.log(answer4);