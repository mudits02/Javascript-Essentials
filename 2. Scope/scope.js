var a = 100;
let b = 200;
const c = 300;
{
    var a = 10; //global scope
    let b = 20; //inside this block scoped
    const c = 30; //inside this block scoped
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}

console.log(a); //10 -> becuase of shadowing
console.log(b); //200
console.log(c); //300