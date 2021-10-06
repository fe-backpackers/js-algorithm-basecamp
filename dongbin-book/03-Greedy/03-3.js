/**
 * @name 숫자 카드 게임
 * @link 동빈북 3-3
 * @date 2021-10-01
 * @author sunmon
 */

const readConsole = require("../../lib/utils").readConsole;

const generator = function* () {
  const line = yield;
  let [n, m] = line.split(" ").map((i) => Number.parseInt(i));
  let answer = -1;
  while (n--) {
    const input = yield;
    const num = input
      .split(" ")
      .reduce((prev, cur) => (prev > cur ? cur : prev), 100);
    answer = Math.max(answer, num);
  }
  console.log(answer);
};

readConsole(generator);
