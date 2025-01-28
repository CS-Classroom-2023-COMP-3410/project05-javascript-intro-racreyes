//Interactive Calculator
document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  let currentInput = "0";
  let previousInput = null;
  let operator = null;
  let memory = 0;

  const updateDisplay = () => {
    display.textContent = currentInput;
  };

  const clearDisplay = () => {
    currentInput = "0";
    previousInput = null;
    operator = null;
    updateDisplay();
  };

  const handleNumber = (number) => {
    if (currentInput === "0") {
      currentInput = number;
    } else {
      currentInput += number;
    }
    updateDisplay();
  };

  const handleOperator = (newOperator) => {
    if (operator && previousInput !== null) {
      calculate();
    }
    operator = newOperator;
    previousInput = currentInput;
    currentInput = "0";
  };

  const calculate = () => {
    const current = parseFloat(currentInput);
    const previous = parseFloat(previousInput);

    if (isNaN(current) || isNaN(previous)) return;

    switch (operator) {
      case "+":
        currentInput = (previous + current).toString();
        break;
      case "-":
        currentInput = (previous - current).toString();
        break;
      case "*":
        currentInput = (previous * current).toString();
        break;
      case "/":
        currentInput = current === 0 ? "Error" : (previous / current).toString();
        break;
    }

    operator = null;
    previousInput = null;
    updateDisplay();
  };

  const handleFunction = (func) => {
    const current = parseFloat(currentInput);
    if (isNaN(current)) return;

    switch (func) {
      case "√":
        currentInput = current >= 0 ? Math.sqrt(current).toString() : "Error";
        break;
      case "%":
        currentInput = (current / 100).toString();
        break;
    }

    updateDisplay();
  };

  const handleMemory = (action) => {
    const current = parseFloat(currentInput);
    if (isNaN(current)) return;

    switch (action) {
      case "M+":
        memory += current;
        break;
      case "MR":
        currentInput = memory.toString();
        updateDisplay();
        break;
    }
  };

  document.querySelectorAll(".btn-number").forEach((btn) => {
    btn.addEventListener("click", () => handleNumber(btn.textContent));
  });

  document.querySelectorAll(".btn-operator").forEach((btn) => {
    btn.addEventListener("click", () => handleOperator(btn.textContent));
  });

  document.querySelector(".btn-equals").addEventListener("click", calculate);
  document.querySelector(".btn-clear").addEventListener("click", clearDisplay);
  document.querySelector(".btn-undo").addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1) || "0";
    updateDisplay();
  });

  document.querySelectorAll(".btn-function").forEach((btn) => {
    btn.addEventListener("click", () => handleFunction(btn.textContent));
  });

  document.querySelectorAll(".btn-memory").forEach((btn) => {
    btn.addEventListener("click", () => handleMemory(btn.textContent));
  });

  updateDisplay();
});
