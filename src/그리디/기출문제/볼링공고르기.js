function solution(n, m, balls) {
  const arr = new Array(11).fill(0);
  let result = 0;
  balls.forEach(e => {
    arr[e] += 1
  });
  console.log(arr)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      n -= arr[i];
      result += arr[i] * n;
    }
  }
  return result
}
console.log(solution(5, 3, [1, 3, 2, 3, 2]));