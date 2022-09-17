function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num == 0) return "rock";
  else if (num == 1) return "paper";
  return "scissors";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return -1;
  } else if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper"
  ) {
    return 1;
  }
  return 0;
}

function game() {
  let cnt = 0;
  console.log(`We're playing rock-paper-scissors best of 5!`);
  for (let i = 0; i < 5; i++) {
    let isATie = true;
    while (isATie) {

      let playerSelection = prompt("What are you going to play?", "rock?").toLowerCase();
      let computerSelection = getComputerChoice();

      let thisRoundResult = playRound(playerSelection, computerSelection);

      if (thisRoundResult == -1) {
        console.log("It's a tie! Replay this round!");
      } else if (thisRoundResult == 1) {
        cnt++;
        console.log(`You won the round ${i + 1}!`);
      } else {
        console.log(`You lost the round ${i + 1}!`);
      }

      isATie = thisRoundResult == -1;

    }
    console.log(`The current score is ${cnt}:${i + 1 - cnt}`);
  }
  if (cnt >= 3) {
    console.log("You won!");
  } else {
    console.log("You lost!");
  }
}

game();
