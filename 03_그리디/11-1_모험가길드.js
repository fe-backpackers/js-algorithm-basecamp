const assert = require("assert");

function solution(arr) {
  arr.sort();
  let len = arr.length;
  let cnt = 0;
  while (len) {
    const end = arr[len - 1];
    if (end > len) {
      --len;
      continue;
    }
    cnt++;
    len -= end;
  }
  return cnt;
}

assert.equal(solution([2, 3, 1, 2, 2]), 2);
assert.equal(solution([2, 2, 2]), 1);
assert.equal(solution([3, 3, 3, 3, 1]), 2);
