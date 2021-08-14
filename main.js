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
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return true;
            }
        else if (resultOfRound == false) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return false;
        }
        else {
            tie = console.log("It's a tie");
            return tie;
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

const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', () => {
    round("rock");
});

const buttonPaper = document.querySelector('#paper');
buttonPaper.addEventListener('click', () => {
    round("paper");
});

const buttonScissor = document.querySelector('#scissor');
buttonScissor.addEventListener('click', () => {
    round("scissor");
});
