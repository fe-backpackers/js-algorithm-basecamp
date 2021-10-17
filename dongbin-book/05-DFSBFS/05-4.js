/**
 * @name 미로 탈출
 * @link 동빈북 5-4
 * @date 2021-10-17
 * @author sunmon
 */

const Utils = require("../../lib/utils");

const generator = function* () {
  const input = yield; // 콘솔에서 입력받은 한 줄 저장
  const [n, m] = input.split(" ").map(Number);
  const board = [];
  for (let i = 0; i < n; i++) {
    const temp = yield;
    board.push(temp.split(""));
  }

  const answer = solution(n, m, board);
  console.log(answer);
};

const solution = (n, m, board) => {
  return bfs(0, 0, n, m, board);
};

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const bfs = (x, y, n, m, board) => {
  const queue = [];
  const dist = Array.from(Array(n), () => new Array(m).fill(-1));
  queue.push([x, y]);
  dist[x][y] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (board[nx][ny] === "0") continue;
      if (dist[nx][ny] === -1 || dist[nx][ny] > dist[x][y] + 1) {
        dist[nx][ny] = dist[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return dist[n - 1][m - 1];
};

Utils.input.readConsole(generator);
