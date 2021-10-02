const input = require("fs").readFileSync(0, "utf8").trim().split("\n");

const [n, m, k] = input[0].split(' ').map(e => Number(e));

const [first, second] = input[1]
  .split(' ')
  .map(e => Number(e))
  .sort((a, b) => b - a);

let count = Math.floor(m / (k + 1)) * k;
count += m % (k + 1);

let result = 0;
result += count * first;
result += (m - count) * second;

console.log(result)
