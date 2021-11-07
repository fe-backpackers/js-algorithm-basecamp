function solution(arr) {
  const n = arr.length;
  const m = arr[0].length;
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  function bfs(r, c) {
    let que = [];
    que.push([r, c]);

    while (que.length !== 0) {
      const row = que[0][0];
      const col = que[0][1];
      que.shift();

      for (let i = 0; i < 4; i++) {
        const nr = row + dr[i];
        const nc = col + dc[i];
        if (nr < 0 || nr >= n || nc < 0 || nc >= m) {
          continue;
        }
        if (maze[nr][nc] === 0) {
          continue;
        }
        if (maze[nr][nc] === 1) {
          maze[nr][nc] = maze[row][col] + 1;
          que.push([nr, nc]);
        }
      }
    }
    return maze[n - 1][m - 1];
  }

  return bfs(0, 0);
}

const maze = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];
console.log(solution(maze));
