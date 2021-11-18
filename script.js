window.addEventListener("load", init);

function init() {
  const form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    const boosters = document.getElementById("boosterCount");
    if (boosters.value < 1 || boosters.value > 10) {
      window.alert(
        "Please enter a value for the number of Rocket Boosters from 1 to 10."
      );
      event.preventDefault();
    }
  });
}
