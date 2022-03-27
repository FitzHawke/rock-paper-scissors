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
    const outcome = document.querySelector(".winner");
    // compare computer choice with player choice to determine winner
    switch (computer) {
        case "rock":
            switch (player) {
                case "rock":
                    outcome.textContent = "Draw, You both chose Rock.";
                    return 0;
                case "paper":
                    outcome.textContent =
                        "You Win this round! Paper beats Rock!";
                    return 1;
                case "scissors":
                    outcome.textContent =
                        "You Lose this round. Rock beats Scissors.";
                    return 2;
            }
            break;
        case "paper":
            switch (player) {
                case "paper":
                    outcome.textContent = "Draw, You both chose Paper.";
                    return 0;
                case "scissors":
                    outcome.textContent =
                        "You Win this round! Scissors beats Paper!";
                    return 1;
                case "rock":
                    outcome.textContent =
                        "You Lose this round. Paper beats Rock.";
                    return 2;
            }
            break;
        case "scissors":
            switch (player) {
                case "scissors":
                    outcome.textContent = "Draw, You both chose Scissors.";
                    return 0;
                case "rock":
                    outcome.textContent =
                        "You Win this round! Rock beats Scissors!";
                    return 1;
                case "paper":
                    outcome.textContent =
                        "You Lose this round. Scissors beats Paper.";
                    return 2;
            }
    }
}

function playGame(playerChoice) {
    let compChoice = computerPlay();
    let win = playRound(playerChoice, compChoice);

    if (win === 1) pWin++;
    if (win === 2) cWin++;

    let score = document.querySelector(".scorecard");
    score.textContent = `${pWin} - ${cWin}`;

    if (pWin === 5) {
        score.textContent = `You win the game ${pWin} - ${cWin}!`;
        pWin = 0;
        cWin = 0;
    } else if (cWin === 5) {
        score.textContent = `You lose the game ${pWin} - ${cWin}.`;
        pWin = 0;
        cWin = 0;
    }
}

let pWin = 0;
let cWin = 0;
let button = document.querySelectorAll("button");
button.forEach((btn) =>
    btn.addEventListener("click", (e) => playGame(e.target.className))
);
