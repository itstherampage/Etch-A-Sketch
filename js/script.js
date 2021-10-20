const gridContainer = document.querySelector(".grid-container");
const input = document.querySelector(".input");

const makeRows = (rows, cols) => {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
  }
};
makeRows(4, 4);

const getGridItems = () => {
  const gridItems = document.querySelectorAll(".grid-item");
  return gridItems;
};

input.addEventListener("change", function (e) {
  let gridSize = e.target.value;
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  makeRows(gridSize, gridSize);
  getGridItems().forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "black";
    });
  });
});

getGridItems().forEach((item) => {
  item.addEventListener("mouseenter", function (e) {
    e.target.style.backgroundColor = "black";
  });
});
