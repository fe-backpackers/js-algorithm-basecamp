/**
 * 1이 될 때까지 - p99
 * 어떠한 수 N이 될 때까지 다음의 두과정 중 하나를 반복적으로 선택 하여 수행.
 * 1. N에서 1을 뺀다.
 * 2. N을 K로 나눈다.
 *
 * n이 1이 될 때까지 1번 혹은, 2번 과정을 수행해야 하는 최소 횟수를 구하는 프로그램 작성.
 * @param {Number} n 주어진 수
 * @param {Number} k n을 k로 나누기 위한 수
 * @returns {Number} n이란 수가 1을 빼거나, k로 나눠 결국 1이 되기 까지 최소한의 연산 횟수.
 */

const solution = (n, k) => {
  let result = 0;
  let target = 0;

  while (n >= k) {
    target = parseInt(n / k) * k; // n을 k의 배수로 만들기
    result += n - target; // 1을 빼는 연산횟수
    n = target;
    n /= k;
    result += 1;
  }

  result += n - 1; //남은 수에서 1이 되기 까지 연산

  return result;
};

module.exports = solution;
