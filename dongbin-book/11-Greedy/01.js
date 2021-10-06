/**
 * @name 모험가 길드
 * @link 동빈북 11-1
 * @date 2021-10-01
 * @ref
 * @author sunmon
 */

const readConsole = require("../../lib/utils").readConsole;

const generator = function* () {
  const n = yield;
  const input = yield;
  const arr = input
    .split(" ")
    .map((i) => Number.parseInt(i))
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  let counter = 0;
  let ptr = 0;
  while (ptr + arr[ptr] < arr.length) {
    counter++;
    ptr += arr[ptr];
  }
  console.log(counter);
};

readConsole(generator);
