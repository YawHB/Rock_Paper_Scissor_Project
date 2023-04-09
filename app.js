"use strict";

window.addEventListener("load", initApp);

let playerPoints = 0;
let computerPoints = 0;

//Makes the 3 elements and the play again button clickable clickable
function initApp() {
  document.querySelector(".rock-box").addEventListener("click", playGame);
  document.querySelector(".paper-box").addEventListener("click", playGame);
  document.querySelector(".scissors-box").addEventListener("click", playGame);
  document
    .querySelector("#btn-play-again")
    .addEventListener("click", restartGame);
}

//Store players click (as a DOM element)
function playGame() {
  document.querySelector("h2").textContent = " ";
  const playerSelection = this;
  //chooses the computers pick (as a DOM element) and stores it in a variable
  const computerSelection = computerPlaying();

  //Call winnerOfRound with two elements)
  winnerOfRound(playerSelection, computerSelection);
}

//Adds one point to player score
function incrementPlayerPoint() {
  playerPoints++;
  displayPlayerPoints();
  if (playerPoints >= 5) {
    youWin();
  }
}
//Adds one point to computer score
function incrementcomputerPoint() {
  computerPoints++;
  displaycomputerPoints();
  if (computerPoints >= 5) {
    computerWin();
  }
}

//Displayes player point on the screen
function displayPlayerPoints() {
  document.querySelector("#display-player-score").textContent = playerPoints;
}

//Displayes computer point on the screen
function displaycomputerPoints() {
  document.querySelector("#display-computer-score").textContent =
    computerPoints;
}

//When player wins:
function youWin() {
  //Removes the click event on the options
  document.querySelector(".rock-box").removeEventListener("click", playGame);
  document.querySelector(".paper-box").removeEventListener("click", playGame);
  document
    .querySelector(".scissors-box")
    .removeEventListener("click", playGame);
  //Calls winning Background Color
  winningBackgroundColor();
  //Calls victory music
  victoryMusic();
}

//Plays victory music
function victoryMusic() {
  document.querySelector("#sound-game-won").play();
  document.querySelector("#sound-game-won").currentTime = 0;
}

//Sets the background to green
function winningBackgroundColor() {
  document.querySelector("body").style.backgroundColor = "#60b347";
}
//When computer wins:
function computerWin() {
  //Removes the click event on the options
  document.querySelector(".rock-box").removeEventListener("click", playGame);
  document.querySelector(".paper-box").removeEventListener("click", playGame);
  document
    .querySelector(".scissors-box")
    .removeEventListener("click", playGame);
  //Calls loosing Background Color
  loosingBackgroundColor();
  //Calls  defeated music
  defeatedMusic();
}

//Sets the background to red
function loosingBackgroundColor() {
  document.body.style.backgroundColor = "#EF0107";
}

// plays loosng music
function defeatedMusic() {
  document.querySelector("#sound-game-lost").play();
  document.querySelector("#sound-game-lost").currentTime = 0;
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

//Takes two DOM elements as parameters
function winnerOfRound(playerSelection, computerSelection) {
  //Calls "display Player/Computer Emoji Result" which converts the DOM elements to emojies aka text
  const playerEmoji = displayPlayerEmojiResult(playerSelection);
  const computerEmoji = displayComputerEmojiResult(computerSelection);
  //THe DOM elements are now converted to strings and called in the "versus" function
  versus(playerEmoji, computerEmoji);
}

//dispalys the text ('ties with', 'beats' or 'is beaten by') depending on the outcome
function versus(playerEmoji, computerEmoji) {
  const rock = "🪨";
  const paper = "📄";
  const scissors = "✂️";

  if (playerEmoji === computerEmoji) {
    document.querySelector("#vs").textContent = "ties with";
    // tiedColor();
  } else if (
    (playerEmoji === rock && computerEmoji === scissors) ||
    (playerEmoji === paper && computerEmoji === rock) ||
    (playerEmoji === scissors && computerEmoji === paper)
  ) {
    document.querySelector("#vs").textContent = "beats";
    //If player won round, increase his point with one
    incrementPlayerPoint();
  } else {
    document.querySelector("#vs").textContent = "is beaten by";
    //If computer won round, increase its point with one
    incrementcomputerPoint();
  }
}

//Converts the player DOM element to a (emoji)string🪨✂️📄
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

//Converts the player DOM element to a (emoji)string 🪨✂️📄
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

//Restarts game when click on button
function restartGame() {
  //sets points to zero
  playerPoints = 0;
  computerPoints = 0;
  //Displays point set to zero
  document.querySelector("#display-player-score").textContent = 0;
  document.querySelector("#display-computer-score").textContent = 0;

  //Makes the elements clickable again
  document.querySelector(".rock-box").addEventListener("click", playGame);
  document.querySelector(".paper-box").addEventListener("click", playGame);
  document.querySelector(".scissors-box").addEventListener("click", playGame);

  //Resets the background color
  document.querySelector("body").style.backgroundColor = "";
  //Displays the text get ready in h2
  document.querySelector("h2").textContent = "GET READY";
  //removes text between the player- and computer's selected weapons
  document.querySelector("#vs").textContent = "";
}
