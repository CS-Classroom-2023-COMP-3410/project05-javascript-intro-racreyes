//Interactive Periodic Table
const elements = [
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", group: "Nonmetal", period: 1 },
  { atomicNumber: 2, symbol: "He", name: "Helium", group: "Noble Gas", period: 1 },
  { atomicNumber: 3, symbol: "Li", name: "Lithium", group: "Alkali Metal", period: 2 },
  { atomicNumber: 4, symbol: "Be", name: "Beryllium", group: "Alkaline Earth Metal", period: 2 },
  { atomicNumber: 5, symbol: "B", name: "Boron", group: "Metalloid", period: 2 },
  { atomicNumber: 6, symbol: "C", name: "Carbon", group: "Nonmetal", period: 2 },
  { atomicNumber: 7, symbol: "N", name: "Nitrogen", group: "Nonmetal", period: 2 },
  { atomicNumber: 8, symbol: "O", name: "Oxygen", group: "Nonmetal", period: 2 },
  { atomicNumber: 9, symbol: "F", name: "Fluorine", group: "Halogen", period: 2 },
  { atomicNumber: 10, symbol: "Ne", name: "Neon", group: "Noble Gas", period: 2 },
  { atomicNumber: 11, symbol: "Na", name: "Sodium", group: "Alkali Metal", period: 3 },
  { atomicNumber: 12, symbol: "Mg", name: "Magnesium", group: "Alkaline Earth Metal", period: 3 },
  { atomicNumber: 13, symbol: "Al", name: "Aluminium", group: "Post-transition Metal", period: 3 },
  { atomicNumber: 14, symbol: "Si", name: "Silicon", group: "Metalloid", period: 3 },
  { atomicNumber: 15, symbol: "P", name: "Phosphorus", group: "Nonmetal", period: 3 },
  { atomicNumber: 16, symbol: "S", name: "Sulfur", group: "Nonmetal", period: 3 },
  { atomicNumber: 17, symbol: "Cl", name: "Chlorine", group: "Halogen", period: 3 },
  { atomicNumber: 18, symbol: "Ar", name: "Argon", group: "Noble Gas", period: 3 },
  { atomicNumber: 19, symbol: "K", name: "Potassium", group: "Alkali Metal", period: 4 },
  { atomicNumber: 20, symbol: "Ca", name: "Calcium", group: "Alkaline Earth Metal", period: 4 },
  { atomicNumber: 21, symbol: "Sc", name: "Scandium", group: "Transition Metal", period: 4 },
  { atomicNumber: 22, symbol: "Ti", name: "Titanium", group: "Transition Metal", period: 4 },
  { atomicNumber: 23, symbol: "V", name: "Vanadium", group: "Transition Metal", period: 4 },
  { atomicNumber: 24, symbol: "Cr", name: "Chromium", group: "Transition Metal", period: 4 },
  { atomicNumber: 25, symbol: "Mn", name: "Manganese", group: "Transition Metal", period: 4 },
  { atomicNumber: 26, symbol: "Fe", name: "Iron", group: "Transition Metal", period: 4 },
  { atomicNumber: 27, symbol: "Co", name: "Cobalt", group: "Transition Metal", period: 4 },
  { atomicNumber: 28, symbol: "Ni", name: "Nickel", group: "Transition Metal", period: 4 },
  { atomicNumber: 29, symbol: "Cu", name: "Copper", group: "Transition Metal", period: 4 },
  { atomicNumber: 30, symbol: "Zn", name: "Zinc", group: "Transition Metal", period: 4 },
  { atomicNumber: 31, symbol: "Ga", name: "Gallium", group: "Post-transition Metal", period: 4 },
  { atomicNumber: 32, symbol: "Ge", name: "Germanium", group: "Metalloid", period: 4 },
  { atomicNumber: 33, symbol: "As", name: "Arsenic", group: "Metalloid", period: 4 },
  { atomicNumber: 34, symbol: "Se", name: "Selenium", group: "Nonmetal", period: 4 },
  { atomicNumber: 35, symbol: "Br", name: "Bromine", group: "Halogen", period: 4 },
  { atomicNumber: 36, symbol: "Kr", name: "Krypton", group: "Noble Gas", period: 4 },
  // Continue adding elements for the full periodic table...
];

class PeriodicTable {
  constructor() {
    this.tableGrid = document.getElementById("table-grid");
    this.searchBar = document.getElementById("search-bar");
    this.elementDetails = document.getElementById("element-details");
    this.elementInfo = document.getElementById("element-info");

    this.renderTable();
    this.addEventListeners();
  }

  renderTable() {
    this.tableGrid.innerHTML = "";

    for (let i = 0; i < 7; i++) {
      const emptyRow = document.createElement("div");
      emptyRow.style.gridColumn = "span 18";
      emptyRow.style.visibility = "hidden";
      this.tableGrid.appendChild(emptyRow);
    }

    elements.forEach((element) => {
      const elementDiv = document.createElement("div");
      elementDiv.className = "p-4 bg-gray-200 text-black rounded-lg shadow text-center cursor-pointer";
      elementDiv.style.gridColumnStart = element.columnStart;
      elementDiv.style.gridColumnEnd = `span ${element.columnSpan}`;
      elementDiv.dataset.atomicNumber = element.atomicNumber;
      elementDiv.dataset.group = element.group;

      elementDiv.innerHTML = `
        <div class="font-bold">${element.symbol}</div>
        <div class="text-sm">${element.atomicNumber}</div>
      `;

      elementDiv.addEventListener("click", () => this.showElementDetails(element));
      this.tableGrid.appendChild(elementDiv);
    });
  }

  showElementDetails(element) {
    this.elementInfo.innerHTML = `
      <p><strong>Atomic Number:</strong> ${element.atomicNumber}</p>
      <p><strong>Symbol:</strong> ${element.symbol}</p>
      <p><strong>Name:</strong> ${element.name}</p>
      <p><strong>Group:</strong> ${element.group}</p>
      <p><strong>Period:</strong> ${element.period}</p>
    `;

    this.highlightGroup(element.group);
    this.elementDetails.classList.remove("hidden");
  }

  highlightGroup(group) {
    document.querySelectorAll("[data-group]").forEach((elementDiv) => {
      if (elementDiv.dataset.group === group) {
        elementDiv.classList.add("bg-yellow-300");
      } else {
        elementDiv.classList.remove("bg-yellow-300");
      }
    });
  }

  addEventListeners() {
    this.searchBar.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();

      document.querySelectorAll("[data-atomic-number]").forEach((elementDiv) => {
        const atomicNumber = elementDiv.dataset.atomicNumber;
        const element = elements.find((el) => el.atomicNumber.toString() === atomicNumber);

        if (
          element.name.toLowerCase().includes(query) ||
          element.symbol.toLowerCase().includes(query) ||
          atomicNumber.includes(query)
        ) {
          elementDiv.classList.remove("hidden");
        } else {
          elementDiv.classList.add("hidden");
        }
      });
    });
  }
}

// Initialize the Periodic Table
new PeriodicTable();