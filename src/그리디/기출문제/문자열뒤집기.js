function solution(s) {
  let count0 = 0;
  let count1 = 0;
  s[0] === '1' ? count1++ : count0++;
  ; for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      if (s[i + 1] === '1') {
        count1 += 1;
      } else {
        count0 += 1;
      }
    }
  }

  return Math.min(count0, count1)
}

console.log(solution('0001100'))