const input = require("fs").readFileSync(0, "utf8").trim().split("\n").slice(1);

let arr = input.map(e => e.split(' ').map(el => Number(el)));

let result = arr
  .map(e => Math.min(...e))
  .reduce((e, acc) => Math.max(e, acc), 0);

console.log(result)