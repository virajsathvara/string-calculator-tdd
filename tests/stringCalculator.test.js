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

  test('should be able to handle newlines between inputs', () => {
    expect(calculator("1,2\n3\n4,5\n6")).toBe(21);
  });

  test('should return error message', () => {
    expect(calculator("1,\n")).toBe("invalid input");
  });

  test('should support custom delimiter ;', () => {
    expect(calculator("//;\n1;2;3")).toBe(6);
  });

  test('should support custom delimiter -', () => {
    expect(calculator("//-\n1-2-3")).toBe(6);
  });

  test('should support custom delimiter --', () => {
    expect(calculator("//--\n1--2--3")).toBe(6);
  });

  test('should return negatives not allowed', () => {
    try {
      calculator("1,-2,3")
    } catch (error) {
      expect(error).toHaveProperty('message', 'negatives not allowed: -2');
    }
  });

  test('should throw error with nagative numbers', () => {
    try {
      calculator("1,-2,3,-4")
    } catch (error) {
      expect(error).toHaveProperty('message', 'negatives not allowed: -2,-4');
    }
  });
})