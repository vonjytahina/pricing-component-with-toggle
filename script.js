document.addEventListener("DOMContentLoaded", function () {
  // Get the checkbox and all sets of price elements
  const toggleCheckbox = document.getElementById("toggleCheckbox");
  const annualPrices = document.querySelectorAll(".annual-price");
  const monthPrices = document.querySelectorAll(".month-price");

  // Add an event listener to the checkbox for the "change" event
  toggleCheckbox.addEventListener("change", function () {
    // Toggle the visibility of each set of prices based on the checkbox state
    for (let i = 0; i < annualPrices.length; i++) {
      if (toggleCheckbox.checked) {
        // If the checkbox is checked, show the monthly price and hide the annual price
        annualPrices[i].style.display = "none";
        monthPrices[i].style.display = "block";
      } else {
        // If the checkbox is unchecked, show the annual price and hide the monthly price
        annualPrices[i].style.display = "block";
        monthPrices[i].style.display = "none";
      }
    }
  });
});
