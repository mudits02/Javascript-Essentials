const student1 = {
    firstName : "Mudit",
    lastName : "Shukla",
    printName: function (hometown , state){
        console.log(this.firstName + " " + this.lastName + " from " + hometown + "," + state);
    }
}

student1.printName("Gwalior" , "MP");

const student2 = {
    firstName: "Aditya",
    lastName: "Yadav"
}

student1.printName.call(student2 , "Haridwar" , "uttarakhand");
student1.printName.apply(student2 , ["Haridwar" , "uttarakhand"]);

let printMyName = student1.printName.bind(student2 , "Bhopal" , "MP");

console.log(printMyName);
printMyName();

