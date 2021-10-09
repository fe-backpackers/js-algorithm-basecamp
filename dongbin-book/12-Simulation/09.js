/**
 * @name 문자열 압축
 * @link 동빈북 12-3
 * @date 2021-10-09
 * @ref https://programmers.co.kr/learn/courses/30/lessons/60057
 * @author sunmon
 * @description 접근방법:
 *  1.주어진 문자열 s를 순회하며 다음 동작을 수행한다
 *  - 시작 인덱스 i, 문자열을 자르는 길이 l, 반복되는 값 count, 압축한 총 길이를 result 라고 정의하고
 *  - a. 문자열 [i, i+l] === [i+l, i+2l]이라면 count += 1 후 i += l 을 수행
 *  - b. 문자열 [i, i+l] !== [i+l, i+2l]이라면 result += l, i += l을 수행하고
 *       count > 1 이라면 count의 글자 길이만큼 result에 더한다.
 *       그 후 count = 1로 초기화한다.
 *  2. i의 범위를 [0, s.length-l)에 대해 모두 순회했다면 남은 문자열(s[s.length-l-1, s.length))에 대해 1.a혹은 1.b을 수행한다
 *  - 이때 남은 문자열의 길이 <=l 임에 주의한다.
 *  3. 크기가 [1, s.length/2] 인 l에 대해 1,2를 수행하여 가장 길이가 작은 result의 값을 리턴한다
 */

const assert = require("assert");

const solution = (s) => {
  let ret = s.length;
  for (let l = 1; l <= s.length / 2; l++) {
    let result = 0;
    let count = 1;
    let i = 0;
    while (i < s.length - l) {
      if (s.slice(i, i + l) === s.slice(i + l, i + l + l)) {
        count += 1;
      } else {
        if (count > 1) result += ("" + count).length;
        result += l;
        count = 1;
      }
      i += l;
    }
    if (count > 1) result += ("" + count).length;
    result += s.length - i;
    ret = Math.min(ret, result);
  }
  return ret;
};

assert.strictEqual(solution("aabbaccc"), 7);
assert.strictEqual(solution("ababcdcdababcdcd"), 9);
assert.strictEqual(solution("abcabcdede"), 8);
assert.strictEqual(solution("abcabcabcabcdededededede"), 14);
assert.strictEqual(solution("xababcdcdababcdcd"), 17);
