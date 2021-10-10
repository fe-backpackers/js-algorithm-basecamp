function solution(n, plan) {
  const DIR = {
    R: [0, 1],
    L: [0, -1],
    U: [-1, 0],
    D: [1, 0],
  };

  let start = [1, 1];

  for (let i = 0; i < plan.length; i++) {
    const [cx, cy] = DIR[plan[i]];
    const nextX = start[0] + cx;
    const nextY = start[1] + cy;
    if (nextY <= 0 || nextX <= 0 || nextX > n || nextY > n) continue;
    start = [nextX, nextY];
  }
  return start;
}

console.log(solution(5, ["R", "R", "R", "U", "D", "D"]));
