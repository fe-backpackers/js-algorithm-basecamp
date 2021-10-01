const assert = require("assert");

function solution(str) {
  return ~~(str.match(/([01])\1*/g).length / 2) || 1;
}

assert.equal(solution("00000"), 1);
assert.equal(solution("0001100"), 1);
assert.equal(solution("010"), 1);
assert.equal(solution("0101"), 2);
assert.equal(solution("01010"), 2);
assert.equal(solution("10101"), 2);
assert.equal(solution("101010"), 3);
assert.equal(solution("10111010000"), 3);
