// declare scores initiated to 0 and choices initiated to "none" 
var playerScore = 0;
var computerScore = 0;
var playerChoice = "none";
var computerChoice = "none";

// this function gets a random number and assigns a value from 3 possible outcomes, with initial value set to "none"
function getComputerChoice() {
    let computerSelection = Math.random();
    // declare and initiate computer choice to "none"
    let compChoice = "none";
    // give each of rock paper and scissors a third of a chance
    if (computerSelection < 0.34) {
        compChoice = "rock";
    } else if (computerSelection < 0.67) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    return compChoice;
}

// this function plays each round, starting by prompting player for choice, running function to get computer choice, comparing, and then resetting the choices back to "none" for the next round
function playRound(p,c) {
    while (p === "none") {
        // prompt user for player choice
        var userInput = prompt("Choose your weapon: ");
        // make sure answer is case insensitive
        userInput = userInput.toLowerCase();
        // check for "rock" "paper" or "scissors", all else alert 
        if (userInput === "rock") {
            p = "rock";
        } else if (userInput === "paper") {
            p = "paper";
        } else if (userInput === "scissors") {
            p = "scissors";
        } else {
            alert("Please choose rock, paper, or scissors");
        }
    }
    // player choice, now get the computer choice
    c = getComputerChoice();
    // print each round's choices to the console
    let printOut = `Computer: ${c}, Player: ${p}`;
    console.log(printOut);
    /* 
    check for each possible combination, and alert a tailored message, and update the appropriate score
    */
    if (p === "rock" && c === "paper") {
        alert("You lose! Paper beats rock");
        computerScore++;
    } else if (p === "rock" && c === "scissors") {
        alert("You win! Rock beats scissors");
        playerScore++;
    } else if (p === "paper" && c === "rock") {
        alert("You win! Paper beats rock");
        playerScore++;
    } else if (p === "paper" && c === "scissors") {
        alert("You lose! Scissors beats paper");
        computerScore++;
    } else if (p === "scissors" && c === "rock") {
        alert("You lose! Rock beats scissors");
        computerScore++;
    } else if (p === "scissors" && c === "paper") {
        alert("You win! Scissors beats paper");
        playerScore++;
    } else {
        alert("Tie game!");
    }
    // reset player choice to "none" for the next round
    p = "none";
}

function game() {
    // run playRound 5 times
    for (i = 0; i < 5; i++) {
        playRound(playerChoice, computerChoice);
    }
    // at the end of 5 rounds, print the scores to console
    console.log(`Computer Score: ${computerScore}, Player Score: ${playerScore}`);
    // compare the score numbers and alert the winner
    if (computerScore > playerScore) {
        alert("Computer wins!");
    } else if (playerScore > computerScore) {
        alert("You win!");
    } else {
        alert("It's a tie!");
    }
    // reset scores to 0
    playerScore = 0;
    computerScore = 0;
}

// Start the game when web page opens
alert("Let's Play!");
alert("Rock, Paper, or Scissors? Best of Five Rounds!");