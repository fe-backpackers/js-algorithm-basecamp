/**
 * @name 거스름돈
 * @link 동빈북 3-1
 * @date 2021-09-27
 * @ref
 * @author sunmon
 */

const solution = (n, coinTypes) => {
  let coins = 0;
  for (let i = 0; i < coinTypes.length; i++) {
    coins += Math.floor(n / coinTypes[i]);
    n %= coinTypes[i];
  }

  return coins;
};

const n = 1260;
const coinTypes = [500, 100, 50, 10];
console.log(solution(n, coinTypes));
