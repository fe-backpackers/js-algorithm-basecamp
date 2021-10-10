/***
 * 문자열압축 p323
 *
 * @param s 문자열
 * @returns {Number} 압축하여 표현한 문자열중 가장 짧은 것의 길이
 */

const solution = (s) => {
  let minLength = Number.MAX_SAFE_INTEGER;
  let current = "",
    prev = "",
    count = 1,
    chars = ""; //2ab 처럼 바꿀 chars

  if (s.length < 2) return 1;
  // i=>한 그룹의 개수
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    //첫 그룹을 초기화한다 나중에 두번째그룹과 비교하기 위해
    prev = s.substring(0, i);
    count = 1;
    //그룹 내의 문자열 접근, 두번째 그룹부터 시작(첫번째 그룹과 비교위해)
    for (let j = i; j < s.length; j = j + i) {
      //j는 매 새로운 그룹의 첫번째 인덱스를 가리킨다
      current = s.substring(j, j + i);
      let isCorresponded = prev.localeCompare(current);
      if (isCorresponded === 0) {
        count++;
      } else {
        //다르다면 현재 count를 char맨앞에 숫자를 count를 쓴다.
        chars = count > 1 ? chars + count.toString() + prev : chars + prev;
        count = 1;
      }
      prev = current;
    }

    chars = count > 1 ? chars + count.toString() + prev : chars + prev;
    minLength = Math.min(minLength, chars.length);
    chars = ""; //reset chars
  }
  return minLength;
};

solution("xababcdcdababcdcd"); //17
solution("abcabcabcabcdededededede"); //14
solution("abcabcdede"); //8
solution("ababcdcdababcdcd"); //9
