/**
 * @name 곱하기 혹은 더하기
 * @link 동빈북 11-2
 * @date 2021-10-01
 * @author sunmon
 */

const readConsole = require("../../lib/utils").readConsole;

const generator = function* () {
  const input = yield;
  let answer = 0;
  for (const i of input) {
    answer <= 1 || (i | 0) <= 1 ? (answer += i | 0) : (answer *= i | 0);
  }

  console.log(answer);
};

readConsole(generator);
