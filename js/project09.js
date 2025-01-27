//Sorting Algorithm Visualization Tool
class SortingVisualization {
  constructor() {
    this.arrayContainer = document.getElementById("array-container");
    this.algorithmSelector = document.getElementById("algorithm-selector");
    this.speedSlider = document.getElementById("speed-slider");
    this.resetButton = document.getElementById("reset-array");
    this.startButton = document.getElementById("start-sort");
    this.commentary = document.getElementById("commentary");

    this.array = [];
    this.animationSpeed = 500;

    this.resetButton.addEventListener("click", () => this.resetArray());
    this.startButton.addEventListener("click", () => this.startSorting());
    this.speedSlider.addEventListener("input", (e) => this.updateSpeed(e.target.value));

    this.resetArray();
  }

  resetArray() {
    this.array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
    this.renderArray();
    this.commentary.textContent = "Array has been reset. Select an algorithm and click 'Start Sorting'.";
  }

  renderArray() {
    this.arrayContainer.innerHTML = "";
    this.array.forEach((value) => {
      const bar = document.createElement("div");
      bar.style.height = `${value * 3}px`;
      bar.className = "flex-1 mx-1 bg-blue-400 rounded";
      this.arrayContainer.appendChild(bar);
    });
  }

  updateSpeed(speed) {
    this.animationSpeed = 1000 - speed;
  }

  async startSorting() {
    const algorithm = this.algorithmSelector.value;
    if (algorithm === "bubble") {
      await this.bubbleSort();
    } else if (algorithm === "insertion") {
      await this.insertionSort();
    }
  }

  async bubbleSort() {
    this.commentary.textContent = "Starting Bubble Sort...";
    const bars = this.arrayContainer.children;

    for (let i = 0; i < this.array.length - 1; i++) {
      for (let j = 0; j < this.array.length - i - 1; j++) {
        bars[j].style.backgroundColor = "yellow";
        bars[j + 1].style.backgroundColor = "yellow";

        if (this.array[j] > this.array[j + 1]) {
          this.commentary.textContent = `Swapping ${this.array[j]} and ${this.array[j + 1]}`;

          // Swap the bars visually and in the array
          [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]];
          this.renderArray();
          await this.sleep(this.animationSpeed);
        }

        bars[j].style.backgroundColor = "blue";
        bars[j + 1].style.backgroundColor = "blue";
      }
    }

    this.commentary.textContent = "Bubble Sort completed!";
  }

  async insertionSort() {
    this.commentary.textContent = "Starting Insertion Sort...";
    const bars = this.arrayContainer.children;

    for (let i = 1; i < this.array.length; i++) {
      let key = this.array[i];
      let j = i - 1;
      bars[i].style.backgroundColor = "yellow";

      while (j >= 0 && this.array[j] > key) {
        this.commentary.textContent = `Moving ${this.array[j]} to the right`;

        this.array[j + 1] = this.array[j];
        this.renderArray();
        await this.sleep(this.animationSpeed);
        j--;
      }

      this.array[j + 1] = key;
      this.renderArray();
      await this.sleep(this.animationSpeed);
      bars[i].style.backgroundColor = "blue";
    }

    this.commentary.textContent = "Insertion Sort completed!";
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// Initialize the sorting visualization
new SortingVisualization();
