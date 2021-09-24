
let grade = 100;

if (grade === 100) 
{
    console.log("You aced the quiz");
}

// type coercion with ==
if (grade == '100') 
{
    console.log("The number 100 is the same as the string '100' with double equals ==");
}

if (grade === '100') 
{
    console.log("This will not be printed");
} 
else 
{
    console.log("The number 100 is NOT the same as the string '100' with triple equals ===");
}