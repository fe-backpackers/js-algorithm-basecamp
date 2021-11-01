const assert = require("assert");

const solution = (N, stages) => {
  stages.sort((a, b) => a - b);

  const count = Array(N + 1).fill(0);
  for (const stage of stages) {
    count[stage] += 1;
  }

  let totalUser = stages.length;
  const ratios = [];
  for (const [stage, user] of count.entries()) {
    ratios.push([stage, totalUser === 0 ? 0 : user / totalUser]);
    totalUser -= user;
  }

  const answer = ratios
    .filter(([stage]) => stage > 0 && stage <= N)
    .sort((a, b) => b[1] - a[1])
    .map(([stage]) => stage);

  return answer;
};

assert.deepEqual(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]), [3, 4, 2, 1, 5]);
assert.deepEqual(solution(4, [4, 4, 4, 4, 4]), [4, 1, 2, 3]);
assert.deepEqual(solution(8, [1, 2, 3, 4, 5, 6, 7]), [7, 6, 5, 4, 3, 2, 1, 8]);
