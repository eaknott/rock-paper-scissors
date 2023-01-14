var playerScore = 0;
var computerScore = 0;
var playerChoice = "none";
var computerChoice = "none";

function getComputerChoice() {
    let computerSelection = Math.random();
    let compChoice = "none";
    if (computerSelection < 0.34) {
        compChoice = "rock";
    } else if (computerSelection < 0.67) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    return compChoice;
}

function playRound(p,c) {
    while (p === "none") {
        var userInput = prompt("Choose your weapon: ");
    
        userInput = userInput.toLowerCase();
     
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

    c = getComputerChoice();

    let printOut = `Computer: ${c}, Player: ${p}`;
    console.log(printOut);

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

    p = "none";
}

function game() {
    for (i = 0; i < 5; i++) {
        playRound(playerChoice, computerChoice);
    }

    console.log(`Computer Score: ${computerScore}, Player Score: ${playerScore}`);
    
    if (computerScore > playerScore) {
        alert("Computer wins!");
    } else if (playerScore > computerScore) {
        alert("You win!");
    } else {
        alert("It's a tie!");
    }

    playerScore = 0;
    computerScore = 0;
}

alert("Let's Play!");
alert("Rock, Paper, or Scissors? Best of Five Rounds!");
game();