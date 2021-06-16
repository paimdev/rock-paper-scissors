// make a function called computerPlay
function computerPlay() {
// get a random number from 0 to 9 and store it in a variable
    let randomNumber = Math.random() * 10;
// check if this random number is smaller or equal to 3
        if (randomNumber <= 3) {
// if yes return rock
            return "rock";
        }
// check if this random number is bigger than 3 and smaller than 6
        if (randomNumber >= 3 && randomNumber < 6) {
// if yes return paper
            return "paper";
        }
// check if this random number is bigger than 6 and smaller than 9
        if (randomNumber > 6 && randomNumber < 9)
// if yes return scissor
        return "scissor";
}

//  make a function that plays a round and have two paramethers (playerSelection and computerSelection)
//  define the variable computerSelection to be the return of the function computerPlay
//  define the variable playerSelection and asks for it's value to the user, makes the user input case insensitive
//  use a function to check which one won
//  return the result of the round in a string like (""You Lose! Paper beats Rock"")