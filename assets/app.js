"use strict";

//--------------------------------------------------------------------
//--- Game setup
//--------------------------------------------------------------------
let secretNumber = getRandomInt(1, 50);
let guessCount = 0;

//--------------------------------------------------------------------
//--- DOM elements
//--------------------------------------------------------------------
const guessInput = document.getElementById("guess");
const guessButton = document.getElementById("btn-guess");
const message = document.getElementById("message");
const currentGuessDisplay = document.getElementById("current-guess");
const countDisplay = document.getElementById("count");

//--------------------------------------------------------------------
//--- Functions
//--------------------------------------------------------------------
// Function to generate a random number between/including min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  // Input validation
  if (!userGuess || userGuess < 1 || userGuess > 50) {
    message.textContent = "Please enter a number between 1 and 50";
    // Clear input area if number isn't between 1-50
    guessInput.value = "";
    guessInput.focus();
    return;
  }

  // Update the guess counter
  currentGuessDisplay.textContent = userGuess;
  guessCount++;
  countDisplay.textContent = guessCount;

  // Compare guess to secret number and update the displayed message
  if (userGuess > secretNumber) {
    message.textContent = "My number is smaller. Try again!";
  } else if (userGuess < secretNumber) {
    message.textContent = "My number is larger. Try again!";
  } else {
    message.textContent = "Congratulations! You guessed the number!";
  }

  // Clear input area
  guessInput.value = "";
  guessInput.focus();
}

//--------------------------------------------------------------------
//---Event Listener
//--------------------------------------------------------------------
// Add event listener to the button
guessButton.addEventListener("click", checkGuess);
