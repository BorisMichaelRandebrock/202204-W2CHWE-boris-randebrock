const addAAndB = (valueA, valueB) => valueA + valueB;

describe("Given the addAAndB function", () => {
  describe("When entered 2, 2", () => {
    test("Then it should return 4", () => {
      const valueA = 2;
      const valueB = 2;

      const result = addAAndB(valueA, valueB);
      const expectedResult = 4;

      expect(result).toBe(expectedResult);
    });
  });
});
