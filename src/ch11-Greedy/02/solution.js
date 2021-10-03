/**
 * 곱하기 혹은 더하기 -p312
 * 각 자리가 숫자로만 이루어진 문자열 S 가 주어졌을 때, 왼쪽부터 오른쪽으로 하나씩 모든 숫자를 확인하며 숫자사이에 'x'혹은 '+'
 * 연산자를 넣어 결과적으로 만들어 질 수 있는 가장 큰 수를 구하는 프로그램 작성
 * constraints
 * 1<=str<=20
 * @param {String} str
 * @returns {Number} 만들어 질 수 있는 가장 큰 수
 */

const solution = (str) => {
  //최적의 해 : 매 수를 곱한다
  // 조건
  //비교하려는 두 숫자가 0또는 1이 포함되어 있으면 +
  let result = Number(str[0]);
  for (let i = 1; i < str.length; i++) {
    result =
      Number(str[i]) <= 1 || result <= 1
        ? result + Number(str[i])
        : result * Number(str[i]);
  }
  return result;
};

module.exports = solution;
