//Interactive Calculator
class Calculator {
  constructor() {
    this.displayElement = document.getElementById("display");
    this.currentInput = "";
    this.memory = 0;
    this.operation = null;
    this.result = 0;
    this.addEventListeners();
  }

  addEventListeners() {
    document.querySelectorAll(".btn-number").forEach((btn) => {
      btn.addEventListener("click", (e) => this.appendNumber(e.target.textContent));
    });

    document.querySelectorAll(".btn-operator").forEach((btn) => {
      btn.addEventListener("click", (e) => this.setOperation(e.target.textContent));
    });

    document.querySelector(".btn-equals").addEventListener("click", () => this.calculate());
    document.querySelector(".btn-clear").addEventListener("click", () => this.clear());
    document.querySelector(".btn-undo").addEventListener("click", () => this.undo());

    document.querySelector(".btn-function").addEventListener("click", (e) => {
      if (e.target.textContent === "√") this.squareRoot();
      if (e.target.textContent === "%") this.percentage();
    });

    document.querySelectorAll(".btn-memory").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (e.target.textContent === "M+") this.memoryAdd();
        if (e.target.textContent === "MR") this.memoryRecall();
      });
    });
  }

  appendNumber(number) {
    this.currentInput += number;
    this.updateDisplay(this.currentInput);
  }

  setOperation(operator) {
    if (this.currentInput === "") return;
    this.operation = operator;
    this.result = parseFloat(this.currentInput);
    this.currentInput = "";
  }

  calculate() {
    if (!this.operation || this.currentInput === "") return;

    const currentNumber = parseFloat(this.currentInput);

    switch (this.operation) {
      case "+":
        this.result += currentNumber;
        break;
      case "-":
        this.result -= currentNumber;
        break;
      case "*":
        this.result *= currentNumber;
        break;
      case "/":
        if (currentNumber === 0) {
          this.updateDisplay("Error");
          this.clear();
          return;
        }
        this.result /= currentNumber;
        break;
    }

    this.updateDisplay(this.result);
    this.currentInput = "";
    this.operation = null;
  }

  clear() {
    this.currentInput = "";
    this.result = 0;
    this.operation = null;
    this.updateDisplay("0");
  }

  undo() {
    this.currentInput = this.currentInput.slice(0, -1);
    this.updateDisplay(this.currentInput || "0");
  }

  squareRoot() {
    const number = parseFloat(this.currentInput);
    if (number < 0) {
      this.updateDisplay("Error");
      this.clear();
      return;
    }
    this.currentInput = Math.sqrt(number).toString();
    this.updateDisplay(this.currentInput);
  }

  percentage() {
    this.currentInput = (parseFloat(this.currentInput) / 100).toString();
    this.updateDisplay(this.currentInput);
  }

  memoryAdd() {
    this.memory += parseFloat(this.currentInput) || 0;
  }

  memoryRecall() {
    this.currentInput = this.memory.toString();
    this.updateDisplay(this.currentInput);
  }

  updateDisplay(value) {
    this.displayElement.textContent = value;
  }
}

// Initialize the calculator
new Calculator();