import assert from "assert";

// 한 번 계산된 결과를 메모이제이션(Memoization)하기 위한 배열 초기화
const dp = Array(100).fill(0);

// 피보나치 함수(Fibonacci Function)를 재귀함수로 구현(탑다운 다이나믹 프로그래밍)
const fibo = (x: number) => {
  // 종료 조건(1 혹은 2일 때 1을 반환)
  if (x === 1 || x === 2) return 1;

  // 이미 계산한 적 있는 문제라면 그대로 반환
  if (dp[x] !== 0) return dp[x];

  // 아직 계산하지 않은 문제라면 점확식에 따라서 피보나치 결과 반환
  dp[x] = fibo(x - 1) + fibo(x - 2);

  return dp[x];
};

assert.equal(fibo(99), 218_922_995_834_555_200_000);

export {};
