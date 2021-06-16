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
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return true;
            }
        if (resultOfRound == false) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return false;
            }
        else {
            let tie = console.log("It's a tie")
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
    
function game() {
    let pointsUser = 0;
    let pointsComputer = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = round();
        if (roundResult === true) {
            pointsUser++;
        } else if (roundResult === false) {
            pointsComputer++;
        }
    }
    console.log(pointsUser > pointsComputer ? `You Won the game with ${pointsUser} points!!` : `You Lost the game with ${pointsUser} points!`);
}

game();