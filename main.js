function computerPlay() {
    let randomNumber = Math.random() * 10;
        if (randomNumber <= 3) {
            return "rock";
        }

        if (randomNumber >= 3 && randomNumber < 6) {
            return "paper";

        }
        if (randomNumber > 6 && randomNumber < 9)
        return "scissor";
}

function round(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Chose one: rock, paper or scissor:").toLowerCase();
    
    let resultOfRound = checkWin(playerSelection, computerSelection);
        if (resultOfRound == true) {
            return `You Win! ${playerSelection} beats ${computerSelection}`
            }
        if (resultOfRound == false) {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
            }
        else {
        return resultOfRound;
        }
    }
console.log(round())

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
            return "It's a tie"
        }
    }
    
