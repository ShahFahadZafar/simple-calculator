#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


const answer = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "Enter the frist number"
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Enter the second number"
    },
    {
        type: "list",
        name: "operetor",
        message: "choose an operetor",
        choices: ["+", "-", "*", "/","**", "%"],
    },
]);

if (answer.operetor === "+") {
    console.log(answer.firstNumber + answer.secondNumber);
}else if (answer.operetor === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operetor === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operetor === "**") {
    console.log(answer.firstNumber ** answer.secondNumber);
} else if (answer.operetor === "%") {
    console.log(answer.firstNumber % answer.secondNumber);
 
} else if (answer.operetor === "/") {
    if (answer.secondNumber === 0){
        console.log(chalk.red.bold("cannot divide by zero. please enter a non-zero number..."));
    }
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Error: Invalid operetor");
};


