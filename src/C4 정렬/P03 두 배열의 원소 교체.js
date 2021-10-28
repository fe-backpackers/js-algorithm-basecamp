function solution(n, a, b) {
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    a[i] < b[i] && (a[i] = b[i]);
  }

  return a.reduce((acc, val) => acc + val);
}

const a = [1, 2, 5, 4, 3];
const b = [5, 5, 6, 6, 5];
console.log(solution(3, a, b));
