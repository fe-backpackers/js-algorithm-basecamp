/**
 * @name 볼링공 고르기
 * @link 동빈북 11-5
 * @date 2021-10-01
 * @author sunmon
 */

const readConsole = require("../../lib/utils").readConsole;

const generator = function* () {
  const nm = yield;
  const input = yield;
  const counter = Array(Number.parseInt(nm.split(" ")[1]) + 1).fill(0);
  const arr = input.split(" ").map((i) => i | 0);
  let total = Number.parseInt(nm.split(" ")[0]);
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] += 1;
  }

  for (let i = 0; i < arr.length; i++) {
    total -= counter[arr[i]];
    answer += counter[arr[i]] * total;
    if (!total) break;
  }
  console.log(answer);
};

readConsole(generator);
