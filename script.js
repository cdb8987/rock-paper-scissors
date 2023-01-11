let rockButton = document.getElementById('rock')
let paperButton = document.getElementById('paper')
let scissorsButton = document.getElementById('scissors')


function userSelection() {
    document.getElementById('userinput').style.display = 'none'
    console.log('function ran')
}

rockButton.addEventListener('click', userSelection)