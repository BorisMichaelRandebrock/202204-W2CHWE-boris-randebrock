const allocatedPosition = [];
const column = 3;
const row = 3;
let neighbourCounter = 0;
class Cell {
  alive;
  positionX;
  positionY;

  constructor(positionX, positionY) {
    this.alive = false;
    this.positionX = positionX;
    this.positionY = positionY;
  }
}
const firstCellsAlive = () => {
  allocatedPosition[1][0].alive = true;
  allocatedPosition[1][1].alive = true;
  allocatedPosition[1][2].alive = true;
};
const positionDisplay = () => {
  for (let y = 0; y < row; y++) {
    allocatedPosition.push([]);
    for (let x = 0; x < column; x++) {
      allocatedPosition[y].push(new Cell(x, y));
    }
  }
  firstCellsAlive();
  return allocatedPosition;
};
const grid = positionDisplay();

const rulesOfLife = () => {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (neighbourCounter < 2 || neighbourCounter > 3) {
        grid[i][j].alive = false;
      }
      if (neighbourCounter === 2 || neighbourCounter === 3) {
        grid[i][j].alive = true;
      }
    }
  }

  return grid;
};
const checkNeighbours = () => {
  do {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        if (typeof grid[i - 1] !== "undefined") {
          if (typeof grid[i - 1][j - 1] !== "undefined") {
            if (grid[i - 1][j - 1].alive === true) {
              neighbourCounter++;
            }
          }
        }
        if (typeof grid[i - 1] !== "undefined") {
          if (typeof grid[i - 1][j] !== "undefined") {
            if (grid[i - 1][j].alive === true) {
              neighbourCounter++;
            }
          }
        }
        if (typeof grid[i - 1] !== "undefined") {
          if (typeof grid[i - 1][j + 1] !== "undefined") {
            if (grid[i - 1][j + 1].alive === true) {
              neighbourCounter++;
            }
          }
        }
        if (typeof grid[i] !== "undefined") {
          if (typeof grid[i][j - 1] !== "undefined") {
            if (grid[i][j - 1].alive === true) {
              neighbourCounter++;
            }
          }
        }

        if (typeof grid[i] !== "undefined") {
          if (typeof grid[i][j + 1] !== "undefined") {
            if (grid[i][j + 1].alive === true) {
              neighbourCounter++;
            }
          }
        }

        if (typeof grid[i + 1] !== "undefined") {
          if (typeof grid[i + 1][j - 1] !== "undefined") {
            if (grid[i + 1][j - 1].alive === true) {
              neighbourCounter++;
            }
          }
        }
        if (typeof grid[i + 1] !== "undefined") {
          if (typeof grid[i + 1][j] !== "undefined") {
            if (grid[i + 1][j].alive === true) {
              neighbourCounter++;
            }
          }
        }
        if (typeof grid[i + 1] !== "undefined") {
          if (typeof grid[i + 1][j + 1] !== "undefined") {
            if (grid[i + 1][j + 1].alive === true) {
              neighbourCounter++;
            }
          }
        }
      }
    }
  } while (grid.alive === false);
  rulesOfLife(neighbourCounter);
};

checkNeighbours();
