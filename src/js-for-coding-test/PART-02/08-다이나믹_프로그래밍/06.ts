import assert from "assert";
import fs from "fs";

const solve = (n: number, k: number[]) => {
  const dp = [k[0], Math.max(k[0], k[1])];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + k[i]);
  }

  return dp[n - 1];
};

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const N = Number(input[0]);
const K = input[1].split(" ").map(Number);
console.log(solve(N, K));

assert.equal(solve(3, [1, 3, 5]), 6);
assert.equal(solve(4, [1, 3, 1, 5]), 8);

export default {};
