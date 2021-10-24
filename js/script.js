const gridContainer = document.querySelector(".gridContainer");

const sliderValue = document.querySelector("#sliderValue");
const colorPicker = document.querySelector(".colorPicker");
const slider = document.querySelector("#slider");

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

// need to change this so it only updates afte the slider is done
slider.onchange = function () {
  let gridSize = this.value;
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  makeRows(gridSize, gridSize);
  addMouseEnterListeners();
};
slider.oninput = function () {
  let gridSize = this.value;
  sliderValue.textContent = `${gridSize}x${gridSize}`;
};

makeRows(16, 16);
addMouseEnterListeners();
