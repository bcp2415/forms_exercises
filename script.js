window.addEventListener("load", init);

function init() {
  const form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    console.log("1st validation running.");
    const boosters = document.getElementById("boosterCount");
    if (boosters.value < 1 || boosters.value > 10) {
      window.alert(
        "Please enter a value for the number of Rocket Boosters from 1 to 10."
      );
      event.preventDefault();
    }

    const nameOfTest = document.querySelector("input[name=testName]");
    const dateOfTest = document.querySelector("input[name=testDate]");
    // // const rocketType = document.querySelector("select[name=rocketType]");
    const windStrength = document.querySelector("input[name=windRating]");
    // // const productionServers = document.querySelector("input[name=productionServers]");
    console.log("ready for 2nd validation check.");
    console.log("Wind Rating:", windStrength.value);
    if (!nameOfTest.value || !dateOfTest.value) {
      console.log("2nd validation failed.");

      window.alert(
        "Please enter a value for each part of the form before submission."
      );
      event.preventDefault();
    }
  });
}
