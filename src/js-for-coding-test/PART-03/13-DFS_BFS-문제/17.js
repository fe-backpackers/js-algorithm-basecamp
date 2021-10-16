// util
const isInRange = (n, start, end) => n >= start && n < end;
const compare = ([, av, at], [, bv, bt]) => (at !== bt ? at - bt : av - bv);

// 입력 처리
const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [N] = input[0].split(" ").map(Number);
const board = input.slice(1, N + 1).map((str) => str.split(" ").map(Number));
let [S, X, Y] = input[N + 1].split(" ").map(Number);
X--;
Y--;

// 큐 선언
const q = [];
let head = 0;

// 큐 초기화
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 0) continue;

    q.push([[i, j], board[i][j], 0]);
  }
}
q.sort(compare);

// BFS
while (q.length > 0) {
  // 큐에서 꺼내기
  const [[cx, cy], virus, time] = q[head++];

  // ACTION
  if (cx === X && cy === Y) break;
  if (time === S) break;

  for (const [dx, dy] of [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ]) {
    const [nx, ny] = [cx + dx, cy + dy];

    if (!isInRange(nx, 0, N) || !isInRange(ny, 0, N)) continue;
    if (!(board[nx][ny] === 0)) continue;

    // 큐에 넣기
    q.push([[nx, ny], virus, time + 1]);
    // 방문 처리
    board[nx][ny] = virus;
  }
}

console.log(board[X][Y]);
