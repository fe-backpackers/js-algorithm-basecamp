import assert from "assert";
import fs from "fs";

const solve = (n: number) => {
  const MOD = 796_796;
  const dp = [0, 1, 3];

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % MOD;
  }

  return dp[n];
};

const N = Number(fs.readFileSync(0, "utf8").trim().split("\n"));
console.log(solve(N));

assert.equal(solve(1), 1);
assert.equal(solve(2), 3);
assert.equal(solve(3), 5);
