// Get player buttons
const playerButtons = document.querySelectorAll(".player-button");
//Get players score boards
const playerScoreBoard = document.querySelector(".player-score");
const computerScoreBoard = document.querySelector(".computer-score");
//Get game log
const logList = document.querySelector(".log-ul");
//Get play again button
const playAgainButtons = document.querySelectorAll(".play-again-button");
//Define possible choices in an array
const choices=["rock", "paper", "scissors"];
//Get dimming layer div
const dimLayer = document.querySelector(".dim-container");
//Get pop up message of end game
const endGamePopUp = document.querySelector(".endgame-pop-up");
//Get result message div
const resultMessage = document.querySelector(".result-message");
//Hide pop up and dim layer
endGamePopUp.classList.add("hide");
dimLayer.classList.add("hide");

//Create variables
let computerSelection = "paper";
let playerSelection = "paper";
let playerScore = 0;
let computerScore = 0;
let roundResult = "";

//Cycle through player buttons listening for a click. 
//Once clicked, call computerplay, color computer choice and play a round of game
playerButtons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.getAttribute('id').toLowerCase();
        computerSelection = computerPlay();
        colorComputerChoice();
        playRound(playerSelection, computerSelection);
    })
});

//Cycle through play again buttons listening for a click.
//Once clicked, call for resetting the game
playAgainButtons.forEach(button => {
   button.addEventListener('click', () => {
    resetGame() 
    })
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
//Function to randomly select computer choice
function computerPlay() {
    return choices[Math.floor(choices.length*Math.random())];
};

//Function that plays the game and determines the winner of the round, calls for updating log and scoreboard and checking for the game's winner
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
    const pScore = document.getElementById("p-score");
    const cScore = document.getElementById("c-score");
    if (playerScore === 5) {
        endGamePopUp.classList.remove("hide");
        dimLayer.classList.remove("hide");
        resultMessage.textContent = "Congratulations. You won!";
        pScore.textContent = `${playerScore}`;
        cScore.textContent = `${computerScore}`;
        listenForClickOutside();
    } else if (computerScore === 5) {
        endGamePopUp.classList.remove("hide");
        dimLayer.classList.remove("hide");
        resultMessage.textContent = "Unfortunately, You lost.";
        pScore.textContent = `${playerScore}`;
        cScore.textContent = `${computerScore}`;
        listenForClickOutside();
    }
}

function resetGame(){
    window.location.reload();
}

//Close on click anywhere outside message box
function listenForClickOutside() {
    dimLayer.addEventListener('click', () => {
        endGamePopUp.classList.add("hide");
        dimLayer.classList.add("hide");
  })
}  