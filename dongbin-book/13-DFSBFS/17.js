/**
 * @name 경쟁적 전염
 * @link 동빈북 13-3
 * @date 2021-10-17
 * @ref https://www.acmicpc.net/problem/18405
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
  // NOTE: C++은 priority_queue쓰면 빠를텐데 js는 shift속도가 너무 느린데??
  const input = lineReader("./input.txt");
  const [n, k] = input().split(" ").map(Number);
  const board = [];
  for (let i = 0; i < n; i++) {
    board[i] = input().split(" ").map(Number);
  }
  const [s, x, y] = input().split(" ").map(Number);

  const answer = solution(n, k, board, s, x, y);
  console.log(answer);
};

const solution = (n, k, board, s, x, y) => {
  const queue = Array.from(Array(k + 1), () => new Array());
  const ptr = Array(k + 1).fill(0); // shift() 하면 너무 느려서 대신 포인터를 이동시키기 위함

  // 맨처음 큐에 넣기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] > 0) {
        queue[board[i][j]].push([i, j]);
      }
    }
  }

  // 바이러스 전파하기
  while (s--) {
    for (let i = 0; i < queue.length; i++) {
      const len = queue[i].length;
      while (ptr[i] < len) {
        // board[]
        const [cx, cy] = queue[i][ptr[i]];
        for (let j = 0; j < 4; j++) {
          const [nx, ny] = [cx + dir[j][0], cy + dir[j][1]];
          if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
          if (board[nx][ny] === 0) {
            board[nx][ny] = i;
            queue[i].push([nx, ny]);
          }
        }
        ptr[i]++;
      }
    }
  }

  return board[x - 1][y - 1];
};

setup();
