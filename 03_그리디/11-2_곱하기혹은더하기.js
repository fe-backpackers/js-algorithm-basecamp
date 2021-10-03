const assert = require("assert");

function solution(str) {
  return str
    .split("")
    .map(Number)
    .reduce((a, b) => (Math.min(a, b) > 1 ? a * b : a + b));
}

assert.equal(solution("02984"), 576);
assert.equal(solution("567"), 210);
