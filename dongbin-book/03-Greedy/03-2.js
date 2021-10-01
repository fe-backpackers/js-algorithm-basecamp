/**
 * @name 큰 수의 법칙
 * @link 동빈북 3-2
 * @date 2021-10-01
 * @author sunmon
 */

const readConsole = require("../../lib/utils").readConsole;

const generator = function* () {
  const n = yield; // 콘솔에서 입력받은 한 줄 저장
  const m = yield; // 콘솔에서 입력받은 한 줄 저장
  const answer = solution(n, m);
  console.log(answer);
};

const solution = (n, m) => {
  const [N, M, K] = n.split(" ").map((i) => Number.parseInt(i));
  const arr = m.split(" ").map((i) => Number.parseInt(i));
  arr.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));

  const a = arr[0] * (Number.parseInt(M / (K + 1)) * K + (M % (K + 1)));
  const b = arr[1] * Number.parseInt(M / (K + 1)); //arr[1] *  M - arr[0] 더한 수
  return a + b;
};

readConsole(generator);
