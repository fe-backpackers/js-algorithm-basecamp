/**
 * @name 모험가 길드
 * @link 동빈북 기출문제 11-1
 * @date 2021-10-16
 * @ref https://github.com/Sunmon/js-algorithm-basecamp/blob/dfs/bfs/dongbin-book/11-Greedy/01.js
 * @author pyeonne
 */

"use strict";

const readConsole = require("../../../lib/utils").readConsole;

const generator = function* () {
  const n = yield;
  const input = yield;
  const data = input
    .split(" ")
    .map((i) => Number.parseInt(i))
    .sort((a, b) => a - b);

  // 총 그룹의 수
  let result = 0;

  // 현재 그룹에 포함된 모험가의 수
  let count = 0;

  for (let i of data) {
    count += 1;
    if (count >= i) {
      result += 1;
      count = 0;
    }
  }
  console.log(result);
};

readConsole(generator);
