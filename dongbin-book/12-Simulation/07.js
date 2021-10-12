/**
 * @name 럭키 스트레이트
 * @link 동빈북 12-1
 * @date 2021-10-09
 * @ref
 * @author sunmon
 * @description 접근방법:
 *  1. 문자열의 왼쪽 / 오른쪽 절반으로 나눈다
 *  2. 왼쪽과 오른쪽의 각 자리수의 합이 같으면 LUCKY, 아님녀 READY 리턴
 */

const Utils = require("../../lib/utils");

const solution = (s) => {
  const mid = s.length / 2;
  let left = 0,
    right = 0;
  for (let i = 0; i < s.length / 2; i++) {
    left += +s[i];
    right += +s[i + mid];
  }
  return left === right ? "LUCKY" : "READY";
};

const generator = function* () {
  const s = yield; // 콘솔에서 입력받은 한 줄 저장
  const answer = solution(s);
  console.log(answer);
};

Utils.input.readConsole(generator);
