let display = document.querySelector("#text");
button = document.querySelectorAll(".button");
let displayValue = "";

for (items of button) {
  items.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("button value is", buttonText);

    if (buttonText == "x") {
      buttonText = "*";
      displayValue += buttonText;
      display.value = displayValue;
    } else if (buttonText == "Reset") {
      displayValue = " ";
      display.value = displayValue;
    } else if (buttonText == "=") {
      display.value = eval(displayValue);
    } else if (buttonText == "DEL") {
      displayValue = displayValue.slice(0, -1);
      display.value = displayValue;
    } else {
      displayValue += buttonText;
      display.value = displayValue;
    }
  });
}

console.log("calculator");
