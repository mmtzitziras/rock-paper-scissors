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

console.log(getComputerChoice());
console.log(getPlayerChoice());