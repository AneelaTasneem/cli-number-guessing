#! /usr/bin/env node

import inquirer from "inquirer"

// omputer will generate a number:
//User input for guessing number:
//Compare user input with computer generated number and show results:

const randomNUmber = Math.floor(Math.random()*6+1);

const answers = await inquirer . prompt ([
    {
      name:"userGuessedNumber",
      type: "number",
      message: "please guess a number between 1 to 6:",
    }
]);
console.log(answers);

if(answers.userGuessedNumber== randomNUmber){
    console.log("Congrats! You guessed the right number.")
}else{
    console.log("Oppps! You guessed wrong number:")
};