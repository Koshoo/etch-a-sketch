
function createGrid(gridSize) {
	for (let i = 0; i < gridSize; i++) {

		for (let j = 1; j < gridSize + 1; j++) {
			var gridCell = document.createElement("div");
			gridCell.classList.add('grid-cell');
			gridCell.style.gridColumn = '0' + j;
			gridContainer.appendChild(gridCell);
		}
	}
}

function clearGrid() {
	gridCellsArr.forEach(function (element) {
		element.classList.remove("painted");
	});
}

const gridContainer = document.querySelector('.grid-container');
createGrid(16);

const gridCells = document.getElementsByClassName('grid-cell');
const gridCellsArr = Array.from(gridCells);
const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", function () {
	clearGrid();
});

gridCellsArr.forEach(function (cell) {
	cell.addEventListener("mouseover", function () {
		cell.classList.add("painted");
	})
});
gridCellsArr.forEach(function (cell) {
	cell.addEventListener("ontouchstart", function () {
		cell.classList.add("painted");
	})
});

