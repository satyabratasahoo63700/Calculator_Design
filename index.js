let valueDisplay = "";

function appendValue(value) {
  valueDisplay += value;
  document.getElementById("display").value = valueDisplay;
}

function clearDisplay() {
  valueDisplay = "";
  document.getElementById("display").value = valueDisplay;
}

function calculate() {
  try {
    valueDisplay = eval(valueDisplay);
    document.getElementById("display").value = valueDisplay;
  } catch (error) {
    document.getElementById("display").value = "Error";
    valueDisplay = "";
  }
}
