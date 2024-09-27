"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Wendy Rzechula
      Date: 09/25/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// Declare the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

// Add onclick event handler to the startQuiz button
startQuiz.onclick = function() {
  // Quiz overlay
  overlay.className = "showquiz";

  // Repeat countdown every second
  timeID = setInterval(countdown, 1000);
};

// Countdown function
function countdown () {
  if(timeLeft===0) { // If time ran out
    clearInterval(timeID); // Cancels the time command

    let totalCorrect = checkAnswers();

    if(totalCorrect === correctAnswers.length) { // Provide feedback on number of correct answers
      alert("Congratulations! You got 100% correct!"); // Message if all answers are correct
      } else {
        alert(`You got ${correctAnswers.length - totalCorrect} incorrect answers out of
          ${correctAnswers.length}.`); // Message if some of the answers are correct

        // Resets timer
        timeLeft = quizTime;
        quizClock.value = timeLeft;

        // Hides the quiz overlay
        overlay.className = "hidequiz";
      }
    } else {
      timeLeft--; // Decreases time left by 1 second
      quizClock.value = timeLeft; // Updates the quiz clock display
      }
    }

    // Function to check the answers
    function checkAnswers() {
      let correctCount = 0;

      // Loop through each questions to check if the answer is correct
      for (let i = 0; i < questionList.length; i++) {
        if (questionList[i].value.trim() === correctAnswers[i]) {
          correctCount++;
          questionList[i].className = ""; // Removes any previous wrong answer styling
          } else {
            questionList[i].className = "wronganswer"; // Marks wrong answers
          }
        }

        return correctCount;
      }