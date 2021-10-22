const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector("#sliderValue");
const colorPicker = document.querySelector("#colorValue");

const addMouseEnterListeners = () => {
  getGridItems().forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = colorPicker.value;
    });
  });
};

const makeRows = (rows, cols) => {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
  }
};

const getGridItems = () => {
  const gridItems = document.querySelectorAll(".grid-item");
  return gridItems;
};

slider.oninput = function () {
  let gridSize = this.value;
  sliderValue.textContent = `${gridSize}x${gridSize}`;
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  makeRows(gridSize, gridSize);
  addMouseEnterListeners();
};

window.onload = function () {
  makeRows(32, 32);
  addMouseEnterListeners();
};
