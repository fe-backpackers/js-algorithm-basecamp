const assert = require("assert");

function solution(balls, M) {
  const arr = Array(M + 1).fill(0);
  balls.forEach((n) => arr[n]++);
  return arr
    .slice(0, -1)
    .reduce(
      (acc1, v1, i) =>
        acc1 + arr.slice(i + 1).reduce((acc2, v2) => acc2 + v1 * v2, 0)
    );
}

// 1 1
// 2 2
// 3 3
// 4 1
// 1*2 + 1*3 + 1*1
// 2*3 + 2*1
// 3*1

assert.equal(solution([1, 3, 2, 3, 2], 3), 8);
assert.equal(solution([1, 5, 4, 3, 2, 4, 5, 2], 5), 25);
