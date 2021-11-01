const [, ...nums] = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split("\n")
  .map(Number);

console.log(nums.sort((a, b) => b - a));
