"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Wendy Rzechula
      Date: 10/5/2024

      Filename: project06-03.js
*/

// Declaring useShip variable
let useShip = document.getElementById("useShip");

// Event listener for useShip that triggers the copyShippingToBilling function when clicked
useShip.addEventListener("click", copyShippingToBilling);

// copyShippingToBilling function
function copyShippingToBilling() {
  // Check if useShip is checked
  if (useShip.checked) {
    // Get the values from shipping fields to billing fields
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;

    // Set the selectedIndex of the stateBill to match stateShip
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }
}

// Declaring the formElements, fieldCount and errorBox
let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

// Loop through form elements and add event listener for invalid events.
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// showValidationError function
function showValidationError(evt) {
  // Prevents browser default validation behavior
  evt.preventDefault();
  // Displays error message in errorBox
  errorBox.textContent = "Complete all highlighted fields";
}