var a=500;
var b=600;
//Now here as a is previosly defined globally so we cant add again 'a' and an error will be ther 
//let a=300;
//Instead we can add let in a local scope so that we would be prevented frm the errors
{
    let a=300;
    var c= a+b;

}
//Now we use constant So that the value does not change throughout the program
console.log(c);
const name="Ashish"
//Now if we add name we will get an error
//var name="Shubham"
//so once constant we cant change the name
console.log(name);

//Final Output
/*
SyntaxError: Identifier 'name' has already been declared
at wrapSafe (internal/modules/cjs/loader.js:1054:16)
at Module._compile (internal/modules/cjs/loader.js:1102:27)
at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
at Module.load (internal/modules/cjs/loader.js:986:32)
at Function.Module._load (internal/modules/cjs/loader.js:879:14)
at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
at internal/main/run_main_module.js:17:47
USERs-MacBook-Air:Day1 ashish$ node question2.js
900
Ashish
USERs-MacBook-Air:Day1 ashish$ 
*/