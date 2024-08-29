/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Wendy Rzechula
      Date: 08/21/2024

      Filename: project02-02.js
 */

function verifyForm() {
    // Declare variables to store input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Check if all fields are filled out
    if(name && email && phone) {
        window/alert("Thank You!");
    }else{
        window.alert("Please fill in all fields");
    }
}

// Event listener to the submit button
document.getElementById("submit").addEventListener("click", verifyForm);