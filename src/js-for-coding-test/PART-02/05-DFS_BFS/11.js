const isInRange = (n, start, end) => n >= start && n < end;
const Array2D = (X, Y, value) =>
  Array(X)
    .fill(0)
    .map(() => Array(Y).fill(value));

const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split("").map(Number));

const bfs = (board, sx, sy, dist, N, M) => {
  const q = [];
  let head = 0;

  // q에 추가 -> 방문 처리
  q.push([sx, sy]);
  dist[sx][sy] = 1;

  while (q.length - head > 0) {
    // q에서 꺼내고 -> ACTION
    const [cx, cy] = q[head++];
    if (cx === N - 1 && cy === M - 1) {
      return dist[cx][cy];
    }

    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const [nx, ny] = [cx + dx, cy + dy];

      if (
        !isInRange(nx, 0, N) ||
        !isInRange(ny, 0, M) ||
        board[nx][ny] === 0 || // 벽이면
        dist[nx][ny] > 0 // 이미 방문한 곳이라면
      ) {
        continue;
      }

      // q에 추가 -> 방문 처리
      q.push([nx, ny]);
      dist[nx][ny] = dist[cx][cy] + 1;
    }
  }

  throw new Error("invalid board");
};

const dist = Array2D(N, M, 0);

console.log(bfs(board, 0, 0, dist, N, M));

/*
5 6
101010
111111
000001
111111
111111
*/
