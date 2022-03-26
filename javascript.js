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

function playerChoose() {
    console.log("Choose Rock, Paper or Scissors");
    let choice = prompt("What is your choice?");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("invalid choice");
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

function playGame() {
    /* console.log("Lets play Rock Paper Scissors! Best of 5 wins");
    let pWin = 0; //Player Wins
    let cWin = 0; //Computer Wins

    //loop until either contestant has 3 wins (best of 5)
    for (let i = 0; pWin < 3 && cWin < 3; ) {
        const compChoice = computerPlay();
        const playChoice = playerChoose();
        let winner = playRound(playChoice, compChoice);

        if (winner === 1) {
            pWin++;
        } else if (winner === 2) {
            cWin++;
        }
    } */

    const compChoice = computerPlay();
    const playChoice = playerChoose();
    let winner = playRound(playChoice, compChoice);

    // build a statement and output the winner of the game
    if (pWin === 3) {
        let statement = "You win, " + pWin + " games to " + cWin;
        console.log(statement);
    } else if (cWin === 3) {
        let statement = "You lose, " + cWin + " games to " + pWin;
        console.log(statement);
    }
}

playGame();
