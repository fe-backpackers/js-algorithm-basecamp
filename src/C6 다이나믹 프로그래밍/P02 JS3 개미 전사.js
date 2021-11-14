function solution(n, k) {
  let table = new Array(100).fill(0);
  table[0] = k[0];
  table[1] = Math.max(k[0], k[1]);
  for (let i = 2; i < n; i++) {
    table[i] = Math.max(table[i - 1], table[i - 2] + k[i]);
  }
  return table[n - 1];
}

const N = 5;
const K = [1, 3, 6, 5, 4];
console.log(solution(N, K));
