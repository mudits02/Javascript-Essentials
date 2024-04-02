const users = [
    { firstName: "Mudit" , lastName: "Shukla" , age: 23},
    { firstName: "Gandu" , lastName: "Jain" , age: 21},
    { firstName: "Aditya" , lastName: "Yadav" , age: 22},
    { firstName: "Arijit" , lastName: "Roy" , age: 24}
];

const answer1 = users.map(x => x.firstName + " " + x.lastName);

console.log(answer1);

// To group on the basis of age , we will use reduce here coz we are mapping a unique value

const output = users.reduce(function (acc , curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }

    else{
        acc[curr.age] = 1;
    }
    return acc;
} , {})

console.log(output);


