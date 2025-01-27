//Interactive Story Game
class StoryGame {
  constructor() {
    this.storyContainer = document.getElementById("story-container");
    this.choicesContainer = document.getElementById("choices-container");
    this.progressContainer = document.getElementById("progress-container");
    this.progressList = document.getElementById("progress-list");
    this.resetButton = document.getElementById("reset-button");

    this.story = {
      start: {
        text: "You wake up in a mysterious forest. Two paths lie ahead of you.",
        choices: [
          { text: "Take the left path", next: "left_path" },
          { text: "Take the right path", next: "right_path" }
        ]
      },
      left_path: {
        text: "You encounter a friendly elf who offers you guidance.",
        choices: [
          { text: "Accept the elf's guidance", next: "elf_guidance" },
          { text: "Politely decline and proceed alone", next: "proceed_alone" }
        ]
      },
      right_path: {
        text: "You stumble into a dark cave. You hear a growl.",
        choices: [
          { text: "Investigate the growl", next: "investigate_growl" },
          { text: "Quietly leave the cave", next: "leave_cave" }
        ]
      },
      elf_guidance: {
        text: "The elf leads you to a hidden treasure. You win!",
        choices: []
      },
      proceed_alone: {
        text: "You wander aimlessly and eventually find your way out of the forest.",
        choices: []
      },
      investigate_growl: {
        text: "A bear attacks you. Game over!",
        choices: []
      },
      leave_cave: {
        text: "You safely leave the cave and continue your journey.",
        choices: []
      }
    };

    this.currentScene = localStorage.getItem("currentScene") || "start";
    this.progress = JSON.parse(localStorage.getItem("progress")) || [];
    this.renderScene();

    this.resetButton.addEventListener("click", () => this.resetGame());
  }

  renderScene() {
    const scene = this.story[this.currentScene];

    if (!scene) {
      this.storyContainer.textContent = "Error: Scene not found.";
      this.choicesContainer.innerHTML = "";
      return;
    }

    // Display story text
    this.storyContainer.textContent = scene.text;

    // Update progress
    if (!this.progress.includes(this.currentScene)) {
      this.progress.push(this.currentScene);
      localStorage.setItem("progress", JSON.stringify(this.progress));
    }
    this.renderProgress();

    // Display choices
    this.choicesContainer.innerHTML = "";
    scene.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.className = "px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow transition";
      button.addEventListener("click", () => this.chooseOption(choice.next));
      this.choicesContainer.appendChild(button);
    });

    // Show reset button if no choices remain
    this.resetButton.classList.toggle("hidden", scene.choices.length > 0);

    // Save current scene
    localStorage.setItem("currentScene", this.currentScene);
  }

  renderProgress() {
    this.progressList.innerHTML = "";
    this.progress.forEach((sceneId) => {
      const scene = this.story[sceneId];
      if (scene) {
        const listItem = document.createElement("li");
        listItem.textContent = scene.text;
        this.progressList.appendChild(listItem);
      }
    });
  }

  chooseOption(nextScene) {
    this.currentScene = nextScene;
    this.renderScene();
  }

  resetGame() {
    this.currentScene = "start";
    this.progress = [];
    localStorage.removeItem("currentScene");
    localStorage.removeItem("progress");
    this.renderScene();
  }
}

// Initialize the game
new StoryGame();
