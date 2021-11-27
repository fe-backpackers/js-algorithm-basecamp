import assert from "assert";
import fs from "fs";

const solve = (n: number, m: number, values: number[]) => {
  const dp = Array(m + 1).fill(Infinity);

  for (const value of values) {
    dp[value] = 1;

    for (let i = 2 * value; i <= m; i += value) {
      dp[i] = Math.min(dp[i], dp[i - value] + 1);
    }
  }

  return dp[m] === Infinity ? -1 : dp[m];
};

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const Values = input.slice(1).map(Number);
console.log(solve(N, M, Values));

assert.equal(solve(2, 15, [2, 3]), 5);
assert.equal(solve(3, 4, [3, 5, 7]), -1);

export default {};
