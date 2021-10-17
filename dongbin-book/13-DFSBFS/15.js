/**
 * @name 특정 거리의 도시 찾기
 * @link 동빈북 13-1
 * @date 2021-10-17
 * @ref https://www.acmicpc.net/problem/18352
 * @author sunmon
 * @description 접근방법:
 */

const fs = require("fs");

const lineReader = (dir) => {
  const file = fs.readFileSync(dir, "utf8").split(/\r?\n/);
  let line = 0;
  return () => file[line++];
};

const setup = () => {
  const input = lineReader(0);
  const [n, m, k, x] = input().split(" ").map(Number);
  const board = Array.from(Array(n + 1), () => new Array()); // 도시 1~N 번
  for (let i = 0; i < m; i++) {
    const [a, b] = input().split(" ").map(Number);
    board[a].push(b);
  }

  const answer = solution(n, m, k, x, board);
  console.log(answer);
};

const solution = (n, m, k, x, board) => {
  const dist = Array(n + 1).fill(987654321);
  const answer = [];
  const result = bfs(x, board, dist);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === k) answer.push(i);
  }
  return answer.length ? answer.join("\n") : -1;
};

const bfs = (x, board, dist) => {
  const queue = [];
  queue.push(x);
  dist[x] = 0;

  // FIXME shift() 시간복잡도가 O(n)이기때문에 시간초과가 난다
  //   while (queue.length) {
  //     const cur = queue.shift();
  //     for (const nx of board[cur]) {
  //       if (dist[nx] > dist[cur] + 1) {
  //         dist[nx] = dist[cur] + 1;
  //         queue.push(nx);
  //       }
  //     }
  //   }

  //   NOTE: shift()대신 ptr을 이용하여 시간초과를 해결함
  let ptr = 0;
  while (queue.length > ptr) {
    const cur = queue[ptr++];
    for (const nx of board[cur]) {
      if (dist[nx] > dist[cur] + 1) {
        dist[nx] = dist[cur] + 1;
        queue.push(nx);
      }
    }
  }

  return dist;
};

setup();
