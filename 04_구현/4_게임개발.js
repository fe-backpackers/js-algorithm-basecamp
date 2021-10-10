const assert = require("assert");

function solution(cur, dir, map) {
  let ret = 0;
  while (map[cur[1]]?.[cur[0]] === 0) {
    ret++;
    map[cur[1]][cur[0]] = 1;
    let tries = 0;
    let dx, dy;
    while (tries++ < 4) {
      [dx, dy] = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
      ][(dir = (dir + 3) % 4)];
      const next = [cur[0] + dx, cur[1] + dy];
      if (map[next[1]]?.[next[0]] === 0) {
        cur = next;
        break;
      }
    }
    if (tries === 5) {
      cur = [cur[0] - dx, cur[1] - dy];
    }
  }
  return ret;
}

assert.equal(
  solution([1, 1], 0, [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
  ]),
  3
);
assert.equal(
  solution([1, 1], 0, [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ]),
  4
);
assert.equal(
  solution([1, 1], 0, [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
  6
);
assert.equal(
  solution([2, 1], 0, [
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
  ]),
  2
);
assert.equal(
  solution([2, 1], 0, [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 1, 1],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 1, 1],
  ]),
  7
);
