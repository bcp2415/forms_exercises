window.addEventListener("load", init);

function init() {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", validateWholeForm);
}

function validateWholeForm() {
  validateBoosters();
}

function validateBoosters() {
  const boosters = document.getElementById("boosterCount");
  while (boosters.value < 1 || boosters.value > 10) {
    window.alert("Please enter a number from 1 to 10 for the Number of Rocket Boosters.")
    boosters.value = 1;
  };
}
