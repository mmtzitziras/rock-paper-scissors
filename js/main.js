function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
    
}

function getPlayerChoice(){

    let input = prompt("Rock, Paper or Scissors?").toLowerCase();
    while (input === null || input.length === 0) {
        input = prompt("Rock, Paper or Scissors?").toLowerCase();
    }
    return input;
}

function playRound(computerChoice, playerChoice){
    if (computerChoice === playerChoice) {
        return "It's a tie";
    }
    else if (computerChoice === "rock" && playerChoice === "scissors") {
        return "You lose! Rock beats Scissors";
    }
    else if (computerChoice === "paper" && playerChoice === "rock") {
        return "You lose! Paper beats Rock";
    }
    else if (computerChoice === "scissors" && playerChoice === "paper") {
        return "You lose! Scissors beats Paper";
    }
    else {
        return "You win! " + computerChoice + " beats " + playerChoice;
    }
}


console.log(getComputerChoice());
console.log(getPlayerChoice());