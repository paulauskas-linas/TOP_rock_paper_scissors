// make a function computerPlay, that randomly returns "Rock" "Paper" "Scissors"
const choises=["rock", "paper", "scissors"];

function computerPlay() {
    return choises[Math.floor(choises.length*Math.random())];
};
console.log(computerPlay());

/* make player to choose the item and return it to lowercase
for easier comparison */
let playerPlay = prompt("Rock, Paper or Scissors?", "Paper").toLowerCase();

console.log(playerPlay);
/* make a function playRound() that plays a single round, takes two parameters playerSelection and 
computerSelection and returns a string with "You lose! Paper beats Rock" (make it case insensitive)
*/
const playerSelection = playerPlay;
const computerSelection = computerPlay();

function playRound (playerSelection, computerSelection) {
/* tie cases

if player = rock and computer = rock -> it's a tie
if player = paper and computer = paper -> it's a tie
if player = scissors and computer = scissors -> it's a tie

lose cases
if player = rock and computer = paper -> you lose
if player = paper and computer = scissors -> you lose
if player = scissors and computer = rock -> you lose

win cases

if player = rock and computer = scissors -> you win
if player = paper and computer = rock -> you win
if player = scissors and computer = paper -> you lose
*/


}

/*make a  function game() that calls playRound() 5 times, keeps score and reports a winner/loser at the end.
use prompt()
*/

