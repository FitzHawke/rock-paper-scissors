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

let compChoice = computerPlay();
let playChoice = playerChoose();
console.log(compChoice, playChoice);
