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
<<<<<<< HEAD
  if (boosters.value < 1 || boosters.value > 10) {
    window.alert(
      "Please enter a value for the number of Rocket Boosters from 1 to 10."
    );
  }
}
