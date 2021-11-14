function solution(n) {
  let table = new Array(1001).fill(0);
  table[1] = 1;
  table[2] = 3;
  for (let i = 3; i < n + 1; i++) {
    table[i] = table[i - 1] + 2 * table[i - 2];
  }

  return table[n] % 796796;
}

console.log(solution(3));
