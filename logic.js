function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num == 0) return "rock";
  else if (num == 1) return "paper";
  return "scissors";
}

function playRound(playerSelection, computerSelection) {
  const div = document.querySelector('#score');
  div.innerHTML = `${playerSelection} vs ${computerSelection}!`;
  if (playerSelection == computerSelection) {
    div.innerHTML += "<br>It's a tie!";
    return -1;
  } else if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper"
  ) {
    div.innerHTML += "<br>You win this round!";
    return 1;
  }
  div.innerHTML += "<br>You lost this round!";
  return 0;
}

function game() {

  let playerScore = 0;
  let computerScore = 0;

  const rpi = document.querySelectorAll('button');
  const div = document.querySelector('#score');

  rpi.forEach(button => button.addEventListener('click', (e) => {
    console.log(e);
    const result = playRound(button.id, getComputerChoice());
    playerScore += result === 1;
    computerScore += result === 0;
    if (playerScore >= 3 || computerScore >= 3) {
      div.innerHTML += `<br><br>The final score is ${playerScore}:${computerScore}`;
      playerScore = 0;
      computerScore = 0;
    } else {
      div.innerHTML += `<br><br>The current score is ${playerScore}:${computerScore}`;
    }
  }));
}

game();
