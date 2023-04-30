console.log("Welcome to the Odin Project - Rock Paper Scissors");

// set buttons to node list of options
const buttons = document.querySelectorAll('button');

// tells what round player is on
const roundStatus = document.createElement('h3'); 
roundStatus.id = 'round';
gameinfo.appendChild(roundStatus);

// tells what the outcome of the round is + current score
const gameStatus = document.createElement('h3');  
gameStatus.id = 'game';
gameinfo.appendChild(gameStatus);

// placeholders to know where data will update
document.getElementById('round').textContent = 'Select a Pokemon to start';
console.log(roundStatus.textContent);

var playerScore = 0;
var computerScore = 0;
var round = 1;

function getComputerChoice() {
    let choiceList = ['Grass','Fire','Water'];
    let choice = choiceList[Math.floor(Math.random()*choiceList.length)];
    return choice;
}

function playRound(computerSelect, playerSelect) {

    let firstLetter = playerSelect.substring(0,1).toUpperCase();
    playerSelect = firstLetter + playerSelect.substring(1).toLowerCase();

    if (playerSelect == "Grass" && computerSelect == "Water") {
        document.getElementById('round').textContent = `You win! ${playerSelect} beats ${computerSelect}.`;
    } else if (playerSelect == "Water" && computerSelect == "Fire") {
        document.getElementById('round').textContent = `You win! ${playerSelect} beats ${computerSelect}.`;
    } else if (playerSelect == "Fire" && computerSelect == "Grass") {
        document.getElementById('round').textContent =  `You win! ${playerSelect} beats ${computerSelect}.`;
    } else if (playerSelect == computerSelect) {
        document.getElementById('round').textContent = `Oops, you tied. You both selected ${playerSelect}.`;
    } else {
        document.getElementById('round').textContent = `You lose. ${computerSelect} beats ${playerSelect}.`;
    }
}

// using .forEach method to iterate through each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        if (playerScore < 5 && computerScore < 5){
            playRound(getComputerChoice(),button.id);
            
            if (roundStatus.textContent.includes('win')){
                playerScore++;
            } else if (roundStatus.textContent.includes('lose')){
                computerScore++;
            } else if (roundStatus.textContent.includes('Oops')){
                console.log("ya tied");
            } else console.log("wut");
            gameStatus.textContent = (`player score is ${playerScore} and computer score is ${computerScore}`);
        } else if (playerScore == 5) alert(`Game over, you won!`);
        else if (computerScore == 5) alert('Game over, you lose!');

    });
});

