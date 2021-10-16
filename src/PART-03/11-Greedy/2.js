/**
 * @name 곱하기 혹은 더하기
 * @link 동빈북 기출문제 11-2
 * @date 2021-10-16
 * @author pyeonne
 */

"use strict";

const readConsole = require("../../../lib/utils").readConsole;

const generator = function* () {
  const input = yield;
  const data = input.split(" ").map((i) => Number.parseInt(i));

  let result = data[0];

  for (let i of data.slice(1, data.length)) {
    let num = i;
    if (num <= 1 || result <= 1) result += num;
    else result *= num;
  }
  console.log(result);
};

readConsole(generator);
