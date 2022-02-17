const hands = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    let randomHand = hands[Math.floor(Math.random()*hands.length)];

    return randomHand;
}

let userScore = parseInt(0);
let computerScore = parseInt(0);

let roundCount = parseInt(0);


function playRound() {
    let input = prompt("Plz enter 'ROCK', 'PAPER' or 'SCISSORS'")
    
    input =  input.toUpperCase();

    const computerSelection = computerPlay();

    if (input === computerSelection) {
        roundCount ++
        return ("Thats a draw")
    } else if (input === "ROCK" && computerSelection === "PAPER") {
        computerScore ++
        roundCount ++
        return (`Paper beats Rock.. Computer score: ${computerScore}. Your score ${userScore}`)
    } else if (input === "ROCK" && computerSelection === "SCISSORS") {
        userScore ++
        roundCount ++
        return (`Rock beats Scissors.. Computer score: ${computerScore}. Your score ${userScore}`)
    } else if (input === "PAPER" && computerSelection === "SCISSORS") {
        computerScore ++
        roundCount ++
        return (`Scissors beats Paper.. Computer score: ${computerScore}. Your score ${userScore}`)
    } else if (input === "PAPER" && computerSelection === "ROCK") {
        userScore ++
        roundCount ++
        return (`Paper beats Rock.. Computer score: ${computerScore}. Your score ${userScore}`)
    } else if (input === "SCISSORS" && computerSelection === "ROCK") {
        computerScore ++
        roundCount ++
        return (`Rock beats Scissors.. Computer score: ${computerScore}. Your score ${userScore}`)
    } else if (input === "SCISSORS" && computerSelection === "PAPER") {
        userScore ++
        roundCount ++
        return (`Scissors beats paper.. Computer score: ${computerScore}. Your score ${userScore}`)
    }
}

let gameOver = false;

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())

        if (roundCount === 5) {
            gameOver = true;
        } 
    }
}

game()


if (gameOver && userScore > computerScore) {
    console.log("PARABENS! YOU WON!")
    alert("YOU WON")
} else if (gameOver && computerScore > userScore) {
    console.log("GAME OVER! You Lose!")
    alert("YOU LOSE")
} else if (gameOver && computerScore === userScore) {
    console.log("It looks like a draw")
    alert("Draw")
}

