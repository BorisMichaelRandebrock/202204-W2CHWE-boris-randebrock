const positionedCells = [];
const width = 3;
const height = 3;
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

const allocatedPositions = () => {
  for (let y = 0; y <= height; y++) {
    for (let x = 0; x <= width; x++) {
      positionedCells.push(new Cell(x, y));
    }
  }
  return positionedCells;
};
allocatedPositions();
