function computerPlay() {
    let a = Math.floor(Math.random() * 3);
    return a;
}

function playerChoose() {
    console.log("Choose Rock, Paper or Scissors");
    let choice = prompt("What is your choice?");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {console.log("invalid choice")}
}

function playGame(player, computer) {
    switch (computer) {
        case 0: //rock
            switch (player) {
                case "rock":
                    console.log("Draw, You both chose Rock.");
                    break;
                case "paper":
                    console.log("You Win! Paper beats Rock!");
                    break;
                case "scissors":
                    console.log("You Lose. Rock beats Scissors.");
            }
            break;
        case 1: //paper
            switch (player) {
                case "paper":
                    console.log("Draw, You both chose Paper.");
                    break;
                case "scissors":
                    console.log("You Win! Scissors beats Paper!");
                    break;
                case "rock":
                    console.log("You Lose. Paper beats Rock.");
            }
            break;
        case 2: //scissors
            switch (player) {
                case "scissors":
                    console.log("Draw, You both chose Scissors.");
                    break;
                case "rock":
                    console.log("You Win! Rock beats Scissors!");
                    break;
                case "paper":
                    console.log("You Lose. Scissors beats Paper.");
            }
    }
}

let compChoice = computerPlay();
let playChoice = playerChoose();
console.log(compChoice, playChoice);
playGame(playChoice, compChoice);
