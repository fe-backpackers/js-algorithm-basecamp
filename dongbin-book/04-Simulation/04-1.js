/**
 * @name 상하좌우
 * @link 동빈북 4-1
 * @date 2021-10-07
 * @author sunmon
 */

const utils = require("../../lib/utils");

const generator = function* () {
  const n = yield; // 콘솔에서 입력받은 한 줄 저장
  const m = yield; // 콘솔에서 입력받은 한 줄 저장
  const answer = solution(n, m);
  console.log(answer);
};

const solution = (n, m) => {
  const dir = { R: [0, 1], L: [0, -1], U: [-1, 0], D: [1, 0] };

  return m.split(" ").reduce(
    (prev, cur) => {
      return [
        utils.wrap(prev[0] + dir[cur][0], 1, +n),
        utils.wrap(prev[1] + dir[cur][1], 1, +n),
      ];
    },
    [1, 1]
  );
};

utils.readConsole(generator);
