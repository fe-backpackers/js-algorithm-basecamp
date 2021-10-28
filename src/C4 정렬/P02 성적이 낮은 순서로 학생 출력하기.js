function solution(arr) {
  return arr.sort((a, b) => a[1] - b[1]).map((val) => val[0]);
}

const array = [
  ["홍길동", 95],
  ["이순신", 77],
];
console.log(solution(array));
