#! usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { 
        message: "Enter First Number",
        type: "number", 
        name: "firstNumber" },
    {
        message : "Enter Second Number", 
        type: "number", 
        name: "secondNumber"},
    {
        message : "Select one of the operators to perforM action",
        type: "list",
        name: "operator",
        choices : ["Addition", "Subtraction", "Multiplication", "Division"]}
]);

if(answer.operator === "Addition"){
    console.log(`The sum of ${answer.firstNumber} and ${answer.secondNumber} is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "Subtraction") {
    console.log(`The Difference of ${answer.firstNumber} and ${answer.secondNumber} is ${answer.firstNumber - answer.secondNumber}`);
}
else if(answer.operator === "Multiplication") {
    console.log(`The Product of ${answer.firstNumber} and ${answer.secondNumber} is ${answer.firstNumber * answer.secondNumber}`);
}
else if(answer.operator === "Division"){
    console.log(`The Quotient of ${answer.firstNumber} and ${answer.secondNumber} is ${answer.firstNumber / answer.secondNumber}`);
}
else {
    console.log("Invalid Operator");
}

console.log(answer);