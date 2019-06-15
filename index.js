const resetButton = document.getElementById("reset-btn");
const randomButton = document.getElementById("random-btn");
const blackButton = document.getElementById("black-btn");
createGrid(16);

function createGrid(gridSize) {
	let gridContainer = document.querySelector('.grid-container');
	let gridCells = document.getElementsByClassName('grid-cell');
	let gridCellsArr = Array.from(gridCells);

	//clearing gridContainer if its not clear, before creating a new one.
	while (gridContainer.firstChild) {
		gridContainer.firstChild.remove();
	}

	gridContainer.style.gridTemplateColumns = "1fr ".repeat(gridSize);
	gridContainer.style.gridTemplateRows = "1fr ".repeat(gridSize);

	//creating grid cells

	for (let j = 0; j < (gridSize * gridSize); j++) {
		var gridCell = document.createElement("div");
		gridCell.classList.add('grid-cell');

		gridContainer.appendChild(gridCell);
	}

	gridCells = document.getElementsByClassName('grid-cell');
	gridCellsArr = Array.from(gridCells);

	gridCellsArr.forEach(function (cell) {
		cell.addEventListener("mouseover", function () {
			cell.classList.add("painted");
		});
		cell.addEventListener("click", function () {
			clearCell(cell);
		});
	});
}

resetButton.addEventListener("click", function () {
	let size = prompt("How many squares? (for 16*16 type 16) from 1 to 100");
	if(size ===null){
		return;
	}
	while (size < 1 || size > 100) {
		size = prompt("How many squares? (for 16*16 type 16) from 1 to 100");
	}
	createGrid(size);
});

randomButton.addEventListener("click", function () {
	randomizeColor();
});

blackButton.addEventListener("click", function() {
	blackColor();
});

function getRandom() {
	return "rgb(" + parseInt(Math.floor(Math.random() * 256)) + "," + parseInt(Math.floor(Math.random() * 256)) + "," + parseInt(Math.floor(Math.random() * 256)) + ")";
}

function randomizeColor() {
	gridCells = document.getElementsByClassName('grid-cell');
	gridCellsArr = Array.from(gridCells);
	gridCellsArr.forEach(function (cell) {
		cell.addEventListener("mouseover", function () {
			cell.classList.remove("painted");
			cell.style.backgroundColor = getRandom();
		});
	});
}

function clearCell(cell) {
	cell.classList.remove("painted");
	cell.style.backgroundColor = "white";
}

function blackColor(){
	gridCells = document.getElementsByClassName('grid-cell');
	gridCellsArr = Array.from(gridCells);
	gridCellsArr.forEach(function (cell) {
		cell.addEventListener("mouseover", function () {
			cell.classList.add("painted");
			cell.style.backgroundColor = getRandom();
		});
	});
}








