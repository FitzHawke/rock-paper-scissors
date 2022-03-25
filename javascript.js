function computerPlay() {
    let a = Math.floor(Math.random() * 3);

    return a;

    /* switch (a) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  } */
}

function playerChoose() {
    console.log("Choose Rock, Paper or Scissors");
    const choice = prompt("What is your choice?");
    return choice;
}

function playGame(player, computer) {
    switch (computer) {
        case 0:
            switch (player) {
                case "rock":
                    console.log("Draw");
                    break;
                case "paper":
                    console.log("You Win!");
                    break;
                case "scissors":
                    console.log("You Lose");
            }
            break;
        case 1:
            switch (player) {
                case "paper":
                    console.log("Draw");
                    break;
                case "scissors":
                    console.log("You Win!");
                    break;
                case "rock":
                    console.log("You Lose");
            }
            break;
        case 2:
            switch (player) {
                case "scissors":
                    console.log("Draw");
                    break;
                case "rock":
                    console.log("You Win!");
                    break;
                case "paper":
                    console.log("You Lose");
            }
    }
}

let compChoice = computerPlay();
let playChoice = playerChoose();
console.log(compChoice, playChoice);
playGame(playChoice, compChoice);
