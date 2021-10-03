const assert = require("assert");

function solution(times, k) {
  if (times.reduce((a, b) => a + b) <= k) return -1;
  const entries = Object.entries(times).sort(([, a], [, b]) => b - a);
  let sum = 0;
  let prev = 0;
  let len = entries.length;
  while (sum + (entries[len - 1][1] - prev) * len <= k) {
    const [, t] = entries.pop();
    sum += (t - prev) * len--;
    prev = t;
  }
  return (
    Number(entries.sort(([a], [b]) => a - b)[(k - sum) % entries.length][0]) + 1
  );
}

assert.equal(solution([3, 1, 2], 5), 1);
assert.equal(solution([3, 1, 1, 2], 5), 4);
