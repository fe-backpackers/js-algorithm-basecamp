const result = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" ").map(Number))
  .map((nums) => Math.min(...nums))
  .reduce((a, b) => Math.max(a, b));

console.log(result);
