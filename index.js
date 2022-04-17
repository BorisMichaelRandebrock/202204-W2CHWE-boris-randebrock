const allocatedPosition = [];
const column = 30;
const row = 30;
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
positionDisplay();
// console.table(positionDisplay());
