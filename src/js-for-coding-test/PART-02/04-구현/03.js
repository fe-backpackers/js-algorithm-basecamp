const assert = require("assert");

const isInRange = (n, N) => 0 <= n && n < N;
const dirs = [
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

const solve = (str) => {
  const input = str.split("");

  const X = Number(input[1]) - 1;
  const Y = input[0].charCodeAt(0) - "a".charCodeAt(0);

  const count = dirs
    .map(([dx, dy]) => [X + dx, Y + dy])
    .filter(([nx, ny]) => isInRange(nx, 8) && isInRange(ny, 8)).length;

  return count;
};

const cases = [
  { params: ["a1"], expected: 2 },
  { params: ["c2"], expected: 6 },
  { params: ["g6"], expected: 6 },
  { params: ["e4"], expected: 8 },
];

cases.forEach(({ params, expected }) => {
  assert.deepEqual(solve(...params), expected);
});
