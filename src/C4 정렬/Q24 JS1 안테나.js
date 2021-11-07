function solution(n, locations) {
  return locations.sort((a, b) => a - b)[Math.floor((n - 1) / 2)]; // 왜 중간값 사용?
}

// const n = 6;
// const locations = [10, 2, 3, 5, 8, 9];
const n = 4;
const locations = [5, 1, 7, 9];
console.log(solution(n, locations));
