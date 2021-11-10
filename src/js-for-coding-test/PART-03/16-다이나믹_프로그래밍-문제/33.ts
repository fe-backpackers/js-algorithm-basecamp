const input: string[] = require("fs")
  .readFileSync(0, "utf8")
  .trimEnd()
  .split("\n");

const N = Number(input[0]);
const consults = input.slice(1).map((line) => line.split(" ").map(Number));
const dp = Array(N * 2).fill(0);

consults.forEach(([t, p], i) => {
  dp[i + t - 1] = Math.max((dp[i - 1] ?? 0) + p, dp[i + t - 1]);
  dp[i] = Math.max(dp[i - 1] ?? 0, dp[i]);
});

console.log(Math.max(...dp.slice(0, N)));

export {};
