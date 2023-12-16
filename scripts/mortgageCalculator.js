window.onload = () => {
  let principalFieldEl = document.getElementById("principalField");
  let interestFieldEl = document.getElementById("interestField");
  let mortgageFieldEl = document.getElementById("mortgageField");
  let loanFieldEl = document.getElementById("loanField");
  let calcBtnEl = document.getElementById("calcBtn");

  // Assuming onChange handles changes in loanFieldEl
loanFieldEl.onchange = onChange;

function onChange() {
  // Calculate and update variables based on user input or changes
  let principal = parseFloat(principalFieldEl.value);
  let interestRate = parseFloat(interestFieldEl.value / 100) / 12;
  let numOfPayments = parseInt(loanFieldEl.value) * 12; // Assuming a fixed number of payments per year

  let monthlyPayment =Math.round(principal *
    (interestRate * Math.pow(1 + interestRate, numOfPayments)) /
    (Math.pow(1 + interestRate, numOfPayments) - 1));
  
  console.log(monthlyPayment);

  let totalPayed = monthlyPayment * numOfPayments;
  let totalInterest = (totalPayed - principal);
  
  // Perform actions or display results as needed
  document.getElementById("mortgageField").value = monthlyPayment;
  document.getElementById("TotalField").value = totalInterest;
  
}

// Event listener for the calculate button
calcBtnEl.addEventListener("click", onChange);
}
