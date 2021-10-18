const Queue = require("../../lib/queue");

const graph = [
  [1, 1, 0, 0],
  [0, 1, 1, 1],
  [0, 0, 0, 1],
];

const n = 3,
  m = 4;

const solution = (n, m, graph) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  //최소 거리 구하기 bfs

  //큐 구현
  const q = new Queue();

  q.enqueue([0, 0]);

  // while(q),
  let ele;
  while ((ele = q.dequeue())) {
    const [x, y] = ele;

    let nx, ny;
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];
      if (nx <= -1 || nx >= n || ny <= -1 || ny >= m) continue;
      if (graph[nx][ny] === 0) continue;

      if (graph[nx][ny] === 1) {
        //괴물이 없다.
        graph[nx][ny] = graph[x][y] + 1;
        q.enqueue([nx, ny]);
      }
    }
  }
  return graph[n - 1][m - 1];
};

console.log(solution(n, m, graph));
