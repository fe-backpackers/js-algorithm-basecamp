/**
 * @name 만들수 없는 금액
 * @link 동빈북 11-4
 * @date 2021-10-01
 * @author sunmon
 */

const readConsole = require("../../lib/utils").readConsole;

const generator = function* () {
  const N = yield;
  const input = yield;
  const nums = input
    .split(" ")
    .map((i) => i | 0)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  let answer = 1; // 아직 안 만든 수 중 가장 작은 수
  for (let i = 0; i < nums.length; i++) {
    if (answer < nums[i]) break;
    answer += nums[i];
  }

  console.log(answer);
};

readConsole(generator);
