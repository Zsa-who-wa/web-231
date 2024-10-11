"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Wendy Rzechula
      Date: 10/09/2024

      Filename: project07-01.js
*/

// Access the form element
let signupForm = document.getElementById("signup");

// Add event listener for form submission
signupForm.addEventListener("submit", function(e) {

  // Prevent the default form submission
  e.preventDefault();

  // Get password entered by user
  let pwd = document.getElementById("pwd").value;

  // Get the feedback element to show error messages
  let feedback = document.getElementById("feedback");

  // Define regular expressions for the password validation
  let regex1 = /[A-Z]/;            // At least one uppercase letter
  let regex2 = /\d/;               // At least one digit
  let regex3 = /[!@$#%]/;          // At least one special symbol

  // Validation password using if-else statement
  // If the password is less than 8 characters
  if (pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters.";
  }
  // If there are no uppercase letters
  else if (!regex1.test(pwd)) {
    feedback.textContent = "Your password must include an uppercase letter.";
  }
  // If there are no digits
  else if (!regex2.test(pwd)) {
    feedback.textContent = "Your password must include a number.";
  }
  // If there are no special symbols/characters
  else if (!regex3.test(pwd)) {
    feedback.textContent = "Your password must include one of the following: !, $, #, %.";
  }
  // If everything passes validation, submit form
  else {
    feedback.textContent = "";     // Clear any previous feedback
    signupForm.submit();             // Submit form
  }
});