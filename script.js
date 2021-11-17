window.addEventListener("load", init);

function init() {
  console.log("init called.");
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", validateWholeForm);
}

function validateWholeForm() {
  console.log("validateWholeForm called.");
  validateBoosters();
}

function validateBoosters() {
  const boosters = document.getElementById("boosterCount");
  console.log(boosters.value);
}
