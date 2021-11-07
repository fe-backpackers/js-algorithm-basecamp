const input: string[] = require("fs")
  .readFileSync(0, "utf8")
  .trimEnd()
  .split("\n");
const N = Number(input[0]);
const nums = new Set(input[1].split(" ").map(Number));
const M = Number(input[2]);
const targets = input[3].split(" ").map(Number);

const answer = targets
  .map((target) => (nums.has(target) ? "yes" : "no"))
  .join(" ");

console.log(answer);

export default {};
