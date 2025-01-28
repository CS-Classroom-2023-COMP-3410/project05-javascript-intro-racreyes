//Sorting Algorithm Visualization Tool
document.addEventListener("DOMContentLoaded", () => {
  const arrayContainer = document.getElementById("array-container");
  const commentary = document.getElementById("commentary");
  const algorithmSelector = document.getElementById("algorithm-selector");
  const speedSlider = document.getElementById("speed-slider");
  const resetArrayButton = document.getElementById("reset-array");
  const startSortButton = document.getElementById("start-sort");

  let array = [];
  let animationSpeed = 500;

  const generateArray = () => {
    arrayContainer.innerHTML = "";
    array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
    array.forEach((value) => {
      const bar = document.createElement("div");
      bar.style.height = `${value}%`;
      bar.className = "bg-blue-500 w-4 rounded-t";
      bar.dataset.value = value;
      arrayContainer.appendChild(bar);
    });
    commentary.textContent = "New array generated. Select an algorithm and start sorting.";
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const updateBars = () => {
    const bars = arrayContainer.children;
    for (let i = 0; i < array.length; i++) {
      bars[i].style.height = `${array[i]}%`;
      bars[i].dataset.value = array[i];
    }
  };

  const bubbleSort = async () => {
    commentary.textContent = "Performing Bubble Sort...";
    const bars = arrayContainer.children;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        bars[j].classList.add("bg-red-500");
        bars[j + 1].classList.add("bg-red-500");

        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          updateBars();
          commentary.textContent = `Swapped values ${array[j + 1]} and ${array[j]} at indices ${j} and ${j + 1}.`;
        }

        await sleep(animationSpeed);
        bars[j].classList.remove("bg-red-500");
        bars[j + 1].classList.remove("bg-red-500");
      }
    }
    commentary.textContent = "Bubble Sort completed.";
  };

  const selectionSort = async () => {
    commentary.textContent = "Performing Selection Sort...";
    const bars = arrayContainer.children;
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      bars[minIndex].classList.add("bg-green-500");
      for (let j = i + 1; j < array.length; j++) {
        bars[j].classList.add("bg-red-500");
        if (array[j] < array[minIndex]) {
          bars[minIndex].classList.remove("bg-green-500");
          minIndex = j;
          bars[minIndex].classList.add("bg-green-500");
        }
        await sleep(animationSpeed);
        bars[j].classList.remove("bg-red-500");
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        updateBars();
        commentary.textContent = `Swapped values ${array[i]} and ${array[minIndex]} at indices ${i} and ${minIndex}.`;
      }
      bars[minIndex].classList.remove("bg-green-500");
    }
    commentary.textContent = "Selection Sort completed.";
  };

  const insertionSort = async () => {
    commentary.textContent = "Performing Insertion Sort...";
    const bars = arrayContainer.children;
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      bars[i].classList.add("bg-yellow-500");
      while (j >= 0 && array[j] > key) {
        bars[j].classList.add("bg-red-500");
        array[j + 1] = array[j];
        updateBars();
        commentary.textContent = `Moved value ${array[j]} to index ${j + 1}.`;
        await sleep(animationSpeed);
        bars[j].classList.remove("bg-red-500");
        j--;
      }
      array[j + 1] = key;
      updateBars();
      commentary.textContent = `Inserted value ${key} at index ${j + 1}.`;
      bars[i].classList.remove("bg-yellow-500");
    }
    commentary.textContent = "Insertion Sort completed.";
  };

  resetArrayButton.addEventListener("click", generateArray);

  speedSlider.addEventListener("input", () => {
    animationSpeed = 1000 - speedSlider.value;
  });

  startSortButton.addEventListener("click", () => {
    const algorithm = algorithmSelector.value;
    switch (algorithm) {
      case "bubble":
        bubbleSort();
        break;
      case "selection":
        selectionSort();
        break;
      case "insertion":
        insertionSort();
        break;
    }
  });

  generateArray();
});
