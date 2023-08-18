let dayEl = document.getElementById("day");
let monthEl = document.getElementById("month");
let yearEl = document.getElementById("year");
let submitBtnEl = document.getElementById("submit-btn");

//get current time
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; // Note: Months are 0-based
let currentDay = currentDate.getDate();

// Calculate the age
function calculateAge(day, month, year) {
  let years = currentYear - year;
  let months = currentMonth - month;
  let days = currentDay - day;

  if (days < 0) {
    months -= 1;
    days += new Date(currentYear, currentMonth - 1, 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  document.getElementById("days-output").textContent = days;
  document.getElementById("months-output").textContent = months;
  document.getElementById("years-output").textContent = years;
}

//Events
submitBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  calculateAge(dayEl.value, monthEl.value, yearEl.value);
});
