const assert = require("assert");

function solution(coord) {
  const x = coord[0].charCodeAt(0) - 97;
  const y = Number(coord[1]) - 1;
  return [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ].reduce(
    (n, [a, b]) => n + Number((a += x) >= 0 && a < 8 && (b += y) >= 0 && b < 8),
    0
  );
}

assert.equal(solution("a1"), 2);
assert.equal(solution("c2"), 6);
