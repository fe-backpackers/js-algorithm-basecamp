const assert = require("assert");

function solution(N) {
  const chars = String(N).split("");
  const h = chars.length / 2;
  return chars.slice(0, h).reduce((sum, c) => sum + Number(c), 0) ===
    chars.slice(h).reduce((sum, c) => sum + Number(c), 0)
    ? "LUCKY"
    : "READY";
}

assert.equal(solution(123402), "LUCKY");
assert.equal(solution(7755), "READY");
assert.equal(solution(41449121), "LUCKY");
assert.equal(solution(00), "LUCKY");
assert.equal(solution(1102), "LUCKY");
assert.equal(solution(1103), "READY");
