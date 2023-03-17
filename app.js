/***********************************************************/

//Determines the computers pick
function computerPlaying() {
  const computerWeapon = Math.trunc(Math.random() * 3);
  if (computerWeapon === 0) {
    return "Rock";
  } else if (computerWeapon === 1) {
    return "Paper";
  } else if (computerWeapon === 2) {
    return "Scissor";
  }
}

//Register the players choice
function playerChoice() {
  const playerWeapon = prompt("Choose Rock, Paper or Scissor");
  return playerWeapon;
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerChoice();
    const computerSelection = computerPlaying();
    const result = winnerOfRound(playerSelection, computerSelection);

    if (result === "you won") {
      playerScore++;
      console.log(`You won round ${i + 1} of 5
      The score is 
      you: ${playerScore}
      Computer: ${computerScore}`);
    } else if (result === "computer won") {
      computerScore++;
      console.log(`Computer won round ${i + 1} of 5
      The score is 
      you: ${playerScore}
      Computer: ${computerScore}`);
    } else if (result === "tie") {
      console.log(`Round ${i + 1} was tied.
      The score is 
      you: ${playerScore}
      Computer: ${computerScore}`);
    }
  }

  if (playerScore > computerScore) {
    let finalScore = playerWon(playerScore, computerScore);
    console.log(finalScore);
  }
}

function winnerOfRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissor") ||
    (playerSelection === "Scissor" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return "you won";
  } else {
    return "computer won";
  }
}

// Announces that player has won
function playerWon(you, computer) {
  return `The final score is
  You: ${you}
  Computer: ${computer}`;
}

// Announces that computer has won
function computerWon(you, computer) {
  return `The final score is
  You: ${you}
  Computer: ${computer}`;
}

playGame();
