/* https://www.acmicpc.net/source/33921365 */

const count = (target, arr) => arr.filter((el) => el === target).length;

const input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split("")
  .reduce((acc, curr) => (acc[acc.length - 1] === curr ? acc : acc + curr))
  .split("");

console.log(Math.min(count("0", input), count("1", input)));
