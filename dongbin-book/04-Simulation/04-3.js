/**
 * @name 왕실의 나이트
 * @link 동빈북 4-3
 * @date 2021-10-08
 * @author sunmon
 */

const utils = require("../../lib/utils");

const generator = function* () {
  const n = yield; // 콘솔에서 입력받은 한 줄 저장
  const answer = solution(n);
  console.log(answer);
};

const solution = (n) => {
  const [col, row] = [utils.unicodeDistance("a", n[0]), +n[1]];
  return [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ].filter(
    (d) =>
      utils.isInRange(col + d[0], 1, 8) && utils.isInRange(row + d[1], 1, 8)
  ).length;
};

utils.readConsole(generator);
