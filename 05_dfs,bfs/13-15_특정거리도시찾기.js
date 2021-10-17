const assert = require("assert");

function solution(N, K, X, edges) {
  const map = edges.reduce((map, [a, b]) => {
    (map[a] ??= []).push(b);
    return map;
  }, {});
  const q = [[X, -1]];
  const visited = new Set();
  let cur;
  const ret = [];
  while ((cur = q.shift())) {
    let [v, d] = cur;
    if (visited.has(v)) continue;
    if (++d === K) {
      ret.push(v);
      continue;
    }
    visited.add(v);
    q.push(...(map[v]?.map((v2) => [v2, d]) ?? []));
  }
  return ret;
}

assert.deepEqual(
  solution(4, 2, 1, [
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ]),
  [4]
);
assert.deepEqual(
  solution(4, 2, 1, [
    [1, 2],
    [1, 3],
    [1, 4],
  ]),
  []
);
assert.deepEqual(
  solution(4, 1, 1, [
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ]),
  [2, 3]
);
