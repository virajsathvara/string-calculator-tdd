const calculator = require("../src/stringCalculator.js")
describe("string calculator tests", () => {
  test('should accept empty string', () => {
    expect(calculator("")).toBe(0);
  });
})