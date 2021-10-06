function solution(cards) {
  const result = cards.map((val) => Math.min(...val));
  console.log(result);
  return Math.max(...result);
}

const cards = [
  [3, 1, 2],
  [4, 1, 4],
  [2, 2, 2],
];
console.log(solution(cards));
