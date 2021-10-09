const assert = require("assert");

function solution(cur, dir, map) {
  const st = [cur];
  let ret = 1;
  while ((cur = st.pop())) {
    map[cur[1]][cur[0]] = 1;
    let tries = 0;
    while (tries++ < 4) {
      const [dx, dy] = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
      ][(dir = (dir + 3) % 4)];
      const next = [cur[0] + dx, cur[1] + dy];
      if (map[next[1]]?.[next[0]] === 0) {
        ret++;
        st.push(cur, (cur = next));
        break;
      }
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
  5
);
assert.equal(
  solution([2, 1], 0, [
    [1, 1, 0, 1, 1],
    [1, 0, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
  ]),
  9
);
