//Destructure the following
const Student = {
    name:"HelSinki",
    age:24,
    projects:{
        diceGame:"Two players Dice Game using JavaScript"
    }
}

//Here destructuring is beign done
//now instead of 
//const name = Student.name();
//const age = Student.age();
//const projects = Student.projects();
//We can do this all in asingle line using Destructuring.

const {name,age,projects}=Student;

console.log(name)
console.log(age)
console.log(projects)