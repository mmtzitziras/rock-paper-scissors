const btns = document.querySelectorAll("button");
const roundResult = document.querySelector("#round-result");
const playerWins = document.querySelector("#player-total");
const computerWins = document.querySelector("#pc-total");
const gameOver = document.createElement("h1");
let pWins = 0;
let cWins = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
    
}

function getPlayerChoice(){

    let input = prompt("Rock, Paper or Scissors?").toLowerCase();
    while (input === null || input.length === 0) {
        input = prompt("Rock, Paper or Scissors?").toLowerCase();
    }
    return input;
}

function playRound(playerChoice){

    let computerChoice = getComputerChoice();
    let result;


    if (computerChoice === playerChoice) {
        result = "It's a tie";
    }
    else if (computerChoice === "Rock" && playerChoice === "Scissors") {
        result = "You lose! Rock beats Scissors";
        cWins++;
        computerWins.textContent = "Computer Wins: " + cWins;
    }
    else if (computerChoice === "Paper" && playerChoice === "Rock") {
        result = "You lose! Paper beats Rock";
        cWins++;
        computerWins.textContent = "Computer Wins: " + cWins;
    }
    else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        result = "You lose! Scissors beats Paper";
        cWins++;
        computerWins.textContent = "Computer Wins: " + cWins;
    }
    else {
        result = "You win! " + playerChoice + " beats " + computerChoice;
        pWins++;
        playerWins.textContent = "Player Wins: " + pWins;
    }
    roundResult.textContent = result;

    if (pWins === 5){
        gameOver.textContent = "Game Over! Player Wins!";
        document.body.appendChild(gameOver);
    }
    else if (cWins === 5){
        gameOver.textContent = "Game Over! Computer Wins!";
        document.body.appendChild(gameOver);
    }
    
}


btns.forEach((button) => {
    
    button.addEventListener("click", () => {
      playRound(button.id);
    });
  });


