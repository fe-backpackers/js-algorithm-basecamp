const dx = [2, 2, -2, -2, 1, 1, -1, -1];
const dy = [1, -1, 1, -1, 2, -2, 2, -2];

function solution(s) {
  let answer = 0;
  const [alpha, number] = s.split("");

  let x = alpha.charCodeAt() - "a".charCodeAt();
  let y = Number(number) - 1;

  const directions = dx.map((_, i) => [dx[i], dy[i]]);

  directions.forEach(([nx, ny]) => {
    nx += x;
    ny += y;

    if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) answer++;
  });

  return answer;
}

console.log(solution("a1"));
