const elements = [
    { number: 1, symbol: 'H', name: 'Hydrogen', group: 'Reactive nonmetals' },
    { number: 2, symbol: 'He', name: 'Helium', group: 'Noble gases' },
    { number: 3, symbol: 'Li', name: 'Lithium', group: 'Alkali metals' },
    { number: 4, symbol: 'Be', name: 'Beryllium', group: 'Alkaline earth metals' },
    { number: 5, symbol: 'B', name: 'Boron', group: 'Metalloids' },
    { number: 6, symbol: 'C', name: 'Carbon', group: 'Reactive nonmetals' },
    { number: 7, symbol: 'N', name: 'Nitrogen', group: 'Reactive nonmetals' },
    { number: 8, symbol: 'O', name: 'Oxygen', group: 'Reactive nonmetals' },
    { number: 9, symbol: 'F', name: 'Fluorine', group: 'Reactive nonmetals' },
    { number: 10, symbol: 'Ne', name: 'Neon', group: 'Noble gases' },
    { number: 11, symbol: 'Na', name: 'Sodium', group: 'Alkali metals' },
    { number: 12, symbol: 'Mg', name: 'Magnesium', group: 'Alkaline earth metals' },
    { number: 13, symbol: 'Al', name: 'Aluminium', group: 'Post-transition metals' },
    { number: 14, symbol: 'Si', name: 'Silicon', group: 'Metalloids' },
    { number: 15, symbol: 'P', name: 'Phosphorus', group: 'Reactive nonmetals' },
    { number: 16, symbol: 'S', name: 'Sulfur', group: 'Reactive nonmetals' },
    { number: 17, symbol: 'Cl', name: 'Chlorine', group: 'Reactive nonmetals' },
    { number: 18, symbol: 'Ar', name: 'Argon', group: 'Noble gases' },
    { number: 19, symbol: 'K', name: 'Potassium', group: 'Alkali metals' },
    { number: 20, symbol: 'Ca', name: 'Calcium', group: 'Alkaline earth metals' },
    { number: 21, symbol: 'Sc', name: 'Scandium', group: 'Transition metals' },
    { number: 22, symbol: 'Ti', name: 'Titanium', group: 'Transition metals' },
    { number: 23, symbol: 'V', name: 'Vanadium', group: 'Transition metals' },
    { number: 24, symbol: 'Cr', name: 'Chromium', group: 'Transition metals' },
    { number: 25, symbol: 'Mn', name: 'Manganese', group: 'Transition metals' },
    { number: 26, symbol: 'Fe', name: 'Iron', group: 'Transition metals' },
    { number: 27, symbol: 'Co', name: 'Cobalt', group: 'Transition metals' },
    { number: 28, symbol: 'Ni', name: 'Nickel', group: 'Transition metals' },
    { number: 29, symbol: 'Cu', name: 'Copper', group: 'Transition metals' },
    { number: 30, symbol: 'Zn', name: 'Zinc', group: 'Transition metals' },
    { number: 31, symbol: 'Ga', name: 'Gallium', group: 'Post-transition metals' },
    { number: 32, symbol: 'Ge', name: 'Germanium', group: 'Metalloids' },
    { number: 33, symbol: 'As', name: 'Arsenic', group: 'Metalloids' },
    { number: 34, symbol: 'Se', name: 'Selenium', group: 'Reactive nonmetals' },
    { number: 35, symbol: 'Br', name: 'Bromine', group: 'Reactive nonmetals' },
    { number: 36, symbol: 'Kr', name: 'Krypton', group: 'Noble gases' },
    { number: 37, symbol: 'Rb', name: 'Rubidium', group: 'Alkali metals' },
    { number: 38, symbol: 'Sr', name: 'Strontium', group: 'Alkaline earth metals' },
    { number: 39, symbol: 'Y', name: 'Yttrium', group: 'Transition metals' },
    { number: 40, symbol: 'Zr', name: 'Zirconium', group: 'Transition metals' },
    { number: 41, symbol: 'Nb', name: 'Niobium', group: 'Transition metals' },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', group: 'Transition metals' },
    { number: 43, symbol: 'Tc', name: 'Technetium', group: 'Transition metals' },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', group: 'Transition metals' },
    { number: 45, symbol: 'Rh', name: 'Rhodium', group: 'Transition metals' },
    { number: 46, symbol: 'Pd', name: 'Palladium', group: 'Transition metals' },
    { number: 47, symbol: 'Ag', name: 'Silver', group: 'Transition metals' },
    { number: 48, symbol: 'Cd', name: 'Cadmium', group: 'Transition metals' },
    { number: 49, symbol: 'In', name: 'Indium', group: 'Post-transition metals' },
    { number: 50, symbol: 'Sn', name: 'Tin', group: 'Post-transition metals' },
    { number: 51, symbol: 'Sb', name: 'Antimony', group: 'Metalloids' },
    { number: 52, symbol: 'Te', name: 'Tellurium', group: 'Metalloids' },
    { number: 53, symbol: 'I', name: 'Iodine', group: 'Reactive nonmetals' },
    { number: 54, symbol: 'Xe', name: 'Xenon', group: 'Noble gases' },
    { number: 55, symbol: 'Cs', name: 'Caesium', group: 'Alkali metals' },
    { number: 56, symbol: 'Ba', name: 'Barium', group: 'Alkaline earth metals' },
    { number: 57, symbol: 'La', name: 'Lanthanum', group: 'Lanthanides' },
    { number: 58, symbol: 'Ce', name: 'Cerium', group: 'Lanthanides' },
    { number: 59, symbol: 'Pr', name: 'Praseodymium', group: 'Lanthanides' },
    { number: 60, symbol: 'Nd', name: 'Neodymium', group: 'Lanthanides' },
    { number: 61, symbol: 'Pm', name: 'Promethium', group: 'Lanthanides' },
    { number: 62, symbol: 'Sm', name: 'Samarium', group: 'Lanthanides' },
    { number: 63, symbol: 'Eu', name: 'Europium', group: 'Lanthanides' },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', group: 'Lanthanides' },
    { number: 65, symbol: 'Tb', name: 'Terbium', group: 'Lanthanides' },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', group: 'Lanthanides' },
    { number: 67, symbol: 'Ho', name: 'Holmium', group: 'Lanthanides' },
    { number: 68, symbol: 'Er', name: 'Erbium', group: 'Lanthanides' },
    { number: 69, symbol: 'Tm', name: 'Thulium', group: 'Lanthanides' },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', group: 'Lanthanides' },
    { number: 71, symbol: 'Lu', name: 'Lutetium', group: 'Lanthanides' },
    { number: 72, symbol: 'Hf', name: 'Hafnium', group: 'Transition metals' },
    { number: 73, symbol: 'Ta', name: 'Tantalum', group: 'Transition metals' },
    { number: 74, symbol: 'W', name: 'Tungsten', group: 'Transition metals' },
    { number: 75, symbol: 'Re', name: 'Rhenium', group: 'Transition metals' },
    { number: 76, symbol: 'Os', name: 'Osmium', group: 'Transition metals' },
    { number: 77, symbol: 'Ir', name: 'Iridium', group: 'Transition metals' },
    { number: 78, symbol: 'Pt', name: 'Platinum', group: 'Transition metals' },
    { number: 79, symbol: 'Au', name: 'Gold', group: 'Transition metals' },
    { number: 80, symbol: 'Hg', name: 'Mercury', group: 'Transition metals' },
    { number: 81, symbol: 'Tl', name: 'Thallium', group: 'Post-transition metals' },
    { number: 82, symbol: 'Pb', name: 'Lead', group: 'Post-transition metals' },
    { number: 83, symbol: 'Bi', name: 'Bismuth', group: 'Post-transition metals' },
    { number: 84, symbol: 'Po', name: 'Polonium', group: 'Metalloids' },
    { number: 85, symbol: 'At', name: 'Astatine', group: 'Metalloids' },
    { number: 86, symbol: 'Rn', name: 'Radon', group: 'Noble gases' },
    { number: 87, symbol: 'Fr', name: 'Francium', group: 'Alkali metals' },
    { number: 88, symbol: 'Ra', name: 'Radium', group: 'Alkaline earth metals' },
    { number: 89, symbol: 'Ac', name: 'Actinium', group: 'Actinides' },
    { number: 90, symbol: 'Th', name: 'Thorium', group: 'Actinides' },
    { number: 91, symbol: 'Pa', name: 'Protactinium', group: 'Actinides' },
    { number: 92, symbol: 'U', name: 'Uranium', group: 'Actinides' },
    { number: 93, symbol: 'Np', name: 'Neptunium', group: 'Actinides' },
    { number: 94, symbol: 'Pu', name: 'Plutonium', group: 'Actinides' },
    { number: 95, symbol: 'Am', name: 'Americium', group: 'Actinides' },
    { number: 96, symbol: 'Cm', name: 'Curium', group: 'Actinides' },
    { number: 97, symbol: 'Bk', name: 'Berkelium', group: 'Actinides' },
    { number: 98, symbol: 'Cf', name: 'Californium', group: 'Actinides' },
    { number: 99, symbol: 'Es', name: 'Einsteinium', group: 'Actinides' },
    { number: 100, symbol: 'Fm', name: 'Fermium', group: 'Actinides' },
    { number: 101, symbol: 'Md', name: 'Mendelevium', group: 'Actinides' },
    { number: 102, symbol: 'No', name: 'Nobelium', group: 'Actinides' },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', group: 'Actinides' },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', group: 'Transition metals' },
    { number: 105, symbol: 'Db', name: 'Dubnium', group: 'Transition metals' },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', group: 'Transition metals' },
    { number: 107, symbol: 'Bh', name: 'Bohrium', group: 'Transition metals' },
    { number: 108, symbol: 'Hs', name: 'Hassium', group: 'Transition metals' },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', group: 'Unknown properties' },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', group: 'Unknown properties' },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', group: 'Unknown properties' },
    { number: 112, symbol: 'Cn', name: 'Copernicium', group: 'Transition metals' },
    { number: 113, symbol: 'Nh', name: 'Nihonium', group: 'Post-transition metals' },
    { number: 114, symbol: 'Fl', name: 'Flerovium', group: 'Post-transition metals' },
    { number: 115, symbol: 'Mc', name: 'Moscovium', group: 'Post-transition metals' },
    { number: 116, symbol: 'Lv', name: 'Livermorium', group: 'Post-transition metals' },
    { number: 117, symbol: 'Ts', name: 'Tennessine', group: 'Unknown properties' },
    { number: 118, symbol: 'Og', name: 'Oganesson', group: 'Unknown properties' }
];
 
window.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('table-grid');
    const details = document.getElementById('element-details');
    const searchInput = document.getElementById('search-bar');

    function renderTable() {
        elements.forEach(element => {
            const elementDiv = document.createElement('div');
            elementDiv.className = 'p-2 m-1 text-center border rounded hover:bg-blue-100 cursor-pointer';
            elementDiv.dataset.symbol = element.symbol;
            elementDiv.dataset.group = element.group;
            elementDiv.innerHTML = `<div>${element.number}</div><div>${element.symbol}</div><div>${element.name}</div>`;

            elementDiv.addEventListener('click', () => {
                highlightElementAndGroup(element);
            });

            table.appendChild(elementDiv);
        });
    }

    function highlightElementAndGroup(selected) {
        document.querySelectorAll('#table-grid > div').forEach(div => {
            div.classList.remove('bg-blue-300', 'border-blue-500', 'bg-green-200');
        });

        const selectedDiv = document.querySelector(`[data-symbol="${selected.symbol}"]`);
        const groupDivs = document.querySelectorAll(`[data-group="${selected.group}"]`);

        selectedDiv.classList.add('bg-blue-300', 'border-blue-500');
        groupDivs.forEach(div => div.classList.add('bg-green-200'));

        details.innerHTML = `
            <h3 class="text-lg font-bold">${selected.name} (${selected.symbol})</h3>
            <p>Atomic Number: ${selected.number}</p>
            <p>Group: ${selected.group}</p>
        `;
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('#table-grid > div').forEach(div => {
            const symbol = div.dataset.symbol.toLowerCase();
            const name = elements.find(el => el.symbol.toLowerCase() === symbol).name.toLowerCase();

            if (symbol.includes(query) || name.includes(query)) {
                div.style.display = '';
            } else {
                div.style.display = 'none';
            }
        });
    });

    renderTable();
});