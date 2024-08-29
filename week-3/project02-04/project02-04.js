/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Wendy Rzechula
      Date: 08/29/2024

      Filename: project02-04.js
 */

// Constants for item prices and sales tax
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

// Function to calculate total order cost
function calcTotal() {

  // Initialize the cost variable
  let cost = 0;

  //Get the checked status of each item
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  // add the cost of Chicken if purchased
  cost += buyChicken ? CHICKEN_PRICE : 0;

  // add the cost of Halibut if purchased
  cost += buyHalibut ? HALIBUT_PRICE : 0;

  // add the cost of Burger if purchased
  cost += buyBurger ? BURGER_PRICE : 0;

  // add the cost of Salmon if purchased
  cost += buySalmon ? SALMON_PRICE : 0;

  // add the cost of Salad if purchased
  cost += buySalad ? SALAD_PRICE : 0;

  // Update the foodTotal span with formatted cost
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // Calculate the tax based on the total cost
  let tax = cost * SALES_TAX;

  // Update the foodTax span with formatted tax
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  //Calculate the total cost including tax
  let totalCost = cost + tax

  // Update the totalBill span with formatted total cost
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

  // Event handlers to run calcTotal() when each checkbox is clicked.
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chicken").onclick = calcTotal;
    document.getElementById("halibut").onclick = calcTotal;
    document.getElementById("burger").onclick = calcTotal;
    document.getElementById("salmon").onclick = calcTotal;
    document.getElementById("salad").onclick = calcTotal;
  });
