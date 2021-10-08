/**
 * @name 숫자 카드 게임
 * @link 동빈북 실전문제 3-3
 * @date 2021-10-08
 * @ref https://github.com/Sunmon/js-algorithm-basecamp/blob/simulation/dongbin-book/03-Greedy/03-3.js
 * @author pyeonne
 */

"use strict";

const readConsole = require("../../../lib/utils").readConsole;

const generator = function* () {
  // n, m을 공백으로 구분하여 입력받기
  const line = yield;
  let [n, m] = line.split(" ").map((i) => Number.parseInt(i));

  let answer = 0;
  while (n--) {
    // 한 줄씩 입력받기
    const input = yield;

    // 현재 줄에서 '가장 작은 수' 찾기
    const num = input
      .split(" ")
      .reduce((prev, cur) => (prev > cur ? cur : prev), 100);

    // '가장 작은 수'들 중에서 가장 큰 수 찾기
    answer = Math.max(answer, num);
  }
  console.log(answer);
};

readConsole(generator);
