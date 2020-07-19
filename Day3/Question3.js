marks=prompt("Enter your marks ");

if(marks>80)
    console.log(`Your marks are ${marks} and grade is A `)
else if(marks>=45 && marks<=80)
    console.log(`Your marks are ${marks} and grade is B `)
else if(marks>=35 && marks<=45)
    console.log(`Your marks are ${marks} and grade is C `)
else 
    console.log("You have Failed")