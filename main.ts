#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

while (true) {

console.log(chalk.bold.cyanBright("\t\t Welcome to the Calculator"));
console.log(
  chalk.bold.cyanBright(
    "---------------------------------------------------------------------------"
  )
);

const answer = await inquirer.prompt([
  {
    type: "number",
    name: "firstNumber",
    message: "Enter the frist number:",
    validate: (input) => {
      if (isNaN(parseFloat(input))) {
        return "Please enter a valid number";
      }
      return true;
    },
  },

  {
    type: "number",
    name: "secondNumber",
    message: "Enter the second number:",
    validate: (input) => {
      if (isNaN(parseFloat(input))) {
        return "Please enter a valid number";
      }
      return true;
    },
  },

  {
    type: "list",
    name: "operetor",
    message: "choose an operetor:",
    choices: ["+", "-", "*", "/", "**", "%"],
  },
]);

const { firstNumber, secondNumber, operetor } = answer;

if (operetor === "+") {
  console.log(
    chalk.bold.greenBright(
      `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
    )
  );
  console.log(
    chalk.bold.greenBright(
      "---------------------------------------------------------------------------"
    )
  );
} else if (operetor === "-") {
  console.log(
    chalk.bold.greenBright(
      `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`
    )
  );
  console.log(
    chalk.bold.greenBright(
      "---------------------------------------------------------------------------"
    )
  );
} else if (operetor === "*") {
  console.log(
    chalk.bold.greenBright(
      `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`
    )
  );
  console.log(
    chalk.bold.greenBright(
      "---------------------------------------------------------------------------"
    )
  );
} else if (operetor === "/") {
  if (secondNumber === 0) {
    console.log(chalk.bold.redBright("\n Error: Cannot divide by zero"));
    console.log(
      chalk.bold.redBright(
        "---------------------------------------------------------------------------"
      )
    );

  } else
    console.log(
      chalk.bold.greenBright(
        `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`
      )
    );
    
} else if (operetor === "**") {
  console.log(
    chalk.bold.greenBright(
      `${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`
    )
  );
    console.log(
      chalk.bold.greenBright(
        "---------------------------------------------------------------------------"
      )
    );
} else if (operetor === "%") {
  console.log(
    chalk.bold.greenBright(
      `${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`
    )
  );
    console.log(
      chalk.bold.greenBright(
        "---------------------------------------------------------------------------"
      )
    );
} else {
  console.log(chalk.bold.redBright("Invalid operetor"));
};
}

