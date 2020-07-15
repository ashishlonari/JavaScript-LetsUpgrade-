console.log('Hello World guys ');
let a=54.01
let b=545
let c= a+b
let name="Ashish"
const firstName="Ashish";
let lastName="Lonari";

console.log(c);
console.log(firstName + ' ' +lastName);
console.error("Error Code");
let user="ashish"
let user1="shubham"
let user2=["name","saikiran","instiute","letsupgrade"]
console.count("ashish");
console.info(user1);
console.countReset("ashish");
console.table(user2)
console.assert(true,"Hey Gi")
console.group();
console.log("Start Of the group");
console.group();
console.log("Second Level");
console.group();
console.groupEnd();
console.group();
console.log("Third Level");
console.groupEnd();
console.log("End of first group after this")
console.groupEnd();

//Final Output
/*
Hello World guys 
599.01
Ashish Lonari
Error Code
ashish: 1
shubham
┌─────────┬───────────────┐
│ (index) │    Values     │
├─────────┼───────────────┤
│    0    │    'name'     │
│    1    │  'saikiran'   │
│    2    │  'instiute'   │
│    3    │ 'letsupgrade' │
└─────────┴───────────────┘
  Start Of the group
    Second Level
      Third Level
    End of first group after this

    */