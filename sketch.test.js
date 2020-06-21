const lol = require("./sketch.js");

test("adds 1 + 2 to equal 3", () => {
  expect(lol(1, 2)).toBe(3);
});
