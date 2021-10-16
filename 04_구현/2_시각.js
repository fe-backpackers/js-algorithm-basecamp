const assert = require("assert");

function solution(N) {
  let n = 0;
  if (N >= 3) {
    N--;
    n += 3600;
  }
  if (N >= 15) {
    N--;
    n += 3600;
  }
  return n + 1575 * (N + 1);
}

// 분 0~5,0~9 초 0~5,0~9 => 6*10 *6*10 - 5*9*5*9 => 1575

assert.equal(solution(5), 11475);
