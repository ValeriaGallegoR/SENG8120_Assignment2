import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });

  test("should throw an error message when the area is negative.", () => {
      expect(() => paintRequiredCalculator(-50, 10)).toThrow("Area should be positive");
    });

  test("should throw an error message when the coveragePerLiter is negative.", () => {
    expect(() => paintRequiredCalculator(50, -10)).toThrow("CoveragePerLiter should be positive");
  });

  test.todo("should throw an error message when the coveragePerLiter is zero.");
  test.todo("should return expected result when the area is zero.");
});
