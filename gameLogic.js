console.log("Hello, World!");

function getComputerChoice() {
    let choiceList = ['Rock','Paper','Scissors'];
    let choice = choiceList[Math.floor(Math.random()*choiceList.length)];
    return choice;
}

function playRound(computerSelect, playerSelect) {

    if (playerSelect == "rock" && computerSelect == "Scissors") {
        playerScore++;
        return `You win! ${playerSelect} beats ${computerSelect}.`, playerScore;
    } else if (playerSelect == "scissors" && computerSelect == "Paper") {
        return `You win! ${playerSelect} beats ${computerSelect}.`;
    } else if (playerSelect == "paper" && computerSelect == "Rock") {
        return `You win! ${playerSelect} beats ${computerSelect}`;
    } else if (playerSelect == computerSelect) {
        return `Oops, you tied. You both selected ${playerSelect}.`;
    } else {
        return `You lose. ${computerSelect} beats ${playerSelect}.`;
    }
}

function playGame() {
    var playerScore = 0;
    var computerScore = 0;

    if (message.includes('win')) {
        playerScore++;
    } else if (message.includes('lose')) {
        computerScore++;
    } else {
    }

    console.log(message);
    let currScore = `your current score is ${playerScore}, and the computer's score is ${computerScore}.`;
    console.log(`End of round ${round}, ${currScore}`);

    // for (let round = 1; round < 6; round++) {
    //     var playerChoice = prompt(`Round ${round}: Rock, Paper or Scissors?`);

    //     let message = playRound(playerChoice, getComputerChoice());
        
    //     if (message.includes('win')) {
    //         playerScore++;
    //     } else if (message.includes('lose')) {
    //         computerScore++;
    //     } else {
    //     }
    
    //     console.log(message);
    //     let currScore = `your current score is ${playerScore}, and the computer's score is ${computerScore}.`;
    //      console.log(`End of round ${round}, ${currScore}`);
    // }

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

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
console.log(buttons);

// we use the .forEach method to iterate through each button
var playerSelect = buttons.forEach((button) => {

    button.addEventListener('click', () => {
    alert(playRound(getComputerChoice(),button.id));
    });
});
