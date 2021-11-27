const dp = Array(100).fill(0);
const lines: string[] = [];

// 피보나치 함수(Fibonacci Function)를 재귀함수로 구현(탑다운 다이나믹 프로그래밍)
const pibo = (x: number) => {
  lines.push(`f(${x})`);
  // 종료 조건(1 혹은 2일 때 1을 반환)
  if (x === 1 || x === 2) return 1;

  // 이미 계산한 적 있는 문제라면 그대로 반환
  if (dp[x] !== 0) return dp[x];

  // 아직 계산하지 않은 문제라면 점확식에 따라서 피보나치 결과 반환
  dp[x] = pibo(x - 1) + pibo(x - 2);

  return dp[x];
};

pibo(6);

console.log(lines.join(" ")); // f(6) f(5) f(4) f(3) f(2) f(1) f(2) f(3) f(4)

export {};
