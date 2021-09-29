function solution(card) {
  const n = card.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    const min = Math.min(...card[i]);
    max = min > max ? min : max;
  }
  return max;
}

const inputs = [
  [
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ],
  [
    [7, 3, 1, 8],
    [3, 3, 3, 4],
  ],
];

inputs.forEach((input) => console.log(solution(input)));
