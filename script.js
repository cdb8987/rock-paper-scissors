const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const userScore = document.getElementById('userscore');
const computerScore = document.getElementById('computerscore');
const pl = 0;
const cp = 0;
userScore.innerText = `Your score ${pl}`
computerScore.innerText = `CPU score ${cp}`

function playGame(userChoice) {
    const choiceList = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choiceList.length)
    const compChoice = choiceList[randomNumber]
    console.log(userChoice, compChoice)

    return evaluateOutcome(userChoice, compChoice)

}

function evaluateOutcome(userChoice, compChoice) {
    let outcome;
    if (userChoice == compChoice) { return [0, 0] }
    else if (userChoice == 'rock' && compChoice == 'scissors') { return [1, 0] }
    else if (userChoice == 'rock' && compChoice == 'paper') { return [0, 1] }
    else if (userChoice == 'scissors' && compChoice == 'paper') { return [1, 0] }
    else if (userChoice == 'scissors' && compChoice == 'rock') { return [0, 1] }
    else if (userChoice == 'paper' && compChoice == 'rock') { return [1, 0] }
    else if (userChoice == 'paper' && compChoice == 'scissors') { return [0, 1] }

}



rockButton.onclick = playGame('rock');
paperButton.onclick = playGame('paper');
scissorsButton.onclick = playGame('scissors');



