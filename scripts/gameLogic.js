const playerButtons = document.querySelectorAll(".player-button");
const computerChoice = document.querySelector(".computer-choice");
const roundCounter = document.querySelector(".round-counter");
const computerScoreBoard = document.querySelector(".computer-score");
const playerScoreBoard = document.querySelector(".player-score");
const roundComments = document.querySelector(".round-comments");
const gameComments = document.querySelector(".game-comments");
const choices=["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

playerButtons.forEach(button => {
    const playerSelection = button.getAttribute('id').toLowerCase();
    button.addEventListener('click', () => {
        computerChoice.textContent = `${computerPlay()}`;
        playRound(playerSelection, computerChoice.textContent);
        roundCounter.textContent = roundCount;
    })
});

function computerPlay() {
    return choices[Math.floor(choices.length*Math.random())];
};

function playRound (playerSelection, computerSelection) { 
    if ( 
        (playerSelection == "rock" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "scissors")
        ) {
            roundComments.textContent =`It's a tie! You both have chosen ${playerSelection}`;
            roundCount++;
        } else if (
            (playerSelection == "rock" && computerSelection == "paper") || 
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")
            ) {
                roundComments.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
                roundCount++;
                computerScoreBoard.textContent = `${computerScore}`
                playerScoreBoard.textContent = `${playerScore}`;
                checkWinner();
            } else if (
                (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")
                ) {
                    roundComments.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                    playerScore++;
                    roundCount++;
                    computerScoreBoard.textContent = `${computerScore}`
                    playerScoreBoard.textContent = `${playerScore}`;
                    checkWinner();
                }
};

function checkWinner(){
    if (playerScore === 5) {
    alert(`You won the game!`); 
        resetGame();
    } else if (computerScore === 5) {
        alert(`You lost the game. Computer wins.`);
        resetGame();
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    computerScoreBoard.textContent = `${computerScore}`
    playerScoreBoard.textContent = `${playerScore}`;
    roundCounter.textContent = roundCount;
}


// playagain window with refresh page