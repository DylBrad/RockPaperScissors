const hands = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    let randomHand = hands[Math.floor(Math.random()*hands.length)];

    return randomHand;
}

let userScore = parseInt(0);
let computerScore = parseInt(0);
let roundCount = parseInt(0);
const roundHeader = document.querySelector('#round');


function playRound(input) {
    roundHeader.innerText = `Round ${roundCount + 1}`

    let computerScoreCount = document.querySelector('#computerScore');
    let userScoreCount = document.querySelector('#userScore');
    const computerSelection = computerPlay();

    if (input === computerSelection) {
        roundCount ++
        userPick.innerText = `You picked ${input}.`
        comupterPick.innerHTML = `Computer picked ${computerSelection}`
    } else if (input === "ROCK" && computerSelection === "PAPER") {
        computerScore ++
        roundCount ++
        userPick.innerText = `You picked ${input}.`
        comupterPick.innerHTML = `Computer picked ${computerSelection}`
        computerScoreCount.innerText = `Computer: ${computerScore}.`;
    } else if (input === "ROCK" && computerSelection === "SCISSORS") {
        userScore ++
        roundCount ++
        userPick.innerText = `You picked ${input}.`
        comupterPick.innerHTML = `Computer picked ${computerSelection}`
        userScoreCount.innerText = `User: ${userScore}`;
    } else if (input === "PAPER" && computerSelection === "SCISSORS") {
        computerScore ++
        roundCount ++
        userPick.innerText = `You picked ${input}.`
        comupterPick.innerHTML = `Computer picked ${computerSelection}`
        computerScoreCount.innerText = `Computer: ${computerScore}.`;
    } else if (input === "PAPER" && computerSelection === "ROCK") {
        userScore ++
        roundCount ++
        userPick.innerText = `You picked ${input}.`
        comupterPick.innerHTML = `Computer picked ${computerSelection}`
        userScoreCount.innerText = `User: ${userScore}`;
    } else if (input === "SCISSORS" && computerSelection === "ROCK") {
        computerScore ++
        roundCount ++
        userPick.innerText = `You picked ${input}.`
        comupterPick.innerHTML = `Computer picked ${computerSelection}`
        computerScoreCount.innerText = `Computer: ${computerScore}.`;
    } else if (input === "SCISSORS" && computerSelection === "PAPER") {
        userScore ++
        roundCount ++
        userPick.innerText = `You picked ${input}.`
        comupterPick.innerHTML = `Computer picked ${computerSelection}`
        userScoreCount.innerText = `Player: ${userScore}`;
    }
}

const buttons = document.querySelectorAll('button');
const userPick = document.querySelector('#userPick');
const comupterPick = document.querySelector('#computerPick');
const winner = document.querySelector('#winnerAnnouncement');


// Play round on button click
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        input = button.id;

        if (roundCount < 4) {
            playRound(input);
        } else if (roundCount >= 4) {
            playRound(input);
            winner.innerText = `${winnerOrLoser()}`
            roundCount = 0;
            console.log(roundCount)
        } 
    });
})

// Winner or Loser message
function winnerOrLoser () {
    if (userScore > computerScore) {
        return("PARABENS! YOU WON!")
    } else if (computerScore > userScore) {
        return("GAME OVER! You Lose!")
    } else if (computerScore === userScore) {
        return("It looks like a draw")
    }
};


