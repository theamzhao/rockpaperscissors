console.log("Welcome to the Odin Project - Rock Paper Scissors");

function getComputerChoice() {
    let choiceList = ['Rock','Paper','Scissors'];
    let choice = choiceList[Math.floor(Math.random()*choiceList.length)];
    return choice;
}

function playRound(computerSelect, playerSelect) {

    let firstLetter = playerSelect.substring(0,1).toUpperCase();
    playerSelect = firstLetter + playerSelect.substring(1).toLowerCase();

    if (playerSelect == "Rock" && computerSelect == "Scissors") {
        return `You win! ${playerSelect} beats ${computerSelect}.`;
    } else if (playerSelect == "Scissors" && computerSelect == "Paper") {
        return `You win! ${playerSelect} beats ${computerSelect}.`;
    } else if (playerSelect == "Paper" && computerSelect == "Rock") {
        return `You win! ${playerSelect} beats ${computerSelect}`;
    } else if (playerSelect == computerSelect) {
        return `Oops, you tied. You both selected ${playerSelect}.`;
    } else {
        return `You lose. ${computerSelect} beats ${playerSelect}.`;
    }
}

function playGame(roundStatus, rounds, buttons, buttonid) {
    var playerScore = 0;
    var computerScore = 0;
    

    for (let round = 1; round < 6; round++) {
        rounds.textContent = `Round ${round}: Rock, Paper or Scissors?`;

        roundStatus.textContent = `${playRound(getComputerChoice(),buttonid)}`;
  
        if (roundStatus.textContent.includes('win')) {
            playerScore++;
        } else if (roundStatus.textContent.includes('lose')) {
            computerScore++;
        } else {
        }
    
        console.log(roundStatus.textContent);
        let currScore = `your current score is ${playerScore}, and the computer's score is ${computerScore}.`;
        roundStatus.textContent = `End of round ${round}, ${currScore}`;
        
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

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

//tells what round player is on
const rounds = document.createElement('h2'); 
rounds.classList.add('rounds');
container.appendChild(rounds);

//tells what the outcome of the round is
const roundStatus = document.createElement('h2');  
roundStatus.classList.add('status');
container.appendChild(roundStatus);

//tells what the current score is
const currScore = document.createElement('h2'); 
roundStatus.classList.add('status');
container.appendChild(roundStatus);


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        //alert(playRound(getComputerChoice(),button.id));
        playGame(roundStatus, rounds, buttons, button.id);
        //message.textContent = `${playRound(getComputerChoice(),button.id)}`;
    });
});

//console.log(playRound(getComputerChoice(),playerSelect));