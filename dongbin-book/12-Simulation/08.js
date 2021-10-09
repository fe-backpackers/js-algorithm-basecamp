/**
 * @name 문자열 재정렬
 * @link 동빈북 12-2
 * @date 2021-10-09
 * @ref
 * @author sunmon
 * @description 접근방법:
 *  1. 입력한 문자열을 순차적으로 돌며 다음 작업을 수행한다
 *    - 현재 문자가 문자열이면 str에 덧붙여 저장한다
 *    - 현재 문자가 숫자라면 숫자의 합에 더한다
 *  2. str을 오름차순으로 정렬한 후 숫자를 더해 리턴한다
 */

const Utils = require("../../lib/utils");

const solution = (s) => {
  let str = "";
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    isNaN(s[i]) ? (str += s[i]) : (num += +s[i]);
  }

  return [...str].sort().join("") + num;
};

const generator = function* () {
  const s = yield; // 콘솔에서 입력받은 한 줄 저장
  const answer = solution(s);
  console.log(answer);
};

Utils.input.readConsole(generator);
