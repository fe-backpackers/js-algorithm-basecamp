/**
 * 문자열 압축 p.321
 * 점수 n이 주어졌을 때 반으로 나누어 왼쪽 부분의 합과 오르쪽 부분의 합이 같다면 "LUCKY", 다르다면 "READY"
 *
 * @param nums 점수
 * @returns {string}
 */

const solution = (n) => {
  let leftSum = 0,
    rightSum = 0;

  for (let i = 0; i < n.length / 2; i++) {
    leftSum += Number(n[i]);
    rightSum += Number(n[n.length - 1 - i]);
  }
  return leftSum === rightSum ? "LUCKY" : "READY";
};

console.log(solution("7755"));
