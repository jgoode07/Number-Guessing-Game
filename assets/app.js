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