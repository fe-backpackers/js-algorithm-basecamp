function solution(x) {
  let memo = new Array(30001).fill(0);
  for (let i = 2; i < x + 1; i++) {
    memo[i] = memo[i - 1] + 1;
    if (i % 2 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 2] + 1);
    }
    if (i % 3 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 3] + 1);
    }
    if (i % 5 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 5] + 1);
    }
  }
  return memo[x];
}

console.log(solution(4));

// 1을 만든다는 의미는 최소값을 구한다고 생각하면 될듯
