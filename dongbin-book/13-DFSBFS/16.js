/**
 * @name 연구소
 * @link 동빈북 13-2
 * @date 2021-10-17
 * @ref https://www.acmicpc.net/problem/14502
 * @author sunmon
 */

const fs = require("fs");
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const lineReader = (dir) => {
  const file = fs.readFileSync(dir, "utf8").split(/\r?\n/);
  let line = 0;
  return () => file[line++];
};

const setup = () => {
  const input = lineReader(0);
  const [n, m] = input().split(" ").map(Number);
  const board = Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = input().split(" ");
  }

  let answer = -1;
  // 원래는 문자열로 만들어서 행,렬 하나씩 할당하려고 했는데
  // 시간초과가 나서 3차 for문으로 바꿈
  // ex. const[r0,r1,r2,c0,c1,c2] = ('0'.repeat(m) + i).splice(-m) // '0003123'

  for (let r0 = 0; r0 < n; r0++) {
    for (let c0 = 0; c0 < m; c0++) {
      for (let r1 = 0; r1 < n; r1++) {
        for (let c1 = 0; c1 < m; c1++) {
          for (let r2 = 0; r2 < n; r2++) {
            for (let c2 = 0; c2 < m; c2++) {
              if (
                (r0 === r1 && c0 === c1) ||
                (r0 === r2 && c0 === c2) ||
                (r1 === r2 && c1 === c2)
              )
                continue;
              if (
                board[r0][c0] === "0" &&
                board[r1][c1] === "0" &&
                board[r2][c2] === "0"
              ) {
                board[r0][c0] = "1";
                board[r1][c1] = "1";
                board[r2][c2] = "1";
                answer = Math.max(answer, solution(n, m, board));
                board[r0][c0] = "0";
                board[r1][c1] = "0";
                board[r2][c2] = "0";
              }
            }
          }
        }
      }
    }
  }

  console.log(answer);
};

const solution = (n, m, board) => {
  const visited = Array.from(Array(n), () => new Array(m).fill(false));

  let answer = n * m;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "1") {
        answer -= 1;
      }
      if (board[i][j] === "2") {
        answer -= dfs(i, j, n, m, board, visited);
      }
    }
  }

  return answer;
};

const dfs = (x, y, n, m, board, visited) => {
  let ret = 1; // 바이러스가 퍼진 칸 수
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (visited[nx][ny]) continue;
    if (board[nx][ny] !== "0") continue;

    ret += dfs(nx, ny, n, m, board, visited);
  }

  return ret;
};

setup();
