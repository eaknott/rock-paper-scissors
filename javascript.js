// declare scores initiated to 0 and choices initiated to "none" 
var playerScore = 0;
var computerScore = 0;
var playerChoice = "none";
var computerChoice = "none";

const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
var printOut = document.createElement('div');
printOut.classList.add('results');
printOut.textContent = '';
body.appendChild(printOut);


var runningScore = document.createElement('div');
runningScore.classList.add('runningScore');
runningScore.textContent = 
    `Computer: ${computerScore}, Player: ${playerScore}`;
body.appendChild(runningScore);

var announceWinner = document.createElement('div');
announceWinner.classList.add('announceWinner');
announceWinner.textContent = "";
body.appendChild(announceWinner);

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
        // run function to get computerChoice
        c = getComputerChoice();
        // print each round's choices to the window
        printOut.textContent = `Computer: ${c}, Player: ${p}`;

        // create div to display message for each round
        var message = document.createElement('div');
        message.classList.add('message');
        message.textContent = "";
        printOut.appendChild(message);
        
        /* 
        check for each possible combination, and alert a tailored message, and update the appropriate score
        */
        if (p === "rock" && c === "paper") {
            message.textContent = "You lose! Paper beats rock";
            computerScore++;
        } else if (p === "rock" && c === "scissors") {
            message.textContent = "You win! Rock beats scissors";
            playerScore++;
        } else if (p === "paper" && c === "rock") {
            message.textContent = "You win! Paper beats rock";
            playerScore++;
        } else if (p === "paper" && c === "scissors") {
            message.textContent = "You lose! Scissors beats paper";
            computerScore++;
        } else if (p === "scissors" && c === "rock") {
            message.textContent = "You lose! Rock beats scissors";
            computerScore++;
        } else if (p === "scissors" && c === "paper") {
            message.textContent = "You win! Scissors beats paper";
            playerScore++;
        } else {
            message.textContent = "Tie game!";
        }
        // reset player choice to "none" for the next round
        p = "none";
}

function resetGame() {
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('resetBtn');
    resetBtn.textContent = "Reset Game";

    body.appendChild(resetBtn);
    
    resetBtn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        announceWinner.textContent = "";
        runningScore.textContent = `Computer: ${computerScore}, Player: ${playerScore}`;
        body.removeChild(resetBtn);
        printOut.textContent = "";
    });
}

function game() {
    // run playRound
    if (computerScore < 5 && playerScore < 5) {
        playRound(playerChoice, computerChoice);
    }

    // compare the score numbers and alert the winner
    if (computerScore > playerScore) {
        runningScore.textContent = `Computer: ${computerScore}, Player: ${playerScore}`;
    } else if (playerScore > computerScore) {
        runningScore.textContent = `Computer: ${computerScore}, Player: ${playerScore}`;
    } else {
        runningScore.textContent = `Computer: ${computerScore}, Player: ${playerScore}`;
    }

}

// Start the game when web page opens
alert("Let's Play!");

// add event listener for each button and update playerChoice 
// according to button clicked
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.className;
        console.log(playerChoice);
        game();    
    });
});

window.addEventListener("click", () => {
    if (playerScore > 4 || computerScore > 4) {
        if (computerScore > playerScore) {
            announceWinner.textContent = "Computer wins!";
        } else if (computerScore < playerScore) {
            announceWinner.textContent = "You win!";
        } else {
            announceWinner.textContent = "It's a TIE!";
        }
        
        resetGame();
    }
});