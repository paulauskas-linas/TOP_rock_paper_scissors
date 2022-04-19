const choices=["rock", "paper", "scissors"];

const playerButtons = document.querySelectorAll(".player-button");

playerButtons.forEach(button => {
    const playerSelection = button.getAttribute('id').toLowerCase();
    button.addEventListener('click', () => playRound(playerSelection, computerPlay()))
});


function computerPlay() {
    return choices[Math.floor(choices.length*Math.random())];
};

// let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let roundCount = 1;
let isGameValid = "Yes"; 

function playRound (playerSelection, computerSelection) {
        
if ( 
    (playerSelection == "rock" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "scissors")
 ) {
        alert(`It's a tie! You both have chosen ${playerSelection}`);
        isGameValid = "Yes";
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        isGameValid = "Yes";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        isGameValid = "Yes";
    } 
    /*else if (
        (playerSelection !== "rock") ||
        (playerSelection !== "paper") ||
        (playerSelection !== "scissors")
    ) {
        playerSelection = playerSelection.toUpperCase()
        alert(`Does this ${playerSelection} look like rock, paper or scissors?`);
        isGameValid = "No";
    } */
}

/*
function game() {
    for (let i=0; i<5; i++) {
        alert(`Rock, paper, scissors. 5 round game. \n${roundCount} round of 5`);
        let playerSelection = prompt("Rock, Paper or Scissors?", "Paper").toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        roundCount++;
        if (isGameValid == "No") {
            alert(`Please play fair. \nThe game ends now. \nYou can restart by refreshing the page.`)
            break;
        }; 
    };
    if (isGameValid == "Yes" && playerScore == computerScore) {
        alert(`Game of 5 results. \nIt's a tie. \nPlayer: ${playerScore}  Computer: ${computerScore}`)
    } else if (isGameValid == "Yes" && playerScore > computerScore) {
        alert(`Game of 5 results. \nYou win. \nPlayer: ${playerScore}  Computer: ${computerScore}`)
    } else if (isGameValid == "Yes" && playerScore < computerScore) {
        alert(`Game of 5 results. \nYou lost. \nPlayer: ${playerScore}  Computer: ${computerScore}`)
    } else if (isGameValid = "No") {

    }
}
game(); */