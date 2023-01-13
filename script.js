const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const displayUserChoice = document.getElementById('userchoice')
const displayCompChoice = document.getElementById('computerchoice')
const displayResult = document.getElementById('result')
const userScore = document.getElementById('userscore');
const computerScore = document.getElementById('computerscore');
let pl = 0; //player score
let cp = 0; //computer score

function playGame(userChoice) {
    const choiceList = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choiceList.length);
    const compChoice = choiceList[randomNumber];
    let result = evaluateOutcome(userChoice, compChoice);
    displayOutcome(userChoice, compChoice, result)
}

function evaluateOutcome(userChoice, compChoice) {
    let outcome;
    if (userChoice == compChoice) { return [0, 0, 'TIE'] }
    else if (userChoice == 'rock' && compChoice == 'scissors') { outcome = [1, 0, 'YOU WIN!'] }
    else if (userChoice == 'rock' && compChoice == 'paper') { outcome = [0, 1, 'YOU LOSE! '] }
    else if (userChoice == 'scissors' && compChoice == 'paper') { outcome = [1, 0, 'YOU WIN!'] }
    else if (userChoice == 'scissors' && compChoice == 'rock') { outcome = [0, 1, 'YOU LOSE'] }
    else if (userChoice == 'paper' && compChoice == 'rock') { outcome = [1, 0, 'YOU WIN!'] }
    else if (userChoice == 'paper' && compChoice == 'scissors') { outcome = [0, 1, 'YOU LOSE!'] }

    return outcome //returns array containing 1. amount to increment userscore, 2. amount to increment compscore and 3. Alert message that will be displayed
}

function displayOutcome(userChoice, compChoice, result) {
    pl += result[0];
    cp += result[1];
    displayUserChoice.innerText = `You chose:  ${userChoice}`;
    displayCompChoice.innerText = `Computer chose:  ${compChoice}`;
    displayResult.innerText = `${result[2]}`;
    userScore.innerText = `WINS:${pl}`;
    computerScore.innerText = `LOSSES:${cp}`;
}

rockButton.onclick = function () {
    playGame('rock');
}
paperButton.onclick = function () {
    playGame('paper')
};
scissorsButton.onclick = function () {
    playGame('scissors')
}





