function solution(n, dataArray) {
  let low = 0;
  let high = n - 1;
  if (dataArray[low] === 0) return low;
  if (dataArray[high] === high) return high;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let guess = dataArray[mid];
    if (mid === guess) {
      return guess;
    } else if (guess > mid) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const N = 7;
const a = [-5, -4, 2, 4, 5, 6];
console.log(solution(N, a));
