const result = document.querySelector('.result');
const scores = document.querySelector('.scores');
let scorePlayer = 0;
let scoreComputer = 0;

if (scorePlayer == 5) {
    result.textContent = 'The Player is the winner!!';
} else if (scoreComputer == 5) {
    result.textContent = 'The computer is the winner!';
}

function computerPlay() {
    let randomNumber = Math.random() * 10;
        if (randomNumber <= 3) {
            return "rock";
        }

        else if (randomNumber >= 3 && randomNumber < 6) {
            return "paper";

        }
        else if (randomNumber > 6 && randomNumber < 9) {
            return "scissor";
        }
}

function round(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    let resultOfRound = checkWin(playerSelection, computerSelection);
        if (resultOfRound == true) {
            scorePlayer++;
            result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            scores.textContent = `Player's score: ${scorePlayer}
            Computer's score: ${scoreComputer}`;
            }
        else if (resultOfRound == false) {
            scoreComputer++;
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            scores.textContent = `Player's score: ${scorePlayer}
            Computer's score: ${scoreComputer}`;
        }
        else {
            result.textContent = `It's a tie!`;
            scores.textContent = `Player's score: ${scorePlayer}
            Computer's score: ${scoreComputer}`;
        }
        if (scorePlayer == 5) {
            result.textContent = 'The Player is the winner!!';
            scores.textContent = ''
            scorePlayer = 0;
            scoreComputer = 0;
        } else if (scoreComputer == 5) {
            result.textContent = 'The computer is the winner!';
            scores.textContent = ''
            scorePlayer = 0;
            scoreComputer = 0;
        }

}

function checkWin(playerSelection, computerSelection) {
    switch (true) {  

        case playerSelection == "rock" && computerSelection == "rock":
            return "It's a tie";
            break;

        case playerSelection == "rock" && computerSelection == "paper":
            return false;
            break;
            
        case playerSelection == "rock" && computerSelection == "scissor":
            return true;
            break;

        case playerSelection == "paper" && computerSelection == "rock":
            return true;
            break;

        case playerSelection == "paper" && computerSelection == "paper":
            return "It's a tie";
            break;

        case playerSelection == "rock" && computerSelection == "rock":
            return false;
            break;

        case playerSelection == "scissor" && computerSelection == "rock":
            return false;
            break;

        case playerSelection == "scissor" && computerSelection == "paper":
            return true;
            break;

        case playerSelection == "scissor" && computerSelection == "scissor":
            return "tie"
        }
}

const buttonRock = document.querySelector('.rock');
buttonRock.addEventListener('click', () => {
    round("rock");
});

const buttonPaper = document.querySelector('.paper');
buttonPaper.addEventListener('click', () => {
    round("paper");
});

const buttonScissor = document.querySelector('.scissor');
buttonScissor.addEventListener('click', () => {
    round("scissor");
});
