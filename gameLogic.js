console.log("Hello, World!");

function getComputerChoice() {
    let choiceList = ['Rock','Paper','Scissors'];
    let choice = choiceList[Math.floor(Math.random()*choiceList.length)];
    return choice;
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    let firstLetter = playerSelection.substring(0,1).toUpperCase();
    playerSelection = firstLetter + playerSelection.substring(1).toLowerCase();

    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`, playerScore;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection) {
        return `Oops, you tied. You both selected ${playerSelection}.`;
    } else {
        return `You lose. ${computerSelection} beats ${playerSelection}.`;
    }
}

function playGame() {
    var playerScore = 0;
    var computerScore = 0;

    for (let round = 1; round < 6; round++) {
        var playerChoice = prompt(`Round ${round}: Rock, Paper or Scissors?`);

        let message = playRound(playerChoice, getComputerChoice());
        
        if (message.includes('win')) {
            playerScore++;
        } else if (message.includes('lose')) {
            computerScore++;
        } else {
        }
    
        console.log(message);
        let currScore = `your current score is ${playerScore}, and the computer's score is ${computerScore}.`;
         console.log(`End of round ${round}, ${currScore}`);
    }

    if (playerScore > computerScore) {
        let decision = `Congratulations! You won. Your score was ${playerScore} to ${computerScore}`;
        return decision;
    } else if (playerScore < computerScore) {
        let decision = `Too bad, you lost. Your score was ${playerScore} to ${computerScore}`;
        return decision;
    } else {
        let decision = `You tied! Your score was ${playerScore} to ${computerScore}.`;
        return decision;
    }
}

//console.log(playGame());