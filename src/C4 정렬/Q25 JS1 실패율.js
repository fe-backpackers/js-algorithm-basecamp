function solution(n, stages) {
  let countStages = new Array(n + 1).fill(0);
  stages.forEach((val) => {
    countStages[val - 1]++;
  });
  let sumUsers = stages.length;
  const failureStages = [];
  countStages.forEach((val, idx) => {
    failureStages.push({
      idx: idx + 1,
      ratio: val / sumUsers,
    });
    sumUsers -= val;
  });
  failureStages.pop();
  failureStages.sort((a, b) => b.ratio - a.ratio);

  return failureStages.map((val) => val.idx);
}

const N = 5;
const STAGE = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, STAGE));
