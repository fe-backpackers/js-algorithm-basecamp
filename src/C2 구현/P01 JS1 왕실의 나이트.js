function solution(position) {
  const xArray = "abcdefgh";
  const col = xArray.indexOf(position[0]);
  const row = position[1] - 1;
  const move = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, -1],
    [2, 1],
    [-1, -2],
    [1, -2],
  ];
  const answer = move.filter((val) => {
    const [y, x] = val;
    return row - y >= 0 && row - y <= 7 && col - x >= 0 && col - x <= 7;
  });
  return answer.length;
}

console.log(solution("a1"));
