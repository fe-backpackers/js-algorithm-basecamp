function solution(s) {
  let zero = 0;
  let one = 0;
  for (let i = 0; i <= s.length; i++) {
    const curr = s[i];
    if (i > 0) {
      const prev = s[i - 1];
      if (prev !== curr) {
        if (prev === "0") zero++;
        else one++;
      }
    }
  }
  return Math.min(zero, one);
}

["0001100", "010101", "01010"].forEach((ex) => {
  console.log(solution(ex));
});
