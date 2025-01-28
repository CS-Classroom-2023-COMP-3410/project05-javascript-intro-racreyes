//Customizable Keyboard Trainer
class KeyboardTrainer {
  constructor() {
    this.difficultySelect = document.getElementById("difficulty");
    this.restartButton = document.getElementById("restart-button");
    this.textContainer = document.getElementById("text-container");
    this.inputField = document.getElementById("input-field");
    this.wpmDisplay = document.getElementById("wpm");
    this.accuracyDisplay = document.getElementById("accuracy");
    this.resultsContainer = document.getElementById("results-container");

    this.text = "";
    this.startTime = null;
    this.errors = 0;
    this.totalChars = 0;
    this.correctChars = 0;
    this.overallCorrectChars = 0;
    this.overallTotalChars = 0;

    this.wordList = [
      "apple", "banana", "cherry", "dragon", "elephant", "flower", "giraffe", "honey", "island", "jungle",
      "kite", "lemon", "mountain", "notebook", "ocean", "pencil", "quartz", "river", "sunlight", "tulip",
      "umbrella", "violet", "watermelon", "xylophone", "yellow", "zebra"
    ];

    this.init();
  }

  init() {
    this.generateText();
    this.inputField.addEventListener("input", (e) => this.handleInput(e));
    this.restartButton.addEventListener("click", () => this.restart());
    this.difficultySelect.addEventListener("change", () => this.restart());
  }

  generateText() {
    const difficulty = this.difficultySelect.value;
    const lengths = { easy: 5, medium: 10, hard: 20 };

    this.text = Array.from({ length: lengths[difficulty] }, () =>
      this.wordList[Math.floor(Math.random() * this.wordList.length)]
    ).join(" ");

    this.textContainer.textContent = this.text;
    this.resetStats();
  }

  resetStats() {
    this.startTime = null;
    this.errors = 0;
    this.totalChars = this.text.length;
    this.correctChars = 0;
    this.wpmDisplay.textContent = "WPM: 0";
    this.accuracyDisplay.textContent = "Accuracy: 0%";
    this.inputField.value = "";
    this.resultsContainer.innerHTML = "";
  }

  handleInput(event) {
    const input = event.target.value;

    if (!this.startTime) {
      this.startTime = new Date();
    }

    const currentText = this.text.slice(0, input.length);
    this.errors = 0;
    this.correctChars = 0;

    input.split("").forEach((char, index) => {
      if (char === currentText[index]) {
        this.correctChars++;
      } else {
        this.errors++;
      }
    });

    const elapsedTime = (new Date() - this.startTime) / 1000 / 60; // time in minutes
    const wordsTyped = input.split(" ").length;
    const wpm = Math.round(wordsTyped / elapsedTime) || 0;

    const currentAccuracy = Math.round((this.correctChars / input.length) * 100) || 0;

    this.wpmDisplay.textContent = `WPM: ${wpm}`;
    this.accuracyDisplay.textContent = `Accuracy: ${currentAccuracy}%`;

    this.highlightErrors(input);

    if (input.trim() === this.text.trim()) {
      this.overallCorrectChars += this.correctChars;
      this.overallTotalChars += this.text.length;
      this.finish();
    }
  }

  highlightErrors(input) {
    const highlightedText = this.text
      .split("")
      .map((char, index) => {
        if (index < input.length) {
          return char === input[index] ? `<span class='text-green-500'>${char}</span>` : `<span class='text-red-500'>${char}</span>`;
        } else {
          return char;
        }
      })
      .join("");

    this.textContainer.innerHTML = highlightedText;
  }

  finish() {
    this.inputField.disabled = true;
    const elapsedTime = (new Date() - this.startTime) / 1000; // time in seconds
    const wpm = Math.round((this.correctChars / 5) / (elapsedTime / 60)) || 0;
    const currentAccuracy = Math.round((this.correctChars / this.totalChars) * 100) || 0;
    const overallAccuracy = Math.round((this.overallCorrectChars / this.overallTotalChars) * 100) || 0;

    this.resultsContainer.innerHTML = `
      <div class="p-4 bg-gray-100 rounded shadow">
        <h2 class="text-lg font-bold text-gray-800">Results Summary</h2>
        <p>Total Time: ${(elapsedTime / 60).toFixed(2)} minutes</p>
        <p>Words Per Minute (WPM): ${wpm}</p>
        <p>Current Accuracy: ${currentAccuracy}%</p>
        <p>Overall Accuracy: ${overallAccuracy}%</p>
      </div>
    `;

    this.textContainer.innerHTML = "<span class='text-green-500'>Well done! You completed the text.</span>";
  }

  restart() {
    this.inputField.disabled = false;
    this.generateText();
  }
}

// Initialize the Keyboard Trainer
new KeyboardTrainer();
