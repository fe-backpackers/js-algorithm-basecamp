import assert from "assert";

// 앞서 계산된 결과를 저장하기 위한 DP 테이블 초기화
const dp = Array<number>(100).fill(0);

// 첫 번째 피보나치 수와 두 번째 피보나치 수는 1
dp[1] = 1;
dp[2] = 1;

const N = 99;
for (let i = 3; i < N + 1; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

assert.equal(dp[N], 218_922_995_834_555_200_000);
