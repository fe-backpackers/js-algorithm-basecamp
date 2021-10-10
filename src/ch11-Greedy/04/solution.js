/**
 * p.314
 *
 * N개의 동전을 이용하여 만들 수 없는 양의 정 수 금액중 최솟값을 구하는 프로그램을 작성하시오.
 *
 *
 * @param {Number} n 동전 개수
 * @param {Number[]} coins 동전의 금액이 있는 리스트
 * @returns
 */
const solution = (n, coins) => {
  const sortedCoins = coins.sort();
  let target = 1;

  for (let coin of sortedCoins) {
    if (coin > target) break;
    target += coin;
  }
  return target;
};

module.exports = solution;
