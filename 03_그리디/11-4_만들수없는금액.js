const assert = require("assert");

function solution(coins) {
  const set = new Set(
    coins.flatMap((_, i) =>
      recur(coins, i + 1).map((arr) => arr.reduce((a, b) => a + b))
    )
  );

  let n = 1;
  while (set.has(n)) n++;
  return n;

  function recur(arr, len) {
    if (len === 1) return arr.map((n) => [n]);
    return arr
      .slice(0, -len + 1 || arr.length)
      .flatMap((a, i) =>
        recur(arr.slice(i + 1), len - 1).map((b) => [a, ...b])
      );
  }
}

assert.equal(solution([3, 5, 7]), 1);
assert.equal(solution([3, 2, 1, 1, 9]), 8);
assert.equal(solution([1, 1, 1]), 4);
