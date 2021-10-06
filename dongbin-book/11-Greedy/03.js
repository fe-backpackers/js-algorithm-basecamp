/**
 * @name 문자열 뒤집기
 * @link 동빈북 11-3
 * @date 2021-10-01
 * @ref https://www.acmicpc.net/problem/1439
 * @author sunmon
 */

const readConsole = require("../../lib/utils").readConsole;
// const
const fs = require("fs");
const lineReader = (dir) => {
  const file = fs.readFileSync(dir, "utf8").split(/\r?\n/);
  let line = 0;
  return () => file[line++];
};

const solution = () => {
  const input = lineReader("/dev/stdin");
  const arr = [0, 0]; // arr[0]: 0 -> 1로 바꾸는데 걸리는 횟수
  input[0] === "0" ? (arr[0] += 1) : (arr[1] += 1);
  arr[0] += input.match(/10/g).length;
  arr[1] += input.match(/01/g).length;
  console.log(Math.min(...arr));
};

const generator = function* () {
  const input = yield;
  const arr = [0, 0]; // arr[0]: 0 -> 1로 바꾸는데 걸리는 횟수
  input[0] === "0" ? (arr[0] += 1) : (arr[1] += 1);
  arr[0] += input.match(/10/g).length;
  arr[1] += input.match(/01/g).length;
  console.log(Math.min(...arr));
};

readConsole(generator);
