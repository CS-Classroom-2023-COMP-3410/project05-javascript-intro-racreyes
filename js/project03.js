//Memory Matching Game
class MemoryMatchingGame {
  constructor() {
    this.grid = document.getElementById("grid");
    this.movesElement = document.getElementById("moves");
    this.timeElement = document.getElementById("time");
    this.restartButton = document.getElementById("restart");

    this.cards = [];
    this.flippedCards = [];
    this.moves = 0;
    this.time = 0;
    this.timer = null;

    this.initializeGame();
    this.restartButton.addEventListener("click", () => this.initializeGame());
  }

  initializeGame() {
    this.grid.innerHTML = "";
    this.cards = this.createShuffledCards();
    this.flippedCards = [];
    this.moves = 0;
    this.time = 0;
    this.updateStats();

    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.time++;
      this.updateStats();
    }, 1000);

    this.cards.forEach(card => this.grid.appendChild(this.createCardElement(card)));
  }

  createShuffledCards() {
    const icons = ["🍎", "🍌", "🍇", "🍓", "🍉", "🍒", "🍑", "🥝"];
    const cardSet = icons.concat(icons); // Create pairs
    return cardSet
      .sort(() => Math.random() - 0.5) // Shuffle cards
      .map(icon => ({ icon, flipped: false, matched: false }));
  }

  createCardElement(card) {
    const cardElement = document.createElement("div");
    cardElement.className = "card bg-purple-300 text-black text-2xl flex items-center justify-center rounded shadow cursor-pointer h-20";

    cardElement.textContent = card.flipped || card.matched ? card.icon : "";

    cardElement.addEventListener("click", () => {
      if (!card.flipped && !card.matched && this.flippedCards.length < 2) {
        this.flipCard(card, cardElement);
      }
    });

    return cardElement;
  }

  flipCard(card, cardElement) {
    card.flipped = true;
    cardElement.textContent = card.icon;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.moves++;
      this.checkForMatch();
      this.updateStats();
    }
  }

  checkForMatch() {
    const [card1, card2] = this.flippedCards;
    if (card1.icon === card2.icon) {
      card1.matched = true;
      card2.matched = true;
    } else {
      setTimeout(() => {
        card1.flipped = false;
        card2.flipped = false;
        this.renderCards();
      }, 1000);
    }
    this.flippedCards = [];

    if (this.cards.every(card => card.matched)) {
      clearInterval(this.timer);
      alert(`You won in ${this.moves} moves and ${this.time} seconds!`);
    }
  }

  renderCards() {
    this.grid.innerHTML = "";
    this.cards.forEach(card => this.grid.appendChild(this.createCardElement(card)));
  }

  updateStats() {
    this.movesElement.textContent = `Moves: ${this.moves}`;
    this.timeElement.textContent = `Time: ${this.time}s`;
  }
}

// Initialize the game
new MemoryMatchingGame();