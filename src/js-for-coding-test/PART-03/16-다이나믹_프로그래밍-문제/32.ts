const [, ...triangle]: number[][] = require("fs")
  .readFileSync(0, "utf8")
  .trimEnd()
  .split("\n")
  .map((line: string) => line.split(" ").map(Number));

const dp = Array<number>(triangle.length)
  .fill(0)
  .map<number[]>((_, i) => Array(i + 1).fill(0));

dp[0][0] = triangle[0][0];
for (let i = 1; i < triangle.length; i++) {
  for (let j = 0; j < i + 1; j++) {
    dp[i][j] =
      Math.max(dp[i - 1]?.[j - 1] ?? 0, dp[i - 1]?.[j] ?? 0) + triangle[i][j];
  }
}

console.log(Math.max(...dp[triangle.length - 1]));

export {};
