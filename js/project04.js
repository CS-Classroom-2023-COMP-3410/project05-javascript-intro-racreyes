//Dynamic Quiz App
class QuizApp {
  constructor() {
    this.quizContainer = document.getElementById("quiz-container");
    this.submitButton = document.getElementById("submit-btn");
    this.resultContainer = document.getElementById("result-container");
    this.scoreElement = document.getElementById("score");
    this.reviewSection = document.getElementById("review-section");
    this.restartButton = document.getElementById("restart-btn");

    this.questions = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2,
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
      },
      {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: 1,
      },
    ];

    this.userAnswers = [];
    this.score = 0;

    this.displayQuestions();
    this.addEventListeners();
  }

  displayQuestions() {
    this.quizContainer.innerHTML = "";
    this.questions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "mb-6";

      const questionText = document.createElement("p");
      questionText.textContent = `${index + 1}. ${q.question}`;
      questionText.className = "text-lg font-semibold mb-2";

      const optionsDiv = document.createElement("div");
      q.options.forEach((option, i) => {
        const optionLabel = document.createElement("label");
        optionLabel.className = "block mb-2 cursor-pointer";

        const optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = `question-${index}`;
        optionInput.value = i;
        optionInput.className = "mr-2";

        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        optionsDiv.appendChild(optionLabel);
      });

      questionDiv.appendChild(questionText);
      questionDiv.appendChild(optionsDiv);
      this.quizContainer.appendChild(questionDiv);
    });

    this.submitButton.classList.remove("hidden");
    this.resultContainer.classList.add("hidden");
  }

  calculateScore() {
    this.score = 0;
    this.userAnswers = [];

    this.questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name='question-${index}']:checked`);
      const userAnswer = selectedOption ? parseInt(selectedOption.value) : null;
      this.userAnswers.push(userAnswer);

      if (userAnswer === q.correctAnswer) {
        this.score++;
      }
    });
  }

  displayResults() {
    this.scoreElement.textContent = `You scored ${this.score} out of ${this.questions.length}`;
    this.reviewSection.innerHTML = "";

    this.questions.forEach((q, index) => {
      const reviewDiv = document.createElement("div");
      reviewDiv.className = "mb-4";

      const questionText = document.createElement("p");
      questionText.textContent = `${index + 1}. ${q.question}`;
      questionText.className = "text-lg font-semibold";

      const userAnswerText = document.createElement("p");
      userAnswerText.textContent = `Your Answer: ${q.options[this.userAnswers[index]] || "No Answer"}`;
      userAnswerText.className = this.userAnswers[index] === q.correctAnswer ? "text-green-500" : "text-red-500";

      const correctAnswerText = document.createElement("p");
      correctAnswerText.textContent = `Correct Answer: ${q.options[q.correctAnswer]}`;
      correctAnswerText.className = "text-blue-500";

      reviewDiv.appendChild(questionText);
      reviewDiv.appendChild(userAnswerText);
      reviewDiv.appendChild(correctAnswerText);
      this.reviewSection.appendChild(reviewDiv);
    });

    this.resultContainer.classList.remove("hidden");
    this.submitButton.classList.add("hidden");
  }

  addEventListeners() {
    this.submitButton.addEventListener("click", () => {
      this.calculateScore();
      this.displayResults();
    });

    this.restartButton.addEventListener("click", () => {
      this.displayQuestions();
    });
  }
}

// Initialize the Quiz App
new QuizApp();
