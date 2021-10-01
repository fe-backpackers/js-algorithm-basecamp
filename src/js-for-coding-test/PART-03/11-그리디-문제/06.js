/* https://programmers.co.kr/learn/courses/30/lessons/42891#
 * 정확성 테스트는 통과하나, 효율성 테스트는 통과하지 못함
 */

const assert = require("assert");

const add = (a, b) => a + b;
const next = (i, arr) => (i + 1) % arr.length;

const solution = (food_times, k) => {
  const sum = food_times.reduce(add);

  if (sum <= k) return -1;

  let count = 0;
  let i = 0;
  for (; count < k; i = next(i, food_times)) {
    if (food_times[i] > 0) {
      food_times[i]--;
      count++;
    }
  }

  while (food_times[i] === 0) {
    i = next(i, food_times);
  }

  return i + 1;
};

[
  [[[3, 1, 2], 5], 1],
  [[[3, 1, 2], 6], -1],
  [[[3, 1, 2], 1], 2],
  [[[3, 1, 2], 2], 3],
  [[[3, 1, 2], 3], 1],
  [[[3, 1, 2], 4], 3],
  [[[3, 1, 2, 3], 5], 3],
  [[[3, 1, 2, 3], 7], 1],
].forEach(([input, output]) => assert.equal(solution(...input), output));
