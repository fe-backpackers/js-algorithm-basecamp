function solution(n) {
  let answer = 0;
  let count = 0;
  n.sort((a, b) => a - b);
  n.forEach((fear) => {
    count++;
    if (fear <= count) {
      answer++;
      count = 0;
    }
  });
  return answer;
}

console.log(solution([2, 3, 1, 2, 2]));
