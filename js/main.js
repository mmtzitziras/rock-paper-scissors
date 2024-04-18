const btns = document.querySelectorAll("button");
const roundResult = document.querySelector("#round-result");
const playerWins = document.querySelector("#player-total");
const computerWins = document.querySelector("#pc-total");
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
    
}





// btns.forEach(btn => btn.addEventListener("click", playRound(btn.id)));

btns.forEach((button) => {
    
    button.addEventListener("click", () => {
      playRound(button.id);
    });
  });


// function playGame() {
//     let computerWins = 0;
//     let playerWins = 0;
    

//     for (let i = 0; i < 5; i++) {
//         let computerChoice = getComputerChoice();
//         let playerChoice = getPlayerChoice();
//         let result = playRound(computerChoice, playerChoice);
//         console.log(result);
//         trimmedResult = result.substring(0, 5);
//         if (trimmedResult === "You w") {
//             playerWins++;
//         }
//         else if (trimmedResult === "You l") {
//             computerWins++;
//         }
//     }

//     if (playerWins > computerWins) {
//         console.log("You win!");
//     }
//     else if (playerWins < computerWins) {
//         console.log("You lose!");
//     }
//     else if (playerWins === computerWins) {
//         console.log("It's a tie!");
//     }
    
// }





