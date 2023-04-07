"use strict";

window.addEventListener("load", initApp);

let playerPoints = 0;
let computerPoints = 0;
console.log("player points: " + playerPoints);

function initApp() {
  document.querySelector(".rock-box").addEventListener("click", playGame);
  document.querySelector(".paper-box").addEventListener("click", playGame);
  document.querySelector(".scissors-box").addEventListener("click", playGame);
  document
    .querySelector("#btn-play-again")
    .addEventListener("click", restartGame);
}

function playGame() {
  document.querySelector("h2").textContent = " ";
  const playerSelection = playerChoice(this);
  const computerSelection = computerPlaying();

  /*const result = */ winnerOfRound(playerSelection, computerSelection);
}

function incrementPlayerPoint() {
  playerPoints++;
  console.log("increment player points: " + playerPoints);
  displayPlayerPoints();
  if (playerPoints >= 2) {
    youWin();
  }
}
function incrementcomputerPoint() {
  computerPoints++;
  displaycomputerPoints();
  if (computerPoints >= 2) {
    computerWin();
  }
}

function displayPlayerPoints() {
  document.querySelector("#display-player-score").textContent = playerPoints;
}

function displaycomputerPoints() {
  document.querySelector("#display-computer-score").textContent =
    computerPoints;
}

function youWin() {
  document.querySelector(".rock-box").removeEventListener("click", playGame);
  document.querySelector(".paper-box").removeEventListener("click", playGame);
  document
    .querySelector(".scissors-box")
    .removeEventListener("click", playGame);
  winningBackgroundColor();
  document.querySelector("#sound-game-won").play();
  document.querySelector("#sound-game-won").currentTime = 0;
  document.querySelector("#player-result").style.backgroundColor = "#60b347";
  document.querySelector("#computer-result").style.backgroundColor = "#60b347";
}

function winningBackgroundColor() {
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector("#player-result").style.backgroundColor = "#60b347";
  document.querySelector("#computer-result").style.backgroundColor = "#60b347";
}

function computerWin() {
  document.querySelector(".rock-box").removeEventListener("click", playGame);
  document.querySelector(".paper-box").removeEventListener("click", playGame);
  document
    .querySelector(".scissors-box")
    .removeEventListener("click", playGame);
  loosingBackgroundColor();
  document.querySelector("#sound-game-lost").play();
  document.querySelector("#sound-game-lost").currentTime = 0;
  document.querySelector("#computer-result").style.backgroundColor = "#EF0107";
}

function loosingBackgroundColor() {
  document.body.style.backgroundColor = "#EF0107";
  document.querySelector("#player-result").style.backgroundColor = "#EF0107";
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
  playerChoice === document.querySelector(".rock-box") ||
    playerChoice === document.querySelector(".paper-box") ||
    playerChoice === document.querySelector(".scissors-box");

  return playerChoice;
}

function winnerOfRound(playerSelection, computerSelection) {
  const playerEmoji = displayPlayerEmojiResult(playerSelection);
  const computerEmoji = displayComputerEmojiResult(computerSelection);
  versus(playerEmoji, computerEmoji);
}

function versus(playerEmoji, computerEmoji) {
  const rock = "🪨";
  const paper = "📄";
  const scissors = "✂️";

  if (playerEmoji === computerEmoji) {
    document.querySelector("#vs").textContent = "ties with";
    tiedColor();
  } else if (
    (playerEmoji === rock && computerEmoji === scissors) ||
    (playerEmoji === paper && computerEmoji === rock) ||
    (playerEmoji === scissors && computerEmoji === paper)
  ) {
    document.querySelector("#vs").textContent = "beats";
    incrementPlayerPoint();
    playerColor();
  } else {
    document.querySelector("#vs").textContent = "is beating by";
    incrementcomputerPoint();
    computerColor();
  }
}

function tiedColor() {
  document.querySelector("#player-result").style.backgroundColor = "#034694";
  document.querySelector("#computer-result").style.backgroundColor = "#034694";
}

function playerColor() {
  document.querySelector("#player-result").style.backgroundColor = "#60b347";
  document.querySelector("#computer-result").style.backgroundColor = "#EF0107";
}

function computerColor() {
  document.querySelector("#computer-result").style.backgroundColor = "#60b347";
  document.querySelector("#player-result").style.backgroundColor = "#EF0107";
}
// Shows players weapon 🪨📄✂️
function displayPlayerEmojiResult(playerSelection) {
  const rock = document.querySelector(".rock-box");
  const paper = document.querySelector(".paper-box");
  const scissors = document.querySelector(".scissors-box");

  const playerWeapon = document.querySelector("#player-result");
  if (rock === playerSelection) {
    return (playerWeapon.textContent = "🪨");
  } else if (paper === playerSelection) {
    return (playerWeapon.textContent = "📄");
  } else if (scissors === playerSelection) {
    return (playerWeapon.textContent = "✂️");
  }
}

// Shows computer weapon 🪨📄✂️
function displayComputerEmojiResult(computerSelection) {
  const rock = document.querySelector(".rock-box");
  const paper = document.querySelector(".paper-box");
  const scissors = document.querySelector(".scissors-box");
  const computerWeapon = document.querySelector("#computer-result");

  if (rock === computerSelection) {
    return (computerWeapon.textContent = "🪨");
  } else if (paper === computerSelection) {
    return (computerWeapon.textContent = "📄");
  } else if (scissors === computerSelection) {
    return (computerWeapon.textContent = "✂️");
  }
}

function restartGame() {
  console.log("button");
  playerPoints = 0;
  computerPoints = 0;
  document.querySelector("#display-player-score").textContent = 0;
  document.querySelector("#display-computer-score").textContent = 0;

  document.querySelector(".rock-box").addEventListener("click", playGame);
  document.querySelector(".paper-box").addEventListener("click", playGame);
  document.querySelector(".scissors-box").addEventListener("click", playGame);

  document.querySelector("#player-result").style.backgroundColor = "";
  document.querySelector("#computer-result").style.backgroundColor = "";
  document.querySelector("body").style.backgroundColor = "";

  document.querySelector("h2").textContent = "GET READY";

  // document.querySelector("#player-result").textContent = "？";
  // document.querySelector("#computer-result").textContent = "？";
  document.querySelector("#vs").textContent = "";
}
