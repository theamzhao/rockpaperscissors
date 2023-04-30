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
document.getElementById('round').textContent = 'Select your Pokemon to start';
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
        document.getElementById('round').textContent = `You chose ${playerSelect}. It's super effective against ${computerSelect}!`;
    } else if (playerSelect == "Water" && computerSelect == "Fire") {
        document.getElementById('round').textContent = `You chose ${playerSelect}. It's super effective against ${computerSelect}!`;
    } else if (playerSelect == "Fire" && computerSelect == "Grass") {
        document.getElementById('round').textContent =  `You chose ${playerSelect}. It's super effective against ${computerSelect}!`;
    } else if (playerSelect == computerSelect) {
        document.getElementById('round').textContent = ` You both selected ${playerSelect}. The attack was ineffective.`;
    } else {
        document.getElementById('round').textContent = `Your lost. ${computerSelect} is super effective against ${playerSelect}.`;
    }
}

// using .forEach method to iterate through each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        if (playerScore < 5 && computerScore < 5){
            playRound(getComputerChoice(),button.id);
            
            if (roundStatus.textContent.includes(`It's`)){
                playerScore++;
            } else if (roundStatus.textContent.includes('lost')){
                computerScore++;
            } else if (roundStatus.textContent.includes('ineffective')){
                console.log("ya tied");
            } else console.log("wut");
            gameStatus.textContent = (`Your score: ${playerScore} | Opponent's score: ${computerScore}`);
        } else if (playerScore == 5) {
            alert(`You won! Victory is yours.`);
            roundStatus.textContent = "Reload page to play again";
            roundStatus.style.color = '#29a6e4';
        }
        else if (computerScore == 5) {
            alert('You lost to your opponent. Rematch?');
            roundStatus.textContent = "Reload page to play again";
            roundStatus.style.color = '#29a6e4';
        }
    });
});

