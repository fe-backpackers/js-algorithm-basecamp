// heapq
function heappush(q, val, comp = (a, b) => a - b) {
  const newChildIndex = q.push(val) - 1;

  (function bubbleUp(ci) {
    if (ci === 0) return;

    const pi = Math.floor((ci - 1) / 2);
    if (comp(q[pi], q[ci]) > 0) {
      [q[pi], q[ci]] = [q[ci], q[pi]];

      bubbleUp(pi);
    }
  })(newChildIndex);
}

function heappop(q, comp = (a, b) => a - b) {
  if (q.length === 1) return q.pop();

  const top = q[0];

  // 제일 마지막 요소를 root 에 넣는다
  q[0] = q.pop();

  (function trickleDown(pi) {
    const [lci, rci] = [pi * 2 + 1, pi * 2 + 2];

    if (lci >= q.length) return;

    const minci = rci >= q.length || comp(q[lci], q[rci]) < 0 ? lci : rci;

    if (comp(q[minci], q[pi]) < 0) {
      [q[minci], q[pi]] = [q[pi], q[minci]];

      trickleDown(minci);
    }
  })(0);

  return top;
}

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

// 큐 초기화
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 0) continue;

    heappush(q, [[i, j], board[i][j], 0], compare);
  }
}

// BFS
while (q.length > 0) {
  // 큐에서 꺼내기
  const [[cx, cy], virus, time] = heappop(q, compare);

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
    heappush(q, [[nx, ny], virus, time + 1], compare);
    // 방문 처리
    board[nx][ny] = virus;
  }
}

console.log(board[X][Y]);
