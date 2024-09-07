/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Wendy Rzechula
      Date: September 7, 2024

      Filename: project03-01.js
*/


// Variable declared to hold the collection of menu items
let menuItems = document.getElementsByClassName("menuItem");

// Event listener added to each menu item checkbox
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Function created to calculate the total cost of selected menu items
function calcTotal() {
  // orderTotal variable declared and set to an initial value of 0
  let orderTotal = 0;

  // For Loop that loops through all menu items
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += parseFloat(menuItems[i].value);
      }
    }

// innerHTML updated with id billTotal
document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// formatCurrency Function created to display a numeric value as $##.##
function formatCurrency(orderTotal) {
  return "$" + orderTotal.toFixed(2);
}

// SOURCE: Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors. Cengage Learning.
