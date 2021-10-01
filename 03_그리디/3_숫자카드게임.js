const assert = require("assert");

function solution(table) {
  return table.map((row) => Math.min(...row)).reduce((a, b) => Math.max(a, b));
}

assert.equal(
  solution([
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ]),
  2
);
assert.equal(
  solution([
    [7, 3, 1, 8],
    [3, 3, 3, 4],
  ]),
  3
);
