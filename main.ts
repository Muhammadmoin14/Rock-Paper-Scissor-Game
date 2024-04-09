import inquirer from "inquirer";
import chalk from "chalk";
let condition = true
let userScore = 0;
let compScore = 0;

console.log(chalk.bold.blue("Welcome to Rock Paper Scissor Game"));

while(condition == true)
{
    const start = await inquirer.prompt([{
        name: "option",
        type : "list",
        choices:["Start the Game", "View Score", "Exit"],
        message: chalk.magenta.bold("Choose your option")
    }])
    if (start.option == "Start the Game")
{        
const userChoice = await  inquirer.prompt([{
    name:"userChoice",
    type:"list",
    choices:["Rock", "Paper", "Scissor"],
    message:chalk.magenta.bold( "Choose your hand")
}])

const compgenChoice = () =>{
    let options = ["Rock","Paper","Scissor"];
    let randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];

}
const compChoice : string = compgenChoice();

console.log(chalk.bold.yellow(compChoice));
const showWinner = (userWin : boolean)=> {
    if(userWin){
        console.log(chalk.green.bold(`Congratulation! You Win, your ${userChoice.userChoice} beats ${compChoice}`));
        userScore++;
    }
    else{
        console.log(chalk.green.bold(`You Lost, ${compChoice} beats your ${userChoice.userChoice}`));
        compScore++;
    }
}

if (userChoice.userChoice == compChoice)
    {
        console.log(chalk.blue.bold("Draw"));  //Draw
    }
else
        {   
let userWin = true ;
    if (userChoice.userChoice == "Rock")
    {
        userWin = compChoice == "Paper" ? false : true ;
    }
else{
    if (userChoice.userChoice == "Paper")
    {
        userWin = compChoice == "Scissor" ? false : true ;
    }
else 
{
if (userChoice.userChoice == "Scissor")
    {
        userWin = compChoice == "Rock" ? false : true ;
    }
}
}
showWinner (userWin);
        }
    }
    else{
        if(start.option == "View Score")
            {
                console.log(chalk.blue.bold("\t View Score \t"));
                console.log(chalk.yellow.bold('\n User: ') + chalk.cyan.italic(userScore )+ chalk.bold.yellow('\tComp: ') + chalk.cyan.italic(compScore));
                // console.log(chalk.red("User: ") + chalk.yellow(userScore));
                // console.log(chalk.red("Comp: ") + chalk.yellow(compScore));
            }
            else{
                if(start.option == "Exit")
                    {
                        console.log(chalk.yellow.bold("Thanks you for playing!"));
                        condition = false;
                    }
            }   
        }  
}
