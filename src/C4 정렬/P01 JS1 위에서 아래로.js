function solution(arr) {
  return arr.sort((a, b) => b - a);
}

const arr = [3, 15, 27, 12];
console.log(solution(arr));
