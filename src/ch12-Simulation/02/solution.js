/**
 * 문자열 재정렬 p322
 * 모든 알파멧을 오름차순으로 정렬하여 이어서 출력한 뒤에, 그 뒤에 모든 숫자를 더한 값을 이어서 출력
 * @param s
 * @returns {string} 정렬된 문자
 */
const solution = (s) => {
  return [
    ...s.match(/\D/g).sort(),
    s
      .match(/\d/g)
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0),
  ].join("");
};

console.log(solution("K1KA5CB7"));
