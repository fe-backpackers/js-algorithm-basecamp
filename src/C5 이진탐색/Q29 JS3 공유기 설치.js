function solution(n, c, positions) {
  let result = 0;
  positions.sort((a, b) => a - b);
  let start = positions[1] - positions[0];
  let end = positions[n - 1] - positions[0];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let value = positions[0];
    let count = 1;

    for (let i = 1; i < n; i++) {
      if (positions[i] >= value + mid) {
        value = positions[i];
        count++;
      }
    }
    if (count >= c) {
      start = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }
  return result;
}
const N = 5;
const C = 3;
const positions = [1, 2, 8, 4, 9];
console.log(solution(N, C, positions));
