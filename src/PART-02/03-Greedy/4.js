/**
 * @name 1이 될 때까지
 * @link 동빈북 실전문제 3-4
 * @date 2021-10-08
 * @author pyeonne
 */

"use strict";

const readConsole = require("../../../lib/utils").readConsole;

const generator = function* () {
  // n, k을 공백으로 구분하여 입력받기
  const line = yield;
  let [n, k] = line.split(" ").map((i) => Number.parseInt(i));

  let result = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    // (n === k로 나누어떨어지는 수)가 될 때까지 1씩 빼기
    const target = Number.parseInt((n / k) * k);
    result += n - target;
    n = target;

    // n이 k보다 작을 때(더 이상 나눌 수 없을 때) 반복문 탈출
    if (n < k) break;

    // k로 나누기
    result += 1;
    n /= k;
  }
  // 마지막으로 남은 수에 대하여 1씩 빼기
  result += n - 1;
  console.log(result);
};

readConsole(generator);
