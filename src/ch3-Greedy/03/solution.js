/**
 * 숫자카드게임 -  p.96
 * 여러개의 숫자 카드 중에서 가장 높은 숫자가 쓰인 카드 한장을 뽑는 게임
 * N*M 형태로 놓여진 카드중, 골라낼 행에서 가장 숫자가 낮은 카드를 뽑을 것을 고려하여 최종적으로 높은 숫자의 카드를 뽑을 수 있도록 프로그램 만들기.
 *
 * @param {Array} n*n의 카드 숫자 이차원 배열
 * @returns  {Number} 각 줄에서 뽑은 가장 작은 수 중에서 가장 큰 수
 */

const solution = (arr) => {
  let result = 0;

  for (let list of arr) {
    result = Math.max(Math.min(...list), result);
  }

  return result;
};

module.exports = solution;
