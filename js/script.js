const DEFAULT_COLOR = "#333333";
const DEFAULT_MODE = "Color";
const DEFAULT_SIZE = 32;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const gridContainer = document.querySelector(".gridContainer");
const sliderValue = document.querySelector("#sliderValue");
const colorPicker = document.querySelector("#colorPickerButton");
const rainbowButton = document.querySelector("#rainbowButton");
const colorButton = document.querySelector("#colorButton");
const eraserButton = document.querySelector("#eraserButton");
const clearButton = document.querySelector("#clearButton");
const slider = document.querySelector("#slider");

const setCurrentColor = (newColor) => {
  currentColor = newColor;
};

const setCurrentSize = (newSize) => {
  currentSize = newSize;
};

const setCurrentMode = (newMode) => {
  activateButton(newMode);
  currentMode = newMode;
};

colorPicker.onchange = (e) => setCurrentColor(e.target.value);
colorButton.onclick = () => setCurrentMode("Color");
rainbowButton.onclick = () => setCurrentMode("Rainbow");
eraserButton.onclick = () => setCurrentMode("Eraser");
clearButton.onclick = () => resetGrid();
slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange = (e) => updateSize(e.target.value);

const updateSize = (size) => {
  setCurrentSize(size);
  updateSizeValue(size);
  resetGrid();
};

const updateSizeValue = (value) => {
  sliderValue.textContent = `${value} x ${value}`;
};

const clearGrid = () => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
};

const resetGrid = () => {
  clearGrid();
  makeGrid(currentSize, currentSize);
};

const makeGrid = (rows, cols) => {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseenter", colorChange);
    gridContainer.appendChild(cell).className = "grid-item";
  }
};

const colorChange = (e) => {
  if (currentMode === "Rainbow") {
    let valueOne = Math.floor(Math.random() * 256);
    let valueTwo = Math.floor(Math.random() * 256);
    let valueThree = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${valueOne},${valueTwo},${valueThree})`;
  } else if (currentMode === "Color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "Eraser") {
    e.target.style.backgroundColor = "#ffffff";
  }
};

const activateButton = (newMode) => {
  if (currentMode === "Rainbow") {
    rainbowButton.classList.remove("btn-down");
  } else if (currentMode === "Color") {
    colorButton.classList.remove("btn-down");
  } else if (currentMode === "Eraser") {
    eraserButton.classList.remove("btn-down");
  }

  if (newMode === "Rainbow") {
    rainbowButton.classList.add("btn-down");
  } else if (newMode === "Color") {
    colorButton.classList.add("btn-down");
  } else if (newMode === "Eraser") {
    eraserButton.classList.add("btn-down");
  }
};

window.onload = () => {
  makeGrid(DEFAULT_SIZE, DEFAULT_SIZE);
  activateButton(DEFAULT_MODE);
};
