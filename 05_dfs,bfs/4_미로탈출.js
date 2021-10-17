const assert = require("assert");

function solution(table) {
  const dy = table.length - 1;
  const dx = table[0].length - 1;
  const q = [[0, 0, 0]];
  let cur;
  while ((cur = q.shift())) {
    let [x, y, n] = cur;
    if (table[y]?.[x] !== 1) continue;
    table[y][x] = 0;
    n++;
    if (x === dx && y === dy) return n;
    q.push([x + 1, y, n], [x - 1, y, n], [x, y + 1, n], [x, y - 1, n]);
  }
}

assert.equal(
  solution([
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ]),
  10
);
assert.equal(
  solution([
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1],
  ]),
  12
);
