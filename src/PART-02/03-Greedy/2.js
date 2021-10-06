/**
 * @name 큰 수의 법칙
 * @link 동빈북 실전문제 3-2
 * @date 2021-10-06
 * @ref https://github.com/Sunmon/js-algorithm-basecamp/blob/main/dongbin-book/03-Greedy/03-2.js
 * @author pyeonne
 */

"use strict";

const readConsole = require("../../../lib/utils").readConsole;

const generator = function* () {
  // N, M, K를 공백으로 구분하여 입력받기
  const n = yield;
  // N개의 수를 공백으로 구분하여 입력받기
  const m = yield;
  const result = solution(n, m);
  console.log(result);
};

const solution = (n, m) => {
  const [N, M, K] = n.split(" ").map((i) => Number.parseInt(i));
  const data = m.split(" ").map((i) => Number.parseInt(i));

  // 입력받은 수 정렬
  data.sort((a, b) => b - a);
  // 가장 큰 수 * 등장하는 횟수
  const first = data[0] * (Number.parseInt(M / (K + 1)) * K + (M % (K + 1)));
  console.log(first);
  // 두 번째로 큰 수 * 등장하는 횟수
  const second = data[1] * Number.parseInt(M / (K + 1));

  return first + second;
};

readConsole(generator);
