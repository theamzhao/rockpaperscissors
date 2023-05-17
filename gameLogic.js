console.log("Welcome to the Odin Project - Rock Paper Scissors");

// UI 
const buttons = document.querySelectorAll('button');
const roundStatus = document.createElement('h3'); 
const gameStatus = document.createElement('h3');  
roundStatus.id = 'round';
gameStatus.id = 'game';
gameinfo.appendChild(roundStatus);
gameinfo.appendChild(gameStatus);
document.getElementById('round').textContent = 'Select your Pokemon to start';
roundStatus.style.color = '#29a6e4';
var playerScore = 0;
var computerScore = 0;
var round = 1;
//&#128165 Bang emoji

// GAME 

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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        if (playerScore < 5 && computerScore < 5){
            playRound(getComputerChoice(),button.id);
            
            if (roundStatus.textContent.includes(`It's`)){
                playerScore++;
            } else if (roundStatus.textContent.includes('lost')){
                computerScore++;
            } else if (roundStatus.textContent.includes('ineffective')){
                console.log("Tie");
            } else console.log("Error");
            gameStatus.textContent = (`Your score: ${playerScore} | Opponent's score: ${computerScore}`);
        } else if (playerScore == 5) {
            alert(`You won! Victory is yours.`);
            roundStatus.textContent = "Select a Pokemon to play again";
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore == 5) {
            alert('You lost to your opponent. Rematch?');
            roundStatus.textContent = "Select a Pokemon to play again";
            playerScore = 0;
            computerScore = 0;
        }
    });
});

// HOVER ACTION
function addAction(e) {

    if (this.children[0].src.includes('water')){
        this.children[0].src = "img/water.gif";
        this.classList.add('hover-water');
    } else if (this.children[0].src.includes('fire')){
        this.children[0].src = "img/fire.gif";
        this.classList.add('hover-fire');
    } else if (this.children[0].src.includes('grass')){
        this.children[0].src = "img/grass.gif";
        this.classList.add('hover-grass');
    }

}

function removeTransition(e){
    if (e.type !== 'mouseout') return;

    if (this.children[0].src.includes('water')){
        this.children[0].src = "img/water.png";
        this.classList.remove('hover-water');
    } else if (this.children[0].src.includes('fire')){
        this.children[0].src = "img/fire.png";
        this.classList.remove('hover-fire');
    } else if (this.children[0].src.includes('grass')){
        this.children[0].src = "img/grass.png";
        this.classList.remove('hover-grass');
    }
}

buttons.forEach((button) => button.addEventListener('mouseover', addAction));
buttons.forEach((button) => button.addEventListener('mouseout', removeTransition));
