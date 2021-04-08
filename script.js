let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//randomly selects target number
const generateTarget = () =>{
    return (Math.floor(Math.random() * 10));//allows for numbers 0-9
}

//compares the user input with the target number
function compareGuesses(userGuess, computerGuess, target){
    //Check the distance of the user and computer from the target number
    //get absolute value of each guess
    let userValue = Math.abs(target - userGuess);
    let computerValue = Math.abs(target - computerGuess);

    //check to see if computer or user wins. User will win in ties
    if (userValue <= computerValue){
        return true;
    }else{
        return false;
    }
}

//updates the score of the winner after each round
function updateScore(winner){
    if (winner === 'human'){
        humanScore += 1;
    }else{
        computerScore += 1;
    }
}

function advanceRound(){
    currentRoundNumber += 1;
}