
const playerButtons = document.querySelectorAll(".player-button");
const computerScoreBoard = document.querySelector(".computer-score");
const playerScoreBoard = document.querySelector(".player-score");
const logList = document.querySelector(".log-ul");
const playAgainButton = document.querySelector(".play-again-button");
const choices=["rock", "paper", "scissors"];

let computerSelection = "paper";
let playerSelection = "paper";
let playerScore = 0;
let computerScore = 0;
let roundResult = "";

playerButtons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.getAttribute('id').toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        colorComputerChoice();
    })
});
playAgainButton.addEventListener('click', () => {
    resetGame()
});

function colorComputerChoice(){
    const rockAI = document.getElementById("rockAI");
    const paperAI = document.getElementById("paperAI");
    const scissorsAI = document.getElementById("scissorsAI");
    if (computerSelection === "rock") {
        rockAI.classList.add("chosen-button");
        paperAI.classList.remove("chosen-button");
        scissorsAI.classList.remove("chosen-button");
    } else if (computerSelection === "paper") {
        paperAI.classList.add("chosen-button");
        rockAI.classList.remove("chosen-button");
        scissorsAI.classList.remove("chosen-button");
    } else if (computerSelection === "scissors") {
        scissorsAI.classList.add("chosen-button");
        rockAI.classList.remove("chosen-button");
        paperAI.classList.remove("chosen-button");
    }
}

function computerPlay() {
    return choices[Math.floor(choices.length*Math.random())];
};

function playRound (playerSelection, computerSelection) { 
    if ( 
        (playerSelection == "rock" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "scissors")
        ) {
            roundResult = "tie";
        } else if (
            (playerSelection == "rock" && computerSelection == "paper") || 
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")
            ) {
                roundResult = "lost";
                computerScore++;
            } else if (
                (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")
                ) {
                    roundResult = "win";
                    playerScore++;
                }
    updateLog();
    updateScore();
    checkWinner();
};
function updateLog() {
    if (roundResult == 'tie') {
        const logListItem = document.createElement("li");
        logListItem.appendChild(document.createTextNode(`It's a tie! You both have chosen ${playerSelection}`));
        logListItem.setAttribute("class", "log-li")
        logList.insertBefore(logListItem, logList.firstChild);
    } else if (roundResult == 'lost') {
        const logListItem = document.createElement("li");
        logListItem.appendChild(document.createTextNode(`You lose! Enemy's ${computerSelection} beats ${playerSelection}`));
        logListItem.setAttribute("class", "log-li");
        logList.insertBefore(logListItem, logList.firstChild);
    } else if (roundResult == 'win') {
        const logListItem = document.createElement("li");
        logListItem.appendChild(document.createTextNode(`You win! Your ${playerSelection} beats ${computerSelection}`));
        logListItem.setAttribute("class", "log-li");
        logList.insertBefore(logListItem, logList.firstChild);
    }
}
function updateScore() {
    computerScoreBoard.textContent = `${computerScore}`
    playerScoreBoard.textContent = `${playerScore}`
}
function checkWinner(){
    if (playerScore === 5) {
        alert(`You won the game!`); 
        resetGame();
    } else if (computerScore === 5) {
        alert(`You lost the game. Enemy wins.`);
        resetGame();
    }
}

function resetGame(){
    window.location.reload();
}
