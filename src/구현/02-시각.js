function solution(n) {
  let answer = 0;
  const TARGET = "3";
  for (let hour = 0; hour <= n; hour++) {
    for (let min = 0; min < 60; min++) {
      for (let sec = 0; sec < 60; sec++) {
        if (
          `${hour}`.indexOf(TARGET) !== -1 ||
          `${min}`.indexOf(TARGET) !== -1 ||
          `${sec}`.indexOf(TARGET) !== -1
        )
          answer++;
      }
    }
  }
  return answer;
}

console.log(solution(5));
