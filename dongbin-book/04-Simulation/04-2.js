/**
 * @name 시각
 * @link 동빈북 4-2
 * @date 2021-10-07
 * @author sunmon
 */

const utils = require("../../lib/utils");

const generator = function* () {
  const n = yield; // 콘솔에서 입력받은 한 줄 저장
  const answer = solution(n);
  console.log(answer);
};

const solution = (n) => {
  let counter = 0;
  for (let i = 0; i < +n; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        if (("" + i + j + k).includes("3")) counter += 1;
      }
    }
  }

  return counter;
};

utils.readConsole(generator);
