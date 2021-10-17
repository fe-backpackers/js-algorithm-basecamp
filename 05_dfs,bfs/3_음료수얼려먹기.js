const assert = require("assert");

function solution(table) {
  let ret = 0;
  for (let y = 0; y < table.length; y++) {
    for (let x = 0; x < table[0].length; x++) {
      if (dfs(y, x)) ret++;
    }
  }
  return ret;
  function dfs(y, x) {
    if (table[y]?.[x] !== 0) return;
    table[y][x] = 1;
    dfs(y + 1, x);
    dfs(y - 1, x);
    dfs(y, x + 1);
    dfs(y, x - 1);
    return true;
  }
}

assert.equal(
  solution([
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ]),
  3
);
assert.equal(
  solution([
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ]),
  5
);
assert.equal(
  solution([
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
  ]),
  3
);
assert.equal(
  solution([
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  ]),
  8
);
