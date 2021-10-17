/**
 * @name 음료수 얼려 먹기
 * @link 동빈북 5-3
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
  const visited = Array.from(Array(n), () => new Array(m).fill(false));
  let counter = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j]) continue;
      if (board[i][j] === "1") continue;
      counter += dfs(i, j, n, m, board, visited);
    }
  }

  return counter;
};

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const dfs = (x, y, n, m, board, visited) => {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dir[i][0];
    const ny = y + dir[i][1];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (board[nx][ny] === "1" || visited[nx][ny]) continue;
    dfs(nx, ny, n, m, board, visited);
  }

  return 1;
};

Utils.input.readConsole(generator);
