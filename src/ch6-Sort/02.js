const assert = require("assert");
const solution = (arr) => {
  return [...new Set(arr)].sort((a, b) => b - a);
};

assert.deepStrictEqual(
  solution([15, 27, 12]),
  [27, 15, 12]
);
