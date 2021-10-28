function solution(N, stages) {
  let countStages = new Array(N + 1).fill(0);
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
  failureStages.sort((a, b) => {
    if (a.ratio < b.ratio) return 1;
    if (a.ratio > b.ratio) return -1;
    if (a.idx < b.idx) return -1;
    if (a.idx > b.idx) return 1;
  });

  return failureStages.map((val) => val.idx);
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));
