function binarySearch(arr, target, start, end) {
  let result = 0;
  while (start <= end) {
    let total = 0;
    let mid = parseInt((start + end) / 2);
    arr.forEach((val) => {
      if (val > mid) {
        total += val - mid;
      }
    });

    if (total < target) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }
  return result;
}

function solution(n, m, arr) {
  arr.sort((a, b) => a - b);

  return binarySearch(arr, m, 0, arr[n - 1]);
}

const N = 4,
  M = 6;
const dduk = [19, 15, 10, 17];
console.log(solution(N, M, dduk));
