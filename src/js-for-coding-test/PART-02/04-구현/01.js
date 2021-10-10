const assert = require("assert");

const coords = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] };

const isInRange = (num, start, end) => start <= num && num < end;

const solve = (N, plans) => {
  // plans를 2차원 좌표의 방향으로 변환
  const dirs = plans.map((ch) => coords[ch]);

  let [cx, cy] = [1, 1];
  for (const [dx, dy] of dirs) {
    const [nx, ny] = [cx + dx, cy + dy];

    if (!isInRange(nx, 1, N + 1) || !isInRange(ny, 1, N + 1)) continue;

    [cx, cy] = [nx, ny];
  }

  return [cx, cy];
};

const cases = [
  { params: [5, ["R", "R", "R", "U", "D", "D"]], expected: [3, 4] },
  { params: [3, ["R", "R", "R", "U", "D", "D"]], expected: [3, 3] },
];

cases.forEach(({ params, expected }) => {
  assert.deepEqual(solve(...params), expected);
});
