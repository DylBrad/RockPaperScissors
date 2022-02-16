const hands = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    let randomHand = hands[Math.floor(Math.random()*hands.length)];

    return randomHand;
}

function playRound() {
    let input = prompt("Plz enter 'ROCK', 'PAPER' or 'SCISSORS'")
    
    input =  input.toUpperCase();

    const computerSelection = computerPlay();

    if (input === computerSelection) {
        console.log("Thats a draw")
    } else if (input === "ROCK" && computerSelection === "PAPER") {
        console.log("Paper beats Rock.. Try again!!")
    } else if (input === "ROCK" && computerSelection === "SCISSORS") {
        console.log("Rock beats Scissors.. You win!!")
    } else if (input === "PAPER" && computerSelection === "SCISSORS") {
        console.log("Scissors beats Paper.. Try again!!")
    } else if (input === "PAPER" && computerSelection === "ROCK") {
        console.log("Paper beats Rock.. You win!!")
    } else if (input === "SCISSORS" && computerSelection === "ROCK") {
        console.log("Rock beats Scissors.. Try again!!")
    } else if (input === "SCISSORS" && computerSelection === "PAPER") {
        console.log("Scissors beats paper.. You win!!")
    }
}

playRound()


/* 


Prompt user to input Rock/Paper/Scissors

create random computer hand

When user inputs answer

        if userHand === ComputerHand -> Return Draw / Play again

        if userHand === Rock && ComputerHand === Scissors -> You win

        if userHand === Rock && ComputerHand === Paper -> You Lose / Play again

        if userHand === Paper && ComputerHand === Rock -> You win

        if userHand === Paper && ComputerHand === Scissors -> You Lose / Play again

        if userHand === Scissors && ComputerHand === Paper -> You win

        if userHand === Scissors && ComputerHand === Rock -> You Lose / Play again


            


*/