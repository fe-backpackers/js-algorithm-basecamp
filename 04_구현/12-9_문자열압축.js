const assert = require("assert");

function solution(s) {
  return Math.min(
    ...Array(s.length)
      .fill()
      .map((_, i) => i + 1)
      .map((n) => s.match(new RegExp(`.{1,${n}}`, "g")))
      .map((chunks) => {
        let n = 1;
        let prev = chunks[0];
        let str = chunks.length === 1 ? prev : "";
        for (let i = 1; i < chunks.length; i++) {
          const curr = chunks[i];
          const isLast = i === chunks.length - 1;
          if (curr === prev) {
            n++;
            if (isLast) str += (n > 1 ? n : "") + curr;
          } else {
            str += (n > 1 ? n : "") + prev;
            prev = curr;
            n = 1;
            if (isLast) str += curr;
          }
        }
        return str.length;
      })
  );
}

assert.equal(solution("aabbaccc"), 7);
assert.equal(solution("ababcdcdababcdcd"), 9);
assert.equal(solution("abcabcdede"), 8);
assert.equal(solution("abcabcabcabcdededededede"), 14);
assert.equal(solution("xababcdcdababcdcd"), 17);
