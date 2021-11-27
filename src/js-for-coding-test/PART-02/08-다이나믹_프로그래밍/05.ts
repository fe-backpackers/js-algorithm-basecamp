import assert from "assert";
import fs from "fs";

const min = (a: number, b: number) => Math.min(a, b);

const solve = (x: number) => {
  const multi = [5, 3, 2];
  const dp = [0, 0, 1];

  for (let i = 3; i <= x; i++) {
    dp[i] = multi
      .filter((m) => i % m === 0)
      .map((m) => dp[i / m] + 1)
      .reduce(min, dp[i - 1] + 1);
  }
  return dp[x];
};

const X = Number(fs.readFileSync(0, "utf8").trim());
console.log(solve(X));

assert.equal(solve(1), 0);
assert.equal(solve(2), 1);
assert.equal(solve(3), 1);
assert.equal(solve(16), 3);
assert.equal(solve(26), 3);
assert.equal(solve(30000), 8);

export default {};
