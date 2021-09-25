const range = (start, end) =>
  Array.from({ length: end - start }, (_, i) => start + i);
const isInRange = (n, end, start = 0) => n >= start && n < end;

const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split("").map(Number));

const dfs = (board, x, y, visited, N, M) => {
  visited[x][y] = true;

  for (const [dx, dy] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]) {
    const [nx, ny] = [x + dx, y + dy];

    if (
      !isInRange(nx, N) ||
      !isInRange(ny, M) ||
      visited[nx][ny] ||
      board[nx][ny] === 1
    ) {
      continue;
    }

    dfs(board, nx, ny, visited, N, M);
  }
};

const visited = Array(N)
  .fill(0)
  .map(() => Array(M).fill(false));

let count = 0;
for (const x of range(0, N)) {
  for (const y of range(0, M)) {
    if (visited[x][y] || board[x][y] === 1) continue;
    count += 1;
    dfs(board, x, y, visited, N, M);
  }
}

console.log(count);

/*
15 14
00000111100000
11111101111110
11011101101110
11011101100000
11011111111111
11011111111100
11000000011111
01111111111111
00000000011111
01111111111000
00011111111000
00000001111000
11111111110011
11100011111111
11100011111111
*/
