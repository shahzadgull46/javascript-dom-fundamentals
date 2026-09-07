let secretNumber = Math.floor(Math.random() * 100) + 1;

const form = document.querySelector("form");
const messageElement = document.querySelector("#message");
const previousGuessesElement = document.querySelector("#previous-guesses");
const attemptElement = document.querySelector("#attempts");
const newGameButton = document.querySelector("#new-game");

let previousGuesses = [];
let numberOfGuesses = 0;
let playGame = true;

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
    return false;
  } else if (guess < 1) {
    alert("Please enter number more than 1");
    return false;
  } else if (guess > 100) {
    alert("Enter number below hundred");
    return false;
  } else {
    return true;
  }
}

function checkGuess(guess) {
  if (guess === secretNumber) {
    displayMessage("You guessed it right");
    playGame = false;
  } else if (guess < secretNumber) {
    displayMessage("Too low value");
  } else {
    displayMessage("Too high value");
  }
}

function displayMessage(message) {
  messageElement.innerHTML = message;
}

function displayGuess(previousGuesses) {
  previousGuessesElement.innerHTML = previousGuesses;
}

function endGame() {
  displayMessage(`Game Over! The number was ${secretNumber}`);
  playGame = false;
}
function newGame() {
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  previousGuesses = [];
  numberOfGuesses = 0;
  playGame = true;
  previousGuessesElement.innerHTML = "";
  attemptElement.innerHTML = 10;
  messageElement.innerHTML = "";

  document.querySelector("#guess").value = "";
}
newGameButton.addEventListener("click", () => {
  newGame();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (playGame) {
    const guess = parseInt(document.querySelector("#guess").value);

    if (validateGuess(guess)) {
      previousGuesses.push(guess);
      displayGuess(previousGuesses);
      numberOfGuesses++;
      attemptElement.innerHTML = 10 - numberOfGuesses;
      checkGuess(guess);
      if (numberOfGuesses >= 10 && playGame) {
        endGame();
      }
    }
  }
});
