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

let compChoice = computerPlay();
console.log(compChoice);
