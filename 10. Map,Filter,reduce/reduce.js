const users = [
    { firstName: "Mudit" , lastName: "Shukla" , age: 23},
    { firstName: "Gandu" , lastName: "Jain" , age: 22},
    { firstName: "Aditya" , lastName: "Yadav" , age: 22},
    { firstName: "Arijit" , lastName: "Roy" , age: 24}
];

//Print full name

const fullName = users.map(function(x){
    x = x.firstName + " " + x.lastName;
    return x;
})

console.log(fullName);

//Age numbers

const ageList = users.reduce(function(acc , curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }

    else{
        acc[curr.age] = 1;
    }

    return acc;
}, {});

console.log(ageList);

//chainign the functions

const filtered_name = users.filter(x => x.age > 22).map((x) => x.firstName);

console.log(filtered_name);