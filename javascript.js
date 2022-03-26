function computerPlay() {
    let a = Math.floor(Math.random() * 3);
    switch (a) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(player, computer) {
    // compare computer choice with player choice to determine winner
    switch (computer) {
        case "rock":
            switch (player) {
                case "rock":
                    console.log("Draw, You both chose Rock.");
                    return 0;
                case "paper":
                    console.log("You Win! Paper beats Rock!");
                    return 1;
                case "scissors":
                    console.log("You Lose. Rock beats Scissors.");
                    return 2;
            }
            break;
        case "paper":
            switch (player) {
                case "paper":
                    console.log("Draw, You both chose Paper.");
                    return 0;
                case "scissors":
                    console.log("You Win! Scissors beats Paper!");
                    return 1;
                case "rock":
                    console.log("You Lose. Paper beats Rock.");
                    return 2;
            }
            break;
        case "scissors":
            switch (player) {
                case "scissors":
                    console.log("Draw, You both chose Scissors.");
                    return 0;
                case "rock":
                    console.log("You Win! Rock beats Scissors!");
                    return 1;
                case "paper":
                    console.log("You Lose. Scissors beats Paper.");
                    return 2;
            }
    }
}

function playGame(playerChoice) {
    console.log(playerChoice);
    let compChoice = computerPlay();

    playRound(playerChoice, compChoice);
}

let button = document.querySelectorAll("button");
button.forEach((btn) =>
    btn.addEventListener("click", (e) => playGame(e.target.className))
);
