const container = document.querySelector(".container");
const gridSizeInput = document.querySelector(".grid-size-input");
const gridUnits = [];
let gridSizeInput__int = parseInt(gridSizeInput.value, 10);
let gridSize = 16;


const renderGrid = (size, gridContainer) => {
    gridUnits.length = 0;

    for (let i = 0; i < size*size; i++) {
        gridUnits.push(document.createElement("div"));
        gridUnits[i].className = "grid-unit";
        gridContainer.append(gridUnits[i]);
    }
}

renderGrid(gridSize, container)

gridSizeInput.addEventListener("input", (e) => { 
    gridSizeInput__int = parseInt(e.target.value, 10);
    (gridSizeInput__int <= 0 || gridSizeInput__int > 100) ? gridSize = 16 : gridSize = gridSizeInput__int;
    
    while (container.firstChild) {
        container.removeChild(container.lastChild);
  } 
  console.log(gridSizeInput__int)
  renderGrid(gridSize, container);})