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
        return "You win! " + playerChoice + " beats " + computerChoice;
    }
}

function playGame() {
    let computerWins = 0;
    let playerWins = 0;
    

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        let result = playRound(computerChoice, playerChoice);
        console.log(result);
        trimmedResult = result.substring(0, 5);
        if (trimmedResult === "You w") {
            playerWins++;
        }
        else if (trimmedResult === "You l") {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log("You win!");
    }
    else if (playerWins < computerWins) {
        console.log("You lose!");
    }
    else if (playerWins === computerWins) {
        console.log("It's a tie!");
    }
    
}




playGame();
