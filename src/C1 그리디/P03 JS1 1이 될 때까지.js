function solution(n, k) {
  let count = 0;
  while (n !== 1) {
    console.log(n);
    while (n % k === 0) {
      n = n / k;
      count++;
      console.log(n);
      if (n === 1) return count;
    }
    n--;
    count++;
  }
  return count;
}

const N = 25,
  K = 5;
console.log(solution(N, K));
