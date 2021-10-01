const assert = require("assert");

function solution(N, K) {
  let n = 0;
  let rem;
  while (N > 1) {
    while ((rem = N % K) === 0) {
      N /= K;
      n++;
    }
    N -= rem;
    n += rem;
  }
  return --n;
}

assert.equal(solution(17, 4), 3);
assert.equal(solution(25, 5), 2);
