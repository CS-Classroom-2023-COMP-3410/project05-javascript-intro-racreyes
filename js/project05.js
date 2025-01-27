//Customizable Canvas
class DrawingCanvas {
  constructor() {
    this.canvas = document.getElementById("drawing-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.brushSizeInput = document.getElementById("brush-size");
    this.brushColorInput = document.getElementById("brush-color");
    this.canvasBgColorInput = document.getElementById("canvas-bg-color");
    this.undoButton = document.getElementById("undo-btn");
    this.clearButton = document.getElementById("clear-btn");
    this.saveButton = document.getElementById("save-btn");

    this.drawing = false;
    this.brushSize = parseInt(this.brushSizeInput.value, 10);
    this.brushColor = this.brushColorInput.value;
    this.canvasBgColor = this.canvasBgColorInput.value;
    this.history = [];

    this.initializeCanvas();
    this.addEventListeners();
  }

  initializeCanvas() {
    this.ctx.fillStyle = this.canvasBgColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.saveHistory();
  }

  saveHistory() {
    this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    if (this.history.length > 50) {
      this.history.shift(); // Limit history to 50 steps
    }
  }

  startDrawing(event) {
    this.drawing = true;
    this.ctx.beginPath();
    this.ctx.lineWidth = this.brushSize;
    this.ctx.strokeStyle = this.brushColor;
    this.ctx.lineCap = "round";
    const { offsetX, offsetY } = event;
    this.ctx.moveTo(offsetX, offsetY);
  }

  draw(event) {
    if (!this.drawing) return;
    const { offsetX, offsetY } = event;
    this.ctx.lineTo(offsetX, offsetY);
    this.ctx.stroke();
  }

  stopDrawing() {
    if (this.drawing) {
      this.drawing = false;
      this.ctx.closePath();
      this.saveHistory();
    }
  }

  undo() {
    if (this.history.length > 1) {
      this.history.pop();
      const previousState = this.history[this.history.length - 1];
      this.ctx.putImageData(previousState, 0, 0);
    }
  }

  clearCanvas() {
    this.ctx.fillStyle = this.canvasBgColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.saveHistory();
  }

  saveCanvas() {
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = this.canvas.toDataURL("image/png");
    link.click();
  }

  addEventListeners() {
    this.canvas.addEventListener("mousedown", (e) => this.startDrawing(e));
    this.canvas.addEventListener("mousemove", (e) => this.draw(e));
    this.canvas.addEventListener("mouseup", () => this.stopDrawing());
    this.canvas.addEventListener("mouseleave", () => this.stopDrawing());

    this.brushSizeInput.addEventListener("input", (e) => {
      this.brushSize = parseInt(e.target.value, 10);
    });

    this.brushColorInput.addEventListener("input", (e) => {
      this.brushColor = e.target.value;
    });

    this.canvasBgColorInput.addEventListener("input", (e) => {
      this.canvasBgColor = e.target.value;
      this.clearCanvas();
    });

    this.undoButton.addEventListener("click", () => this.undo());
    this.clearButton.addEventListener("click", () => this.clearCanvas());
    this.saveButton.addEventListener("click", () => this.saveCanvas());
  }
}

// Initialize the Drawing Canvas
new DrawingCanvas();