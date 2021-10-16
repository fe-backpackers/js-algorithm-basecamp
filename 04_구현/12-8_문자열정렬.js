const assert = require("assert");

function solution(str) {
  return (
    str.match(/[A-Z]/g).sort().join("") +
    str
      .match(/\d/g)
      .map(Number)
      .reduce((a, b) => a + b)
  );
}

assert.equal(solution("K1KA5CB7"), "ABCKK13");
