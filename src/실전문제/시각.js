const solution = (n) => {
  let count = 0;

  for (let h = 0; h <= n; h++) {
    for (let m = 0; m < 60; m++) {
      for (let s = 0; s < 60; s++) {
        if (`${h}${m}${s}`.includes("3")) {
          count += 1;
        }
      }
    }
  }
  return count
}

console.log(solution(5))
