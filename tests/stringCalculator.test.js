const calculator = require("../src/stringCalculator.js")
describe("string calculator tests", () => {
  test('should accept empty string', () => {
    expect(calculator("")).toBe(0);
  });

  test('should return the argument when passed only one', () => {
    expect(calculator("1")).toBe(1);
  });

  test('should be able to handle multiple inputs', () => {
    expect(calculator("1,2")).toBe(3);
  });
})