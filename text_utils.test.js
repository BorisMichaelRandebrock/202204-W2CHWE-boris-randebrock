const addAAndB = (valueA, valueB) => valueA + valueB;

describe("Given the addAAndB function", () => {
  describe("When entered 2, 2", () => {
    test("Then it should return 4", () => {
      const valueA = 2;
      const valueB = 2;
      const expectedResult = 4;

      const result = addAAndB(valueA, valueB);

      expect(result).toBe(expectedResult);
    });
  });
});
const allocatedPosition = [];
const allocatedPositions = (row, column) => {
  for (let y = 0; y < row; y++) {
    allocatedPosition.push([]);
    for (let x = 0; x < column; x++) {
      allocatedPosition[y].push(new Cell(x, y));
    }
  }
  return allocatedPosition;
};

describe("Given the function allocatedPosition", =>{
  describe("When introduced the variables 2, 2", => {
    test("Than it should return [[
    Cell { positionX: 0, positionY: 0 },
    Cell { positionX: 1, positionY: 0 }
  ],
  [
    Cell { false, positionX: 0, positionY: 1 },
    Cell { false, positionX: 1, positionY: 1 }
  ]
] ")
  })
})
allocatedPositions()
