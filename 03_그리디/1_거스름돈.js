const assert = require("assert");

function solution(N) {
  let cnt = 0;
  for (const coin of [500, 100, 50, 10]) {
    cnt += ~~(N / coin);
    N %= coin;
  }
  return cnt;
}

assert.equal(solution(1260), 6);
