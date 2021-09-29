function solution(n, k) {
  let ans = 0;
  while (n > 1) {
    if (n % k === 0) n /= k;
    else n--;
    ans++;
  }
  return ans;
}

const inputs = [
  [25, 5],
  [17, 4],
];

inputs.forEach(([n, k]) => console.log(solution(n, k)));
