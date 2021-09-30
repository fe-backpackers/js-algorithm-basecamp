const assert = require("assert");

function solution(arr, M, K) {
  let [a, b = a] = arr.sort((a, b) => b - a);
  const tmp = ~~(M / (K + 1));
  return K * tmp * a + tmp * b + (M % tmp) * a;
}

assert.equal(solution([2, 4, 5, 4, 6], 8, 3), 46);
assert.equal(solution([2, 4, 5, 4, 6], 9, 3), 52);
