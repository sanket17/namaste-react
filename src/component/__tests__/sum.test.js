const { sum } = require("../sum");

test("sum function to calculate sum of 4 and 5", () => {
  const result = sum(5, 4);
  expect(result).toBe(9);
});
