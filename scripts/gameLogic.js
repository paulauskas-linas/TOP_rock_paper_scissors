const choices=["rock", "paper", "scissors"];

function computerPlay() {
    return choices[Math.floor(choices.length*Math.random())];
};

function playRound (playerSelection, computerSelection) {
if ( 
    (playerSelection == "rock" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "scissors")
 ) {
        alert(`It's a tie! You both have chosen ${playerSelection}`);
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    } else if (
        (playerSelection !== "rock") ||
        (playerSelection !== "paper") ||
        (playerSelection !== "scissors")
    ) {
        playerSelection = playerSelection.toUpperCase()
        alert(`Does this ${playerSelection} look like rock, paper or scissors?`);
    }
}

let playerScore = 0;
let computerScore = 0;
let roundCount = 1;

// write condition to check if the playround is correct and if not BREAK for loop, write alert
// that the game is over

function game() {
    for (let i=0; i<5; i++) {
        alert(`${roundCount} round of 5`);
        let playerSelection = prompt("Rock, Paper or Scissors?", "Paper").toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        roundCount++; 
    };
    if (playerScore == computerScore) {
        alert(`Game of 5 results. \nIt's a tie. \nPlayer: ${playerScore}  Computer: ${computerScore}`)
    } else if (playerScore > computerScore) {
        alert(`Game of 5 results. \nYou win. \nPlayer: ${playerScore}  Computer: ${computerScore}`)
    } else if (playerScore < computerScore) {
        alert(`Game of 5 results. \nYou lost. \nPlayer: ${playerScore}  Computer: ${computerScore}`)
    };
}
console.log(game());