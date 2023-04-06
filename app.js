/***********************************************************/

let playerScore = 0;
let computerScore = 0;

document.querySelector(".rock-box").addEventListener("click", playGame);
document.querySelector(".paper-box").addEventListener("click", playGame);
document.querySelector(".scissors-box").addEventListener("click", playGame);

function playGame() {
  let playerWeapon = this;
  console.log(playerWeapon);
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerChoice(this);
    const computerSelection = computerPlaying();
    const result = winnerOfRound(playerSelection, computerSelection);

    if (result === "you won") {
      playerScore++;
      console.log(`You won round ${i + 1} of 5
      The score is 
      you: ${playerScore} (${playerSelection})
      Computer: ${computerScore} (${computerSelection})`);
    } else if (result === "computer won") {
      computerScore++;
      console.log(`Computer won round ${i + 1} of 5
      The score is 
      you: ${playerScore} (${playerSelection})
      Computer: ${computerScore} (${computerSelection})`);
    } else if (result === "tie") {
      console.log(`Round ${i + 1} was tied.
      The score is 
      you: ${playerScore} (${playerSelection})
      Computer: ${computerScore} (${computerSelection})`);
    }
  }

  if (playerScore > computerScore) {
    let finalScore = playerWon(playerScore, computerScore);
    console.log(finalScore);
  } else if (computerScore > playerScore) {
    finalScore = computerWon(playerScore, computerScore);
    console.log(finalScore);
  } else {
    finalScore = gameTie(playerScore, computerScore);
    console.log(finalScore);
  }
}

//Determines the computers pick
function computerPlaying() {
  const computerWeapon = Math.trunc(Math.random() * 3);
  if (computerWeapon === 0) {
    return document.querySelector(".rock-box");
  } else if (computerWeapon === 1) {
    return document.querySelector(".paper-box");
  } else if (computerWeapon === 2) {
    return document.querySelector(".scissors-box");
  }
}

//Register the players choice
function playerChoice(playerChoice) {
  console.log(playerChoice);
  // const word = prompt("Choose Rock, Paper or Scissor");
  // const firstLetter = word[0].toUpperCase();
  // const restOfWord = word.substring(1).toLowerCase();
  // const playerWeapon = firstLetter + restOfWord;

  playerChoice === document.querySelector(".rock-box") ||
    playerChoice === document.querySelector(".paper-box") ||
    playerChoice === document.querySelector(".scissors-box");

  console.log(playerChoice);
  return playerChoice;
}

function winnerOfRound(playerSelection, computerSelection) {
  console.log(playerSelection); // DOM element
  console.log(computerSelection); // DOM element
  displayPlayerEmojiResult(playerSelection);
  displayComputerEmojiResult(computerSelection);
  console.log(playerSelection);
  console.log(computerSelection);

  displayTextResults(playerSelection, computerSelection);

  displayPlayerEmojiResult(playerSelection);
  displayComputerEmojiResult(computerSelection);
}

function displayTextResults(playerSelection, computerSelection) {
  const rock = document.querySelector(".rock-box");
  const paper = document.querySelector(".paper-box");
  const scissors = document.querySelector(".scissors-box");
  if (playerSelection === computerSelection) {
    document.querySelector(".round-result").textContent = `It's a tie!`;
    document.querySelector(
      ".round-result-reason"
    ).textContent = `${playerSelection} ties with ${computerSelection}`;
  } else if (
    (rock && document.querySelector(".scissors-box")) ||
    (paper && document.querySelector(".rock-box")) ||
    (scissors && document.querySelector(".paper-box"))
  ) {
    document.querySelector(".round-result").textContent = `You won this round`;
    document.querySelector(
      ".round-result-reason"
    ).textContent = `${playerSelection} beats ${computerSelection}`;
  } else if (
    (rock && document.querySelector(".paper-box")) ||
    (scissors && document.querySelector(".rock-box")) ||
    (paper && document.querySelector(".scissors-box"))
  ) {
    document.querySelector(".round-result").textContent = `You lost this round`;
    document.querySelector(
      ".round-result-reason"
    ).textContent = `${computerSelection} beats ${playerSelection}`;
  }

  /***********CALL DISPLAY EMOJI RESULTS HERE with two args: playerSelection and computerSelection*********** */
}

/***********NAME THIS DISPLAY EMOJI RESULTS INSTEAD takes two arguments*********** */
function displayPlayerEmojiResult(playerSelection) {
  /***********IF Rock === ROCK then #player_weapon AND computerWeapon.textcontent = "🪨"*********** */
  console.log("Enter: getEmojiResult");

  const rock = document.querySelector(".rock-box");
  const paper = document.querySelector(".paper-box");
  const scissors = document.querySelector(".scissors-box");

  const playerWeapon = document.querySelector("#player-weapon");
  if (rock === playerSelection) {
    playerWeapon.textContent = "🪨";
  } else if (paper === playerSelection) {
    playerWeapon.textContent = "📄";
  } else if (scissors === playerSelection) {
    playerWeapon.textContent = "✂️";
  }
}

function displayComputerEmojiResult(computerSelection) {
  const rock = document.querySelector(".rock-box");
  const paper = document.querySelector(".paper-box");
  const scissors = document.querySelector(".scissors-box");
  const computerWeapon = document.querySelector("#computer-weapon");

  if (rock === computerSelection) {
    computerWeapon.textContent = "🪨";
  } else if (paper === computerSelection) {
    computerWeapon.textContent = "📄";
  } else if (scissors === computerSelection) {
    computerWeapon.textContent = "✂️";
  }
}

// function displayEmojiResult(pick) {
//   const rock = document.querySelector(".rock-box");
//   const paper = document.querySelector(".paper-box");
//   const scissors = document.querySelector(".scissors-box");

//   if (pick === rock) {
//     document.querySelector("#player-weapon").textContent = `🪨`;
//   } else if (pick === paper) {
//     document.querySelector("#player-weapon").textContent = `📄`;
//   } else if (pick === scissors) {
//     document.querySelector("#player-weapon").textContent = `✂️`;
//   }
// }

// Announces that player has won
function playerWon(you, computer) {
  return `Congratulations - YOU WON!! The final score is
  You: ${you}
  Computer: ${computer}`;
}

// Announces that computer has won
function computerWon(you, computer) {
  return `Better Luck next time - YOU LOST!! The final score is
  You: ${you}
  Computer: ${computer}`;
}

function gameTie(you, computer) {
  return `Close but no cigar - IT'S A TIE!! The final score is
  You: ${you}
  Computer: ${computer}`;
}
