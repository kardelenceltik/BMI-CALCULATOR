function CalculatorBMI() {
  let height = document.getElementById("height").value;

  let weight = document.getElementById("weight").value;

  let result = weight / Math.pow(height, 2);

  document.getElementById("result").innerText = result.toFixed(2);

  if (result <= 18.5) {
    // Use state decision pipeline
    document.getElementById("result-statu").innerText = "Weak";

    document.getElementById("result-statu").style.color = "#ffb142";

    alertify.notify("You Should Gain Weight !");
  } else if (result > 18.5 && result <= 24.9) {
    document.getElementById("result-statu").innerText = "Normal Weight";

    document.getElementById("result-statu").style.color = "#ff793f";

    alertify.notify("You are at Ideal Weight !");
  } else if (result >= 25 && result <= 29.9) {
    document.getElementById("result-statu").innerText = " Overweight";

    document.getElementById("result-statu").style.color = "#218c74";

    alertify.notify("You Are Above Your Ideal Weightiz !");
  } else if (result >= 30 && result <= 39.9) {
    document.getElementById("result-statu").innerText = "Obese";

    document.getElementById("result-statu").style.color = "#227093";

    alertify.notify("You Should Lose Weight !");
  } else if (result >= 40) {
    document.getElementById("result-statu").innerText = "Severely Obese";

    document.getElementById("result-statu").style.color = "#716fd3e3";

    alertify.notify("You Need to Lose Weight Urgently !");
  }
}

function Reset() {
  // Clear the page values

  document.getElementById("weight").value = 0;

  document.getElementById("height").value = 0;

  document.getElementById("result").innerText = "";

  document.getElementById("result-satatu").innerText = "";
}
