function solution(n, level) {
  let answer = 0;
  let count = 0;
  let sort = level.sort((a, b) => a - b);
  console.log(sort)
  for (let i = 0; i < sort.length; i++) {
    count += 1;
    if (count >= i) {
      answer += 1;
      count = 0
    }
  }

  return answer
}

console.log(solution(5, [2, 3, 1, 2, 2]));