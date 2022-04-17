const allocatedPosition = [];
const column = 3;
const row = 3;
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
const firstLife = () => {
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
  firstLife();
  return allocatedPosition;
};
const grid = positionDisplay();

const checkNeighbours = () => {
  do {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        positionDisplay[i][j].alive = 0;

        if (positionDisplay[i - 1][j - 1].alive === true) {
          positionDisplay[i][j].alive += 1;
        }
        if (positionDisplay[i - 1][j].alive === true) {
          positionDisplay[i][j].alive += 1;
        }
        if (positionDisplay[i - 1][j + 1].alive === true) {
          positionDisplay[i][j].alive += 1;
        }
        if (positionDisplay[i][j - 1].alive === true) {
          positionDisplay[i][j].alive += 1;
        }
        if (positionDisplay[i][j + 1].alive === true) {
          positionDisplay[i][j].alive += 1;
        }
        if (positionDisplay[i + 1][j - 1].alive === true) {
          positionDisplay[i][j].alive += 1;
        }
        if (positionDisplay[i + 1][j].alive === true) {
          positionDisplay[i][j].alive += 1;
        }
        if (positionDisplay[i + 1][j + 1].alive === true) {
          positionDisplay[i][j].alive += 1;
        }
        if (
          positionDisplay[i][j].alive === false &&
          positionDisplay[i][j].alive > 2
        ) {
          positionDisplay[i][j].alive = true;
        } else if (
          positionDisplay[i][j].alive === true &&
          positionDisplay[i][j].alive === 2
        ) {
          positionDisplay[i][j].alive = true;
        } else if (
          positionDisplay[i][j].alive === true &&
          positionDisplay[i][j].alive === 3
        ) {
          positionDisplay[i][j].alive = true;
        } else {
          positionDisplay[i][j].alive = false;
        }
      }
    }
  } while (positionDisplay.alive === false);
  return grid;
};

checkNeighbours();

// console.log(grid);
