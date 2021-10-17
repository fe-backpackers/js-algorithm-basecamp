const assert = require("assert");

function solution(p) {
  if (p === "") return "";
  let str = "";
  let n = 0;
  let valance = true;
  for (let i = 0; i < p.length; i++) {
    if ((n += p[i] === "(" ? 1 : -1) < 0) valance = false;
    if (n === 0) {
      const u = p.slice(0, i + 1);
      const v = p.slice(i + 1);
      str += valance
        ? u + solution(v)
        : "(" +
          solution(v) +
          ")" +
          [...u.slice(1, -1)].map((c) => (c === "(" ? ")" : "(")).join("");
      break;
    }
  }
  return str;
}

assert.equal(solution("(()())()"), "(()())()");
assert.equal(solution(")("), "()");
assert.equal(solution("()))((()"), "()(())()");
