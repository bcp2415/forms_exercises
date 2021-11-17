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
}
